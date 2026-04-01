"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, Globe, Archive, Zap, Shield, Layers } from "lucide-react";

export default function CachingPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-violet-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-[0.5em] mb-6"
                    >
                        Multi-Tier Architecture
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.9]"
                    >
                        Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-600">Deduplication.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Hyperion doesn't just cache responses; it understands semantic intent. Reduce your LLM token spend by 40% with our three-layer authorized caching fabric.
                    </motion.p>
                </div>

                {/* Architecture Diagram */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "L1: Semantic Hotpath",
                            icon: <Database size={24} className="text-violet-400" />,
                            stat: "4μs",
                            desc: "In-memory Redis cluster for exact matches and high-frequency semantic vectors.",
                            color: "violet"
                        },
                        {
                            title: "L2: Distributed Fabric",
                            icon: <Globe size={24} className="text-indigo-400" />,
                            stat: "100ms",
                            desc: "Global Tile38 geospatial index for finding nearest semantic neighbors across regions.",
                            color: "indigo"
                        },
                        {
                            title: "L3: Content Store",
                            icon: <Archive size={24} className="text-cyan-400" />,
                            stat: "Diet",
                            desc: "Content-addressed S3 storage for long-tail retention and deduplication.",
                            color: "cyan"
                        }
                    ].map((layer, i) => (
                        <motion.div
                            key={layer.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2.5rem] glass-premium border border-white/5 relative overflow-hidden group`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-${layer.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-2xl bg-${layer.color}-500/20 flex items-center justify-center mb-6`}>
                                    {layer.icon}
                                </div>

                                <h3 className="text-2xl font-medium mb-2">{layer.title}</h3>
                                <div className={`text-4xl font-black text-${layer.color}-400 mb-4 tracking-tighter`}>{layer.stat}</div>
                                <p className="text-neutral-400 leading-relaxed text-sm">{layer.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-24 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-medium mb-8 tracking-tight">
                            Privacy-First <br /> Deduplication
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><Shield className="text-emerald-400" size={24} /></div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Tenant Isolation</h3>
                                    <p className="text-neutral-400 font-light">By default, caches are strictly isolated. Tenant A's queries never match Tenant B's, even if semantically identical.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Layers className="text-emerald-400" size={24} /></div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Shared Anonymous Mode</h3>
                                    <p className="text-neutral-400 font-light">Opt-in to the global shared layer. PII is stripped via NER before hashing, allowing you to benefit from the collective intelligence of the platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual representation of normalization */}
                    <div className="glass-premium rounded-3xl p-8 border border-white/10 relative">
                        <div className="font-mono text-xs text-neutral-500 mb-4">Prompt Normalization Engine</div>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <div className="text-neutral-500 mb-1">// Raw Input</div>
                                <div className="text-rose-400">"  Explain   Quantum Entanglement?? "</div>
                            </div>
                            <div className="flex justify-center"><Zap size={20} className="text-yellow-400 rotate-180" /></div>
                            <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                                <div className="text-neutral-500 mb-1">// Normalized & Hashed (SHA-256)</div>
                                <div className="text-emerald-400 break-all">explain_quantum_entanglement_a1b2c3d4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
