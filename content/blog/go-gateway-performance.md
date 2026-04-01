---
title: "Go vs Python: Why our gateway runs at sub-millisecond speeds"
excerpt: "A deep dive into zero-allocation hot paths and why we chose Go for the core Hyperion inference engine."
author: "Divyansh Agrawal"
date: "Feb 05, 2024"
readTime: "12 min read"
category: "Performance"
image: "/blog-go.jpg"
color: "cyan"
---

# Go vs Python in AI Infrastructure

Python is the undisputed language of AI *modeling*. But for AI *infrastructure*—the gateways, routers, and sidecars that manage traffic—Go is the superior choice.

## The Garbage Collection Problem

In high-throughput gateways, Python's reference-counting garbage collector can introduce unpredictable latency spikes. When managing 100k QPS, a 100ms GC pause is unacceptable.

Go's concurrent mark-sweep GC, combined with careful memory management, allows us to maintain stable latencies even under extreme load.

## Zero-Allocation Hot Paths

We engineered Hyperion's critical path—request normalization, hashing, and routing—to be "zero allocation".

> "We don't just minimize allocations; we eliminate them from the hot path entirely."

By reusing buffers and leveraging `sync.Pool`, we ensure that the vast majority of requests generate zero garbage, keeping the GC idle and latencies flat.

## Concurrency at Scale

Goroutines allow us to handle thousands of concurrent connections with minimal memory overhead, a feat that would require heavy async frameworks or multiple processes in Python.
