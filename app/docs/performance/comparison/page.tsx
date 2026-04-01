"use client";

import Link from "next/link";
import DocsLayout from "@/components/docs/DocsLayout";
import { ArrowRight } from "lucide-react";

const vendorRows = [
  {
    vendor: "Hyperion",
    overhead: "Microsecond-class in isolated harness",
    throughput: "High in compiled direct-executor path",
    tail: "Low when queue pressure is controlled",
    memory: "Moderate and predictable",
    bestFor: "Teams optimizing end-to-end gateway + policy + caching in one stack",
  },
  {
    vendor: "Bifrost",
    overhead: "Very low published gateway overhead",
    throughput: "High with performance-first pathing",
    tail: "Depends on feature path and harness parity",
    memory: "Varies by deployment shape",
    bestFor: "Teams prioritizing minimal proxy overhead",
  },
  {
    vendor: "LiteLLM",
    overhead: "Higher than pure-proxy low-level implementations",
    throughput: "Strong under practical multi-instance load",
    tail: "Good p95/p99 in published Portkey comparison",
    memory: "Higher footprint in cited benchmarks",
    bestFor: "Teams wanting broad provider abstraction with fast time-to-adoption",
  },
  {
    vendor: "Portkey",
    overhead: "Competitive baseline in hosted gateway workflows",
    throughput: "Stable under tested profile",
    tail: "Higher p95/p99 than LiteLLM in cited run",
    memory: "Lower footprint in cited run",
    bestFor: "Teams prioritizing managed gateway workflows and consistency",
  },
];

export default function ComparisonPage() {
  return (
    <DocsLayout activeSlug="performance/comparison">
      <div className="space-y-8">
        <section className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Performance</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Hyperion vs Bifrost vs LiteLLM vs Portkey</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            This page compares gateway behavior across four stacks using normalized criteria. It is designed for architecture decisions,
            not leaderboard-style claims across mismatched test harnesses.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5 md:p-6 space-y-3">
          <h2 className="text-xl font-medium tracking-tight">How to Compare Fairly</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>Keep test shape fixed: same concurrency, request count, payload size, and cache policy.</li>
            <li>Separate gateway overhead from upstream model latency.</li>
            <li>Use p95/p99 and failure rate as decision metrics, not only average RTT.</li>
            <li>Track memory and CPU utilization at the same load tier.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">At-a-Glance Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full min-w-[980px] text-sm">
              <thead className="bg-white/[0.03]">
                <tr className="text-left text-neutral-300">
                  <th className="px-4 py-3 font-medium">Gateway</th>
                  <th className="px-4 py-3 font-medium">Overhead</th>
                  <th className="px-4 py-3 font-medium">Throughput Profile</th>
                  <th className="px-4 py-3 font-medium">Tail Latency</th>
                  <th className="px-4 py-3 font-medium">Memory Profile</th>
                  <th className="px-4 py-3 font-medium">Best Fit</th>
                </tr>
              </thead>
              <tbody>
                {vendorRows.map((row) => (
                  <tr key={row.vendor} className="border-t border-white/10">
                    <td className="px-4 py-3 text-cyan-200">{row.vendor}</td>
                    <td className="px-4 py-3 text-neutral-300">{row.overhead}</td>
                    <td className="px-4 py-3 text-neutral-300">{row.throughput}</td>
                    <td className="px-4 py-3 text-neutral-300">{row.tail}</td>
                    <td className="px-4 py-3 text-neutral-300">{row.memory}</td>
                    <td className="px-4 py-3 text-neutral-400">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
            <h3 className="text-lg font-medium">Published Signals You Can Reuse</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>LiteLLM vs Portkey published tests suggest stronger LiteLLM p95/p99 under that benchmark setup.</li>
              <li>Portkey in the same cited run shows lower memory footprint and stable medians.</li>
              <li>Bifrost publishes very low gateway-overhead-focused numbers in performance mode.</li>
              <li>Hyperion internal benchmark mode targets similar overhead isolation with direct in-container harness.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
            <h3 className="text-lg font-medium">Decision Heuristic</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Pick Hyperion/Bifrost when raw gateway tax is your top constraint.</li>
              <li>Pick LiteLLM/Portkey when ecosystem or managed workflow speed matters more.</li>
              <li>For production choice, run your own apples-to-apples benchmark before finalizing.</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link href="/docs/performance/run-your-own" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Back</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Run Benchmarks Locally</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Use your own infra and traffic shape for final selection.</p>
          </Link>
          <Link href="/docs/features/caching" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Caching Internals</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Understand how cache tiers shape throughput and costs.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
