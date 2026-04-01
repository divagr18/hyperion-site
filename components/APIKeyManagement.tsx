"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Key, DollarSign, Shield, Clock, Gauge, Settings, ArrowRight, User, Check, X, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const mockKeys = [
    { id: 1, name: "prod-frontend", budget: 1000, used: 342, rateLimit: 500, status: "active" },
    { id: 2, name: "staging-api", budget: 200, used: 189, rateLimit: 100, status: "warning" },
    { id: 3, name: "analytics-svc", budget: 500, used: 500, rateLimit: 250, status: "exceeded" },
];

export default function APIKeyManagement() {
    const [activeKey, setActiveKey] = useState(0);
    const [animatedUsage, setAnimatedUsage] = useState(0);

    useEffect(() => {
        const key = mockKeys[activeKey];
        const target = (key.used / key.budget) * 100;
        setAnimatedUsage(0);
        const timer = setTimeout(() => setAnimatedUsage(target), 100);
        return () => clearTimeout(timer);
    }, [activeKey]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveKey(prev => (prev + 1) % mockKeys.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentKey = mockKeys[activeKey];

    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-rose-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Technical Narrative */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase tracking-[0.5em]">
                            Fine-Grained Control
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight leading-[0.8] text-white">
                            Custom Keys. <br />
                            <span className="text-amber-400 italic">Total Control.</span>
                        </h2>
                        <p className="text-neutral-400 pl-2 text-xl font-light leading-relaxed max-w-lg">
                            Issue API keys with <span className="text-white font-medium">per-key budgets</span>, rate limits, and access controls. Monitor spend in real-time, set alerts, and revoke instantly.
                        </p>

                        <div className="grid grid-cols-3 gap-8 pt-6">
                            <div className="space-y-2">
                                <p className="text-[11px] font-black text-neutral-600 uppercase tracking-[0.2em]">Max Keys</p>
                                <p className="text-5xl font-black text-white tracking-tighter">∞</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[11px] font-black text-neutral-600 uppercase tracking-[0.2em]">Budget Alerts</p>
                                <p className="text-5xl font-black text-amber-400 tracking-tighter">3</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[11px] font-black text-neutral-600 uppercase tracking-[0.2em]">Revoke</p>
                                <p className="text-5xl font-black text-rose-400 tracking-tighter">&lt;1s</p>
                            </div>
                        </div>


                        <div className="pt-8">
                            <a href="/blog/multi-model-budgets" className="inline-flex px-12 py-4 glass-premium rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all items-center gap-4 text-amber-400 font-bold uppercase tracking-[0.2em] text-[11px] group">
                                Read Technical Blog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Interactive Key Dashboard */}
                    <div className="relative h-[550px] flex flex-col items-center justify-center order-1 lg:order-2">

                        {/* Key Cards */}
                        <div className="w-full max-w-md space-y-4">
                            {mockKeys.map((key, index) => (
                                <motion.div
                                    key={key.id}
                                    animate={{
                                        scale: activeKey === index ? 1.02 : 0.98,
                                        opacity: activeKey === index ? 1 : 0.5,
                                        borderColor: activeKey === index
                                            ? key.status === 'exceeded' ? 'rgba(239, 68, 68, 0.5)'
                                                : key.status === 'warning' ? 'rgba(245, 158, 11, 0.5)'
                                                    : 'rgba(16, 185, 129, 0.5)'
                                            : 'rgba(255,255,255,0.1)'
                                    }}
                                    className="glass-premium rounded-2xl p-5 border-2 cursor-pointer transition-all"
                                    onClick={() => setActiveKey(index)}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-xl ${key.status === 'exceeded' ? 'bg-rose-500/20 text-rose-400' :
                                                key.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                                                    'bg-emerald-500/20 text-emerald-400'
                                                }`}>
                                                <Key size={16} />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm font-mono">{key.name}</p>
                                                <p className="text-neutral-500 text-[10px] uppercase tracking-widest">{key.rateLimit} req/min</p>
                                            </div>
                                        </div>
                                        <div className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${key.status === 'exceeded' ? 'bg-rose-500/20 text-rose-400' :
                                            key.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                                                'bg-emerald-500/20 text-emerald-400'
                                            }`}>
                                            {key.status}
                                        </div>
                                    </div>

                                    {/* Budget Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px]">
                                            <span className="text-neutral-500 font-bold uppercase tracking-widest">Budget</span>
                                            <span className="text-white font-mono">${key.used} / ${key.budget}</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: activeKey === index ? `${animatedUsage}%` : `${(key.used / key.budget) * 100}%` }}
                                                transition={{ duration: 1, ease: "circOut" }}
                                                className={`h-full rounded-full ${key.status === 'exceeded' ? 'bg-gradient-to-r from-rose-500 to-rose-400' :
                                                    key.status === 'warning' ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                                                        'bg-gradient-to-r from-emerald-500 to-emerald-400'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Control Panel Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 glass-premium rounded-2xl border border-white/10"
                        >
                            <button className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors">
                                <Check size={14} />
                            </button>
                            <button className="p-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors">
                                <Settings size={14} />
                            </button>
                            <button className="p-2 rounded-xl bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 transition-colors">
                                <X size={14} />
                            </button>
                            <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold ml-2">Quick Actions</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
