"use client";

import { ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, BookOpen, Zap, Server, Cpu, ChevronDown, Settings, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DocsLayoutProps {
  children: ReactNode;
  activeSlug?: string;
}

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", slug: "" },
      { name: "Quick Start", slug: "quick-start" },
      { name: "Architecture", slug: "architecture" },
    ],
  },
  {
    title: "Features",
    items: [
      { name: "Caching", slug: "features/caching" },
      { name: "Smart Routing", slug: "features/routing" },
      { name: "Budgets & Limits", slug: "features/budgets" },
      { name: "Auto Model Selection", slug: "features/auto-model" },
    ],
  },
  {
    title: "SDKs & APIs",
    items: [
      { name: "Quickstart", slug: "sdk/quickstart" },
      { name: "Configuration", slug: "sdk/configuration" },
    ],
  },
  {
    title: "Providers",
    items: [
      { name: "Overview", slug: "providers/overview" },
      { name: "OpenAI", slug: "providers/openai" },
      { name: "Anthropic", slug: "providers/anthropic" },
      { name: "DeepSeek", slug: "providers/deepseek" },
      { name: "Google Gemini", slug: "providers/gemini" },
      { name: "Ollama (Local LLMs)", slug: "providers/ollama" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { name: "Environment Variables", slug: "configuration/environment-variables" },
      { name: "Docker Compose", slug: "configuration/docker-compose" },
      { name: "Production Checklist", slug: "configuration/production-checklist" },
    ],
  },
  {
    title: "Performance",
    items: [
      { name: "Benchmarks", slug: "performance/benchmarks" },
      { name: "Run Your Own", slug: "performance/run-your-own" },
      { name: "Gateway Comparison", slug: "performance/comparison" },
    ],
  },
];

export default function DocsLayout({ children, activeSlug }: DocsLayoutProps) {
  const groupsWithState = useMemo(
    () =>
      navigation.map((group) => ({
        ...group,
        openByDefault: group.items.some((item) => item.slug === activeSlug),
      })),
    [activeSlug]
  );

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groupsWithState.map((g) => [g.title, g.openByDefault || g.title === "Getting Started"]))
  );

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-emerald-500/30">
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">

          {/* Sidebar */}
          <aside className="lg:w-72 xl:w-72 shrink-0 hidden lg:flex flex-col lg:sticky lg:top-28 lg:h-[calc(100vh-140px)]">
            <div className="flex flex-col gap-6 h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              
              {/* Search Container */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                  <Search
                    size={14}
                    className="text-neutral-500 group-focus-within:text-emerald-400 transition-colors duration-200"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-lg py-2 pl-9 pr-3 text-sm text-neutral-300 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.04] transition-all duration-200 placeholder:text-neutral-600"
                />
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 pb-3 pr-1">
                {groupsWithState.map((group) => {
                  const isOpen = !!openGroups[group.title];
                  return (
                    <div key={group.title} className="flex flex-col gap-1.5">
                      {/* Group Title */}
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.title)}
                        className="w-full flex items-center justify-between gap-2 px-1.5 py-1 rounded-md hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                            {group.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`text-neutral-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Links */}
                      <div className={`flex flex-col gap-0.5 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64 opacity-100 mt-0.5" : "max-h-0 opacity-0"}`}>
                        {group.items.map((item) => {
                          const isActive = activeSlug === item.slug;
                          return (
                            <Link
                              key={item.slug}
                              href={item.slug === "" ? "/docs" : `/docs/${item.slug}`}
                              className={`group relative flex items-center px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                                isActive
                                  ? "text-emerald-400 font-medium bg-emerald-500/[0.03]"
                                  : "text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.02]"
                              }`}
                            >
                              <span className="relative z-10">{item.name}</span>
                              {isActive && (
                                <motion.div
                                  layoutId="sidebar-active-indicator"
                                  className="absolute left-0 w-[1.5px] h-3.5 bg-emerald-500 rounded-full"
                                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[800px]">
              <article
                className="
                  prose prose-invert prose-neutral max-w-none
                  prose-h1:text-[2rem] prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-4 prose-h1:text-white
                  prose-h2:text-[1.35rem] prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-white
                  prose-h3:text-lg prose-h3:font-semibold prose-h3:tracking-tight prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-neutral-100
                  prose-p:text-[15px] prose-p:text-neutral-400 prose-p:leading-7 prose-p:font-normal
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-emerald-300 prose-code:bg-emerald-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[13px] prose-code:before:content-none prose-code:after:content-none
                  prose-pre:mt-6 prose-pre:mb-8 prose-pre:rounded-xl prose-pre:border prose-pre:border-white/[0.05]
                  prose-ul:list-disc prose-ul:marker:text-emerald-500 prose-li:text-neutral-400 prose-li:text-[15px] prose-li:font-normal prose-li:my-1.5
                  prose-blockquote:border-l-2 prose-blockquote:border-emerald-500/50 prose-blockquote:bg-emerald-500/[0.03] prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-neutral-300 prose-blockquote:text-sm prose-blockquote:my-8
                "
              >
                {children}
              </article>

              {/* Page Footer */}
              <div className="mt-20 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
                  Last updated: Feb 22, 2026
                </div>
                <div className="flex items-center gap-6">
                  <Link href="#" className="text-[11px] font-medium text-neutral-500 hover:text-white transition-colors">Edit on GitHub</Link>
                  <Link href="#" className="text-[11px] font-medium text-neutral-500 hover:text-white transition-colors">Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
