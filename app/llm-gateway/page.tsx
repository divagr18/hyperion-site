import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "What is an LLM Gateway? | Hyperion",
    description: "Understand generative-AI semantics, token costs, streaming, embeddings, and prompt injection with a dedicated LLM Gateway. Migration checklist included.",
    keywords: ["LLM Gateway", "API Gateway vs LLM Gateway", "AI Migration", "GenAI infrastructure", "LLM routing"],
    alternates: { canonical: "/llm-gateway" },
};

export default function LLMGatewayPage() {
    const pageFaqs = [
        {
            question: "Is an LLM gateway the same as an API gateway?",
            answer: "No: an LLM gateway handles token economics, streaming and prompt risks in addition to routing."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="What is an LLM Gateway?"
            category="Infrastructure"
            readTime="4 min read"
            date="Feb 25, 2026"
            accent="cyan"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    An <strong>LLM gateway</strong> is a specialized proxy that understands generative-AI semantics: token costs, streaming, embeddings, prompt injection, and model quality differences. It’s built specifically for LLM workloads, unlike generic REST API gateways.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">When to use an LLM gateway vs direct provider calls</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="glass-premium p-6 rounded-xl border border-white/5 border-l-4 border-l-neutral-500">
                        <h4 className="font-bold text-white mb-2">Prototype Stage</h4>
                        <p className="text-sm text-neutral-400">Direct SDK calls are okay for early development and validating core ideas.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 border-l-4 border-l-cyan-500">
                        <h4 className="font-bold text-white mb-2">Production with SLAs</h4>
                        <p className="text-sm text-neutral-400">You must use a gateway for failovers, caching, and rate limiting.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 border-l-4 border-l-emerald-500">
                        <h4 className="font-bold text-white mb-2">Cost-Sensitive / Multi-Provider</h4>
                        <p className="text-sm text-neutral-400">A gateway is essential for budget cutoffs and dynamic smart model routing.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 border-l-4 border-l-rose-500">
                        <h4 className="font-bold text-white mb-2">Compliance / On-Prem</h4>
                        <p className="text-sm text-neutral-400">A self-hosted gateway is highly recommended for PII redaction and audit logs.</p>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Common Capabilities</h2>
                <ul className="list-disc pl-5 space-y-3 marker:text-cyan-500 text-neutral-300">
                    <li><strong>OpenAI-compatible API surface:</strong> Instantly works with existing LangChain/LlamaIndex code.</li>
                    <li><strong>Provider abstraction:</strong> Support for OpenAI, Anthropic, Google, and local open-source models natively.</li>
                    <li><strong>Semantic Cache + TTL tiers:</strong> Layered caching to eliminate redundant token generation.</li>
                    <li><strong>Model Routing:</strong> Direct traffic based on complex cost, latency, or quality policies.</li>
                    <li><strong>Streaming & Partial Results:</strong> Flawless handling of Server-Sent Events (SSE).</li>
                    <li><strong>Audit Logs, RBAC, SSO:</strong> Enterprise security wrappers around public AIs.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Migration Checklist</h2>
                <p>Migrating from direct calls to Hyperion takes minutes, but verifying production stability takes a few days:</p>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-4 font-medium text-neutral-300">
                    <div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">1</div><p>Replace hardcoded provider SDK endpoints with the Hyperion URL and Virtual Key.</p></div>
                    <div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">2</div><p>Enable Semantic Caching for your read-like or repeated queries.</p></div>
                    <div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">3</div><p>Configure team budgets, anomaly alerts, and per-key spend limits.</p></div>
                    <div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">4</div><p>Run traffic in A/B/Shadow mode (Hyperion vs direct) for 2–7 days to observe latency baselines.</p></div>
                    <div className="flex items-start gap-4"><div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">5</div><p>Flip the final switch and enable Active-Passive auto-failover to alternative providers.</p></div>
                </div>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="LLM Gateway FAQs" description="" items={pageFaqs} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
