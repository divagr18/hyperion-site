import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Shield, Cpu, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-[#050505] min-h-screen selection:bg-violet-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        Our Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        Redefining the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">AI Infrastructure</span> Layer.
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Hyperion was founded on a simple belief: AI should be fast, reliable, and accessible to every developer without the complexity of managing chaotic infrastructure.
                    </p>
                </div>
            </section>

            {/* The Story */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                    <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                        <p>
                            As AI models exploded in capability, we noticed a recurring problem: the infrastructure to support them was lagging behind. Developers were spending more time wrestling with rate limits, complex routing logic, and high latency than actually building innovative products.
                        </p>
                        <p>
                            We built Hyperion to be the ultimate AI gateway—a microscopic, blazing-fast layer that sits between your application and the models. By stripping away the bloat and focusing on raw performance, we achieved microsecond latency routing that fundamentally changes what's possible in real-time AI applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Core Principles</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">The engineering philosophies that guide everything we build at Hyperion.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Zap,
                                title: "Raw Performance",
                                desc: "Every microsecond counts. We rigorously optimize our systems in Go and Rust to ensure the lowest possible overhead."
                            },
                            {
                                icon: Shield,
                                title: "Security First",
                                desc: "Enterprise-grade encryption and access controls are built-in from day one, not bolted on as an afterthought."
                            },
                            {
                                icon: Cpu,
                                title: "Developer Experience",
                                desc: "Intuitive APIs, comprehensive SDKs, and zero-configuration defaults that just work."
                            },
                            {
                                icon: Globe,
                                title: "Global Scale",
                                desc: "Built for edge deployment, keeping the gateway as close to your users as physically possible."
                            }
                        ].map((val, i) => (
                            <div key={i} className="glass-premium p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-500/10 group-hover:text-violet-400 group-hover:border-violet-500/20 transition-all text-neutral-400">
                                    <val.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
