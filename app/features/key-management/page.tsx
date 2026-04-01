"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Key, Shield, DollarSign, Lock, Users, Activity } from "lucide-react";

export default function KeyManagementPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-emerald-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.5em] mb-6"
                    >
                        RBAC & Governance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.9]"
                    >
                        Total Control over <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-600">AI Spend.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Prevent budget overruns with atomic, sub-millisecond spending limits. Scope keys to specific models, providers, and environments.
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Model Scoping",
                            icon: <Lock size={24} className="text-emerald-400" />,
                            desc: "Restrict keys to specific models (e.g., 'gpt-3.5-only'). Prevent accidental usage of expensive reasoning models.",
                            color: "emerald"
                        },
                        {
                            title: "Elastic Budgets",
                            icon: <DollarSign size={24} className="text-emerald-400" />,
                            desc: "Set strict monthly or daily spending limits. Requests are rejected in <1ms if the budget is exceeded.",
                            color: "emerald"
                        },
                        {
                            title: "Role-Based Access",
                            icon: <Users size={24} className="text-emerald-400" />,
                            desc: "Granular roles for Owners, Admins, and Developers. Control who can create keys and view spend.",
                            color: "emerald"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-[2.5rem] glass-premium border border-white/5 relative overflow-hidden group`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-500/20 flex items-center justify-center mb-6`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technical Detail Section */}
            <section className="py-24 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Code Block */}
                    <div className="glass-premium rounded-3xl p-8 border border-white/10 relative font-mono text-sm max-w-lg mb-10 lg:mb-0">
                        <div className="absolute top-4 right-4 flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                        </div>
                        <div className="text-neutral-500 mb-4"># Atomic Budget Reservation (Lua)</div>
                        <div className="space-y-1 text-emerald-300">
                            <div><span className="text-purple-400">local</span> current = redis.call(<span className="text-amber-300">'get'</span>, key)</div>
                            <div><span className="text-purple-400">if</span> current + cost &gt; limit <span className="text-purple-400">then</span></div>
                            <div className="pl-4 text-rose-400">return "REJECT"</div>
                            <div><span className="text-purple-400">else</span></div>
                            <div className="pl-4">redis.call(<span className="text-amber-300">'incrby'</span>, key, cost)</div>
                            <div className="pl-4 text-emerald-400">return "ALLOW"</div>
                            <div><span className="text-purple-400">end</span></div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl lg:text-5xl font-medium mb-8 tracking-tight">
                            Sub-Millisecond <br /> Enforcement.
                        </h2>
                        <div className="space-y-6">
                            <p className="text-neutral-400 text-lg font-light leading-relaxed">
                                Traditional API gateways enforce budgets asynchronously, leading to "over-drafts" during high-traffic spikes.
                            </p>
                            <p className="text-neutral-400 text-lg font-light leading-relaxed">
                                Hyperion uses <strong>atomic Redis Lua scripts</strong> to reserve budget for every request <em>before</em> it hits the provider. If a key is out of budget, the request is rejected in <strong>0.3ms</strong>.
                            </p>
                            <div className="pt-6">
                                <div className="inline-flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-widest text-xs">
                                    <Activity size={16} />
                                    Zero-Overdraft Guarantee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
