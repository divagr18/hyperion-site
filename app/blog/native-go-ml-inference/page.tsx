import type { Metadata } from "next";

import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";

export const metadata: Metadata = {
    title: "Native Go ML Inference: Porting Weights for Microsecond Latency",
    description:
        "How we ported our Python-based ML intelligence layer to native Go, resulting in a 99.7% reduction in inference latency.",
    keywords: [
        "Go ML inference",
        "native Go machine learning",
        "porting Python to Go",
        "LLM gateway speed",
        "microsecond latency AI",
        "Hyperion intelligence engine",
    ],
    alternates: {
        canonical: "/blog/native-go-ml-inference",
    },
    openGraph: {
        title: "Native Go ML Inference: Porting Weights for Microsecond Latency",
        description:
            "From milliseconds to microseconds: The engineering journey of moving ML intelligence into the Go gateway core.",
        type: "article",
        url: "/blog/native-go-ml-inference",
    },
    twitter: {
        card: "summary_large_image",
        title: "Native Go ML Inference: Porting Weights for Microsecond Latency",
        description:
            "How we swapped Python microservices for native Go math to achieve sub-millisecond AI routing decisions.",
    },
};

export default function NativeGoMLBlog() {
    const faqSchema = generateFAQSchema();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["BlogPosting", "TechArticle"],
        "headline": "Native Go ML Inference: Porting Weights for Microsecond Latency",
        "description": "How we ported our Python-based ML intelligence layer to native Go, resulting in a 99.7% reduction in inference latency.",
        "author": {
            "@type": "Organization",
            "name": "Hyperion Engineering Team"
        },
        "datePublished": "2026-02-26",
        "image": "https://www.hyperionhq.co/og-image.png",
        "publisher": {
            "@type": "Organization",
            "name": "Hyperion",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.hyperionhq.co/HyperionLogo3.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.hyperionhq.co/blog/native-go-ml-inference"
        }
    };

    return (
        <BlogArticleLayout
            title="Native Go ML Inference: Porting Weights to the Core"
            category="Engineering"
            readTime="10 min read"
            date="Feb 26, 2026"
            accent="blue"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    In the high-stakes world of AI infrastructure, every millisecond counts. When we first built the Hyperion Intelligence layer, we did what most engineering teams do: we built it in Python. It was fast to develop, leveraged the massive scikit-learn ecosystem, and allowed us to iterate on our smart routing models daily.
                </p>

                <p>
                    But as the Hyperion Gateway moved from a prototype into a high-concurrency production engine handling millions of tokens per second, the "Python Tax" became unavoidable. An 18ms overhead for every routing decision might sound small, but in a world of sub-200ms TTFT (Time To First Token) targets, it was an eternity.
                </p>

                <blockquote className="border-l-4 border-blue-400 pl-6 py-2 my-8 text-neutral-100 bg-blue-400/5 rounded-r-lg">
                    "We didn't just want a faster microservice. We wanted the intelligence to be part of the request's atomic execution path. That meant leaving the HTTP network hop behind."
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">The Bottleneck: HTTP and Serialization</h2>
                <p>
                    The majority of our latency wasn't actually the model execution itself, it was the infrastructure surrounding it. A request would hit our Go gateway, get buffered, serialized to JSON, sent over a local network bridge to a Python FastAPI container, deserialized, processed, and then the whole dance would happen in reverse.
                </p>
                <p>
                    Even with optimized Gunicorn workers and local networking, you simply cannot beat the performance of in-process memory access. We decided to port the entire inference engine, classification, anomaly detection, and Multi-Armed Bandits, directly into the Go core.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Porting the Brain: From .pkl to weights.json</h2>
                <p>
                    The core challenge was portability. Scikit-learn models are typically saved as Python pickles, binary blobs that are inherently tied to the Python runtime. To run these in Go without CGO or a heavy ONNX runtime, we had to rethink the "last mile" of our ML pipeline.
                </p>
                <p>
                    We moved to a **statically exported weight model.** Instead of asking Go to "run a model," we taught Go the math of our specific algorithms, leveraging probabilistic classification and adaptive routing.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-blue-300">
                    <li><strong>Weight Extraction:</strong> Our Python training service now acts purely as a compiler. It trains on our massive synthetic and production datasets and then exports the log-probabilities and vocabularies as a plain, versioned weight file.</li>
                    <li><strong>Direct Math in Go:</strong> We implemented the core statistical classification patterns directly in pure Go. No libraries, no overhead. Just raw, vectorized array operations.</li>
                    <li><strong>Probabilistic Routing:</strong> Adaptive routing models, previously a bottleneck, were ported to use Go's native math/rand library for efficient probability-based sampling.</li>
                </ul>

                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 my-10">
                    <h3 className="text-xl text-white font-medium mb-4">The Performance Delta</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-2">
                            <div className="text-rose-400 font-bold uppercase tracking-wider">Legacy (Python HTTP)</div>
                            <ul className="space-y-1 text-neutral-400 list-disc pl-4">
                                <li>Latency: ~17.5ms</li>
                                <li>Source: External Microservice</li>
                                <li>Failure Mode: Network/Serialization</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <div className="text-emerald-400 font-bold uppercase tracking-wider">Current (Native Go)</div>
                            <ul className="space-y-1 text-neutral-400 list-disc pl-4">
                                <li>Latency: 0.047ms</li>
                                <li>Source: Atomic In-Process Memory</li>
                                <li>Failure Mode: None (Linear Logic)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Statistical Anomaly Detection</h2>
                <p>
                    We didn't stop at classification. Our "Sentinel" anomaly detector, which prevents malicious or malformed prompts from hitting upstream providers, was previously a complex ensemble model, a compute-intensive method.
                </p>
                <p>
                    By analyzing our traffic patterns, we realized we could achieve the same "Guardrail" efficacy using a high-performance Z-score statistical filter in Go. This allows us to reject anomalies in microseconds, before they even consume a single goroutine's scheduling slot.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">What This Means for the Hyperion Stack</h2>
                <p>
                    By moving the intelligence layer into the Go core, we've achieved more than just speed. We've simplified the deployment architecture. The Hyperion Gateway is now more resilient; if the intelligence trainer is down, the gateway continues using its last-known good weights with zero impact on uptime.
                </p>
                <p>
                    This is the philosophy that drives Hyperion: use Python for the heavy-lifting training and experimentation, but trust Go for the mission-critical execution path. The resulting architecture is leaner, faster, and ready for the next order of magnitude in AI scale.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Common Questions" description="" />
                </div>
            </div>
        </BlogArticleLayout>
    );
}
