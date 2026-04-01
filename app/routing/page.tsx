import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "Model Routing & Failover | Hyperion",
    description: "Configurable ML routing policies for cost, latency, quality, and automatic LLM provider failover.",
    keywords: ["LLM Routing", "AI load balancing", "Model failover", "Prompt routing algorithms"],
    alternates: { canonical: "/routing" },
};

export default function RoutingPage() {
    const pageFaqs = [
        {
            question: "How does Hyperion choose a model automatically?",
            answer: "Through routing policies that evaluate latency, cost, and quality metrics and consult a routing classifier."
        },
        {
            question: "What happens if an AI provider goes down?",
            answer: "Hyperion can automatically redirect requests to alternative providers ensuring continuous service without manual intervention."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="Model Routing & Failover"
            category="Intelligence"
            readTime="6 min read"
            date="Feb 25, 2026"
            accent="amber"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    Hyperion routes requests universally using configurable pipeline policies designed around your business constraints: <strong>cost, latency, quality, or custom ML classifiers</strong>.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Strategic Routing Modes</h2>
                <ul className="list-disc pl-5 space-y-3 marker:text-amber-500 text-neutral-300">
                    <li><strong>Priority Routing:</strong> Explicitly prefer one provider or model for an endpoint, with immediate fallback configured if the primary becomes unhealthy.</li>
                    <li><strong>Cost-Aware Routing:</strong> Dynamically pick a cheaper model if the gateway's ML classifier determines the prompt satisfies an "easy" threshold (e.g., standard summarization vs mathematical reasoning).</li>
                    <li><strong>Latency-Aware Routing:</strong> Route traffic strictly to the provider responding with the lowest TTFT (Time To First Token) historically over the last 5 minutes.</li>
                    <li><strong>Quality Routing:</strong> Route traffic based on human-in-the-loop or automated unit test benchmarking for specific prompt variations over time.</li>
                    <li><strong>Hybrid Weighted Routing:</strong> Combine all above modes into weighted A/B/C testing or gradual rollout policies.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Example Configuration (YAML)</h2>
                <div className="bg-black/50 border border-white/10 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-emerald-400 leading-relaxed">
                        {`routing:
  default:
    - case: latency < 100ms and cost < 0.005
      model: provider-a/gpt-fast
    - case: user_tier == enterprise
      model: provider-b/gpt-quality
    - else:
      model: openai/gpt-4o
  failover:
    max_retries: 2
    backoff: exponential`}
                    </pre>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Smart Classification & Resilience</h2>
                <p>
                    Hyperion's lightweight ML classifier detects "cheapable" requests instantly. You can route simple CRUD-like AI extraction tasks dynamically without littering your core application codebase with complex logic loops.
                </p>
                <p>
                    On top of this, Hyperion guarantees resilience with automatic active-passive failover. Every provider gets measured health checks (monitoring latency averages and error rates in real-time). You can rotate load across multiple keys to bypass arbitrary provider rate-limits, and configure strict circuit breakers to pause entirely anomalous API traffic originating internally.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Routing FAQs" description="" items={pageFaqs} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
