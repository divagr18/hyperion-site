"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/GetHyperionHQ" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/hyperionhq/" },
];

const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Semantic Caching", href: "/semantic-caching" },
    { label: "Routing", href: "/routing" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
];

const resourceLinks = [
    { label: "AI Gateway", href: "/ai-gateway" },
    { label: "LLM Gateway", href: "/llm-gateway" },
    { label: "Performance", href: "/blog/go-gateway-performance" },
];

const useCaseLinks = [
    { label: "All Use Cases", href: "/use-cases" },
    { label: "Chatbots", href: "/use-cases/chatbots" },
    { label: "SaaS", href: "/use-cases/saas" },
    { label: "Healthcare", href: "/use-cases/healthcare" },
    { label: "Internal Tools", href: "/use-cases/internal-tools" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy", href: undefined },
];

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/5 bg-black/40 backdrop-blur-3xl overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 border-r border-white/5 pr-8 lg:pr-12">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group cursor-pointer brightness-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:brightness-150 transition-all duration-300">
                            <div className="relative w-8 h-8">
                                <Image src="/HyperionLogo3.png" alt="Hyperion" width={32} height={32} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]">
                                Hyperion
                            </span>
                        </Link>
                        <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
                            Empowering the next generation of AI infrastructure. Microsecond gateway latency, enterprise-grade security.
                        </p>
                        <div className="flex space-x-3">
                            {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                                href ? (
                                    <motion.a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2, color: '#10b981' }}
                                        className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-500 hover:text-white transition-colors"
                                        aria-label={name}
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                ) : (
                                    <span
                                        key={name}
                                        className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-600 cursor-not-allowed"
                                        aria-label={`${name} coming soon`}
                                        title={`${name} coming soon`}
                                    >
                                        <Icon size={16} />
                                    </span>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Product</h4>
                        <ul className="space-y-2">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Use Cases</h4>
                        <ul className="space-y-2">
                            {useCaseLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href ? (
                                        <Link href={link.href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <span className="text-sm text-neutral-500 cursor-not-allowed" title="Coming soon">
                                            {link.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-neutral-600 font-bold tracking-[0.1em] uppercase">
                        &copy; 2026 Hyperion Inc. Built for the future of AI.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                        <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.2em]">Deploy Anywhere</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
