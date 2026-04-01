"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export type PostSummary = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    readTime: string;
    color?: string;
};

const accentBar: Record<string, string> = {
    emerald: "from-emerald-400 via-emerald-300 to-teal-300",
    cyan: "from-cyan-400 via-sky-300 to-cyan-200",
    violet: "from-violet-400 via-indigo-300 to-fuchsia-300",
    orange: "from-amber-300 via-orange-300 to-orange-200",
    blue: "from-blue-400 via-blue-300 to-sky-300",
    amber: "from-amber-400 via-amber-300 to-orange-300",
    rose: "from-rose-400 via-rose-300 to-pink-300",
};

const accentGlow: Record<string, string> = {
    emerald: "shadow-[0_0_18px_rgba(52,211,153,0.55)]",
    cyan: "shadow-[0_0_18px_rgba(34,211,238,0.55)]",
    violet: "shadow-[0_0_18px_rgba(167,139,250,0.55)]",
    orange: "shadow-[0_0_18px_rgba(251,146,60,0.55)]",
    blue: "shadow-[0_0_18px_rgba(59,130,246,0.55)]",
    amber: "shadow-[0_0_18px_rgba(245,158,11,0.55)]",
    rose: "shadow-[0_0_18px_rgba(244,63,94,0.55)]",
};

const categoryText: Record<string, string> = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    orange: "text-orange-400",
    blue: "text-blue-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
};

const categoryBg: Record<string, string> = {
    emerald: "bg-emerald-400/10 border-emerald-400/20",
    cyan: "bg-cyan-400/10 border-cyan-400/20",
    violet: "bg-violet-400/10 border-violet-400/20",
    orange: "bg-orange-400/10 border-orange-400/20",
    blue: "bg-blue-400/10 border-blue-400/20",
    amber: "bg-amber-400/10 border-amber-400/20",
    rose: "bg-rose-400/10 border-rose-400/20",
};

export default function BlogList({ posts }: { posts: PostSummary[] }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <motion.a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all h-[380px]"
                >
                    <div
                        className={`absolute inset-x-0 top-0 h-4 bg-gradient-to-r ${accentBar[post.color || "violet"] || accentBar.violet} ${accentGlow[post.color || "violet"] || accentGlow.violet}`}
                    />

                    <div className="px-6 pt-11 pb-6 flex-1 flex flex-col">
                        <div className="mb-3">
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.14rem]">
                                <span className={`${categoryText[post.color || "violet"] || "text-neutral-300"}`}>
                                    {post.category}
                                </span>
                                <span className="text-neutral-600">/</span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock size={12} />
                                    {post.readTime}
                                </span>
                            </div>
                            <div className="mt-2.5 text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.14rem]">
                                {post.date}
                            </div>
                        </div>

                        <h3 className="text-2xl font-medium mb-3 group-hover:text-white transition-colors leading-tight">
                            {post.title}
                        </h3>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-[10px] uppercase tracking-[0.14rem] text-neutral-300">
                                Read Article
                            </span>
                            <ArrowRight
                                size={18}
                                className="text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all"
                            />
                        </div>
                    </div>
                </motion.a>
            ))}
        </div>
    );
}
