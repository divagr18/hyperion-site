"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OllamaPage() {
  const pythonCode = `from hyperion import HyperionClient

client = HyperionClient()

# Hyperion orchestrates your local Ollama instance with 
# enterprise features: Rate Limiting, RBAC, and Semantic Caching.
res = client.chat.completions.create(
    model="ollama/llama3.2:3b",
    messages=[{"role": "user", "content": "Analyze system logs for anomalies."}]
)

print(res.choices[0].message.content)`;

  const tsCode = `import { HyperionClient } from '@hyperion-ai/sdk';

const client = new HyperionClient();

// Local model, Enterprise features.
const res = await client.chat.completions.create({
  model: "ollama/llama3.2:3b",
  messages: [{ role: "user", content: "Analyze system logs." }]
});

console.log(res.choices[0].message.content);`;

  const restCode = `curl http://localhost:8080/v1/chat/completions \\
  -H "Authorization: Bearer your_hyperion_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "ollama/llama3.2:3b",
    "messages": [{"role": "user", "content": "Analyze system logs."}]
  }'`;

  return (
    <DocsLayout activeSlug="providers/ollama">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Provider</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Ollama + Hyperion</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Transform local open-source models into production-ready enterprise services. Hyperion bridges the gap between raw local compute and infrastructure-grade reliability.
          </p>
        </section>

        {/* Enterprise Value Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { l: "Traffic Control", t: "Production Limits", d: "Implement production-safe rate limits and usage quotas on local models. Prevent a single process from saturating your GPU resources." },
            { l: "Security", t: "RBAC & IAM", d: "Layer enterprise Identity and Access Management over Ollama. Control which teams or applications can access specific local models." },
            { l: "Efficiency", t: "Semantic Caching", d: "Reduce local inference load by up to 90%. Cache semantically similar queries to provide sub-millisecond responses." },
            { l: "Visibility", t: "Observability", d: "Get full traces, latency breakdowns, and token accounting for your local stack. Monitor local uptime with standard telemetry." },
          ].map((item) => (
            <div key={item.l} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Production Configuration */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-white">Production Deployment</h2>
            <p className="text-[15px] text-neutral-400 leading-7">
              Hyperion acts as a secure reverse-proxy for your Ollama instances, enabling deployment in air-gapped or high-security VPC environments.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.01] space-y-4">
            <div className="space-y-3">
              <div className="text-[10px] font-semibold tracking-[0.16em] text-emerald-400 uppercase">Architecture</div>
              <div className="text-sm font-semibold text-white">Enterprise Parity</div>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-3 text-sm text-neutral-500 font-light leading-relaxed">
                  <span className="text-emerald-500">→</span>
                  <span><strong>OpenAI Translation:</strong> Use legacy OpenAI SDKs seamlessly with any Llama, Mistral, or Gemma model.</span>
                </li>
                <li className="flex gap-3 text-sm text-neutral-500 font-light leading-relaxed">
                  <span className="text-emerald-500">→</span>
                  <span><strong>Load Balancing:</strong> Distribute traffic across multiple Ollama nodes in your k8s cluster.</span>
                </li>
                <li className="flex gap-3 text-sm text-neutral-500 font-light leading-relaxed">
                  <span className="text-emerald-500">→</span>
                  <span><strong>Zero-Trust:</strong> Terminate TLS at Hyperion and proxy to internal Ollama instances securely.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-white">Implementation</h2>
            <p className="text-[15px] text-neutral-400 leading-7">
              Switching from cloud to local-enterprise compute is a one-line change.
            </p>
          </div>
          
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
