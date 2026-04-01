import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "Semantic Caching for LLMs | Hyperion",
    description: "Semantic caching stores embeddings of LLM requests so similar queries can reuse prior results, drastically reducing token spend and latency.",
    keywords: ["Semantic caching", "LLM Cache", "LLM latency optimization", "Qdrant", "Redis cache"],
    alternates: { canonical: "/semantic-caching" },
};

export default function SemanticCachingPage() {
    const pageFaqs = [
        {
            question: "Does semantic caching break correctness?",
            answer: "It can if thresholds are too loose; tune by tracking similarity and human review."
        },
        {
            question: "When not to use semantic caching?",
            answer: "In financial, legal, or other highly personalized, time-sensitive contexts where absolute freshness matters."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="Semantic Caching for LLMs"
            category="Performance"
            readTime="7 min read"
            date="Feb 25, 2026"
            accent="blue"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    <strong>Semantic caching</strong> stores vector embeddings of incoming API requests and their corresponding AI responses. When future requests arrive holding a similar semantic meaning (even if phrased entirely differently), the gateway can instantly reuse the prior cached result—drastically reducing token volume, slashing latency, and saving cost.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">How Hyperion Implements It</h2>
                <ul className="list-disc pl-5 space-y-3 marker:text-blue-500 text-neutral-300">
                    <li><strong>Layered Architecture:</strong> Hot data rests in Redis (exact match string cache), semantic vectors live in Qdrant/FAISS, and cold historical archives rest in S3.</li>
                    <li><strong>Granular Thresholds:</strong> The similarity threshold is completely configurable per route and per tenant.</li>
                    <li><strong>Cascading TTLs:</strong> Configure expiration windows separately per caching tier (e.g., 1 hour hot, 6 hour semantically fuzzy, custom limits for S3).</li>
                    <li><strong>Real-time Analytics:</strong> Built in dashboards provide clear reporting on hit/miss frequencies and similarity proximity histograms.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Example Configuration (YAML)</h2>
                <div className="bg-black/50 border border-white/10 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-emerald-400 leading-relaxed">
                        {`caching:
  enabled: true
  layers:
    - type: redis
      ttl: 3600
    - type: qdrant
      vector_threshold: 0.82
      ttl: 21600
    - type: s3
      ttl: 259200`}
                    </pre>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Best Practices & Required KPIs</h2>
                <p>
                    Semantic caching is incredibly effective for standard documentation retrieval augmentation, summarization of static objects, and general FAQ-like chatbots. However, you should disable fuzzy matching layers for explicitly personalized workflows or highly time-sensitive financial inputs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="glass-premium p-6 rounded-xl border border-white/5">
                        <h4 className="font-bold text-white mb-2">Metrics You Can Track In-App</h4>
                        <ul className="space-y-1 text-sm text-neutral-400 list-disc pl-4 marker:text-blue-500">
                            <li>Total Hit Rate (Overall & Endpoint)</li>
                            <li>Average Semantic Similarity Score per hit</li>
                            <li>Total Tokens Avoided (Generated vs Bypassed)</li>
                            <li>Effective USD Savings per Month</li>
                            <li>Average Latency Delta (Cache vs Live Generation)</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Semantic Caching FAQs" description="" items={pageFaqs} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
