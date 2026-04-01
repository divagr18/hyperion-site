import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { blogUpsellCard } from "@/components/UpsellCard";
import Link from "next/link";
import { Bot, Network, Briefcase, HeartHandshake, Landmark, Stethoscope, Hammer } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Gateway Use Cases | Hyperion",
    description: "Discover how Hyperion's AI Gateway powers Chatbots, Autonomous Agents, SaaS platforms, Fintech, Healthcare, and Internal Enterprise tools.",
    keywords: ["AI Gateway use cases", "LLM infrastructure examples", "Hyperion AI examples"],
    alternates: { canonical: "/use-cases" },
};

export default function UseCasesIndex() {
    const useCases = [
        {
            title: "Chatbots & Conversational AI",
            href: "/use-cases/chatbots",
            description: "Achieve sub-100ms 'Time to First Token' and cut generation costs by 80% with our multi-layered semantic caching.",
            icon: Bot,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "hover:border-cyan-500/50"
        },
        {
            title: "Autonomous Agents",
            href: "/use-cases/agents",
            description: "Built for infinite loops. Manage fallback retries, exact-match tool caching, and strictly enforced LLM budget limits.",
            icon: Network,
            color: "text-violet-400",
            bg: "bg-violet-500/10",
            border: "hover:border-violet-500/50"
        },
        {
            title: "B2B SaaS Platforms",
            href: "/use-cases/saas",
            description: "Provide dynamic, per-tenant virtual keys, track API spend per customer, and auto-pause abusive organizations instantly.",
            icon: Briefcase,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "hover:border-emerald-500/50"
        },
        {
            title: "Customer Support Automation",
            href: "/use-cases/customer-support",
            description: "Handle massive, highly repetitive support volumes effortlessly with intelligent model routing and semantic caching.",
            icon: HeartHandshake,
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "hover:border-pink-500/50"
        },
        {
            title: "Fintech & Banking",
            href: "/use-cases/fintech",
            description: "Air-gapped deployment capability, full SOC2/ISO audit tracing, and guaranteed isolation from public APIs.",
            icon: Landmark,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "hover:border-amber-500/50"
        },
        {
            title: "Healthcare",
            href: "/use-cases/healthcare",
            description: "Zero-trust PII redaction. Automatically scrub and anonymize PHI from prompts before they ever leave your VPC.",
            icon: Stethoscope,
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "hover:border-rose-500/50"
        },
        {
            title: "Internal Developer Tools",
            href: "/use-cases/internal-tools",
            description: "Connect Hyperion to Okta/Entra, provision keys via SSO, and establish hard budget constraints per engineering squad.",
            icon: Hammer,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "hover:border-blue-500/50"
        }
    ];

    return (
        <BlogArticleLayout
            title="Production Use Cases for Hyperion"
            category="Solutions"
            readTime="Explore"
            date="Feb 25, 2026"
            accent="emerald"
        >
            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p className="text-center max-w-4xl mx-auto text-xl leading-relaxed">
                    From highly-regulated healthcare environments to consumer-facing autonomous agents, Hyperion provides the absolute necessary infrastructure layer to run AI in production predictably.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                    {useCases.map((uc) => (
                        <Link
                            key={uc.href}
                            href={uc.href}
                            className={`group relative glass-premium p-8 rounded-2xl border border-white/5 transition-all duration-300 ${uc.border}`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${uc.bg} flex items-center justify-center mb-6`}>
                                <uc.icon className={`${uc.color}`} size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                {uc.title}
                            </h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {uc.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="pt-20">
                    {blogUpsellCard}
                </div>
            </div>
        </BlogArticleLayout>
    );
}
