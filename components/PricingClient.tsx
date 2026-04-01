"use client";

import { useState, Fragment } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, X, Zap, Shield, Globe, Cpu, ArrowRight, HelpCircle, Github } from "lucide-react";

const plans = [
    {
        name: "Free",
        description: "Perfect for side projects and learning",
        monthlyPrice: "0",
        annualPrice: "0",
        requests: "10K",
        users: "1",
        deployment: "Cloud",
        features: [
            "Unified API endpoint",
            "Automatic failover",
            "2 days log retention",
            "Redis exact-match caching",
            "Global budget alerts (Email)",
            "Community support",
            "Project and team analysis",
        ],
        cta: "Start Building Free",
        popular: false,
    },
    {
        name: "Starter",
        description: "For small teams and early-stage startups",
        monthlyPrice: "30",
        annualPrice: "300",
        requests: "30K + overage",
        users: "5",
        deployment: "Cloud",
        features: [
            "Everything in Free",
            "Semantic Caching (Qdrant L2)",
            "RBAC (2 Roles)",
            "Health Monitoring",
            "Per-user budget & Auto-cutoff",
            "30 days log retention",
            "Email support (48h)",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Business",
        description: "Advanced caching and compliance",
        monthlyPrice: "99",
        annualPrice: "990",
        requests: "100K + overage",
        users: "50",
        deployment: "Cloud",
        features: [
            "Everything in Starter",
            "3-Layer Caching (L1 + L2 + S3)",
            "Multi-key rotation & Load balancing",
            "SSO (Google, GitHub)",
            "Jaeger tracing & CSV export",
            "24h support response",
            "Project and team analysis",
        ],
        cta: "Upgrade Now",
        popular: false,
    },
    {
        name: "Enterprise",
        description: "Complete control and dedicated support",
        monthlyPrice: "Custom",
        annualPrice: "Custom",
        requests: "Unlimited",
        users: "Unlimited",
        deployment: "Self-hosted / Cloud",
        features: [
            "Everything in Business",
            "VPC / Private cloud deployment",
            "SAML SSO & Custom RBAC",
            "Snowflake / BigQuery export",
            "Dedicated Slack channel",
            "99.9% Uptime SLA",
            "PII Sanitization (Redaction)",
            "Project and team analysis",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

const communityPlan = {
    name: "Community",
    description: "Open source core for self-hosting",
    price: "Free Forever",
    license: "AGPL-3.0",
    features: [
        "Unified API + All providers",
        "Automatic failover",
        "Full proper caching",
        "Role-Based Access Control (RBAC)",
        "Full dashboard & Analytics",
        "30 days log retention",
        "Smart model routing",
        "Project and team analysis"
    ],
    cta: "View on GitHub",
};

const faqs = [
    {
        q: "What counts as a 'request'?",
        a: "Each API call to the gateway counts as 1 request. This includes cached responses, which are billed to help you track total throughput and savings.",
    },
    {
        q: "How does overage billing work?",
        a: "On Starter and Business plans, extra requests are billed at $8 per 100,000 additional requests, up to a maximum of 3 million requests per month.",
    },
    {
        q: "Can I pay in local currency?",
        a: "Yes! We support global payments in USD. We are working on supporting more currencies soon.",
    },
    {
        q: "What is the difference between Community and Enterprise self-hosting?",
        a: "There is a massive gap in reliability and feature set. While Community Edition (AGPL-3.0) includes core L1 (Redis) and L2 (Qdrant) caching, it lacks Semantic Caching, RBAC, SSO, and Budget Cutoffs. Enterprise self-hosting includes the full proprietary feature set, SOC2/PII compliance, and 24/7 dedicated engineering support for mission-critical production loads.",
    },
];

export default function PricingClient() {
    const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

    return (
        <div className="bg-[#09090b] text-white selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen">
            <Navbar />

            <main className="pt-32 pb-24 relative">
                {/* Background Decor */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-7xl font-medium tracking-tight leading-[0.9]"
                        >
                            Predictable. <br />
                            <span className="text-emerald-400 italic font-medium">ROI-Driven.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Microsecond gateway latency. Up to 40% lower LLM costs. <br className="hidden md:block" />
                            Zero-downtime failover — built for teams that can't afford to slow down.
                        </motion.p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className={`glass-premium p-8 rounded-2xl border ${plan.popular ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.15)] bg-emerald-500/[0.02] scale-105 z-20' : 'border-white/5 bg-white/[0.01]'} flex flex-col items-start text-left relative group transition-all duration-500 hover:border-emerald-500/20`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-30 shadow-xl">
                                        Most Popular
                                    </div>
                                )}
                                <div className="space-y-3 mb-8">
                                    <h3 className={`text-2xl font-medium tracking-tight ${i === 1 ? 'text-blue-400' : i === 2 ? 'text-indigo-400' : i === 3 ? 'text-rose-400' : 'text-emerald-400'}`}>{plan.name}</h3>
                                    <p className="text-[11px] text-neutral-500 font-bold leading-relaxed uppercase tracking-widest">{plan.description}</p>
                                </div>

                                <div className="mb-4 flex flex-col items-start gap-1 w-full">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-medium tracking-tighter">
                                            {plan.name === "Enterprise" ? "Custom" : (
                                                billing === "monthly" ? `$${plan.monthlyPrice}` : `$${plan.annualPrice}`
                                            )}
                                        </span>
                                        {plan.name !== "Enterprise" && plan.name !== "Free" && (
                                            <span className="text-neutral-500 text-sm font-bold uppercase tracking-widest">
                                                /{billing === "monthly" ? "mo" : "yr"}
                                            </span>
                                        )}
                                    </div>

                                    {/* Local Billing Switch */}
                                    {plan.name !== "Enterprise" && plan.name !== "Free" && (
                                        <div className="mt-4 flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5 w-full uppercase">
                                            <button
                                                onClick={() => setBilling("monthly")}
                                                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${billing === "monthly" ? "bg-white text-black shadow-lg" : "text-neutral-500 hover:text-white"}`}
                                            >
                                                Monthly
                                            </button>
                                            <button
                                                onClick={() => setBilling("annual")}
                                                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${billing === "annual" ? "bg-white text-black shadow-lg" : "text-neutral-500 hover:text-white"}`}
                                            >
                                                Annual
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 mb-10 flex-1">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] mb-4">Core Quotas</p>
                                        <div className="flex items-center gap-3 text-sm text-neutral-400 font-medium">
                                            <Zap size={14} className={i === 1 ? 'text-blue-400' : i === 2 ? 'text-indigo-400' : i === 3 ? 'text-rose-400' : 'text-cyan-400'} />
                                            {plan.requests} requests
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-neutral-400 font-medium">
                                            <Globe size={14} className={i === 1 ? 'text-blue-400' : i === 2 ? 'text-indigo-400' : i === 3 ? 'text-rose-400' : 'text-cyan-400'} />
                                            {plan.users} user seats
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-neutral-400 font-medium">
                                            <Cpu size={14} className={i === 1 ? 'text-blue-400' : i === 2 ? 'text-indigo-400' : i === 3 ? 'text-rose-400' : 'text-cyan-400'} />
                                            {plan.deployment}
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/5 w-full my-6" />

                                    <div className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex gap-3 text-xs text-neutral-300 font-medium leading-relaxed transition-colors group-hover:text-white">
                                                <Check size={14} className={`${i === 1 ? 'text-blue-400' : i === 2 ? 'text-indigo-400' : i === 3 ? 'text-rose-400' : 'text-emerald-400'} shrink-0 mt-0.5`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-emerald-400 text-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-300' : 'bg-white text-black'} hover:scale-105 active:scale-95`}>
                                    {plan.cta} <ArrowRight size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Community Edition Section */}
                    <div className="pt-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-premium p-12 rounded-2xl border border-white/5 relative overflow-hidden group text-center bg-gradient-to-b from-white/[0.02] to-transparent"
                        >
                            <div className="absolute inset-0 bg-grid-premium opacity-10" />
                            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em]">
                                    Open Source
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-black tracking-tight">{communityPlan.name} Edition</h2>
                                    <p className="text-neutral-400 font-medium">{communityPlan.description}</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                                    {communityPlan.features.map((f, i) => (
                                        <div key={i} className="flex gap-3 text-xs text-neutral-500 font-medium">
                                            <Check size={14} className="text-emerald-500 shrink-0" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                                    <div className="text-center">
                                        <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">Price</p>
                                        <p className="text-2xl font-black text-white">{communityPlan.price}</p>
                                    </div>
                                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                                    <div className="text-center">
                                        <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">License</p>
                                        <p className="text-2xl font-black text-white">{communityPlan.license}</p>
                                    </div>
                                    <div className="w-px h-12 bg-white/10 hidden sm:block" />
                                    <button className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2">
                                        {communityPlan.cta} <Github size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Detailed Comparison Table Intro */}
                    <div className="pt-32 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black tracking-tight uppercase">Feature Comparison</h2>
                            <p className="text-neutral-400 font-medium text-sm">A technical breakdown of capabilities across all tiers.</p>
                        </div>
                        <div className="overflow-x-auto glass-premium rounded-2xl border border-white/5">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.03]">
                                        <th className="p-8 text-[11px] font-black text-neutral-500 uppercase tracking-[0.3em] w-1/4">Capability</th>
                                        <th className="p-8 text-sm font-medium text-white">Free</th>
                                        <th className="p-8 text-sm font-medium text-emerald-400 bg-emerald-400/5">Starter</th>
                                        <th className="p-8 text-sm font-medium text-white">Business</th>
                                        <th className="p-8 text-sm font-medium text-white">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-neutral-400">
                                    {[
                                        {
                                            category: "Usage & Limits", features: [
                                                { label: "Monthly Requests", v: ["10K", "30K + Overage", "100K + Overage", "Unlimited"] },
                                                { label: "User Seats", v: ["1", "5", "50", "Unlimited"] },
                                                { label: "Log Retention", v: ["2 Days", "30 Days", "90 Days", "Custom"] },
                                                { label: "API Keys per User", v: ["10", "20", "50", "Unlimited"] },
                                            ]
                                        },
                                        {
                                            category: "Caching Infrastructure", features: [
                                                { label: "Exact Match Caching (Redis)", v: [true, true, true, true] },
                                                { label: "Semantic Caching (Qdrant)", v: [false, true, true, true] },
                                                { label: "Long-term Archive (S3)", v: [false, false, true, true] },
                                                { label: "Cache TTL", v: ["1 Hour", "1 Hour", "6 Hours", "Custom"] },
                                            ]
                                        },
                                        {
                                            category: "Cost Controls", features: [
                                                { label: "Global Budget Alerts", v: [true, true, true, true] },
                                                { label: "Per-User Cutoffs", v: [false, true, true, true] },
                                                { label: "Budget Intervals", v: ["Monthly", "Monthly", "D/W/M", "Custom"] },
                                                { label: "Custom Model Pricing", v: [false, false, true, true] },
                                            ]
                                        },
                                        {
                                            category: "Provider Management", features: [
                                                { label: "Automatic Failover", v: [true, true, true, true] },
                                                { label: "Health Monitoring", v: [false, true, true, true] },
                                                { label: "Multi-Key Rotation", v: [false, false, true, true] },
                                                { label: "Load Balancing", v: [false, false, true, true] },
                                            ]
                                        },
                                        {
                                            category: "Security & Support", features: [
                                                { label: "SSO", v: [false, false, "Google/GitHub", "SAML + All"] },
                                                { label: "RBAC", v: [false, "2 Roles", "4 Roles", "Custom"] },
                                                { label: "SLA", v: ["-", "-", "99.5%", "99.9%"] },
                                                { label: "Dedicated Support", v: [false, false, false, "Slack + Video"] },
                                            ]
                                        },
                                    ].map((section, si) => (
                                        <Fragment key={`section-${si}`}>
                                            <tr className="bg-white/[0.02] border-y border-white/5">
                                                <td colSpan={5} className="px-8 py-5 text-[10px] font-medium text-neutral-400 uppercase tracking-[0.4em]">{section.category}</td>
                                            </tr>
                                            {section.features.map((row, i) => (
                                                <tr key={`${si}-${i}`} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                                                    <td className="px-8 py-6 text-neutral-200 font-normal text-sm tracking-tight">{row.label}</td>
                                                    {row.v.map((val, j) => (
                                                        <td key={j} className={`px-8 py-6 text-neutral-300 font-medium text-xs ${j === 1 ? 'bg-emerald-400/[0.03] text-emerald-50' : ''}`}>
                                                            {typeof val === "boolean" ? (
                                                                val ? <Check size={18} className="text-emerald-400" /> : <X size={18} className="text-neutral-700" />
                                                            ) : val}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="pt-32 grid grid-cols-1 lg:grid-cols-3 gap-16 text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black tracking-tight leading-none uppercase">Frequently <br />Asked <br /><span className="text-emerald-400">Questions</span></h2>
                            <p className="text-neutral-500 font-medium">Everything you need to know about Hyperion pricing and policies.</p>
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="glass-premium p-8 rounded-2xl border border-white/5 space-y-3"
                                >
                                    <div className="flex items-center gap-3 text-white font-black text-lg">
                                        <HelpCircle size={20} className="text-emerald-500" />
                                        {faq.q}
                                    </div>
                                    <p className="text-neutral-100 font-medium leading-relaxed pl-8">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Small Print */}
                    <p className="pt-16 text-[12px] text-neutral-400 font-bold uppercase tracking-[0.3em] leading-loose">
                        All prices EXCLUDE applicable taxes (e.g. 18% GST for India). <br />
                        Annual savings calculated based on 2 months free vs monthly rates.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
