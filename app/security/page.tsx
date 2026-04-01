import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "Security & Compliance | Hyperion",
    description: "Enterprise AI Security: TLS, API key rotations, RBAC, SSO, PII redaction, and prompt injection checks for mission-critical LLM applications.",
    keywords: ["LLM Security", "Enterprise AI Security", "PII redaction", "Air-gapped AI gateway", "AI compliance"],
    alternates: { canonical: "/security" },
};

export default function SecurityPage() {
    const pageFaqs = [
        {
            question: "Does Hyperion redact PII automatically?",
            answer: "Yes — configurable rulesets for common PII (emails, SSNs, phone numbers) and custom patterns."
        },
        {
            question: "Can Hyperion run in air-gapped environments?",
            answer: "Yes — Enterprise supports fully air-gapped deployments with no phone-home telemetry."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="Security & Compliance"
            category="Enterprise"
            readTime="5 min read"
            date="Feb 25, 2026"
            accent="rose"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    Hyperion treats security as a first-class requirement for production LLM access. <strong>We do not rely on AI providers to secure your data.</strong> We provide the mandatory, zero-trust infrastructure layer between your application logic and the public foundational models.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Core Security Controls</h2>
                <ul className="list-disc pl-5 space-y-3 marker:text-rose-500 text-neutral-300">
                    <li><strong>Network & Transit:</strong> Strict TLS everywhere, HMAC request signing, and origin IP whitelisting.</li>
                    <li><strong>Key Management:</strong> End-to-end API key encryption with automated, hitless rotation policies. Never commit a raw OpenAI key again.</li>
                    <li><strong>Access Governance (Enterprise):</strong> Granular Role-Based Access Control (RBAC) securely tied to modern SSO providers (Okta, Entra, Google).</li>
                    <li><strong>Active Middlewares:</strong> Inline PII redaction/sanitization pipelines run <i>before</i> the provider call is dispatched.</li>
                    <li><strong>Injection Defense:</strong> Heuristic and semantic prompt injection checks intercept known exploitation patterns.</li>
                    <li><strong>Audit Logging:</strong> Immutable logs of every transaction and administrative action, ready for immediate compliance export.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Deployments & Compliance Boundaries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="glass-premium p-6 rounded-xl border border-white/5 border-l-4 border-l-neutral-600">
                        <h4 className="font-bold text-white mb-2">Cloud SaaS</h4>
                        <p className="text-sm text-neutral-400">Fully managed with automatic updates & backups. Ideal for rapid prototyping and startups.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-rose-500/20 bg-rose-500/5 border-l-4 border-l-rose-500">
                        <h4 className="font-bold text-white mb-2">Self-Hosted</h4>
                        <p className="text-sm text-neutral-400">Complete control over your data residency. Deploy the binary into your own K8s cluster.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 border-l-4 border-l-blue-500">
                        <h4 className="font-bold text-white mb-2">Private Cloud VPC</h4>
                        <p className="text-sm text-neutral-400">Dedicated isolation managed by our team within isolated cloud networks.</p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 border-l-4 border-l-emerald-500">
                        <h4 className="font-bold text-white mb-2">Air-Gapped Edition</h4>
                        <p className="text-sm text-neutral-400">No outbound "phone-home" traffic. Suitable for the highest security GovTech environments.</p>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Data Residency & Incident Controls</h2>
                <p>
                    Configure request and response retention uniquely on a per-tenant basis natively in the gateway. Support includes direct export to Snowflake, BigQuery, or long-term compliant backup to S3.
                </p>
                <p>
                    When incidents occur, time is critical. Hyperion enables administrators to auto-pause any compromised key instantly, transparently revoke and rotate provider keys upstream without dropping incoming traffic, and streams security-critical events directly to SIEMs (Datadog, PagerDuty, or secure webhooks).
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Security FAQs" description="" items={pageFaqs} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
