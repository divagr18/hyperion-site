import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Hyperion | Real-time AI Gateway & LLM Infrastructure",
  description: "The enterprise-grade AI gateway for production LLM apps. Unified API, microsecond-latency caching, prompt security, and real-time PII redaction.",
  keywords: [
    "AI gateway",
    "enterprise AI platform",
    "AI infrastructure",
    "fast AI for developers",
    "AI middleware",
    "AI software for business",
    "scalable AI solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hyperion | Real-time AI Gateway & LLM Infrastructure",
    description: "Production-grade AI gateway with caching, security, and cost governance.",
    url: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hyperion AI Gateway",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cloud",
    "description": "High-performance AI gateway for LLM caching, security, and cost control.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
