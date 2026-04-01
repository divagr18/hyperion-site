import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Hyperion AI Gateway",
    description: "Learn more about Hyperion AI Gateway: features, deployment, security, and performance optimization for LLM applications.",
};

export default function FAQPage() {
    const faqSchema = generateFAQSchema();

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-violet-500/30">
            {/* Inject FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />

            <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto relative">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 w-full">
                    <FAQSection columns={2} />
                </div>
            </div>

            <Footer />
        </main>
    );
}
