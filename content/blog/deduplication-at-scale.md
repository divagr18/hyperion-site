---
title: "Deduplication at Scale: How we saved 40% on LLM costs"
excerpt: "Exploring the technical architecture behind Hyperion's multi-tier caching system and its impact on enterprise token consumption."
author: "Divyansh Agrawal"
date: "Feb 12, 2024"
readTime: "8 min read"
category: "Engineering"
image: "/blog-dedup.jpg"
color: "violet"
---

# Deduplication at Scale

In the era of Large Language Models (LLMs), authorized token consumption is the single biggest cost driver for AI-native enterprises. At Hyperion, we observed that **30-40% of all LLM requests are semantically redundant**. They are either exact repeats of previous queries or slight variations that yield identical semantic intent.

## The Multi-Tier Caching Architecture

To solve this, we built a three-tier caching system designed for microsecond latency and massive scale.

### L1: The Hotpath (Redis)

The first line of defense is our L1 Exact Match cache. It uses SHA-256 hashing of normalized prompts to perform sub-millisecond lookups.

```go
func (c *L1Cache) Get(ctx context.Context, key string) ([]byte, error) {
    // Sub-millisecond lookup
    val, err := c.redis.Get(ctx, key).Bytes()
    if err != nil {
        return nil, err
    }
    return val, nil
}
```

### L2: Semantic Fabric (Tile38)

When an exact match fails, the request moves to our L2 Semantic Cache. Here, we generate vector embeddings of the prompt and query our distributed Tile38 cluster for "nearest neighbors" within a strict similarity threshold (usually 0.98 for QA).

### L3: Content-Addressed Store (S3)

Finally, for long-tail retention, we use a content-addressed storage system backed by S3. This allows us to deduplicate response bodies across tenants (where privacy policies allow) and retain knowledge for months without exploding storage costs.

## Results

By deploying this architecture, our pilot customers reduced their OpenAI spend by **40% globally**, while simultaneously improving P99 latency by 200ms due to cache hits serving instant responses.
