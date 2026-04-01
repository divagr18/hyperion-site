import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "AI Gateway for Fintech & Banking | Hyperion",
    description: "Enterprise AI infrastructure for financial institutions. Air-gapped deployments, SOC2 compliance, data residency, and isolated network perimeters.",
    keywords: ["Fintech AI gateway", "Banking LLM security", "SOC2 AI gateway", "On-premise LLM routing", "Air-gapped AI"],
    alternates: { canonical: "/use-cases/fintech" },
};

export default function FintechUseCase() {
    const pageFaqs = [
        {
            question: "Can Hyperion be deployed in an air-gapped environment?",
            answer: "Yes, our Enterprise tier provides a fully containerized, compiled Go binary that operates without any external telemetry or internet requirements, perfect for high-security VPCs."
        },
        {
            question: "How does Hyperion help with SOC2/ISO compliance?",
            answer: "We provide immutable, tamper-evident audit logs of every API request, configuration change, and administrative action. These logs can be natively streamed and safely exported to your SIEM."
        },
        {
            question: "Can we integrate existing HashiCorp Vault deployments?",
            answer: "Yes. Hyperion natively integrates with external Secret Managers. You can configure the gateway to pull upstream provider API keys directly from Vault, ensuring zero hardcoded secrets exist in the gateway config."
        },
        {
            question: "How do we prevent credit card data from reaching OpenAI?",
            answer: "Hyperion's Data Loss Prevention (DLP) layer intercepts the prompt before it leaves your network. It applies fast Regex and Semantic classifiers to automatically redact PCI-DSS protected data with `<REDACTED_DATA>` tags."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="AI Gateway for Fintech & Banking"
            category="Use Case"
            readTime="6 min read"
            date="Feb 25, 2026"
            accent="amber"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    Integrating Large Language Models into modern financial institutions requires navigating incredibly complex, rigidly enforced regulatory landscapes. Direct connections from internal microservices to public APIs (like OpenAI or Anthropic) are frequently, and rightfully, forbidden by stringent Infosec policies.
                </p>
                <p>
                    <strong>Hyperion serves as the mandatory, heavily fortified perimeter</strong> between internal banking systems and external (or internal self-hosted) intelligence models.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Data Residency and Network Isolation</h2>
                <p>
                    When dealing with financial ledgers, transactional histories, and personally identifiable consumer data, absolute control over data residency is a non-negotiable requirement. Hyperion provides Tier-1 deployment models tailored for extreme isolation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-6">
                    <div className="glass-premium p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 group hover:bg-amber-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-amber-400">01.</span> Self-Hosted Kubernetes
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Run the lightweight Go gateway binary directly within your own walled-garden cluster. Maintain absolute, complete control over memory states, network egress, and cache retention rules.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 group hover:bg-amber-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-amber-400">02.</span> Multi-Region Redundancy
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Execute federated deployments across multiple geographic Availability Zones to guarantee the Tier-1 Enterprise SLA uptime (99.999%) required for core banking systems.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 group hover:bg-amber-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-amber-400">03.</span> Model Geo-Fencing
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Hardcode mandatory routing policies that categorically forbid routing sensitive workflows to any models located in data centers outside of the EU (GDPR) or US compliance regions.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 group hover:bg-amber-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-amber-400">04.</span> Centralized IAM
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Enforce strict RBAC (Role-Based Access Control) across every departmental API key calling the gateway. Instantly revoke access across thousands of endpoints with a single command.
                        </p>
                    </div>
                </div>

                <blockquote className="border-l-4 border-amber-400 pl-6 py-4 my-10 text-neutral-100 bg-amber-400/5 rounded-r-lg font-medium italic">
                    "Hyperion was the only solution that met our Office of the CISO's demands. By running the gateway entirely on-premise and dynamically masking SSNs before they hit the egress boundary, we secured approval to deploy AI assistants across our global wealth management teams."
                    <span className="block mt-2 text-sm text-neutral-400 not-italic uppercase tracking-widest font-bold">— Head of Cloud Security, Multinational Investment Bank</span>
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Strict Audit Logging & Compliance</h2>
                <p>
                    For SOC2, ISO27001, and PCI-DSS compliance, you must maintain a complete, unbroken chain of custody for all generative AI outputs.
                </p>
                <p>
                    Hyperion natively generates and automatically exports immutable request traces directly to your telemetry store of choice (Datadog, Splunk, ElasticSearch). If a specific AI model hallucinates poor financial advice 8 months from now, you will possess the exact prompt, temperature schema, timestamp, semantic cache hit log, and the specific gateway policy hash that governed the output on that day.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Fintech Infrastructure FAQs" description="Detailed answers concerning on-prem deployments, Vault secrets, and logs." items={pageFaqs} columns={2} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
