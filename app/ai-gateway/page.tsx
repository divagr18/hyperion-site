import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "Hyperion — AI Gateway for Production LLM Apps",
    description: "Enterprise AI gateway: unified API, routes, secures, caches, and optimizes access to multiple LLM providers so production apps run faster and cheaper.",
    keywords: ["AI Gateway", "Enterprise AI Gateway", "LLM caching", "LLM routing", "AI Unified API", "OpenAI Proxy"],
    alternates: { canonical: "/ai-gateway" },
};

export default function AIGatewayPage() {
    const pageFaqs = [
        {
            question: "What is an AI gateway?",
            answer: "An infrastructure layer that centralizes model access, routing, caching and policy enforcement."
        },
        {
            question: "Do I need an AI gateway for production?",
            answer: "If you require reliability, cost control, multi-provider support, or compliance, yes."
        },
        {
            question: "How does Hyperion reduce latency?",
            answer: "Semantic caching + connection reuse + intelligent routing to the fastest provider."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);
    const softwareAppSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Hyperion AI Gateway",
        "description": "Enterprise gateway for production LLM apps — unified API, semantic caching, and model routing.",
        "applicationCategory": "DeveloperApplication",
        "url": "https://hyperionhq.co/ai-gateway"
    };

    return (
        <BlogArticleLayout
            title="Hyperion — AI Gateway for Production LLM Apps"
            category="Overview"
            readTime="5 min read"
            date="Feb 25, 2026"
            accent="violet"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    <strong>Hyperion is an enterprise AI gateway</strong> — a unified API and control plane that routes, secures, caches, and optimizes access to multiple LLM providers so production apps run faster, cheaper, and more reliably.
                </p>

                <blockquote className="border-l-4 border-violet-400 pl-6 py-2 my-8 text-neutral-100 bg-violet-400/5 rounded-r-lg">
                    "Replace many provider SDKs with one robust, production-ready gateway that handles failover, semantic caching, model routing, budget controls, and observability."
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Key Benefits</h2>
                <ul className="list-disc pl-5 space-y-3 marker:text-violet-500 text-neutral-300">
                    <li><strong>Unified API</strong> for OpenAI, Anthropic, Google, and self-hosted models.</li>
                    <li><strong>Semantic caching</strong> to significantly cut token spend and LLM latency.</li>
                    <li><strong>Cost-aware model routing</strong> and automatic budget enforcement.</li>
                    <li><strong>Automatic failover</strong> & health-based provider routing to maintain uptime.</li>
                    <li><strong>Enterprise security</strong> including PII redaction and prompt-injection defenses.</li>
                    <li>Deploy in the cloud, self-hosted, or fully <strong>air-gapped</strong>.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Quick Start</h2>
                <div className="bg-black/50 border border-white/10 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-emerald-400 leading-relaxed">
                        {`# Point your app at Hyperion
export HYPERION_API_KEY=sk-...

curl -X POST https://api.hyperionhq.co/v1/completions \\
  -H "Authorization: Bearer $HYPERION_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"gpt-4o","input":"Summarize this..."}'`}
                    </pre>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Core Features</h2>
                <p>
                    Hyperion handles the heavy lifting of LLM orchestration: unified endpoints (OpenAI-compatible), multi-provider routing, partial result streaming, semantic and exact match caching layers (Redis & Qdrant), strictly enforced budgeting and quotas, plus full observability through traces, logs, and analytics.
                </p>
                <p>
                    For a full feature-by-tier reference, check out our <a href="/features" className="text-violet-400 hover:text-white underline decoration-violet-500/30 underline-offset-4">product features matrix</a>.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="AI Gateway FAQs" description="Common questions about AI Gateways and Hyperion." items={pageFaqs} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
