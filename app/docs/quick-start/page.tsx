"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";
import CodeBlock from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuickStart() {
  const bootstrap = `git clone https://github.com/hyperion-hq/hyperion.git
cd hyperion-gateway
cp .env.example .env
docker compose up -d --build`;

  const envSample = `# Required for admin APIs
ADMIN_API_KEY=change_me

# Provider key (example)
OPENAI_API_KEY=your_provider_key

# Data stores
REDIS_URL=redis://redis:6379
DATABASE_URL=postgres://postgres:postgres@postgres:5432/hyperion?sslmode=disable`;

  const pythonCode = `from hyperion import HyperionClient

client = HyperionClient(
    base_url="http://localhost:8080/v1",
    api_key="sk_live_your_hyperion_key"
)

response = client.chat.completions.create(
    model="openai/gpt-4.1-mini",
    messages=[{"role": "user", "content": "Write a one-line haiku about speed."}]
)`;

  const tsCode = `import { HyperionClient } from '@hyperion-ai/sdk';

const client = new HyperionClient({
  baseURL: "http://localhost:8080/v1",
  apiKey: "sk_live_your_hyperion_key"
});

const res = await client.chat.completions.create({
  model: "openai/gpt-4.1-mini",
  messages: [{ role: "user", content: "Write a one-line haiku about speed." }]
});`;

  const restCode = `curl http://localhost:8080/v1/chat/completions \\
  -H "Authorization: Bearer sk_live_your_hyperion_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "openai/gpt-4.1-mini",
    "messages": [{"role": "user", "content": "Write a one-line haiku about speed."}]
  }'`;

  return (
    <DocsLayout activeSlug="quick-start">
      <div className="space-y-8">
        <section className="relative overflow-visible pt-1 pb-3">
          <div className="relative z-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 mb-2">
              Quick Start
            </div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3">Go Live in 3 Steps</h1>
            <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
              Stand up Hyperion locally, issue your first API call, and verify cache headers in under five minutes.
              Keep this page open while you run commands.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {[
            { n: "01", t: "Boot Gateway", d: "Clone, configure, and run containers." },
            { n: "02", t: "Send Request", d: "Use SDK or REST on /v1/chat/completions." },
            { n: "03", t: "Verify Cache", d: "Confirm X-Cache-Status and repeat latency." },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1 text-violet-300">{item.n}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-xs text-neutral-400 mt-1">{item.d}</div>
            </div>
          ))}
        </section>

        <section className="space-y-3 pt-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-violet-300 font-semibold mb-1">Step 1</div>
            <h2 className="text-2xl font-medium tracking-tight">Boot Hyperion</h2>
          </div>
          <p className="text-neutral-300 leading-7 max-w-3xl">
            Launch the stack with Docker Compose. This starts the gateway, Redis, Postgres, and supporting services.
          </p>
          <CodeBlock
            code={bootstrap}
            language="bash"
            filename="Terminal"
          />
          <CodeBlock
            code={envSample}
            language="bash"
            filename=".env"
          />
        </section>

        <section className="space-y-3 pt-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-violet-300 font-semibold mb-1">Step 2</div>
            <h2 className="text-2xl font-medium tracking-tight">Send Your First Request</h2>
          </div>
          <p className="text-neutral-300 leading-7 max-w-3xl">
            Call Hyperion with your API key. Keep your existing OpenAI-compatible request structure.
          </p>
          <CodeGroup
            defaultLanguage="python"
            code={{
              python: pythonCode,
              typescript: tsCode,
              rest: restCode
            }}
          >
            {{
              python: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{pythonCode}</code></pre>,
              typescript: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{tsCode}</code></pre>,
              rest: <pre className="text-cyan-100/85 text-xs leading-relaxed"><code>{restCode}</code></pre>
            }}
          </CodeGroup>
        </section>

        <section className="space-y-3 pt-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-violet-300 font-semibold mb-1">Step 3</div>
            <h2 className="text-2xl font-medium tracking-tight">Validate Setup</h2>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-violet-200 uppercase mb-3">
              Success Checklist
            </div>
            <div className="space-y-2 text-sm text-neutral-200">
              <div className="flex items-start gap-2.5">
                <span className="mt-[7px] block h-1.5 w-1.5 rounded-full bg-violet-300 shrink-0" />
                <span>Response status is <code className="text-emerald-300">200 OK</code>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-[7px] block h-1.5 w-1.5 rounded-full bg-violet-300 shrink-0" />
                <span><code className="text-emerald-300">X-Cache-Status</code> header appears in responses.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-[7px] block h-1.5 w-1.5 rounded-full bg-violet-300 shrink-0" />
                <span>Second identical call should return faster due to L1 exact cache.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/architecture" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Next</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Architecture</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Understand routing, caching, and gateway request flow.</p>
          </Link>
          <Link href="/docs/features/caching" className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
            <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 mb-2">Explore</div>
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Caching Deep Dive</span>
              <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-2 text-sm text-neutral-400">Exact and semantic strategies, TTL, and hit-ratio behavior.</p>
          </Link>
        </section>
      </div>
    </DocsLayout>
  );
}
