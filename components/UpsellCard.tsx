export const blogUpsellCard = (
    <div className="mt-16 p-8 md:p-10 glass-premium rounded-3xl border border-white/5 relative overflow-hidden group hover:border-violet-500/30 transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Ready to bulletproof your AI stack?</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    Hyperion provides instant, out-of-the-box active-passive failover and circuit breaking for all major model providers without changing your application code.
                </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-64">
                <a href="/beta" className="group relative px-6 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center w-full">
                    <span className="relative z-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">Join the beta <span className="group-hover:translate-x-1 transition-transform text-[14px] leading-none">→</span></span>
                </a>
                <a href="/pricing" className="px-6 py-4 bg-white/5 text-neutral-300 hover:text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all text-[11px] uppercase tracking-[0.2em] w-full text-center flex items-center justify-center">
                    View Pricing
                </a>
            </div>
        </div>
    </div>
);
