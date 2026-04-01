"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const benchmarks = [
    { name: "Python Gateway", latency: 200, color: "rose" },
    { name: "Node.js Gateway", latency: 150, color: "amber" },
    { name: "Hyperion (Go)", latency: 0.005, color: "emerald" },
];

export default function SpeedSection() {
    const [activeTest, setActiveTest] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [currentLatency, setCurrentLatency] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const target = benchmarks[activeTest].latency;

        if (shouldReduceMotion) {
            setIsRunning(false);
            setCurrentLatency(target);
            return;
        }

        const runBenchmark = () => {
            setIsRunning(true);
            setCurrentLatency(0);

            const steps = 30;
            const stepTime = 50;
            let step = 0;

            const animate = setInterval(() => {
                step++;
                setCurrentLatency((target / steps) * step);
                if (step >= steps) {
                    clearInterval(animate);
                    setIsRunning(false);
                }
            }, stepTime);
        };

        runBenchmark();
        const interval = setInterval(() => {
            setActiveTest(prev => {
                const next = (prev + 1) % benchmarks.length;
                return next;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, [activeTest, shouldReduceMotion]);

    const currentBench = benchmarks[activeTest];
    const colorMap: Record<string, { bg: string, text: string, border: string, glow: string }> = {
        rose: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/40", glow: "shadow-rose-500/30" },
        amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/40", glow: "shadow-amber-500/30" },
        emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/40", glow: "shadow-emerald-500/30" },
    };
    const colors = colorMap[currentBench.color];

    return (
        <section id="performance" className="py-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Technical Narrative */}
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-[0.5em]">
                            Zero Overhead
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight leading-[0.8] text-white">
                            Built for Speed. <br />
                            <span className="text-cyan-400 italic">Written in Go.</span>
                        </h2>
                        <p className="text-neutral-400 text-xl pl-2 font-light leading-relaxed max-w-lg">
                            While other gateways struggle with runtime garbage collection, Hyperion processes requests in <span className="text-white font-medium">sub-millisecond time</span>. Zero allocation hot paths. No compromises.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-6">
                            <div className="space-y-2">
                                <p className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em]">Median Latency</p>
                                <p className="text-5xl font-black text-white tracking-tighter">5<span className="text-3xl text-cyan-400/80 ml-1">µs</span></p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em]">Throughput</p>
                                <p className="text-5xl font-black text-cyan-400 tracking-tighter">20K<span className="text-3xl text-cyan-400/80 ml-1">/s</span></p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="/blog/go-gateway-performance"
                                className="px-10 py-5 glass-premium rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-[0.1em] text-sm group w-fit"
                            >
                                Read Technical Blog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Interactive Speed Gauge - Centered */}
                    <div className="relative h-[550px] flex flex-col items-center justify-center mx-auto">

                        {/* Central Gauge */}
                        <motion.div
                            className={`relative w-72 h-72 rounded-full border-4 ${colors.border} ${colors.bg} flex items-center justify-center shadow-2xl ${colors.glow}`}
                            animate={shouldReduceMotion ? undefined : {
                                scale: isRunning ? [1, 1.02, 1] : 1,
                                boxShadow: isRunning ? `0 0 60px ${currentBench.color === 'emerald' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.3)'}` : 'none'
                            }}
                            transition={shouldReduceMotion ? undefined : { duration: 0.5, repeat: isRunning ? Infinity : 0 }}
                        >
                            <div className="absolute inset-4 rounded-full bg-[#09090b] border border-white/5" />
                            <div className="relative z-10 text-center">
                                <motion.div
                                    key={activeTest}
                                    initial={shouldReduceMotion ? false : { scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className={`text-6xl font-black font-mono ${colors.text} tracking-tighter`}
                                >
                                    {currentLatency < 0.01 ? (currentLatency * 1000).toFixed(0) : (currentLatency < 1 ? currentLatency.toFixed(1) : Math.round(currentLatency))}
                                    <span className="text-2xl ml-1">{currentLatency < 0.01 ? "µs" : "ms"}</span>
                                </motion.div>
                                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em] mt-2">Latency</div>
                            </div>

                            {/* Rotating Ring */}
                            {isRunning && (
                                <motion.div
                                    className={`absolute inset-0 rounded-full border-t-2 ${colors.border}`}
                                    animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                                    transition={shouldReduceMotion ? undefined : { duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </motion.div>

                        {/* Benchmark Selector */}
                        <div className="flex gap-3 mt-10">
                            {benchmarks.map((bench, index) => (
                                <motion.button
                                    key={bench.name}
                                    onClick={() => setActiveTest(index)}
                                    animate={shouldReduceMotion ? undefined : {
                                        scale: activeTest === index ? 1 : 0.95,
                                        opacity: activeTest === index ? 1 : 0.5
                                    }}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all border ${activeTest === index
                                        ? `${colorMap[bench.color].bg} ${colorMap[bench.color].text} ${colorMap[bench.color].border}`
                                        : 'bg-white/5 text-neutral-500 border-white/10'
                                        }`}
                                >
                                    {bench.name.split(' ')[0]}
                                </motion.button>
                            ))}
                        </div>

                        {/* Live Indicator */}
                        <div className="flex items-center gap-2 mt-6">
                            <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-600'}`} />
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em]">
                                {isRunning ? 'Running Benchmark...' : 'Benchmark Complete'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
