"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const providers = [
  {
    n: "01",
    name: "OpenAI",
    slug: "openai",
    description: "The gold standard for reasoning and creative output. Optimized for GPT-4o and GPT-4o mini via Hyperion Caching.",
    color: "text-emerald-300"
  },
  {
    n: "02",
    name: "Anthropic",
    slug: "anthropic",
    description: "Enterprise-grade safety and industry-leading context windows. Full protocol parity for Claude 3.5 Sonnet.",
    color: "text-purple-300"
  },
  {
    n: "03",
    name: "DeepSeek",
    slug: "deepseek",
    description: "High-efficiency, cost-optimized intelligence. Hyperion supercharges DeepSeek with stability and semantic caching.",
    color: "text-blue-300"
  },
  {
    n: "04",
    name: "Google Gemini",
    slug: "gemini",
    description: "Massive context capabilities and multi-modal proficiency. Optimized long-context retrieval for Gemini 1.5 Pro.",
    color: "text-blue-500"
  },
  {
    n: "05",
    name: "Ollama",
    slug: "ollama",
    description: "Production-ready local open-source models. Governance, RBAC, and observability for your on-prem compute.",
    color: "text-emerald-400"
  }
];

export default function ProvidersOverview() {
  return (
    <DocsLayout activeSlug="providers/overview">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Model Providers</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Model Index</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion provides a unified interface to the world&apos;s leading AI models. Whether you&apos;re using cloud-scale giants or local open-source models, Hyperion layers enterprise-grade caching and governance over every request.
          </p>
        </section>

        {/* Model Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {providers.map((p) => (
            <Link 
              key={p.slug} 
              href={`/docs/providers/${p.slug}`}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`text-[10px] font-semibold tracking-[0.16em] mb-1 ${p.color} uppercase`}>
                  {p.n}
                </div>
                <div className="text-base font-semibold text-white mb-2 flex items-center justify-between">
                  {p.name}
                  <ArrowRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-[13px] text-neutral-400 leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* Informational Section */}
        <section className="pt-8 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-white border-b border-white/5 pb-2">Unified Access</h2>
          <p className="text-[15px] text-neutral-400 leading-7 font-light">
            All providers integrated via Hyperion benefit from our <strong>Universal Schema</strong>. Switch between providers by changing a single parameter in your config while maintaining identical observability and caching logic.
          </p>
        </section>
      </div>
    </DocsLayout>
  );
}
