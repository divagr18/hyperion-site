"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function SDKQuickstartPage() {
  const pyCode = `from hyperion import HyperionClient

client = HyperionClient(
    api_key="your_hyperion_key",
    base_url="https://api.hyperion.ai/v1"
)

# Call any model via the gateway
response = client.chat.completions.create(
    model="gpt-4.1-nano",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response.choices[0].message.content)`;

  const tsCode = `import { HyperionClient } from "@hyperion-ai/sdk";

const client = new HyperionClient({
  apiKey: "your_hyperion_key",
  baseURL: "https://api.hyperion.ai/v1"
});

// Call any model via the gateway
const response = await client.chat.completions.create({
  model: "gpt-4.1-nano",
  messages: [{ role: "user", content: "Hello!" }]
});

console.log(response.choices[0].message.content);`;

  return (
    <DocsLayout activeSlug="sdk/quickstart">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">SDK</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Quickstart</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Get started with Hyperion in minutes. Our SDKs provide a drop-in replacement for OpenAI-compatible clients with built-in caching and smart routing.
          </p>
        </section>

        {/* Steps Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {[
            { n: "01", l: "INSTALLATION", t: "Add to Project", d: "Install the official Hyperion library using your preferred package manager (pip, npm, or pnpm)." },
            { n: "02", l: "CONFIGURATION", t: "Initialize Client", d: "Pass your Hyperion API Key and the Gateway endpoint to the client constructor." },
            { n: "03", l: "EXECUTION", t: "Chat Completion", d: "Use the familiar chat completions interface. Hyperion handles the provider routing automatically." },
            { n: "04", l: "OPTIMIZATION", t: "Check Headers", d: "Inspect the 'X-Cache' and 'X-Gateway-Dispatch' headers to verify performance gains." },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.n} — {item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Unified Code Section */}
        <section className="space-y-4 pt-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-white">Basic Usage</h2>
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Switch between languages to see how to initialize the Hyperion client and make your first proxied request.
            </p>
          </div>
          
          <CodeGroup 
            defaultLanguage="python"
            code={{
                python: pyCode,
                typescript: tsCode,
            }}
          >
            {{
              python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pyCode}</code></pre>,
              typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsCode}</code></pre>,
            }}
          </CodeGroup>
        </section>

        {/* Installation Section */}
        <section className="space-y-4 pt-8">
            <h2 className="text-2xl font-medium tracking-tight text-white">Installation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Python (pip)</div>
                    <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-4 font-mono text-[13px] text-emerald-400">
                        pip install hyperion-ai
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">TypeScript (npm)</div>
                    <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-4 font-mono text-[13px] text-emerald-400">
                        npm install @hyperion-ai/sdk
                    </div>
                </div>
            </div>
        </section>
      </div>
    </DocsLayout>
  );
}
