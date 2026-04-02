"use client";

import { motion, useTransform, useSpring, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

export default function Hero() {
    const terminalRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const fullCode = `$ hyperion init

  Connecting to edge network...
  Semantic cache: enabled
  Model router: active
  Rate limiting: 1000 req/s
  Fallback mode: active

  Gateway ready.
  Latency: 5µs`;

    useEffect(() => {
        if (shouldReduceMotion) {
            if (terminalRef.current) {
                terminalRef.current.innerText = fullCode;
            }
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            if (terminalRef.current) {
                terminalRef.current.innerText = fullCode.slice(0, i);
                i++;
                if (i > fullCode.length) clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [fullCode, shouldReduceMotion]);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: any) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const rotateX = useSpring(useTransform(mouseY, [0, 600], shouldReduceMotion ? [0, 0] : [10, -10]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 800], shouldReduceMotion ? [0, 0] : [-10, 10]), { stiffness: 100, damping: 30 });

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Space-Esque Background: Starfield */}
            <div className="absolute inset-0 z-0">
                <Starfield shouldReduceMotion={Boolean(shouldReduceMotion)} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/50 to-[#09090b]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="space-y-10 px-6 lg:px-8 py-10">
                    <div className="space-y-8">
                        <motion.h1
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-7xl lg:text-8xl font-black tracking-tight leading-[0.85] text-white"
                        >
                            Intelligence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-rose-400 to-amber-400 italic">Unlimited.</span>
                        </motion.h1>
                        <motion.p
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2 }}
                            className="text-xl text-neutral-400 font-light max-w-lg leading-relaxed"
                        >
                            The world's fastest AI gateway. Orchestrate models across clusters with <span className="text-white font-medium">microsecond latency.</span>
                        </motion.p>
                    </div>

                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="/beta" className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-black">
                                Join the beta <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="https://github.com/hyperion-hq/hyperion"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block"
                        >
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-black">
                                <Github size={16} /> GitHub
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: 3D Celestial Terminal */}
                <div
                    className="relative h-[650px] flex items-center justify-end cursor-crosshair"
                    onMouseMove={handleMouseMove}
                >
                    <motion.div
                        style={{ rotateX, rotateY, perspective: 1200 }}
                        className="relative z-10 w-full max-w-[550px] mt-12"
                    >
                        {/* Terminal Scanner Effect */}
                        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[3rem]">
                            <motion.div
                                animate={shouldReduceMotion ? undefined : { top: ['-10%', '110%'] }}
                                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent blur-xl"
                            />
                            <motion.div
                                animate={shouldReduceMotion ? undefined : { top: ['-10%', '110%'] }}
                                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "linear", delay: 0.1 }}
                                className="absolute inset-x-0 h-px bg-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                            />
                        </div>

                        {/* Hover Glow Follower */}
                        <motion.div
                            className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.2), transparent 80%)
                                `,
                            }}
                        />

                        <div className="glass-premium rounded-[3rem] border-2 border-white/10 p-1.5 relative overflow-hidden backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)] group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-rose-500/5 opacity-50" />

                            <div className="bg-[#050505]/90 rounded-[2.8rem] p-10 min-h-[400px] relative border border-white/5">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex gap-2.5">
                                        <div className="w-3.5 h-3.5 rounded-full bg-rose-500/30 border border-rose-500/40" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500/30 border border-amber-500/40" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/30 border border-emerald-500/40" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold text-neutral-400 uppercase tracking-widest absolute right-10">
                                        hyperion-shell v2.4
                                    </div>
                                </div>

                                <code
                                    ref={terminalRef}
                                    className="font-mono text-[15px] leading-relaxed text-violet-100/90 block min-h-[220px] drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                                />

                                <div className="absolute bottom-8 right-10 flex items-center gap-6">
                                    <div className="flex items-center gap-2.5">
                                        <div className={`w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">Core Sync: Stable</span>
                                    </div>
                                    <div className="text-[11px] font-black text-violet-400 font-mono tracking-tighter">0.08ms P99</div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Background Nebula Spotlights */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40 blur-[150px] pointer-events-none">
                        <div className={`absolute top-10 left-10 w-[400px] h-[400px] bg-violet-600/30 rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                        <div className={`absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-600/20 rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} style={{ animationDelay: '2s' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Starfield({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
    const stars = useMemo(() => {
        const count = shouldReduceMotion ? 40 : 90;
        return Array.from({ length: count }).map((_, i) => ({
            key: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 3 + 2,
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
        }));
    }, [shouldReduceMotion]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.key}
                    initial={{
                        x: star.x,
                        y: star.y,
                        opacity: star.opacity,
                        scale: star.scale,
                    }}
                    animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.8, 0.2], scale: [0.5, 1, 0.5] }}
                    transition={shouldReduceMotion ? undefined : { duration: star.duration, repeat: Infinity, ease: "linear" }}
                    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
                    style={{
                        top: star.top,
                        left: star.left,
                    }}
                />
            ))}
        </div>
    );
}
