"use client";

import Link from "next/link";
import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";
import ApiReference from "@/components/docs/ApiReference";
import { ArrowRight } from "lucide-react";

export default function CachingPage() {
  const pythonCode = `response = client.chat.completions.create(
  model="openai/gpt-4.1-mini",
  messages=[{"role": "user", "content": "Summarize this ticket thread"}],
  hyperion={
    "bypass_cache": False,
    "cache_ttl": 3600,
    "similarity_threshold": 0.92
  }
)`;

  const tsCode = `const response = await client.chat.completions.create({
  model: "openai/gpt-4.1-mini",
  messages: [{ role: "user", content: "Summarize this ticket thread" }],
  hyperion: {
    bypassCache: false,
    cacheTtl: 3600,
    similarityThreshold: 0.92
  }
});`;

  const restCode = `curl http://localhost:8080/v1/chat/completions \\
  -H "Authorization: Bearer sk_live_your_hyperion_key" \\
  -H "Content-Type: application/json" \\
  -H "X-Cache-Bypass: false" \\
  -H "X-Cache-TTL: 3600" \\
  -d '{
    "model": "openai/gpt-4.1-mini",
    "messages": [{"role": "user", "content": "Summarize this ticket thread"}]
  }'`;

  return (
    <DocsLayout activeSlug="features/caching">
      <div className="space-y-8">
        <section className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Feature</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Caching</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion caching reduces duplicate inference calls and lowers response latency.
            Use L1 exact matching for deterministic reuse and optional L2 semantic matching for near-intent reuse.
          </p>
        </section>

        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-medium tracking-tight">The Multi-Tier Strategy</h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            Hyperion employs a two-tier caching architecture to maximize hit rates while keeping latency overhead near zero. By combining deterministic hashing with vector similarity, you can serve repeated requests instantly and similar requests intelligently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
              <h3 className="text-base font-medium text-white">L1: Exact Match (Redis)</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                The absolute fastest path. Requests are normalized (whitespace removed, keys sorted) and hashed. If an exact match exists in Redis, it is served in under 1ms.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
              <h3 className="text-base font-medium text-white">L2: Semantic Match (Vector)</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                For queries with identical intent but different phrasing (e.g. "What is AI?" vs "Explain AI"), Hyperion performs a cosine similarity search against a vector database.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">Configuration</h2>
          <p className="text-neutral-300 leading-7 max-w-3xl">
            Configure cache behavior per request using SDK options or headers.
            Use conservative thresholds in production if response correctness is strict.
          </p>
          <CodeGroup
            defaultLanguage="python"
            code={{
              python: pythonCode,
              typescript: tsCode,
              rest: restCode,
            }}
          >
            {{
              python: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{pythonCode}</code></pre>,
              typescript: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{tsCode}</code></pre>,
              rest: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{restCode}</code></pre>,
            }}
          </CodeGroup>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">Response Metadata</h2>
          <p className="text-sm text-neutral-400 leading-6">
            Read cache metadata from response headers or SDK metadata fields.
          </p>
          <ApiReference
            title="Caching Metadata"
            subtitle="Response headers and SDK fields emitted by the gateway."
            fields={[
              {
                name: "cache_status",
                type: "string",
                description: "Cache outcome for this request.",
                options: ["HIT", "MISS", "BYPASS"],
              },
              {
                name: "cache_type",
                type: "string",
                description: "Tier that served the response.",
                options: ["L1_EXACT", "L2_SEMANTIC"],
              },
              {
                name: "similarity_score",
                type: "float",
                description: "Cosine similarity score for semantic hits (0.0 to 1.0).",
              },
            ]}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link href="/docs/features/routing" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Smart Routing</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Understand route selection and model/provider behavior.</p>
          </Link>
          <Link href="/docs/architecture" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Back</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Architecture</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Review the end-to-end request lifecycle.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
