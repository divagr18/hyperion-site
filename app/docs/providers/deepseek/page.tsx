"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function DeepSeekPage() {
  const pythonCode = `from hyperion import HyperionClient

client = HyperionClient()

# Optimized DeepSeek integration
res = client.chat.completions.create(
    model="deepseek/deepseek-chat",
    messages=[{"role": "user", "content": "Help me optimize this SQL query."}]
)

print(res.choices[0].message.content)`;

  const tsCode = `import { HyperionClient } from '@hyperion-ai/sdk';

const client = new HyperionClient();

const res = await client.chat.completions.create({
  model: "deepseek/deepseek-chat",
  messages: [{ role: "user", content: "Optimize this SQL query." }]
});

console.log(res.choices[0].message.content);`;

  const restCode = `curl http://localhost:8080/v1/chat/completions \\
  -H "Authorization: Bearer your_hyperion_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek/deepseek-chat",
    "messages": [{"role": "user", "content": "Optimize SQL query."}]
  }'`;

  return (
    <DocsLayout activeSlug="providers/deepseek">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Provider</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">DeepSeek</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion supercharges DeepSeek&apos;s high-efficiency models with semantic caching and intelligent rate management, making them even more cost-effective.
          </p>
        </section>

        {/* Value Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { l: "Efficiency", t: "Cost Amplification", d: "DeepSeek is already affordable. Hyperion's semantic cache further reduces redundant hits, giving you more value from every dollar." },
            { l: "Reliability", t: "Stability Gateway", d: "DeepSeek endpoints can occasionally see high load. Hyperion provides automatic retries and failover logic to ensure responsiveness." },
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
              DEEPSEEK_API_KEY=sk-ds-...<br />
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
