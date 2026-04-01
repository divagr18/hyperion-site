"use client";

import { motion } from "framer-motion";
import { Database, DollarSign, Zap, Shield, TrendingUp, Clock, Layers, ArrowRight, Activity, Percent } from "lucide-react";

export default function BentoFeatures() {
    return (
        <section id="features" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-bold text-violet-400 uppercase tracking-[0.4em]"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-white"
                    >
                        Intelligence at the <span className="text-violet-400 italic">Edge.</span>
                    </motion.h2>
                    <p className="text-neutral-500 text-lg font-light leading-relaxed">
                        The production layer for scale-ready AI. Built for the most demanding enterprise deployments.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Semantic Caching - Large Card */}
                    <BentoCard className="lg:col-span-2 lg:row-span-2" delay={0.1}>
                        <div className="flex flex-col h-full">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-violet-500/10 border border-violet-500/20 text-[9px] font-bold text-violet-400 uppercase tracking-widest mb-6">
                                    <Database size={12} /> Semantic Caching
                                </div>
                                <h3 className="text-3xl font-medium mb-4 tracking-tight text-white">Cut Latency by 99% with Two Layered Cache</h3>
                                <p className="text-neutral-500 text-lg leading-relaxed max-w-md font-light">
                                    Don't pay for the same answer twice. Our gateway caches the <span className="text-white font-medium">meaning</span> of queries, not just the text.
                                </p>
                            </div>

                            {/* Visual Component: Live Cache Feed */}
                            <div className="flex-1 min-h-[300px] mt-4 relative">
                                <div className="absolute inset-x-0 bottom-0 top-0 rounded-[2rem] bg-black/40 border border-white/5 overflow-hidden flex flex-col">
                                    <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                                            <span className="text-[9px] text-neutral-400 font-bold tracking-[0.2em] uppercase">Live Feed</span>
                                        </div>
                                        <div className="text-[9px] text-violet-400 font-bold uppercase tracking-widest">92ms AVG SAVED</div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        {[
                                            { q: "Tell me a joke about AI", t: "0.4ms", s: "HIT", c: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
                                            { q: "Write a poem about trees", t: "0.2ms", s: "HIT", c: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
                                            { q: "Quantum physics summary", t: "420ms", s: "MISS", c: "bg-white/5 text-neutral-500 border-white/5" },
                                        ].map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.5 + (i * 0.2) }}
                                                className="flex items-center justify-between p-4 rounded-2xl glass-premium border border-white/5"
                                            >
                                                <span className="text-xs text-neutral-300 font-mono truncate max-w-[200px]">{log.q}</span>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[9px] font-mono text-neutral-600 font-bold uppercase">{log.t}</span>
                                                    <span className={`text-[9px] font-bold px-3 py-1 rounded-lg border ${log.c}`}>{log.s}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    {/* Stats overlay */}
                                    <div className="mt-auto p-8 bg-violet-500/5 flex items-center gap-12 border-t border-white/10">
                                        <div>
                                            <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Total Hits</p>
                                            <p className="text-2xl font-medium text-white tracking-widest">12.4M</p>
                                        </div>
                                        <div className="w-px h-8 bg-white/5" />
                                        <div>
                                            <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Cost Saved</p>
                                            <p className="text-2xl font-medium text-violet-400 tracking-widest">$42,801</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Cost Control - Small Card */}
                    <BentoCard delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-6">
                            <DollarSign size={12} /> Cost Control
                        </div>
                        <h3 className="text-xl font-medium mb-3 tracking-tight text-white">Predictive Routing</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">
                            Automatically swap models when burn rate exceeds thresholds. Zero surprise billing.
                        </p>

                        {/* Visual: Cost Meter */}
                        <div className="space-y-6">
                            <div className="relative pt-1">
                                <div className="flex mb-3 items-center justify-between text-[9px]">
                                    <span className="text-neutral-400 font-bold uppercase tracking-widest">Budget Burn</span>
                                    <span className="text-orange-400 font-bold tracking-widest">84%</span>
                                </div>
                                <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded-full bg-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "84%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                            <div className="p-4 rounded-[1.25rem] border border-rose-500/20 bg-rose-500/5 flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                                    <Activity size={14} className="text-rose-400" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-rose-400 font-bold uppercase tracking-widest leading-none mb-1">Triggered</p>
                                    <p className="text-[11px] text-white font-medium">Switching to Gemini-2.5-Flash</p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Security - Small Card */}
                    <BentoCard delay={0.3}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-bold text-indigo-400 uppercase tracking-widest mb-6">
                            <Shield size={12} /> PII Guardrails
                        </div>
                        <h3 className="text-xl font-medium mb-3 tracking-tight text-white">Air-Gapped Privacy</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">
                            Identify and redact sensitive data before it ever hits the provider. SOC2 compliance.
                        </p>

                        {/* Visual: Redaction Animation */}
                        <div className="p-6 rounded-[1.5rem] bg-black/40 border border-white/5 font-mono text-[10px] space-y-4">
                            <div className="flex gap-2">
                                <span className="text-neutral-600">IN:</span>
                                <span className="text-neutral-500">My SSN is 000-11-2222</span>
                            </div>
                            <div className="h-px bg-white/5" />
                            <div className="flex gap-2">
                                <span className="text-neutral-600">OUT:</span>
                                <span className="text-white">My SSN is <span className="bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20">[REDACTED]</span></span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Performance - Large-ish Card */}
                    <BentoCard className="lg:col-span-2" delay={0.4}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-6">
                                    <Zap className="w-3 h-3" /> Performance
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">Microsecond Precision</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-light">
                                    Scale to millions of requests with zero runtime overhead. Single-binary deployment for maximum portability.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center group/stat">
                                        <div className="text-2xl font-bold text-white tracking-tighter group-hover/stat:text-rose-400 transition-colors">5μs</div>
                                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Cache Hit Time</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center group/stat">
                                        <div className="text-2xl font-bold text-white tracking-tighter group-hover/stat:text-rose-400 transition-colors">0.1ms</div>
                                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Engine Latency</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full min-h-[160px]">
                                <div className="absolute inset-0 bg-black/40 rounded-3xl border border-white/5 overflow-hidden">
                                    {/* Simple Dynamic Visual */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex items-end gap-1.5 h-20 w-full px-8">
                                            {[40, 25, 60, 45, 80, 55, 90, 70, 40].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                                                    className="flex-1 bg-gradient-to-t from-rose-500/80 to-rose-400/50 rounded-t-md shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Analytics - Small Card */}
                    <BentoCard delay={0.5}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6">
                            <TrendingUp className="w-3 h-3" /> Analytics
                        </div>
                        <h3 className="text-xl font-bold mb-3 tracking-tight">Post-Action Insight</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                            Real-time tracing and billing analysis at any scale. No data sampling.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 h-12">
                                {[35, 65, 45, 85, 55, 75, 40].map((h, i) => (
                                    <div key={i} className="flex-1 bg-neutral-800/50 rounded-lg overflow-hidden relative">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: 0.8 + (i * 0.1) }}
                                            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-500/80 to-violet-500/50 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] text-neutral-400 font-mono text-center">STREAMING TELEMETRY...</p>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}

function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const mouseX = motionValue(0);
    const mouseY = motionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            onMouseMove={onMouseMove}
            className={`group relative glass-premium rounded-[2.5rem] p-10 border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden ${className} shadow-[inset_0_0_30px_rgba(255,255,255,0.05),0_0_50px_rgba(139,92,246,0.05)]`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            1000px circle at ${mouseX}px ${mouseY}px,
                            rgba(139, 92, 246, 0.5),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Global Grain Overlay on each card */}
            <div className="grain-overlay opacity-[0.015] z-0" />

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_20px_rgba(139,92,246,0.8)] z-10" />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
}

import { motionValue, useMotionTemplate } from "framer-motion";
