"use client";

import Link from "next/link";
import DocsLayout from "@/components/docs/DocsLayout";
import ApiReference from "@/components/docs/ApiReference";
import { ArrowRight } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <DocsLayout activeSlug="architecture">
      <div className="space-y-8">
        <section className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Architecture</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Request Lifecycle</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion is a cache-first gateway. Each request goes through auth, policy checks, cache lookup, routing, and provider execution.
            This page defines the runtime flow and the purpose of each stage.
          </p>
        </section>

        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-medium tracking-tight">The Hyperion Pipeline</h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            Every request entering the Hyperion gateway is processed through a strictly defined execution pipeline. 
            Designed in Go, this pipeline uses non-blocking I/O to ensure that security, caching, and routing checks add negligible overhead.
          </p>
          <div className="space-y-3">
            {[
              { id: 1, title: "Identity & Context", desc: "API keys are validated, and the tenant context (org, team, user) is resolved from the database.", color: "text-violet-400" },
              { id: 2, title: "Policy Enforcement", desc: "Rate limits and budget quotas are checked in Redis. Requests exceeding limits are rejected immediately.", color: "text-violet-400" },
              { id: 3, title: "Multi-Tier Cache Lookup", desc: "L1 exact match is performed. If missed, and L2 is enabled, a vector similarity search is executed.", color: "text-emerald-400" },
              { id: 4, title: "Routing Decision", desc: "The router selects the optimal provider/model combination based on intent or explicit overrides.", color: "text-cyan-400" },
              { id: 5, title: "Execution & Stream", desc: "The request is dispatched to the upstream provider. Response chunks are streamed back to the client.", color: "text-blue-400" },
              { id: 6, title: "Audit & Writeback", desc: "Metrics are emitted to the analytics engine, and the response is stored in the cache if eligible.", color: "text-amber-400" },
            ].map((step) => (
              <div key={step.id} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="w-6 h-6 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-neutral-500">{step.id}</div>
                <div className="space-y-1">
                  <h4 className={`text-sm font-medium ${step.color}`}>{step.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium mb-2">L1 Exact Cache</h3>
            <p className="text-sm text-neutral-400 leading-6">
              Deterministic hash-based cache for identical prompts and parameters. Lowest latency path and default cache tier.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium mb-2">L2 Semantic Cache</h3>
            <p className="text-sm text-neutral-400 leading-6">
              Similarity-based cache for semantically close prompts. Optional tier designed for higher hit rates with controlled precision.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6 space-y-3">
          <h2 className="text-xl font-medium tracking-tight">Operational Notes</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>Use explicit provider/model for deterministic behavior in production flows.</li>
            <li>Use `model=auto` only when smart-routing policy is configured for your org.</li>
            <li>Profile latency using debug profiling headers to identify slow stages.</li>
            <li>Prefer streaming for user-facing chat to improve perceived latency.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-medium tracking-tight">Execution Metadata</h2>
          <p className="text-sm text-neutral-400 leading-6">
            These diagnostic HTTP headers are returned directly by the gateway.
          </p>
          <ApiReference
            title="Gateway Headers"
            subtitle="Diagnostic headers starting with X-Hyperion- or X-Cache- returned directly by the gateway."
            fields={[
              {
                name: "route_intent",
                type: "string",
                description: "Router intent classification for the request.",
                options: ["cheap_fast", "balanced", "high_reasoning"],
              },
              {
                name: "route_decision",
                type: "string",
                description: "Final route decision mode used by the gateway.",
              },
              {
                name: "cache_status",
                type: "string",
                description: "Cache result for the request path.",
                options: ["HIT", "MISS", "BYPASS"],
              },
            ]}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link href="/docs/features/caching" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Caching Internals</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Exact vs semantic cache behavior, TTL, and metadata.</p>
          </Link>
          <Link href="/docs/quick-start" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Back</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Quick Start</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Set up a local gateway and make your first request.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
