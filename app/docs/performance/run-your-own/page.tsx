"use client";

import Link from "next/link";
import DocsLayout from "@/components/docs/DocsLayout";
import CodeBlock from "@/components/docs/CodeBlock";
import { ArrowRight } from "lucide-react";

export default function RunYourOwnPage() {
  const setup = `# project root
docker compose up -d
docker compose up -d mock-openai`;

  const run = `cd gateway/tools

# Usage: ./benchmark.sh [TOTAL_REQUESTS] [CONCURRENCY]
./benchmark.sh 10000 10`;

  const scenarios = `# Baseline (single worker)
./benchmark.sh 10000 1

# Golden ratio
./benchmark.sh 10000 10

# Throughput stress
./benchmark.sh 50000 100`;

  const output = `--- Gateway Overhead (dispatch-json_parse-json_marshal) ---
Average: 10.6045us
Median:  5.0000us
p95:     14.0000us
p99:     125.0000us`;

  return (
    <DocsLayout activeSlug="performance/run-your-own">
      <div className="space-y-8">
        <section className="space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Performance</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Run Your Own Benchmarks</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Reproduce official benchmark claims with the same toolchain used in the docs. This flow is designed to isolate gateway overhead
            from provider generation latency.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5 md:p-6 space-y-4">
          <h2 className="text-xl font-medium tracking-tight">Execution Model</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>Benchmark client runs in-container to reduce host networking variance.</li>
            <li>Mock upstream returns fixed responses immediately.</li>
            <li>Use unique prompts and `0%` cache hits when measuring pure gateway tax.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">1. Start Services</h2>
          <CodeBlock code={setup} language="bash" filename="Terminal" />
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">2. Run Baseline Script</h2>
          <CodeBlock code={run} language="bash" filename="Terminal" />
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">3. Run Scenario Matrix</h2>
          <CodeBlock code={scenarios} language="bash" filename="Terminal" />
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-medium tracking-tight">4. Interpret Output</h2>
          <CodeBlock code={output} language="text" filename="Output" />
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-neutral-300 space-y-1.5">
            <p><span className="text-white font-medium">Average / Median:</span> steady-state gateway overhead.</p>
            <p><span className="text-white font-medium">P95 / P99:</span> tail behavior under scheduler and queue pressure.</p>
            <p><span className="text-white font-medium">Compare with RTT:</span> overhead should remain a small subset of total request latency.</p>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
          <h2 className="text-xl font-medium tracking-tight">Troubleshooting</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>`401/403`: API key missing, expired, or not scoped to the benchmark tenant.</li>
            <li>`429`: rate limit path still active for your test key or tenant.</li>
            <li>`502`: upstream mock unavailable or circuit breaker opened.</li>
            <li>High variance: run benchmark multiple times and compare median/p95, not only single-run averages.</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link href="/docs/performance/benchmarks" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Back</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Official Benchmark Results</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Reference matrix and methodology used by docs.</p>
          </Link>
          <Link href="/docs/performance/comparison" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Runtime Comparison</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Compare implementation tradeoffs across gateway stacks.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
