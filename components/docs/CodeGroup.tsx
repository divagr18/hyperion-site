"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Server } from "lucide-react";

type Language = "python" | "typescript" | "rest" | "yaml";

interface CodeGroupProps {
  children?: {
    python?: ReactNode;
    typescript?: ReactNode;
    rest?: ReactNode;
    yaml?: ReactNode;
  };
  defaultLanguage?: Language;
  // Optional: provided if you want to copy the raw text instead of extracting it from children
  code?: Partial<Record<Language, string>>;
}

const icons = {
  python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-4 h-4" alt="Python" />,
  typescript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-4 h-4" alt="TS" />,
  rest: <Terminal size={14} className="text-cyan-300" />,
  yaml: <Server size={14} className="text-emerald-400" />,
};

const labels = {
  python: "Python SDK",
  typescript: "TypeScript SDK",
  rest: "REST API",
  yaml: "Compose YAML",
};

export default function CodeGroup({ children, defaultLanguage = "python", code }: CodeGroupProps) {
  const [selected, setSelected] = useState<Language>(defaultLanguage);
  const [copied, setCopied] = useState(false);

  const tabs: Language[] = children ? Object.keys(children) as Language[] : [];

  const copyToClipboard = async () => {
    if (!code || !code[selected]) return;
    await navigator.clipboard.writeText(code[selected]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (tabs.length === 0) return null;

  return (
    <div className="group/code relative mt-6 mb-10 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
      {/* Tab bar */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-white/[0.03] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`relative px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-[0.14em] transition-all flex items-center gap-2 ${
                selected === tab ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {selected === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-violet-500/12 rounded-lg border border-violet-400/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{icons[tab]}</span>
              <span className="relative z-10">{labels[tab]}</span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-1.5 px-2">
            {code && code[selected] && (
                <button
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 transition-all hover:text-white hover:bg-white/10 ${copied ? "text-cyan-300" : ""}`}
                    title="Copy code"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
            )}
        </div>
      </div>

      {/* Code content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 overflow-x-auto text-sm leading-relaxed"
          >
            {children?.[selected]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
