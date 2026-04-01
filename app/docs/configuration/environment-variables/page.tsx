"use client";

import DocsLayout from "@/components/docs/DocsLayout";

const envGroups = [
  {
    n: "01",
    label: "Authentication",
    title: "Security & Keys",
    vars: [
      { name: "ADMIN_API_KEY", description: "Master key for administrative access and dashboard login.", required: true },
      { name: "JWT_SECRET", description: "Secret used for signing dashboard authentication tokens.", required: true },
      { name: "CACHE_MASTER_SECRET", description: "AES-256 key for encrypting provider credentials at rest.", required: true },
    ]
  },
  {
    n: "02",
    label: "Infrastructure",
    title: "Multi-Tier Stack",
    vars: [
      { name: "DATABASE_URL", description: "PostgreSQL connection string for persistent metadata.", required: true },
      { name: "REDIS_ADDR", description: "Endpoint for L1 exact-match caching.", required: true },
      { name: "QDRANT_ADDR", description: "Vector database for L2 semantic deduplication.", required: true },
      { name: "CLICKHOUSE_ADDR", description: "Columnar database for high-performance analytics.", required: true },
    ]
  },
  {
    n: "03",
    label: "Services",
    title: "Internal Orchestration",
    vars: [
      { name: "EMBEDDER_ADDR", description: "gRPC endpoint for the sentence-transformer service.", required: true },
      { name: "INTELLIGENCE_URL", description: "URL for the background intelligence and analytics worker.", required: true },
    ]
  }
];

export default function EnvironmentVariablesPage() {
  return (
    <DocsLayout activeSlug="configuration/environment-variables">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Configuration</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Environment Variables</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion uses environment variables to orchestrate its multi-tier stack, from vector search in Qdrant to analytics in ClickHouse.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {envGroups.map((group) => (
            <div key={group.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{group.n} — {group.label}</div>
              <div className="text-sm font-semibold text-white">{group.title}</div>
              <div className="mt-4 space-y-3">
                {group.vars.slice(0, 2).map(v => (
                   <div key={v.name} className="flex flex-col gap-1">
                      <code className="text-[12px] text-emerald-400 font-mono">{v.name}</code>
                      <p className="text-[12px] text-neutral-500 font-light truncate">{v.description}</p>
                   </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Detailed Reference Table */}
        <section className="pt-8 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white border-b border-white/5 pb-2">Full Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-0">
              <thead>
                <tr className="text-neutral-500 font-medium">
                  <th className="py-3 px-2 border-b border-white/5">Variable</th>
                  <th className="py-3 px-2 border-b border-white/5">Requirement</th>
                  <th className="py-3 px-2 border-b border-white/5">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {envGroups.flatMap(g => g.vars).map((v) => (
                  <tr key={v.name} className="group hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-2 font-mono text-emerald-300 text-[12px]">{v.name}</td>
                    <td className="py-4 px-2 whitespace-nowrap">
                      {v.required ? (
                        <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Required</span>
                      ) : (
                        <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-600">Optional</span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-neutral-400 font-light leading-relaxed max-w-sm">
                      {v.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
