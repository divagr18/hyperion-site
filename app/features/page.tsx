import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "Features | Hyperion AI Gateway",
    description: "The complete feature breakdown for Hyperion AI Gateway: core unified API, semantic caching, budget controls, security, and deployment options.",
    keywords: ["AI Gateway features", "LLM routing features", "Semantic cache features", "Enterprise AI features"],
    alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
    return (
        <BlogArticleLayout
            title="Hyperion Feature Reference"
            category="Product"
            readTime="6 min read"
            date="Feb 25, 2026"
            accent="emerald"
        >
            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    Hyperion provides a comprehensive feature set for moving LLM applications from the prototype phase into highly resilient, cost-managed production environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Core Gateway</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Unified OpenAI-compatible API</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Multi-provider abstraction</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Automatic failover and retries</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SSE streaming proxy support</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Advance Caching</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Layer 1: Exact-match in-memory (Redis)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Layer 2: Semantic embedding search (Qdrant)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Layer 3: Long-term archive (S3)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Analytics and similarity tuning</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Optimizing Cost & Routing</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Smart model routing & AI Classifier</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Per-key token & spend quotas</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Budget alerting (Email/Slack/Webhooks)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Real-time spend forecasting</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Observability & SecOps</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Custom dashboards & usage trace</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> ML-driven anomaly auto-pause</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> PII sanitization (Enterprise)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Air-gapped deployment available</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-10">Deployment Tier Highlights</h2>
                <div className="space-y-4">
                    <p><strong>Community:</strong> Our AGPL-3.0 OSS edition. Includes Redis and Qdrant semantic caching for single-user dev/prototyping.</p>
                    <p><strong>Starter:</strong> Brings in hard budget cutoffs, 30K requests/month, RBAC basics, and advanced semantic cache for small teams.</p>
                    <p><strong>Business:</strong> Full 3-layer caching pipeline (Redis/Qdrant/S3), Jaeger tracing, load balancing, ML-driven routing classifiers, and up to 100K requests for scaling startups.</p>
                    <p><strong>Enterprise:</strong> Self-hosted, multi-region clustering, VPC networking, SOC2/ISO SLA guarantees, custom role policies, and massive data-lake exports.</p>
                </div>

                <p className="pt-6">
                    For a granular, checklist-style run down of every capability and quota, please reference our <a href="/pricing" className="text-emerald-400 hover:text-white underline decoration-emerald-500/30 underline-offset-4">full interactive pricing and feature matrix</a>.
                </p>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
