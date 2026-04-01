"use client";

import DocsLayout from "@/components/docs/DocsLayout";

export default function ProductionChecklistPage() {
  return (
    <DocsLayout activeSlug="configuration/production-checklist">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Configuration</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Production Checklist</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Before moving your Hyperion gateway to production, ensure you have addressed these critical security, performance, and reliability configurations.
          </p>
        </section>

        {/* Checklist Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {[
            { n: "01", l: "Security", t: "Rotate API Keys", d: "Ensure all platform keys (OpenAI, Anthropic) are stored in an encrypted vault and rotated quarterly." },
            { n: "02", l: "Reliability", t: "Persistence Layer", d: "Use a managed PostgreSQL instance (RDS/CloudSQL) for metadata persistence rather than local volumes." },
            { n: "03", l: "Performance", t: "Replica Sets", d: "Deploy Hyperion with at least 3 replicas behind a load balancer to handle peak traffic and failover." },
            { n: "04", l: "Security", t: "mTLS & SSL", d: "Force TLS for all gateway traffic and ideally use mTLS for internal communication with sidecars." },
            { n: "05", l: "Monitoring", t: "Log Aggregation", d: "Connect your gateway to Datadog, Sentry, or Grafana for real-time alerting on 5xx errors." },
            { n: "06", l: "Governance", t: "Budget Enforcements", d: "Set hard monthly spend limits per organization to prevent runaway costs from bug-loops." },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.n} — {item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Critical Rule Tip */}
        <section className="p-6 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10 space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-400">Hard Requirement</div>
            <h3 className="text-base font-semibold text-white">Zero Trust Architecture</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Hyperion is designed for <strong>Zero Trust</strong> environments. Never expose your internal Redis or Database ports to the public internet. All traffic should strictly flow through the authenticated Gateway layer.
            </p>
        </section>
      </div>
    </DocsLayout>
  );
}
