"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Accent = "emerald" | "cyan" | "violet" | "orange" | "rose" | "amber" | "blue";

type BlogArticleLayoutProps = {
    title: string;
    category: string;
    readTime: string;
    date: string;
    accent: Accent;
    children: ReactNode;
};

const accents: Record<
    Accent,
    {
        selection: string;
        category: string;
        gradient: string;
    }
> = {
    emerald: {
        selection: "selection:bg-emerald-500/30",
        category: "text-emerald-400",
        gradient: "radial-gradient(circle at top, rgba(16, 185, 129, 0.10), transparent 60%)",
    },
    cyan: {
        selection: "selection:bg-cyan-500/30",
        category: "text-cyan-400",
        gradient: "radial-gradient(circle at top, rgba(6, 182, 212, 0.12), transparent 60%)",
    },
    violet: {
        selection: "selection:bg-violet-500/30",
        category: "text-violet-400",
        gradient: "radial-gradient(circle at top, rgba(139, 92, 246, 0.10), transparent 60%)",
    },
    orange: {
        selection: "selection:bg-orange-500/30",
        category: "text-orange-400",
        gradient: "radial-gradient(circle at top, rgba(249, 115, 22, 0.10), transparent 60%)",
    },
    rose: {
        selection: "selection:bg-rose-500/30",
        category: "text-rose-400",
        gradient: "radial-gradient(circle at top, rgba(244, 63, 94, 0.10), transparent 60%)",
    },
    amber: {
        selection: "selection:bg-amber-500/30",
        category: "text-amber-400",
        gradient: "radial-gradient(circle at top, rgba(245, 158, 11, 0.10), transparent 60%)",
    },
    blue: {
        selection: "selection:bg-blue-500/30",
        category: "text-blue-400",
        gradient: "radial-gradient(circle at top, rgba(59, 130, 246, 0.10), transparent 60%)",
    },
};

export default function BlogArticleLayout({
    title,
    category,
    readTime,
    date,
    accent,
    children,
}: BlogArticleLayoutProps) {
    const palette = accents[accent];

    return (
        <main className={`min-h-screen bg-[#030303] text-white ${palette.selection}`}>
            <Navbar />

            <header className="pt-32 pb-12 px-6 lg:px-8 relative overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none" style={{ background: palette.gradient }} />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[11px] font-semibold text-neutral-500 uppercase tracking-[0.18rem] hover:text-white mb-7 transition-colors group"
                        >
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.14rem] mb-7"
                    >
                        <span className={palette.category}>{category}</span>
                        <span className="text-neutral-600">/</span>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock size={12} />
                            {readTime}
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span>{date}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.16 }}
                        className="text-4xl lg:text-6xl font-medium tracking-tight leading-[1.08] max-w-4xl mx-auto"
                    >
                        {title}
                    </motion.h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-28">
                <article className="max-w-3xl mx-auto space-y-10 text-neutral-300 leading-8">
                    {children}
                </article>
            </div>

            <Footer />
        </main>
    );
}
