import type { Metadata } from "next";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/data/faqs";
import { blogUpsellCard } from "@/components/UpsellCard";

export const metadata: Metadata = {
    title: "AI Gateway for B2B SaaS Platforms | Hyperion",
    description: "Multi-tenant AI infrastructure. Issue dynamic per-tenant virtual keys, track API spend per customer, and automatically halt abusive organizations before they exhaust your LLM budget.",
    keywords: ["Multi-tenant AI gateway", "SaaS LLM pricing", "Prevent LLM abuse", "AI gateway dynamic keys", "Stripe LLM billing"],
    alternates: { canonical: "/use-cases/saas" },
};

export default function SaaSUseCase() {
    const pageFaqs = [
        {
            question: "How do I prevent a single SaaS customer from draining my LLM budget?",
            answer: "Hyperion provides Virtual Keys tied to specific Tenant IDs. You can assign a hard $100/mo limit to Customer A. Once they hit it, Hyperion intercepts further requests with a 429 error, protecting your underlying provider account."
        },
        {
            question: "Can I track exact API costs per tenant for usage-based billing?",
            answer: "Yes, every request passing through Hyperion is tagged with tenant metadata. You can view grouped analytics in our dashboard or automatically export raw token traces via webhooks to billing providers like Stripe or Metronome."
        },
        {
            question: "Does Hyperion mitigate brute-force scrapes?",
            answer: "Yes. Hyperion includes deeply configurable Rate Limiting. You can restrict an individual organization to exactly 50 requests per minute. Anything beyond that is queued or rejected cleanly, preserving gateway stability."
        },
        {
            question: "Are virtual keys stored securely?",
            answer: "Hyperion natively encrypts all Virtual Keys internally and supports integrations with HashiCorp Vault. Your root OpenAI/Anthropic credentials are never exposed to your backend application code."
        }
    ];

    const faqSchema = generateFAQSchema(pageFaqs);

    return (
        <BlogArticleLayout
            title="AI Gateway for B2B SaaS Platforms"
            category="Use Case"
            readTime="6 min read"
            date="Feb 25, 2026"
            accent="emerald"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="space-y-8 text-lg text-neutral-200 leading-8">
                <p>
                    Adding Generative AI features to a multi-tenant B2B SaaS product fundamentally breaks traditional software pricing models. You are no longer paying for relatively fixed, static compute hours; you are carrying the highly variable, unpredictable cost of third-party API tokens generated directly by your users' behavior.
                </p>
                <p>
                    Without an AI gateway managing this traffic, <strong>you have fundamentally lost control of your Profit margins.</strong>
                </p>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">The Multi-Tenant Threat Vector</h2>
                <p>
                    Consider an enterprise customer running an automated CI/CD script against your new AI document extraction tool. They could unintentionally generate millions of output tokens over a weekend. Because your backend blindly passes those requests to OpenAI using your root API key, you could easily land a $15,000 API bill by Monday morning.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-4">
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 group hover:bg-emerald-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-emerald-400">01.</span> Dynamic Virtual Keys
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Never expose your root API credentials. Hyperion generates scoped Virtual Keys for your backend per-tenant, mapping all downstream requests to specific organizational budgets and rulesets.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 group hover:bg-emerald-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-emerald-400">02.</span> Anomaly Auto-Pause
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Detect abuse immediately. If Customer B's request volume spikes 500% above their standard 30-day baseline within a single hour, Hyperion's anomaly detector instantly blocks the tenant's virtual key and triggers a PagerDuty alert to your team.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 group hover:bg-emerald-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-emerald-400">03.</span> Tiered Rate Limiting
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Enforce fair usage policies dynamically. Assign Free tier users an IP-based limit of 10 requests per minute, while passing Enterprise tier requests through completely unthrottled.
                        </p>
                    </div>
                    <div className="glass-premium p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 group hover:bg-emerald-500/10 transition-colors">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <span className="text-emerald-400">04.</span> Tenant-Level Caching
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Ensure complete data isolation. Hyperion's semantic cache strictly partitions vector namespaces by tenant ID. A cached query generated by Company A can never accidentally be retrieved by a prompt from Company B.
                        </p>
                    </div>
                </div>

                <blockquote className="border-l-4 border-emerald-400 pl-6 py-4 my-10 text-neutral-100 bg-emerald-400/5 rounded-r-lg font-medium italic">
                    "Hyperion provided the missing billing layer for our Generative AI infrastructure. We simply set a webhook from Hyperion to Stripe, and suddenly we were effortlessly billing all 4,000 organizations for their exact fractional token usage every month."
                    <span className="block mt-2 text-sm text-neutral-400 not-italic uppercase tracking-widest font-bold">— VP of Engineering, Data Integration SaaS</span>
                </blockquote>

                <h2 className="text-2xl md:text-3xl text-white tracking-tight pt-4">Usage-Based Billing Integration</h2>
                <p>
                    To charge your customers accurately for their AI usage, you need exact token counts across massive scale and concurrency. Hyperion attaches a highly-accurate, normalized cost footprint to every single request passing through the gateway. It perfectly blends costs across raw input tokens, semantic cache hits (free), and expensive generation tokens.
                </p>
                <p>
                    You can query this aggregated data directly from our metrics API via GraphQL, or configure continuous automated webhooks to sync usage events straight into standard billing engines like Stripe Meters, Metronome, or Lago.
                </p>

                <div className="pt-16 border-t border-white/5 mt-16">
                    <FAQSection title="SaaS Infrastructure FAQs" description="Common questions about multi-tenant configuration, rate limits, and billing." items={pageFaqs} columns={2} />
                </div>

                {blogUpsellCard}
            </div>
        </BlogArticleLayout>
    );
}
