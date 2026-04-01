"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Database, Search, Zap, Cpu, Server, Layers, Globe, User, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function NeuralCaching() {
    const [queries, setQueries] = useState<any[]>([]);
    const [cycle, setCycle] = useState(0);

    const queryTemplates = [
        "Select * from users where id=018",
        "Explain quantum entanglement",
        "Best restaurants in San Francisco",
        "Price of Bitcoin current",
        "React Server Components tutorial"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const isL2 = Math.random() > 0.6;
            const latency = isL2
                ? (0.1 + Math.random() * 0.1).toFixed(2) + "s"
                : (4 + Math.random() * 1).toFixed(0) + "μs";

            const nextQuery = {
                id: Date.now(),
                text: queryTemplates[Math.floor(Math.random() * queryTemplates.length)],
                type: isL2 ? 'L2' : 'L1',
                latency: latency,
                step: 0 // 0: User->L1, 1: Process L1, 2: L1->L2, 3: Process L2, 4: Return
            };

            setQueries(prev => [...prev.slice(-1), nextQuery]);
            setCycle(c => c + 1);
        }, 2200); // 2x Faster than before (was 4000)

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <StarfieldSubtle />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Interactive Multi-Layer Cache */}
                    <div className="relative h-[650px] flex flex-col items-center justify-between py-10">

                        {/* User / Request Source */}
                        <div className="z-20">
                            <motion.div
                                className="flex flex-col items-center gap-4"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="p-6 rounded-[2.5rem] glass-premium border-2 border-white/20 bg-white/5 relative shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                    <User size={48} className="text-white" />
                                    <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-emerald-500 border-2 border-[#030303]">
                                        <ShieldCheck size={12} className="text-white" />
                                    </div>
                                </div>
                                <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.5em]">Request Source</span>
                            </motion.div>
                        </div>

                        {/* Layer 1: L1 Memory Cache */}
                        <div className="relative z-20">
                            <motion.div
                                className="w-96 h-36 glass-premium rounded-[3rem] border-2 border-violet-500/40 bg-violet-500/5 relative flex items-center justify-center group overflow-hidden"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent" />
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                    <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 backdrop-blur-md">
                                        <Database size={16} className="text-violet-400" />
                                        <span className="text-xs font-black text-white uppercase tracking-[0.2em] font-mono">L1 Global Redis Cache</span>
                                    </div>
                                    <div className="text-2xl font-black font-mono text-violet-400 tracking-tighter italic drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">0.8ms Exact Match</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Layer 2: L2 Global Distributed */}
                        <div className="relative z-20">
                            <motion.div
                                className="w-96 h-36 glass-premium rounded-[3rem] border-2 border-indigo-500/30 bg-indigo-500/5 relative flex items-center justify-center group overflow-hidden"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                            >
                                <div className="absolute inset-0 bg-grid-premium opacity-[0.15]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                    <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-md">
                                        <Globe size={16} className="text-indigo-400" />
                                        <span className="text-xs font-black text-white uppercase tracking-[0.2em] font-mono">L2 Microsecond Semantic Cache</span>
                                    </div>
                                    <div className="text-2xl font-black font-mono text-indigo-400 tracking-tighter italic drop-shadow-[0_0_10px_rgba(99, 102, 241, 0.5)]">Semantic Resolution</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Animated Query Flow */}
                        <AnimatePresence>
                            {queries.map((q) => (
                                <QueryFlow key={q.id} query={q} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Right: Technical Narrative */}
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.5em]">
                            Sub-Millisecond Resolution
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight leading-[0.8] text-white">
                            Two-Layered <br />
                            <span className="text-emerald-400 italic">Distributed Cache.</span>
                        </h2>
                        <p className="text-neutral-400 pl-2 text-xl font-light leading-relaxed max-w-lg">
                            Hyperion intercepts and resolves semantically similar queries at the edge. High-frequency exact matches are served from <span className="text-white font-medium">Global Redis L1</span>, while complex patterns are resolved via our <span className="text-white font-medium">L2 Semantic Layer</span>.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-6">
                            <div className="space-y-3">
                                <p className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.3em]">Redis L1</p>
                                <p className="text-6xl font-black text-white tracking-tighter shadow-violet-500/20 flex items-baseline">
                                    0.8<span className="text-4xl text-violet-500/80 ml-2 font-medium italic">ms</span>
                                </p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.3em]">Semantic L2</p>
                                <p className="text-6xl font-black text-emerald-400 tracking-tighter flex items-baseline">
                                    12<span className="text-4xl text-emerald-500/80 ml-2 font-medium italic">ms</span>
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a href="/blog/deduplication-at-scale" className="inline-flex px-12 py-4 glass-premium rounded-2xl border border-white/10 hover:border-emerald-400/40 transition-all items-center gap-4 text-emerald-400 font-bold uppercase tracking-[0.2em] text-[11px] group">
                                Read Technical Blog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function QueryFlow({ query }: { query: any }) {
    const isL1 = query.type === 'L1';

    // Overall duration reduced for speed: 2.5s cycle (was 4s)

    return (
        <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
            {/* The traveling particle */}
            <motion.div
                initial={{ opacity: 0, y: -240, scale: 0.8 }}
                animate={{
                    opacity: [0, 1, 1, 1, 1, 1, 0],
                    y: isL1
                        ? [-240, -20, -20, -240] // User -> L1 (HIT) -> User
                        : [-240, -20, -20, 200, 200, -20, -240], // User -> L1 (Pause for MISS) -> L2 (HIT) -> User
                    scale: [0.8, 1.1, 1, 1, 1, 1.1, 0.8],
                }}
                transition={{
                    duration: 3,
                    times: isL1 ? [0, 0.2, 0.8, 1] : [0, 0.15, 0.35, 0.55, 0.75, 0.9, 1],
                    ease: "easeInOut"
                }}
                className="absolute px-6 py-4 glass-premium rounded-3xl border-2 border-white/40 shadow-[0_0_80px_rgba(139,92,246,0.6)] bg-[#080808] backdrop-blur-3xl"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search size={18} className="text-violet-400" />
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute inset-0 bg-violet-400 blur-md rounded-full -z-10"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-white tracking-tight">{query.text}</span>
                        <div className="flex items-center gap-3 mt-1">
                            {/* L1 Status */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 1, 1, 1] }}
                                transition={{ delay: 0.5, duration: 2 }}
                                className="flex items-center gap-1.5"
                            >
                                <span className={`text-[10px] font-black font-mono px-2 py-0.5 rounded-md ${isL1 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-rose-500/20 text-rose-400 border border-rose-500/30"}`}>
                                    {isL1 ? `REDIS HIT` : "REDIS MISS"}
                                </span>
                                {isL1 && <span className="text-[10px] font-bold text-emerald-400/60 font-mono">{query.latency}</span>}
                            </motion.div>

                            {/* L2 Status */}
                            {!isL1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 1, 1] }}
                                    transition={{ delay: 1.6, duration: 1 }}
                                    className="flex items-center gap-1.5"
                                >
                                    <ArrowRight size={10} className="text-neutral-500" />
                                    <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                        SEMANTIC HIT
                                    </span>
                                    <span className="text-[10px] font-bold text-indigo-400/60 font-mono">{query.latency}</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function StarfieldSubtle() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {Array.from({ length: 60 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: '1px',
                        height: '1px',
                        animationDelay: `${Math.random() * 5}s`,
                        boxShadow: '0 0 10px white'
                    }}
                />
            ))}
        </div>
    );
}
