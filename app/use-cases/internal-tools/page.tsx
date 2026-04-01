import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "AI Gateway for Internal Enterprise Tools | Hyperion",
    description: "Manage LLM access across your organization. Enforce SSO, departmental chargebacks, budget limits, and role-based model routing for internal developer tools.",
    keywords: ["Internal AI tools", "Enterprise LLM budget", "Chargeback AI APIs", "SSO AI Gateway"],
    alternates: { canonical: "/use-cases/internal-tools" },
};

export default function InternalToolsUseCase() {
    const pageFaqs = [
        {
            question: "How do we allocate AI costs to different engineering squads?",
            answer: "Hyperion provides granular 'Chargeback' analytics. By requiring departments to authenticate their requests via specific Virtual Keys or SSO tokens, the gateway tags all token expenditures by department, allowing you to easily generate CSV cost-allocation reports at the end of the month."
        },
        {
            question: "Can we prevent interns from using expensive models like GPT-4-32k?",
            answer: "Yes. Through Role-Based Access Control (RBAC), you can define routing rules based on user groups. You might configure the gateway to allow Data Scientists access to all models, but restrict temporary contractors or interns to cheaper, faster models like Claude Haiku."
        },
        {
            question: "Do developers need to change their OpenAI client code?",
            answer: "No. Hyperion is fully API-compatible with the standard OpenAI schema. Developers simply change their `base_url` to point to your internal Hyperion instance and replace their OpenAI key with a Hyperion Virtual Key."
        },
        {
            question: "Does Hyperion integrate with Okta or Microsoft Entra ID?",
            answer: "Yes, our Enterprise edition features native SAML/OIDC integrations, allowing developers to provision short-lived API keys directly through your existing identity provider."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="AI Gateway for Internal Tools & Developer Access"
            category="Use Case"
            readTime="5 min read"
            date="Feb 25, 2026"
            accent="blue"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    When every team in the enterprise wants access to Generative AI, IT and Platform Engineering are left dealing with "Shadow AI." Teams bypass procurement, share raw API keys in Slack, and drive up massive, untraceable cloud bills.
                </p>
                <p>
                    Hyperion restores order. As the centralized AI Gateway, <strong>all internal LLM traffic must flow through Hyperion</strong>, bringing visibility, security, and strict financial controls to your internal tooling.
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Taming the API Bill</h2>
                <p>
                    The most common failure mode of internal AI adoption is a lack of financial guardrails. A rogue script by a junior engineer can easily rack up a $5,000 bill over a weekend.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-6">
                    <div className="glass-premium p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 group hover:bg-blue-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            Departmental Limits
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Assign strict budget ceilings per project, environment (Dev/Prod), or department. Once the "Marketing AI Tool" hits its $500 monthly cap, the gateway safely returns a 429 error, preventing budget overruns.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 group hover:bg-blue-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            Chargeback Reporting
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Stop paying the OpenAI bill from the generic IT budget. Hyperion accurately measures blended token costs across providers, allowing you to charge specific business units for their exact AI utilization.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Identity & Single Sign-On (SSO)</h2>
                <p>
                    Managing long-lived API keys is a massive security risk. Hyperion integrates directly with your corporate Identity Provider (IdP) such as Okta, Microsoft Entra ID (Azure AD), or Google Workspace.
                </p>
                <p>
                    Developers log into the internal portal via SSO and generate short-lived, scoped Virtual Keys. If a developer leaves the company, their access to the underlying LLM providers is automatically revoked the moment their SSO account is deactivated.
                </p>

                <blockquote className="border-l-4 border-blue-400 pl-6 py-4 my-10 text-neutral-100 bg-blue-400/5 rounded-r-lg font-medium italic">
                    "Before Hyperion, we had 40 different OpenAI keys floating around in source code. Now, we have one secure connection to OpenAI, and all teams authenticate through the gateway using Okta. The visibility is night and day."
                    <span className="block mt-2 text-sm text-neutral-400 not-italic uppercase tracking-widest font-bold">— VP of Platform Engineering, Fortune 500 SaaS</span>
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Role-Based Model Routing</h2>
                <p>
                    Not all internal tools require the cognitive overhead of the most expensive models. Using Hyperion's routing policies, you can enforce model downgrades based on the user's role. For instance, internal wiki searches can be explicitly rewritten by the gateway to use `Llama-3-8B-Instruct`, while complex data analysis pipelines invoked by senior data scientists are allowed passage to `Claude 3.5 Sonnet`.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="Internal Tools FAQs" description="Common questions about budgets, SSO, and chargebacks." items={pageFaqs} columns={2} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
