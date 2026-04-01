import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

export const metadata: Metadata = {
    title: "Pricing | Hyperion AI Gateway Infrastructure",
    description: "Simple, predictable pricing for enterprise AI infrastructure. From our open-source Community Edition to high-scale Enterprise deployments with full cost governance.",
    keywords: [
        "AI gateway pricing",
        "LLM cost management",
        "AI infrastructure cost",
        "enterprise AI gateway",
        "AI caching price",
        "prompt security cost",
        "LLM API pricing",
        "AI budget controls",
    ],
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Pricing | Hyperion AI Gateway Infrastructure",
        description: "Start for free or scale with our enterprise-grade AI gateway. Full cost controls, caching, and security.",
        url: "/pricing",
    },
};

export default function PricingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "PricingPage",
        "name": "Hyperion Pricing",
        "description": "Pricing plans for Hyperion AI Gateway Infrastructure",
        "mainEntity": {
            "@type": "Product",
            "name": "Hyperion AI Gateway",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Free",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                {
                    "@type": "Offer",
                    "name": "Starter",
                    "price": "30",
                    "priceCurrency": "USD"
                },
                {
                    "@type": "Offer",
                    "name": "Business",
                    "price": "99",
                    "priceCurrency": "USD"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PricingClient />
        </>
    );
}
