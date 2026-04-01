"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import { Zap, Shield, BarChart3, Globe, Code2, Rocket, ArrowRight, Activity, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroductionPage() {
  const features = [
    {
      title: "Multi-Layer Caching",
      desc: "Exact and semantic vector caching to reduce latency by up to 90% and save API costs.",
      icon: <Database size={18} className="text-amber-400" />,
      colSpan: "md:col-span-2",
      bgBase: "bg-amber-500/5",
      borderGlow: "group-hover:border-amber-500/30",
    },
    {
      title: "Smart Routing",
      desc: "Intent-based routing picking the right model automatically.",
      icon: <Rocket size={18} className="text-violet-400" />,
      colSpan: "md:col-span-1",
      bgBase: "bg-violet-500/5",
      borderGlow: "group-hover:border-violet-500/30",
    },
    {
      title: "Go Architecture",
      desc: "5µs median latency. 20k RPS. Zero GC pauses.",
      icon: <Cpu size={18} className="text-cyan-400" />,
      colSpan: "md:col-span-1",
      bgBase: "bg-cyan-500/5",
      borderGlow: "group-hover:border-cyan-500/30",
    },
    {
      title: "Observability",
      desc: "Deep telemetry and spend tracking across all models via the Admin API.",
      icon: <BarChart3 size={18} className="text-rose-400" />,
      colSpan: "md:col-span-2",
      bgBase: "bg-rose-500/5",
      borderGlow: "group-hover:border-rose-500/30",
    },
    {
      title: "Resilience",
      desc: "Automatic fallbacks and retries for zero-downtime AI.",
      icon: <Shield size={18} className="text-emerald-400" />,
      colSpan: "md:col-span-2",
      bgBase: "bg-emerald-500/5",
      borderGlow: "group-hover:border-emerald-500/30",
    },
    {
      title: "Native SDKs",
      desc: "High-performance Python and TypeScript wrappers.",
      icon: <Code2 size={18} className="text-blue-400" />,
      colSpan: "md:col-span-1",
      bgBase: "bg-blue-500/5",
      borderGlow: "group-hover:border-blue-500/30",
    },
  ];

  return (
    <DocsLayout activeSlug="">
      <div className="relative space-y-8">

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Section */}
        <section className="relative z-10 pt-8 pb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-neutral-400 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hyperion Documentation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 leading-tight text-white"
          >
            The Operating System <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic pr-2">for your LLM stack.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl"
          >
            Hyperion is a production-grade AI gateway designed to unify, cache, and secure your infrastructure.
            A microscopic, zero-overhead proxy sitting between your application and your intelligence providers.
          </motion.p>
        </section>

        {/* Artisanal Bento Grid */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, ease: "easeOut", duration: 0.5 }}
              className={`p-6 rounded-2xl border border-white/5 ${feature.bgBase} backdrop-blur-sm transition-all duration-300 group ${feature.borderGlow} ${feature.colSpan} flex flex-col justify-between min-h-[160px]`}
            >
              <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* High-Impact Next Steps */}
        <section className="relative z-10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.a
            href="/docs/quick-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 group transition-all shadow-2xl shadow-emerald-500/5 over"
          >
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80">Get Started</div>
              <div className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-300 transition-colors">Quick Start Guide</div>
              <p className="text-xs text-neutral-500 font-light mt-1">Deploy locally in under two minutes.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <Rocket size={18} />
            </div>
          </motion.a>

          <motion.a
            href="/docs/performance/benchmarks"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 group transition-all shadow-2xl shadow-cyan-500/5"
          >
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">Deep Dive</div>
              <div className="text-lg font-medium tracking-tight text-white group-hover:text-cyan-300 transition-colors">Performance Benchmarks</div>
              <p className="text-xs text-neutral-500 font-light mt-1">See why Hyperion hits 20k RPS at 5µs.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
              <Activity size={18} />
            </div>
          </motion.a>
        </section>
      </div>
    </DocsLayout>
  );
}
