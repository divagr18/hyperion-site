---
title: "Introducing Multi-Model Budgets and Scoping"
excerpt: "Granular control over your AI spend. Learn how to set per-key, per-model limits with sub-second enforcement."
author: "Divyansh Agrawal"
date: "Jan 28, 2024"
readTime: "5 min read"
category: "Product"
image: "/blog-budgets.jpg"
color: "emerald"
---

# Precision Control for AI Spend

Managing AI costs is no longer about just setting a monthly cap. You need granular control over *who* is spending *what* on *which* models.

## Per-Key, Per-Model Scoping

With our new update, you can now scope API keys to specific models or providers.

- **Frontend-Key**: Scoped to `gpt-3.5-turbo` only.
- **Research-Key**: Access to `gpt-4` and `claude-3-opus`.

This ensures that a leaked key from a dev environment can't drain your budget on expensive reasoning models.

## Elastic Budgets & Rate Limiting

We've introduced "Elastic Budgets" implemented via atomic Redis LUA scripts. This allows us to enforce budget limits with **sub-millisecond precision**.

When a request arrives:
1. We calculate the estimated cost.
2. We atomically reserve that amount against the key's remaining budget.
3. If the budget is exceeded, the request is rejected instantly—before it ever hits the LLM provider.

This prevents "over-drafting" your budget during high-concurrency spikes.
