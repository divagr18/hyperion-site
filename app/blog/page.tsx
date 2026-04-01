// import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
    title: "AI Gateway Engineering Blog | Caching, Reliability, Guardrails, and Cost Control",
    description:
        "Technical deep dives on AI gateway architecture: LLM caching, prompt security, PII redaction, failover, runtime performance, and multi-model budget enforcement.",
    keywords: [
        "AI gateway blog",
        "LLM caching architecture",
        "prompt injection defense",
        "PII redaction pipeline",
        "multi-model failover",
        "AI cost governance",
        "Go vs Python AI gateway",
    ],
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "AI Gateway Engineering Blog",
        description:
            "Deep technical articles on caching, performance, security, and spend controls for production AI systems.",
        type: "website",
        url: "/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Gateway Engineering Blog",
        description:
            "Deep technical articles on caching, performance, security, and spend controls for production AI systems.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const posts = [
    {
        slug: "native-go-ml-inference",
        title: "Native Go ML Inference: Porting Weights for Microsecond Latency",
        excerpt: "How we ported our Python-based ML intelligence layer to native Go, resulting in a 99.7% reduction in inference latency.",
        date: "Feb 26, 2026",
        readTime: "10 min read",
        category: "Engineering",
        color: "blue"
    },
    {
        slug: "go-gateway-performance",
        title: "Go vs Python for an AI Gateway: where latency is won or lost",
        excerpt: "An architecture-level performance deep dive covering gateway runtime split, timeout budgets, stream delivery quality, and p99 stability under high concurrency.",
        date: "Feb 20, 2026",
        readTime: "9 min read",
        category: "Performance",
        color: "violet"
    },
    {
        slug: "pii-redaction-ai-gateways",
        title: "The Privacy Perimeter: Implementing Real-Time PII Redaction",
        excerpt: "A technical blueprint for building a PII redaction pipeline at the gateway layer to ensure compliance and prevent data leakage in LLM applications.",
        date: "Feb 18, 2026",
        readTime: "10 min read",
        category: "Security",
        color: "emerald"
    },
    {
        slug: "failover-proof-ai-stack",
        title: "Surviving the 503: Building a Failover-Proof AI Stack",
        excerpt: "Strategic patterns for AI reliability, including multi-model fallbacks, circuit breaking, and hedging architectures to survive provider outages.",
        date: "Feb 19, 2026",
        readTime: "11 min read",
        category: "Reliability",
        color: "rose"
    },
    {
        slug: "ai-guardrails-and-injection",
        title: "Defense in Depth: Building the AI Guardrails Perimeter",
        excerpt: "An in-depth guide to protecting AI applications from prompt injection, jailbreaking, and security vulnerabilities through multi-layered defensive guardrails.",
        date: "Feb 17, 2026",
        readTime: "12 min read",
        category: "Security",
        color: "emerald"
    },
    {
        slug: "deduplication-at-scale",
        title: "Deduplication at Scale: Building a strict L1-L2-L3 cache pipeline",
        excerpt: "A deep technical guide to LLM deduplication, semantic cache safety, asynchronous write-path design, and the metrics that drive durable inference cost reduction.",
        date: "Feb 12, 2026",
        readTime: "8 min read",
        category: "Engineering",
        color: "blue"
    },
    {
        slug: "multi-model-budgets",
        title: "Multi-Model Budgets and Scoped Keys: enforcement that holds under load",
        excerpt: "A detailed blueprint for real-time AI cost governance with scoped key policies, reservation-settlement loops, model-aware pricing, and graceful degradation.",
        date: "Jan 28, 2026",
        readTime: "7 min read",
        category: "Product",
        color: "amber"
    },
    {
        slug: "openai-api-down-again",
        title: "OpenAI API Down Again? Here's How to Never Go Down With It",
        excerpt: "Strategic patterns for AI reliability, including multi-model fallbacks, circuit breaking, and hedging architectures to survive provider outages.",
        date: "Feb 25, 2026",
        readTime: "10 min read",
        category: "Reliability",
        color: "rose"
    },
    {
        slug: "llm-cost-control-2026",
        title: "Complete Guide to LLM Cost Control in Production 2026",
        excerpt: "A detailed blueprint for real-time AI cost governance with scoped key policies, budget enforcement, and anomaly detection.",
        date: "Feb 25, 2026",
        readTime: "11 min read",
        category: "Product",
        color: "amber"
    },
    {
        slug: "semantic-caching-80-percent-savings",
        title: "Semantic Caching for LLMs: Saving upto 80% in API Costs",
        excerpt: "A deep dive into how Semantic and Exact-Match caching layers can drastically reduce LLM latency and API bills in production.",
        date: "Feb 24, 2026",
        readTime: "8 min read",
        category: "Engineering",
        color: "blue"
    }
];

export default function BlogPage() {
    // const posts = getAllPosts();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Hyperion AI Gateway Engineering Blog",
        "description": "Deep technical articles on caching, performance, security, and spend controls for production AI systems.",
        "url": "https://www.hyperionhq.co/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Hyperion",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.hyperionhq.co/HyperionLogo3.png"
            }
        },
        "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://www.hyperionhq.co/blog/${post.slug}`,
            "datePublished": post.date,
            "author": {
                "@type": "Organization",
                "name": "Hyperion Engineering Team"
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-violet-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <div className="pt-36 pb-20 px-6 lg:px-8 max-w-7xl mx-auto relative">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[720px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.09),transparent_78%)] pointer-events-none" />

                <div className="relative z-10">
                    <div className="max-w-4xl mb-16">
                        <h1 className="text-5xl lg:text-7xl font-normal tracking-tight mb-6 leading-[0.95] py-2">
                            Engineering notes from the
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 italic pr-4 -ml-1">
                                Hyperion gateway team.
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-400 font-light leading-relaxed">
                            Deep dives on cache internals, gateway performance, and billing controls built from production code paths.
                        </p>
                    </div>

                    <BlogList posts={posts} />
                </div>
            </div>

            <Footer />
        </main>
    );
}
