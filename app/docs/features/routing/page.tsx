"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function SmartRoutingPage() {
  const pySmartCode = `from hyperion import Hyperion

client = Hyperion()

# Setting smart_routing=True enables intelligent prompt evaluation.
# The gateway analyzes complexity in real-time and routes accordingly.
response = client.chat.completions.create(
    model="gpt-5.2",
    messages=[{"role": "user", "content": "Analyze this dataset."}],
    extra_body={
        "smart_routing": True
    }
)`;

  const tsSmartCode = `import { Hyperion } from "@hyperion-ai/sdk";

const client = new Hyperion();

// Setting smart_routing=true enables intelligent prompt evaluation.
// The gateway analyzes complexity in real-time and routes accordingly.
const response = await client.chat.completions.create({
  model: "gpt-5.2",
  messages: [{ role: "user", content: "Analyze this dataset." }],
  // @ts-ignore - OpenAI accepts custom properties via extra_body
  extra_body: {
    smart_routing: true
  }
});`;

  const pyAutoCode = `from hyperion import Hyperion

client = Hyperion()

# 'auto' is a shorthand that inherently triggers smart routing 
# across all allowed providers without pinning a specific model.
response = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "What is the capital of France?"}]
)`;

  const tsAutoCode = `import { Hyperion } from "@hyperion-ai/sdk";

const client = new Hyperion();

// 'auto' is a shorthand that inherently triggers smart routing 
// across all allowed providers without pinning a specific model.
const response = await client.chat.completions.create({
  model: "auto",
  messages: [{ role: "user", content: "What is the capital of France?" }]
});`;

  const pyFallbackCode = `from hyperion import Hyperion

client = Hyperion()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Generate a report."}],
    # Use the hyperion config block to define fallbacks
    hyperion={
        "fallbacks": ["gpt-4o-mini", "claude-haiku-4-5"]
    }
)`;

  const tsFallbackCode = `import { Hyperion } from "@hyperion-ai/sdk";

const client = new Hyperion();

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Generate a report." }],
  // Use the hyperion config block to define fallbacks
  hyperion: {
    fallbacks: ["gpt-4o-mini", "claude-haiku-4-5"]
  }
});`;

  return (
    <DocsLayout activeSlug="features/routing">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Features</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Routing & Orchestration</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Hyperion's gateway intelligently orchestrates LLM traffic. It evaluates prompt complexity in real-time to optimize model selection, and provides robust fallback mechanisms for seamless high availability.
          </p>
        </section>

        {/* Content Flow */}
        <section className="space-y-12 pt-4">
          
          {/* Intelligent Orchestration */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">Smart Routing</h2>
            
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              <strong className="text-white font-semibold">By default, Hyperion acts as a strict passthrough proxy. If you request a specific model, the gateway strictly honors that choice.</strong> However, by enabling <code>smart_routing</code> in the request body, the gateway's intelligence engine activates.
            </p>

            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              When enabled, Hyperion analyzes the structural complexity of the prompt—such as detecting code generation, mathematical derivations, or massive contexts length. If the requested model is overkill for a simple task, Hyperion automatically routes the request to a cheaper, faster alternative within the same provider family, saving compute budget without sacrificing quality. 
            </p>

            <CodeGroup 
              defaultLanguage="python"
              code={{
                  python: pySmartCode,
                  typescript: tsSmartCode,
              }}
            >
              {{
                python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pySmartCode}</code></pre>,
                typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsSmartCode}</code></pre>,
              }}
            </CodeGroup>
          </div>

          {/* Auto Model Mode */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">Auto Model</h2>
            
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              If your system architecture handles highly diverse user queries and you do not want to pin a specific model at all, you can use the <code>auto</code> model shorthand. Passing <code>auto</code> implicitly enables smart routing across <em>all</em> available providers.
            </p>

            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Hyperion will evaluate the prompt against organizational budget constraints and model capabilities, dynamically choosing between providers like OpenAI, Google, or Anthropic to execute the transaction with maximum efficiency.
            </p>

            <CodeGroup 
              defaultLanguage="python"
              code={{
                  python: pyAutoCode,
                  typescript: tsAutoCode,
              }}
            >
              {{
                python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pyAutoCode}</code></pre>,
                typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsAutoCode}</code></pre>,
              }}
            </CodeGroup>
          </div>

          {/* Fallbacks */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">Fallback Execution</h2>
            
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Completely separate from optimal model selection, Hyperion offers robust high-availability via Fallbacks. Defined in the native <code>hyperion</code> configuration block, an array of fallback models acts as a safety net. 
            </p>

            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              If the primary model experiences a provider outage, or if executing the primary model would exceed your immediate token budget, Hyperion seamlessly redirects the request down the fallback chain to prevent total system failure and maintain uptime for your end-users.
            </p>

            <CodeGroup 
              defaultLanguage="python"
              code={{
                  python: pyFallbackCode,
                  typescript: tsFallbackCode,
              }}
            >
              {{
                python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pyFallbackCode}</code></pre>,
                typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsFallbackCode}</code></pre>,
              }}
            </CodeGroup>
          </div>

          {/* Model Normalization */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">Model Normalization</h2>
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Hyperion automatically normalizes shorthand models or generic aliases. For instance, requesting <code>gpt-4o</code> will automatically resolve to the latest available semantic deployment mapped on the provider's end. This ensures your prompts reliably hit the correct upstream model across different environments.
            </p>
          </div>

        </section>
      </div>
    </DocsLayout>
  );
}
