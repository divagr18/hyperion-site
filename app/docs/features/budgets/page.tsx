"use client";

import DocsLayout from "@/components/docs/DocsLayout";

export default function BudgetsPage() {
  return (
    <DocsLayout activeSlug="features/budgets">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Features</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Budgets & Limits</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Control your LLM spend with extreme granularity. Hyperion utilizes hyper-fast Lua scripts natively in Redis to ensure race-free, atomic budget enforcement across your entire organization.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {[
            { n: "01", l: "GRANULARITY", t: "Multi-Level Scoping", d: "Budgets are not just per-tenant. You can set specific USD spend limits at the Organization, individual User, or explicit API Key level." },
            { n: "02", l: "ATOMICITY", t: "Race-Free Execution", d: "Cost estimation and budget reservation happen synchronously before the LLM call using Redis Lua scripts, ensuring absolute zero leakage." },
            { n: "03", l: "ANALYTICS", t: "Real-Time Tracking", d: "The gateway holds a live model pricing catalog, allowing for real-time cost estimation and accurate settlement post-inference." },
            { n: "04", l: "GOVERNANCE", t: "Alert Tiers & Cutoff", d: "Configure custom threshold alerts (e.g., at 80% and 90% spend). Set an auto-cutoff percentage to definitively halt traffic once limits are breached." },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.n} — {item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Data Points Section */}
        <section className="pt-8 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white border-b border-white/5 pb-2">The Hierarchy of Limits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Organization Budgets", description: "The overarching monthly spend limit for all users and keys within the tenant." },
              { label: "User Member Budgets", description: "Cap the inference spending of individual team members or service accounts." },
              { label: "API Key Limits", description: "Enforce strict limits on specific tokens, ideal for exposing keys to external/untrusted clients." },
            ].map(metric => (
              <div key={metric.label} className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">{metric.label}</div>
                <div className="text-[13px] text-neutral-400 font-light">{metric.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Tip */}
        <section className="p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
            <h3 className="text-base font-semibold text-white">How Settlement Works</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Hyperion uses a two-phase commit system for billing. Before an inference request is dispatched, an <strong>estimated cost</strong> is reserved from the budget based on the model's token limits. Once the provider returns the streamed response, Hyperion calculates the exact token usage and <strong>settles</strong> the final amount against the budget.
            </p>
        </section>
      </div>
    </DocsLayout>
  );
}
