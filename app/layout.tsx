import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hyperionhq.co"),
  title: {
    default: "Hyperion | Enterprise AI Gateway Infrastructure",
    template: "%s | Hyperion",
  },
  description:
    "Hyperion builds high-performance AI gateway infrastructure. Features include microsecond-latency caching, prompt security, real-time PII redaction, and multi-model failover for reliable LLM production.",
  keywords: [
    "AI gateway",
    "LLM infrastructure",
    "LLM caching architecture",
    "AI cost control",
    "prompt security perimeter",
    "PII redaction pipe",
    "AI failover strategy",
    "AI observability",
    "enterprise AI middleware",
    "high-performance AI routing",
    "AI semantic caching",
    "LLM API management",
    "AI safety guardrails",
    "token-based rate limiting",
    "AI cost allocation",
  ],
  authors: [{ name: "Hyperion Team" }],
  creator: "Hyperion",
  publisher: "Hyperion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hyperionhq.co",
    siteName: "Hyperion",
    title: "Hyperion | Enterprise AI Gateway Infrastructure",
    description: "High-performance AI gateway infrastructure with caching, security, and cost controls.",
    images: [
      {
        url: "/og-image.png", // Verify this exists or create it
        width: 1200,
        height: 630,
        alt: "Hyperion AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperion | Enterprise AI Gateway Infrastructure",
    description: "High-performance AI gateway infrastructure with caching, security, and cost controls.",
    creator: "@hyperion_ai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/hyperionbig.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Global Cinematic Grain */}
        <div className="grain-overlay opacity-[0.015] fixed inset-0 pointer-events-none z-[9999]" />
        {children}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
