"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function SDKConfigurationPage() {
  const pyConfig = `from hyperion import Hyperion

client = Hyperion(
    api_key="your_key",
    base_url="https://api.hyperion.ai/v1",
    timeout=30.0,
    max_retries=3,
    # Additional options
    default_headers={"X-Organization-ID": "org_123"}
)`;

  const tsConfig = `import { Hyperion } from "@hyperion-ai/sdk";

const client = new Hyperion({
  apiKey: "your_key",
  baseUrl: "https://api.hyperion.ai/v1",
  timeout: 30000,
  maxRetries: 3,
  // Additional options
  defaultHeaders: {
    "X-Organization-ID": "org_123"
  }
});`;

  return (
    <DocsLayout activeSlug="sdk/configuration">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">SDK</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Configuration</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Fine-tune your Hyperion client with advanced parameters for timeouts, retries, and high-level routing intents.
          </p>
        </section>

        {/* Config Table */}
        <section className="pt-4">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-separate border-spacing-0">
                    <thead>
                        <tr className="text-neutral-500 font-medium border-b border-white/5">
                            <th className="py-3 px-2 border-b border-white/5">Parameter</th>
                            <th className="py-3 px-2 border-b border-white/5">Type</th>
                            <th className="py-3 px-2 border-b border-white/5">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-light">
                        {[
                            { p: "apiKey", t: "string", d: "Your master administration or organization-scoped key." },
                            { p: "baseUrl", t: "string", d: "The gateway endpoint (default: https://api.hyperion.ai/v1)." },
                            { p: "timeout", t: "number", d: "Maximum duration to wait for a completion (ms/sec)." },
                            { p: "maxRetries", t: "number", d: "Number of times to retry failed requests automatically." },
                            { p: "defaultHeaders", t: "Record", d: "Custom headers passed with every completion request." },
                        ].map(row => (
                            <tr key={row.p} className="group hover:bg-white/[0.01] transition-colors">
                                <td className="py-4 px-2 font-mono text-emerald-300 text-[12px]">{row.p}</td>
                                <td className="py-4 px-2 text-neutral-500 text-[11px] font-semibold uppercase tracking-wider">{row.t}</td>
                                <td className="py-4 px-2 text-neutral-400 font-light leading-relaxed">{row.d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Unified Code Section */}
        <section className="space-y-4 pt-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-white">Client Initialization</h2>
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              We recommend initializing the client once and sharing it across your application context for optimal connection pooling.
            </p>
          </div>
          
          <CodeGroup 
            defaultLanguage="python"
            code={{
                python: pyConfig,
                typescript: tsConfig,
            }}
          >
            {{
              python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pyConfig}</code></pre>,
              typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsConfig}</code></pre>,
            }}
          </CodeGroup>
        </section>
      </div>
    </DocsLayout>
  );
}
