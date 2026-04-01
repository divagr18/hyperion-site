"use client";

import { motion, useReducedMotion } from "framer-motion";
const providers = [
    { name: 'OpenAI' },
    { name: 'Anthropic' },
    { name: 'Google' },
    { name: 'Azure' },
    { name: 'Mistral' },
    { name: 'Groq' },
    { name: 'Together' },
    { name: 'Perplexity' },
    { name: 'Deepseek' },
    { name: 'Cohere' },
    { name: 'Fireworks' },
];

export default function ProviderLogos() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="py-8 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-[9px] font-bold text-violet-400 uppercase tracking-[0.4em]">
                        Ecosystem
                    </div>
                    <h2 className="text-5xl font-medium text-white tracking-tight">
                        One Interface. <span className="text-rose-400 italic">Total Control.</span>
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-xl mx-auto font-light">
                        Standardize your entire AI stack. Hyperion abstracts away the complexity of provider-specific APIs.
                    </p>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative mt-12 group">
                    {/* Central Highlight Glow - "Auto Activate" feeling */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full bg-violet-500/10 blur-[120px] rounded-full pointer-events-none z-0 opacity-50" />

                    <div className="flex overflow-hidden relative py-12 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <motion.div
                            className="flex gap-12 whitespace-nowrap will-change-transform"
                            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
                            transition={shouldReduceMotion ? undefined : {
                                duration: 50, // Slower for smoothness
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[...providers, ...providers].map((provider, i) => (
                                <div
                                    key={i}
                                    className="relative flex items-center px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20 group/item"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity rounded-2xl" />
                                    <span className="text-xl font-medium text-neutral-400 group-hover/item:text-white tracking-tight transition-colors relative z-10">{provider.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-neutral-500 text-[14px] font-bold uppercase tracking-[0.4em]">
                        Standardized across <span className="text-violet-400">190+</span> global endpoints
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
