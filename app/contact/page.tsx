"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Building2, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact-signup";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsLoading(false);
        if (result.success) {
            setIsSubmitted(true);
        } else {
            setError(result.error || "Something went wrong. Please try again.");
        }
    }

    return (
        <main className="bg-[#030303] min-h-screen text-neutral-100 selection:bg-violet-500/30 overflow-x-hidden">
            <Navbar />

            <section className="relative pt-32 pb-32">
                {/* Minimal Background Atmosphere */}
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                                How can we <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">help you?</span>
                            </h1>
                            <p className="text-lg text-neutral-400 font-normal leading-relaxed mb-12 max-w-md tracking-tight">
                                Whether you're a startup looking to scale or an enterprise needing custom solutions, our team is ready to assist.
                            </p>

                            <div className="space-y-4">
                                {/* Enterprise Card */}
                                <a href="mailto:hello@hyperionhq.co" className="block p-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30 text-neutral-500 transition-all">
                                            <Building2 size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-sm mb-0.5 flex items-center gap-2">
                                                Sales & Enterprise <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h3>
                                            <p className="text-[12px] text-neutral-500 tracking-tight">Custom volume pricing and VPC deployments.</p>
                                        </div>
                                    </div>
                                </a>

                                {/* Support Card */}
                                <a href="mailto:hello@hyperionhq.co" className="block p-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:bg-violet-500/20 group-hover:text-violet-400 group-hover:border-violet-500/30 text-neutral-500 transition-all">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-sm mb-0.5 flex items-center gap-2">
                                                Technical Support <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h3>
                                            <p className="text-[12px] text-neutral-500 tracking-tight">Help with integrations and general inquiries.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/[0.01] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 shadow-2xl relative"
                        >
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <h3 className="text-2xl font-medium tracking-tight text-white">Message Sent</h3>
                                    <p className="text-neutral-500 text-sm max-w-xs mx-auto leading-relaxed">
                                        We've received your inquiry and will get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <div className="relative z-10">
                                    <h3 className="text-xl font-medium text-white mb-8 tracking-tight">Send a message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="flex flex-col gap-y-2">
                                            <label className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.1em] ml-0.5">Full Name</label>
                                            <input required name="fullName" type="text" className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-700 focus:outline-none focus:border-emerald-500/50 transition-all rounded-none" placeholder="Ada Lovelace" />
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <label className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.1em] ml-0.5">Professional Email</label>
                                            <input required name="email" type="email" className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-700 focus:outline-none focus:border-emerald-500/50 transition-all rounded-none" placeholder="ada@hyperionhq.co" />
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <label className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.1em] ml-0.5">Message</label>
                                            <textarea required name="message" rows={4} className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-4 text-white placeholder-neutral-700 focus:outline-none focus:border-emerald-500/30 transition-all resize-none text-sm leading-relaxed" placeholder="How can we help?" />
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-[12px] font-medium ml-0.5">{error}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full group relative h-12 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-50 mt-2"
                                        >
                                            <span className="relative z-10 text-[13px] font-semibold tracking-tight flex items-center justify-center gap-2">
                                                {isLoading ? (
                                                    <Loader2 size={16} className="animate-spin" />
                                                ) : (
                                                    <>Send Message <ArrowRight size={14} /></>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
