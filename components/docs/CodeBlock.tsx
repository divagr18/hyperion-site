"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/5 bg-neutral-900/40 mt-6 mb-10">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{filename}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 transition-all hover:text-white hover:bg-white/10 ${copied ? 'text-emerald-400' : ''}`}
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      )}
      {!filename && (
        <button
          onClick={copyToClipboard}
          className={`absolute right-3 top-3 p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 opacity-0 group-hover:opacity-100 transition-all hover:text-white hover:bg-white/10 z-10 ${copied ? 'opacity-100 text-emerald-400' : ''}`}
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      )}
      <pre className="p-6 text-xs text-emerald-400/80 overflow-x-auto leading-[1.6]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
