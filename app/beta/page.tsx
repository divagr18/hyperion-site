"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { submitBetaRequest } from "@/app/actions/beta-signup";
import { motion, AnimatePresence } from "framer-motion";

const SPEND_OPTIONS = [
    { value: "<$1k", label: "< $1,000" },
    { value: "$1k-$10k", label: "$1,000 - $10,000" },
    { value: "$10k+", label: "> $10,000" },
];

export default function BetaPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSpend, setSelectedSpend] = useState<{ value: string; label: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!selectedSpend) {
            setError("Selection required");
            return;
        }

        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append("llmSpend", selectedSpend.value);

        const result = await submitBetaRequest(formData);

        setIsLoading(false);
        if (result.success) {
            setIsSubmitted(true);
        } else {
            setError(result.error || "Submission failed. Please try again.");
        }
    }

    return (
        <main className="min-h-screen bg-[#030303] text-neutral-100 selection:bg-violet-500/30 overflow-x-hidden">
            <Navbar />

            <div className="pt-44 pb-24 px-6 lg:px-8 max-w-7xl mx-auto relative min-h-[90vh] flex flex-col justify-center items-center">
                {/* Minimal Background Atmosphere */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/5 blur-[160px] pointer-events-none rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 max-w-2xl mx-auto w-full"
                >
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                            Request SaaS Access
                        </h1>
                        <p className="text-lg text-neutral-400 font-normal leading-relaxed max-w-lg mx-auto tracking-tight">
                            Apply for early access to the Hyperion platform. We are currently onboarding engineering teams on a rolling basis.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/[0.01] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 shadow-2xl relative"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative z-10 text-center space-y-6 py-12"
                            >
                                <h2 className="text-2xl font-medium tracking-tight text-white">Registration Received</h2>
                                <p className="text-neutral-400 text-base max-w-sm mx-auto leading-relaxed tracking-tight">
                                    Your application is now in queue for manual review. We will contact you via email as slots become available.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative z-10 w-full space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="flex flex-col gap-y-2">
                                        <label className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] ml-0.5">Full Name</label>
                                        <input required name="fullName" type="text" placeholder="Ada Lovelace" className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500/50 transition-all rounded-none" />
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <label className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] ml-0.5">Professional Email</label>
                                        <input required name="email" type="email" placeholder="ada@hyperionhq.co" className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500/50 transition-all rounded-none" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] ml-0.5">Organization (Optional)</label>
                                    <input name="company" type="text" placeholder="Acme Corp" className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500/50 transition-all rounded-none" />
                                </div>

                                <div className="flex flex-col gap-y-2 relative">
                                    <label className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] ml-0.5">Monthly AI Spend</label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full bg-transparent border-b border-white/10 py-2 text-left text-white flex items-center justify-between hover:border-white/20 transition-all focus:outline-none focus:border-violet-500/50"
                                        >
                                            <span className={selectedSpend ? "text-white" : "text-neutral-600"}>
                                                {selectedSpend ? selectedSpend.label : "Select scale..."}
                                            </span>
                                            <ChevronDown size={14} className={`text-neutral-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl"
                                                >
                                                    {SPEND_OPTIONS.map((option) => (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedSpend(option);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className="w-full text-left px-4 py-3 hover:bg-white/[0.03] hover:text-white transition-all text-neutral-500 text-sm border-b border-white/5 last:border-0"
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] ml-0.5">Primary Implementation Goal</label>
                                    <textarea required name="useCase" rows={3} placeholder="Briefly describe your use case..." className="w-full bg-white/[0.02] border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500/30 transition-all resize-none text-sm leading-relaxed" />
                                </div>

                                {error && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[12px] font-medium tracking-tight ml-0.5">{error}</motion.p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full group relative h-12 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-50 mt-4"
                                >
                                    <span className="relative z-10 text-[13px] font-semibold tracking-tight flex items-center justify-center gap-2">
                                        {isLoading ? (
                                            <Loader2 size={16} className="animate-spin" />
                                        ) : (
                                            <>Submit Application <ArrowRight size={14} /></>
                                        )}
                                    </span>
                                </button>

                                <p className="text-[10px] text-center text-neutral-500 tracking-tight">
                                    By submitting, you agree to our terms and manual review process.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
