"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, BarChart3, PieChart, Layout, ArrowRight, Activity, Percent } from "lucide-react";
import { useState, useEffect } from "react";

const mockProjects = [
    { id: 1, name: "Production Gateway", team: "Core Infra", traffic: "1.2M", health: 99.9, color: "emerald" },
    { id: 2, name: "Internal R&D", team: "AI Labs", traffic: "240K", health: 98.4, color: "violet" },
    { id: 3, name: "Client Facing API", team: "Product", traffic: "890K", health: 100, color: "cyan" },
];

export default function ProjectAnalytics() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % mockProjects.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const activeProject = mockProjects[activeIndex];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Section */}
                    <div className="relative h-[550px] flex flex-col justify-center">
                        <div className="grid gap-4 w-full max-w-lg">
                            {mockProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    animate={{
                                        opacity: activeIndex === idx ? 1 : 0.4,
                                        scale: activeIndex === idx ? 1 : 0.98,
                                        x: activeIndex === idx ? 0 : -10
                                    }}
                                    className={`p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center justify-between transition-all duration-500 backdrop-blur-3xl shadow-2xl relative overflow-hidden group cursor-pointer ${activeIndex === idx ? 'border-emerald-500/20' : ''}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    {activeIndex === idx && (
                                        <motion.div
                                            layoutId="active-bg"
                                            className="absolute inset-0 bg-emerald-500/5 z-0"
                                        />
                                    )}
                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className={`p-3 rounded-2xl bg-${project.color}-500/10 border border-${project.color}-500/20 text-${project.color}-400`}>
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1 tracking-tight">{project.name}</h4>
                                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">{project.team}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 text-right">
                                        <div className="text-white font-mono text-lg font-bold">{project.traffic}</div>
                                        <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest flex items-center justify-end gap-1">
                                            <Activity size={10} /> {project.health}%
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Dashboard Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 bottom-12 p-6 glass-premium rounded-[2.5rem] border border-white/10 shadow-2xl space-y-4 max-w-[240px] hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                                    <Users size={16} />
                                </div>
                                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Team Quotas</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: "Dev", val: 82 },
                                    { name: "SRE", val: 45 },
                                ].map((t) => (
                                    <div key={t.name} className="space-y-1">
                                        <div className="flex justify-between text-[9px] font-bold text-neutral-500 uppercase">
                                            <span>{t.name}</span>
                                            <span>{t.val}%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-violet-400 rounded-full" style={{ width: `${t.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-[0.5em]">
                            Enterprise Governance
                        </div>
                        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight leading-[0.8] text-white">
                            Multi-Project <br />
                            <span className="text-violet-400 italic">Governance.</span>
                        </h2>
                        <p className="text-neutral-400 pl-2 text-xl font-light leading-relaxed max-w-lg">
                            Segment infrastructure by <span className="text-white font-medium">project</span> and <span className="text-white font-medium">team</span>. Get real-time cost visibility, performance metrics, and compliance logs across your entire organization.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-6">
                            <div className="space-y-3">
                                <p className="text-[11px] font-black text-neutral-600 uppercase tracking-[0.2em]">Sync Overhead</p>
                                <p className="text-5xl font-black text-white tracking-tighter shadow-violet-500/20 flex items-baseline">
                                    &lt;0.1<span className="text-2xl text-white/40 ml-1 font-medium italic uppercase">ms</span>
                                </p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[11px] font-black text-neutral-600 uppercase tracking-[0.2em]">Trace Fidelity</p>
                                <p className="text-5xl font-black text-emerald-400 tracking-tighter flex items-baseline">
                                    100<span className="text-2xl text-emerald-500/40 ml-1 font-medium italic">%</span>
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a href="/beta" className="inline-flex px-12 py-4 glass-premium rounded-2xl border border-white/10 hover:border-violet-400/40 transition-all items-center gap-4 text-violet-400 font-bold uppercase tracking-[0.2em] text-[11px] group">
                                Request Team Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
