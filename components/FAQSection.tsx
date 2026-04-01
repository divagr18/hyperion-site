"use client";

import { useState, memo, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, FAQ } from "@/data/faqs";

interface FAQSectionProps {
    title?: string;
    description?: string;
    items?: FAQ[];
    columns?: 1 | 2;
}

const FAQItem = memo(({
    faq,
    isOpen,
    onClick
}: {
    faq: FAQ;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <motion.div
            layout
            className={`glass-premium rounded-2xl border transition-all duration-300 overflow-hidden transform-gpu ${isOpen
                ? "border-violet-500/30 bg-white/[0.03]"
                : "border-white/5 hover:border-white/10"
                }`}
        >
            <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="font-semibold text-white pr-8">{faq.question}</span>
                <div className={`p-1 rounded-full shrink-0 transition-colors ${isOpen ? "bg-violet-500/20 text-violet-400" : "bg-white/5 text-neutral-400"}`}>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "circOut" }}
                        className="will-change-[height,opacity]"
                    >
                        <p className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed whitespace-pre-wrap">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});

FAQItem.displayName = "FAQItem";

export default function FAQSection({
    title = "Frequently Asked Questions",
    description = "Everything you need to know about standardizing your AI infrastructure with Hyperion.",
    items = faqs,
    columns = 1
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleOpen = useCallback((index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    }, []);

    const renderColumn = (columnItems: FAQ[], offsetIndex: number) => (
        <div className="grid gap-4 w-full h-fit">
            {columnItems.map((faq, localIdx) => {
                const globalIdx = offsetIndex + localIdx;
                const isOpen = openIndex === globalIdx;
                return (
                    <FAQItem
                        key={globalIdx}
                        faq={faq}
                        isOpen={isOpen}
                        onClick={() => toggleOpen(globalIdx)}
                    />
                );
            })}
        </div>
    );

    const halfway = Math.ceil(items.length / 2);
    const firstHalf = items.slice(0, halfway);
    const secondHalf = items.slice(halfway);

    return (
        <div className="py-16 md:py-24 w-full">
            <div className={`mx-auto space-y-12 ${columns === 2 ? 'max-w-6xl' : 'max-w-3xl'}`}>
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
                    <p className="text-neutral-400 font-medium text-sm md:text-base">{description}</p>
                </div>

                {columns === 1 ? (
                    renderColumn(items, 0)
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {renderColumn(firstHalf, 0)}
                        {renderColumn(secondHalf, halfway)}
                    </div>
                )}
            </div>
        </div>
    );
}
