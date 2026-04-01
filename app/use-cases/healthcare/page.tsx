import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "AI Gateway for Healthcare & Lifesciences | Hyperion",
    description: "Deploy Generative AI in healthcare with zero-trust PHI redaction, HIPAA compliance, immutable audit logs, and secure VPC deployments.",
    keywords: ["Healthcare AI security", "PHI redaction AI", "HIPAA compliant LLM gateway", "Medical AI infrastructure"],
    alternates: { canonical: "/use-cases/healthcare" },
};

export default function HealthcareUseCase() {
    const pageFaqs = [
        {
            question: "How does Hyperion redact Patient Health Information (PHI)?",
            answer: "Hyperion uses a dual-layered approach. First, deterministic RegEx patterns capture known entity formats (SSNs, phone numbers, standard Medical Record Numbers). Second, a high-speed local NLP model scans for unstructured semantic leaks (like 'The patient, John Smith, presented with...') and masks them before the payload ever reaches an external provider."
        },
        {
            question: "Does Hyperion store our medical data?",
            answer: "No. Hyperion acts as an ephemeral proxy. While you can configure the gateway to export audit logs to your secure SIEM or S3 bucket, the gateway itself does not retain prompt or response data natively beyond the life of the request unless you explicitly enable local caching."
        },
        {
            question: "Can we run Hyperion entirely offline?",
            answer: "Yes. Our Enterprise tier offers an Air-Gapped deployment model. The gateway binary can be run in a completely isolated network segment with no outbound internet access, routing traffic exclusively to local open-source models (like Llama 3) hosted on your internal infrastructure."
        },
        {
            question: "Does Hyperion help with HIPAA compliance?",
            answer: "Absolutely. By enforcing strict access controls, providing tamper-evident audit logs of every API call, and masking PHI before transmission, Hyperion provides the necessary technical safeguards required under the HIPAA Security Rule for interacting with external AI vendors."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="AI Gateway for Healthcare & Lifesciences"
            category="Use Case"
            readTime="6 min read"
            date="Feb 25, 2026"
            accent="rose"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    The integration of Generative AI into clinical workflows, medical scribing, and patient diagnostics offers unprecedented efficiency. However, healthcare organizations cannot simply hand raw API keys to developers and hope that Protected Health Information (PHI) stays out of prompts.
                </p>
                <p>
                    <strong>Hyperion serves as the necessary, mathematically verifiable firewall</strong> between your clinical applications and the public models.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Zero-Trust Prompt Sanitization</h2>
                <p>
                    Developers make mistakes. Even well-designed applications can accidentally leak patient names, addresses, or diagnosis codes into an LLM prompt. Hyperion intercepts every outbound request and runs an inline, sub-millisecond sanitization pipeline.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-rose-400">01.</span> Deterministic Masking
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Configure strict pattern-matching engines to instantly replace social security numbers, dates of birth, and email addresses with <code>{"<REDACTED_PII>"}</code> tokens.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-rose-400">02.</span> Semantic Redaction
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            A fast, local Presidio-like engine scans the prompt's context to identify unstructured names and conditions, masking them without sending data out of network.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-rose-400">03.</span> Provider Whitelisting
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Hardcode policies across your organization that strictly forbid routing sensitive prompts to any model provider that has not signed a BAA (Business Associate Agreement).
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-rose-400">04.</span> Immutable Audits
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Export standard-compliant, WORM (Write Once, Read Many) logs directly to your SIEM, outlining exactly who accessed which model, with what prompt, at what time.
                        </p>
                    </div>
                </div>

                <blockquote className="border-l-4 border-rose-400 pl-6 py-4 my-10 text-neutral-100 bg-rose-400/5 rounded-r-lg font-medium italic">
                    "Hyperion allowed us to roll out our AI medical scribe tool 6 months ahead of schedule. The Infosec team was satisfied because Hyperion guaranteed that no PHI could ever reach OpenAI's servers."
                    <span className="block mt-2 text-sm text-neutral-400 not-italic uppercase tracking-widest font-bold">— Chief Medical Information Officer, Top-10 US Hospital</span>
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Complete Deployment Sovereignty</h2>
                <p>
                    For the most restrictive environments, Hyperion offers unparalleled deployment flexibility. You can deploy our compiled Go binary directly into your managed Kubernetes environment. Better yet, Hyperion supports completely air-gapped deployments, allowing you to route traffic seamlessly between local VLLM instances without a single byte of telemetry leaving your walls.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Healthcare Security FAQs" description="Detailed answers about compliance, PII, and deployment." items={pageFaqs} columns={2} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
