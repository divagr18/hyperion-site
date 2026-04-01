"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Database, Shield, Zap, Globe, Cpu, Layers, Fingerprint, ShieldAlert, Activity, Server, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function GatewayFlow() {
    const [activeBox, setActiveBox] = useState<string | null>(null);
    const [internalPulse, setInternalPulse] = useState(0);

    // Precise orchestration to match the dots HITTING the boxes (dot travel = 0.8s)
    useEffect(() => {
        const cycle = () => {
            // Dot 0 arrives at Ingress at end of delay 0 + 0.8s = 0.8s
            setTimeout(() => {
                setActiveBox('ingress');
                setTimeout(() => setActiveBox(null), 600);
            }, 700);

            // Dot 1 arrives at Core at delay 1 + 0.8s = 1.8s
            setTimeout(() => {
                setActiveBox('core');
                setInternalPulse(1);
                setTimeout(() => setInternalPulse(2), 200);
                setTimeout(() => setInternalPulse(3), 400);
                setTimeout(() => setInternalPulse(0), 800);
                setTimeout(() => setActiveBox(null), 600);
            }, 1700);

            // Dot 2 arrives at Egress at delay 2 + 0.8s = 2.8s
            setTimeout(() => {
                setActiveBox('egress');
                setTimeout(() => setActiveBox(null), 600);
            }, 2700);

            // Dot 3 arrives at LLM at delay 3 + 0.8s = 3.8s
            setTimeout(() => {
                setActiveBox('llm');
                setTimeout(() => setActiveBox(null), 600);
            }, 3700);
        };

        cycle();
        const interval = setInterval(cycle, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-black text-violet-400 uppercase tracking-[0.5em]">
                        Neural Infrastructure
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[0.9]">
                        Dynamic <span className="text-emerald-500 italic">Orchestration.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg mt-4 max-w-2xl mx-auto">
                        A unified control plane for AI at scale. Route, rate-limit, and secure requests across 190+ edge nodes with a single gateway configuration.
                    </p>
                </div>

                <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto min-h-[400px] gap-3 scale-90">

                    {/* Conduit Line (Central Alignment) */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.08] -translate-y-1/2 z-0" />

                    {/* Source: Global Apps */}
                    <div className="z-10">
                        <ServiceBox icon={Globe} label="Global Apps" color="violet" active={activeBox === 'source'} />
                    </div>

                    <FlowLine colorIn="violet" delay={0} />

                    {/* Ingress Layer */}
                    <div className="z-10">
                        <LayerBox title="Ingress" color="violet" active={activeBox === 'ingress'}>
                            <MiniBox icon={Layers} label="LB Engine" color="violet" />
                            <MiniBox icon={Fingerprint} label="Auth Node" color="violet" />
                        </LayerBox>
                    </div>

                    <FlowLine colorIn="indigo" delay={1} />

                    {/* Core Processing: Hyperion Core */}
                    <div className="z-20 scale-110">
                        <LayerBox title="Hyperion Core" color="indigo" large active={activeBox === 'core'}>
                            <div className="flex flex-col gap-3 relative">
                                <InternalFlow active={activeBox === 'core'} />
                                <div className="flex gap-3">
                                    <MiniBox icon={Server} label="Redis" color="indigo" active={internalPulse === 1} />
                                    <MiniBox icon={ShieldAlert} label="WAF" color="rose" active={internalPulse === 2} />
                                </div>
                                <div className="flex gap-3">
                                    <MiniBox icon={Database} label="L1 Cache" color="indigo" active={internalPulse === 3} />
                                    <MiniBox icon={Zap} label="Router" color="indigo" active={internalPulse === 3} />
                                </div>
                            </div>
                        </LayerBox>
                    </div>

                    <FlowLine colorIn="rose" delay={2} />

                    {/* Egress Layer */}
                    <div className="z-10">
                        <LayerBox title="Egress" color="emerald" active={activeBox === 'egress'}>
                            <MiniBox icon={Activity} label="Observer" color="emerald" />
                            <MiniBox icon={Cpu} label="Protocol" color="emerald" />
                        </LayerBox>
                    </div>

                    <FlowLine colorIn="emerald" delay={3} />

                    {/* Destination: LLM */}
                    <div className="z-10">
                        <ServiceBox icon={Cpu} label="LLM Cloud" color="emerald" active={activeBox === 'llm'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InternalFlow({ active }: { active: boolean }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-full h-full bg-indigo-500/10 blur-[60px] rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function FlowLine({ colorIn, delay }: { colorIn: string; delay: number }) {
    const colors: any = {
        violet: "#8b5cf6",
        indigo: "#6366f1",
        rose: "#f43f5e",
        emerald: "#10b981"
    };

    return (
        <div className="relative flex items-center h-1 flex-grow min-w-[100px] px-2 z-0">
            <motion.div
                className="absolute w-5 h-5 rounded-full z-30"
                style={{
                    backgroundColor: colors[colorIn],
                    boxShadow: `0 0 30px ${colors[colorIn]}, 0 0 60px ${colors[colorIn]}`
                }}
                animate={{
                    left: ["-5%", "105%"],
                    opacity: [0, 1, 1, 0],
                    scale: [0.6, 1.4, 1.4, 0.6]
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 4.2,
                    delay: delay,
                    ease: "linear"
                }}
            />
            <div className="w-full h-px relative overflow-hidden bg-white/10">
                <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay }}
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-${colorIn}-400 to-transparent opacity-80`}
                />
            </div>
        </div>
    );
}

function LayerBox({ children, title, color, large = false, active = false }: { children: React.ReactNode; title: string; color: string; large?: boolean; active?: boolean }) {
    const textColor: any = { violet: "text-violet-400", indigo: "text-indigo-400", emerald: "text-emerald-400" };
    const ringColor: any = {
        violet: "rgba(139, 92, 246, 1)",
        indigo: "rgba(99, 102, 241, 1)",
        emerald: "rgba(16, 185, 129, 1)"
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className={`absolute -top-10 px-4 py-1.5 rounded-full glass-premium border border-white/20 text-[9px] font-black ${textColor[color]} uppercase tracking-[0.4em] z-30 whitespace-nowrap shadow-xl`}>
                {title}
            </div>

            {/* The Box Markup */}
            <motion.div
                animate={{
                    scale: active ? 1.02 : 1,
                    borderColor: active ? ringColor[color] : "rgba(255,255,255,0.1)",
                    backgroundColor: active ? "rgba(255,255,255,0.05)" : "rgba(5,5,5,0.6)",
                    boxShadow: active ? `0 0 50px ${ringColor[color]}40, inset 0 0 20px ${ringColor[color]}20` : "none"
                }}
                transition={{ duration: 0.3 }}
                className={`glass-premium rounded-[2.5rem] lg:rounded-[3.5rem] border-2 flex flex-col gap-3 ${large ? 'p-8 lg:p-10' : 'p-5 lg:p-6'} relative z-10 backdrop-blur-3xl`}
            >
                {children}
            </motion.div>

            {/* Impact Flash Ring (External Glow) */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 0.8, scale: 1.05 }}
                        exit={{ opacity: 0, scale: 1.15 }}
                        className={`absolute inset-0 rounded-[2.5rem] lg:rounded-[3.5rem] border-4 pointer-events-none z-0`}
                        style={{ borderColor: ringColor[color], boxShadow: `0 0 60px ${ringColor[color]}60` }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function ServiceBox({ icon: Icon, label, color, active = false }: { icon: any; label: string; color: string; active?: boolean }) {
    const colorMap: any = {
        violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    };
    const ringColor: any = {
        violet: "rgba(139, 92, 246, 1)",
        emerald: "rgba(16, 185, 129, 1)"
    };

    return (
        <div className="relative flex flex-col items-center">
            <motion.div
                animate={{
                    scale: active ? 1.08 : 1,
                    borderColor: active ? ringColor[color] : "rgba(255,255,255,0.1)",
                    boxShadow: active ? `0 0 50px ${ringColor[color]}60` : "none"
                }}
                className={`glass-premium p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] border-2 bg-[#050505]/60 backdrop-blur-3xl flex flex-col items-center gap-4 cursor-pointer relative z-10 transition-all`}
            >
                <div className={`p-5 rounded-3xl border ${colorMap[color]} shadow-2xl`}>
                    <Icon size={40} />
                </div>
                <p className="text-[11px] font-black text-white uppercase tracking-[0.3em] text-center whitespace-nowrap">{label}</p>
            </motion.div>
        </div>
    );
}

function MiniBox({ icon: Icon, label, color, active = false }: { icon: any; label: string; color: string; active?: boolean }) {
    const colorMap: any = {
        violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
        amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    };

    return (
        <motion.div
            animate={active ? { x: [0, 4, 0], scale: 1.08, borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.15)" } : {}}
            className="glass-premium p-3 lg:p-4 rounded-2xl lg:rounded-3xl border-white/10 bg-white/[0.03] flex items-center gap-3 cursor-pointer hover:border-white/30 transition-all z-10 relative"
        >
            <div className={`p-2.5 rounded-xl border ${colorMap[color]} shadow-lg`}>
                <Icon size={16} />
            </div>
            <p className="text-[11px] font-black text-white uppercase tracking-widest whitespace-nowrap relative z-10">{label}</p>
        </motion.div>
    );
}
