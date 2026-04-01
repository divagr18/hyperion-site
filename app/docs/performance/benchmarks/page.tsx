"use client";

import Link from "next/link";
import DocsLayout from "@/components/docs/DocsLayout";
import { ArrowRight } from "lucide-react";

const benchmarkRows = [
  {
    profile: "Sequential",
    concurrency: "1",
    throughput: "6,191 RPS",
    p99: "0.38 ms",
    overheadAvg: "5.88 us",
    overheadP95: "11 us",
    notes: "Lowest scheduler contention; baseline for raw gateway cost.",
  },
  {
    profile: "Golden Ratio",
    concurrency: "10",
    throughput: "25,667 RPS",
    p99: "1.72 ms",
    overheadAvg: "10.60 us",
    overheadP95: "14 us",
    notes: "Best throughput/latency balance for sustained traffic.",
  },
  {
    profile: "High Concurrency",
    concurrency: "100",
    throughput: "30,063 RPS",
    p99: "13.76 ms",
    overheadAvg: "101.81 us",
    overheadP95: "N/A",
    notes: "Throughput ceiling mode; tail latency rises under queue pressure.",
  },
];

export default function BenchmarksPage() {
  return (
    <DocsLayout activeSlug="performance/benchmarks">
      <div className="space-y-8">
        <section className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Performance</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Benchmark Results</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            These measurements isolate gateway overhead from LLM generation time. Benchmarks run against a mock upstream so results reflect
            request parsing, policy checks, routing, and response handling inside Hyperion.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Best Throughput</div>
            <div className="text-2xl font-semibold text-white">30,063 RPS</div>
            <p className="text-xs text-neutral-400 mt-2">Observed at concurrency 100.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Best P99</div>
            <div className="text-2xl font-semibold text-white">0.38 ms</div>
            <p className="text-xs text-neutral-400 mt-2">Observed at concurrency 1.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 mb-2">Golden Ratio</div>
            <div className="text-2xl font-semibold text-violet-200">25,667 RPS</div>
            <p className="text-xs text-neutral-300 mt-2">With 1.72 ms p99 at concurrency 10.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Overhead Floor</div>
            <div className="text-2xl font-semibold text-cyan-200">5.88 us</div>
            <p className="text-xs text-neutral-400 mt-2">Average gateway overhead.</p>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-medium tracking-tight">Methodology</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>`cbenchmark` runs inside Docker to reduce host-side network variance.</li>
            <li>Mock upstream returns instantly so provider latency does not pollute gateway metrics.</li>
            <li>`0% cache hit ratio` forces full request processing path for honest overhead measurement.</li>
            <li>All scenarios use fixed request count with varied concurrency to expose queueing behavior.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">Scenario Matrix</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-white/[0.03]">
                <tr className="text-left text-neutral-400">
                  <th className="px-4 py-3 font-medium">Profile</th>
                  <th className="px-4 py-3 font-medium">Concurrency</th>
                  <th className="px-4 py-3 font-medium">Throughput</th>
                  <th className="px-4 py-3 font-medium">P99</th>
                  <th className="px-4 py-3 font-medium">Overhead Avg</th>
                  <th className="px-4 py-3 font-medium">Overhead P95</th>
                  <th className="px-4 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row) => (
                  <tr key={row.profile} className="border-t border-white/10">
                    <td className="px-4 py-3 text-white">{row.profile}</td>
                    <td className="px-4 py-3 text-neutral-300">{row.concurrency}</td>
                    <td className="px-4 py-3 text-neutral-200">{row.throughput}</td>
                    <td className="px-4 py-3 text-neutral-200">{row.p99}</td>
                    <td className="px-4 py-3 text-cyan-200">{row.overheadAvg}</td>
                    <td className="px-4 py-3 text-violet-200">{row.overheadP95}</td>
                    <td className="px-4 py-3 text-neutral-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link href="/docs/performance/run-your-own" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Run Your Own Benchmarks</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Reproduce the same benchmark matrix on your hardware.</p>
          </Link>
          <Link href="/docs/performance/comparison" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Explore</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Implementation Comparison</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Understand runtime tradeoffs and where latency accumulates.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
