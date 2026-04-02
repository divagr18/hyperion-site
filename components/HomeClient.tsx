"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProviderLogos from "@/components/ProviderLogos";
import BentoFeatures from "@/components/BentoFeatures";
import SpeedSection from "@/components/PerformanceChart";
import ComparisonSection from "@/components/ComparisonSection";
import NeuralCaching from "@/components/NeuralCaching";
import APIKeyManagement from "@/components/APIKeyManagement";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomeClient() {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to("[data-scroll-progress]", {
                scaleX: 1,
                transformOrigin: "left center",
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.25,
                },
            });
        },
        { scope: rootRef }
    );

    return (
        <div ref={rootRef} className="bg-[#09090b] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
            <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-white/5">
                <div data-scroll-progress className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400" />
            </div>
            <Navbar />
            <main className="flex flex-col relative">
                {/* Global Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                    <div className="absolute inset-0 bg-grain opacity-[0.015] mix-blend-overlay" />
                </div>

                <Hero />

                <div className="py-8">
                    <ComparisonSection />
                </div>

                <section className="relative z-10">
                    <ProviderLogos />
                </section>

                <div className="py-16">
                    <BentoFeatures />
                </div>

                <div className="py-8">
                    <SpeedSection />
                </div>

                <div className="py-8">
                    <NeuralCaching />
                </div>

                <div className="py-8">
                    <APIKeyManagement />
                </div>

                {/* Final CTA Section */}
                <section className="py-16 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-premium rounded-2xl p-20 border border-white/5 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 mesh-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">
                                    Ready to Scale?
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.9]">
                                    Move faster. <br />
                                    <span className="text-emerald-400 italic font-medium">Pay less.</span>
                                </h2>
                                <p className="text-lg text-neutral-400 leading-relaxed font-medium max-w-lg mx-auto">
                                    Optimize your AI infrastructure with Hyperion. Get started in minutes.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <button className="px-10 py-4 bg-emerald-400 text-black rounded-xl font-black uppercase tracking-[0.15em] text-[10px] hover:scale-105 hover:bg-emerald-300 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                        Start Building Free <ArrowRight size={14} />
                                    </button>
                                    <a href="/pricing" className="px-10 py-4 rounded-xl border border-white/10 glass-premium hover:bg-white/10 font-black uppercase tracking-[0.15em] text-[10px] transition-all flex items-center gap-3">
                                        See Plans <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}
