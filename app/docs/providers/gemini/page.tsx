"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function GeminiPage() {
  const pythonCode = `from hyperion import HyperionClient

client = HyperionClient()

# Google Gemini integration via Hyperion optimization
res = client.chat.completions.create(
    model="google/gemini-1.5-pro",
    messages=[{"role": "user", "content": "Transcribe this multi-modal query."}]
)

print(res.choices[0].message.content)`;

  const tsCode = `import { HyperionClient } from '@hyperion-ai/sdk';

const client = new HyperionClient();

const res = await client.chat.completions.create({
  model: "google/gemini-1.5-pro",
  messages: [{ role: "user", content: "Transcribe this multi-modal query." }]
});

console.log(res.choices[0].message.content);`;

  const restCode = `curl http://localhost:8080/v1/chat/completions \\
  -H "Authorization: Bearer your_hyperion_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "google/gemini-1.5-pro",
    "messages": [{"role": "user", "content": "Transcribe multi-modal query."}]
  }'`;

  return (
    <DocsLayout activeSlug="providers/gemini">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Provider</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Google Gemini</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Integrate Google&apos;s massive context Gemini models into your enterprise stack. Hyperion optimizes long-context retrieval and provides unified audit trails.
          </p>
        </section>

        {/* Value Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { l: "Efficiency", t: "Context Optimization", d: "Gemini supports millions of tokens. Hyperion's caching layer identifies recurring sub-segments in massive prompts, reducing latency." },
            { l: "Compatibility", t: "Instant Parity", d: "Run Gemini models using the OpenAI schema. Hyperion normalizes Google's distinct API structure into the standard interface." },
          ].map((item) => (
            <div key={item.l} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Setup */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-white">Setup</h2>
          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.01] space-y-4">
            <div className="text-[10px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">Environment</div>
            <div className="text-sm font-semibold text-white">Variables</div>
            <pre className="bg-black/40 p-4 rounded-xl text-neutral-400 text-xs border border-white/5 font-mono mt-4">
              GOOGLE_API_KEY=AIzaSy...<br />
              HYPERION_API_KEY=hp-live-...
            </pre>
          </div>
        </section>

        {/* Usage Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-white">Usage</h2>
          <CodeGroup 
            defaultLanguage="python"
            code={{
                python: pythonCode,
                typescript: tsCode,
                rest: restCode,
            }}
          >
            {{
              python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pythonCode}</code></pre>,
              typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsCode}</code></pre>,
              rest: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{restCode}</code></pre>,
            }}
          </CodeGroup>
        </section>
      </div>
    </DocsLayout>
  );
}
