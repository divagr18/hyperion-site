"use client";

import { Info } from "lucide-react";

interface ApiField {
  name: string;
  type: string;
  description: string;
  options?: string[];
  required?: boolean;
}

interface ApiReferenceProps {
  title?: string;
  subtitle?: string;
  fields: ApiField[];
}

export default function ApiReference({ title, subtitle, fields }: ApiReferenceProps) {
  return (
    <div className="bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden mt-6 mb-10">
      {(title || subtitle) && (
        <div className="px-6 py-6 border-b border-white/10 bg-gradient-to-r from-violet-500/10 to-transparent space-y-1.5">
          {title && <h3 className="text-sm font-medium text-white">{title}</h3>}
          {subtitle && (
            <div className="flex items-center gap-2 text-neutral-400 font-light text-[13px] pt-1">
              <Info size={14} className="text-violet-300/70" />
              {subtitle}
            </div>
          )}
        </div>
      )}
      
      <div className="divide-y divide-white/10">
        {fields.map((field) => (
          <div key={field.name} className="px-6 py-5 hover:bg-white/[0.02] transition-colors group">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-cyan-300">{field.name}</span>
                  {field.required && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400/90">Required</span>
                  )}
                </div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">{field.type}</div>
              </div>
              
              <div className="flex-1 space-y-3">
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {field.description}
                </p>
                
                {field.options && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {field.options.map((opt) => (
                      <span 
                        key={opt} 
                        className="px-1.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-400/20 text-violet-200 font-mono text-[10px]"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
