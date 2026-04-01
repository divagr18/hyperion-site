"use client";

import { motion, useReducedMotion } from "framer-motion";

const COMPARISON_METRICS = [
    {
        id: "latency",
        title: "Gateway Overhead",
        label: "Latency added per request",
        unit: "µs",
        invert: true, // Lower is better
        data: [
            { name: "Hyperion", value: 10.6, color: "emerald", highlight: true },
            { name: "Bifrost", value: 59, color: "neutral" },
            { name: "LiteLLM", value: 14740, color: "rose" },
        ]
    },
    {
        id: "throughput",
        title: "Max Throughput",
        label: "Peak requests per second",
        unit: "RPS",
        invert: false, // Higher is better
        data: [
            { name: "Hyperion", value: 30063, color: "emerald", highlight: true },
            { name: "Bifrost", value: 5000, color: "neutral" },
            { name: "LiteLLM", value: 1035, color: "rose" },
        ]
    }
];

export default function ComparisonSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="py-24 relative overflow-hidden bg-[#09090b]">
            {/* Background Grain & Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
                <div className="grain-overlay opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="mb-20 space-y-6 text-center">
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.4em]"
                    >
                        Benchmarks
                    </motion.div>
                    <motion.h2
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-8xl font-black tracking-[calc(-0.05em)] text-white leading-[0.8]"
                    >
                        250x Faster than <br />
                        <span className="text-cyan-400 italic opacity-80">LiteLLM.</span>
                    </motion.h2>
                    <p className="text-neutral-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Measured by <span className="text-white font-bold">Pure Gateway Overhead.</span> <br />
                        Benchmarked under identical hardware and workload conditions.
                    </p>
                    <a
                        href="/docs/performance/benchmarks"
                        className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        View benchmark methodology
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {COMPARISON_METRICS.map((metric, idx) => (
                        <MetricCard key={metric.id} metric={metric} delay={idx * 0.1} shouldReduceMotion={Boolean(shouldReduceMotion)} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MetricCard({ metric, delay, shouldReduceMotion }: any) {
    const maxVal = Math.max(...metric.data.map((d: any) => d.value));

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay, duration: 0.6 }}
            className="glass-premium rounded-[3rem] p-12 border border-white/5 relative group overflow-hidden bg-white/[0.01] text-center"
        >
            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-12">
                    <h3 className="text-white text-3xl font-black mb-2 tracking-tighter">{metric.title}</h3>
                    <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">{metric.label}</p>
                </div>

                <div className="space-y-10 w-full max-w-md">
                    {metric.data.map((item: any, i: number) => {
                        const percentage = (item.value / maxVal) * 100;

                        return (
                            <div key={item.name} className="space-y-3">
                                <div className="flex justify-between items-end px-1">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${item.highlight ? 'text-white' : 'text-neutral-500'}`}>
                                            {item.name}
                                        </span>
                                        {item.highlight && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                        )}
                                    </div>
                                    <span className={`text-sm font-mono tracking-tighter ${item.highlight ? 'text-cyan-400 font-black' : 'text-neutral-400'}`}>
                                        {item.value.toLocaleString()} {metric.unit}
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5 relative">
                                    <motion.div
                                        initial={shouldReduceMotion ? false : { width: 0 }}
                                        whileInView={{ width: `${Math.max(1, percentage)}%` }}
                                        transition={shouldReduceMotion ? { duration: 0 } : { delay: delay + (i * 0.1) + 0.3, duration: 1, ease: "circOut" }}
                                        className={`h-full rounded-full relative ${item.highlight
                                                ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                                                : 'bg-neutral-800'
                                            }`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Comparative Note */}
                <div className="mt-12 w-full pt-8 border-t border-white/5">
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-bold uppercase tracking-widest">
                        {metric.invert
                            ? `Hyperion: ${Math.round(metric.data[2].value / metric.data[0].value)}x Lower Net Overhead`
                            : `Hyperion: ${Math.round(metric.data[0].value / metric.data[1].value)}x Higher RPS Peak`
                        }
                    </p>
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
        </motion.div>
    );
}
