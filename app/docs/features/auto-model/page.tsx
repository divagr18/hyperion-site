"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function AutoModelPage() {
  const curlCode = `curl -X POST "https://gateway.hyperionhq.co/v1/chat/completions" \\
  -H "Authorization: Bearer $HYPERION_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "What is the capital of France?"}
    ]
  }'`;

  const pyCode = `from hyperion import HyperionClient

client = HyperionClient()

# Pass 'auto' to let Hyperion evaluate the prompt and select the
# optimal model based on organizational budgets and complexity.
response = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "What is the capital of France?"}]
)`;

  const tsCode = `import { HyperionClient } from "@hyperion-ai/sdk";

const client = new HyperionClient();

// Pass 'auto' to let Hyperion evaluate the prompt and select the
// optimal model based on organizational budgets and complexity.
const response = await client.chat.completions.create({
  model: "auto",
  messages: [{ role: "user", content: "What is the capital of France?" }]
});`;

  return (
    <DocsLayout activeSlug="features/auto-model">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Features</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Auto Model Selection</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Offload the decision-making process directly to Hyperion. Auto Mode dynamically chooses the most appropriate foundational model for each prompt, balancing cost, latency, and required reasoning capabilities across all allowed providers.
          </p>
        </section>

        {/* Content Flow */}
        <section className="space-y-12 pt-4">
          
          {/* How It Works */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">How It Works</h2>
            
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              When you pass <code>auto</code> as the model string in your API request, the Hyperion Intelligence Engine intercepts the prompt before routing it to any provider. The engine performs a microscopic, sub-millisecond structural analysis of the text.
            </p>

            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Hyperion evaluates several dimensions simultaneously:
              <br/>
              • <strong>Prompt Complexity:</strong> Is the user asking a simple factual question, or does the prompt involve complex code generation, mathematical derivations, or JSON structuring?
              <br/>
              • <strong>Context Length:</strong> How massive is the input payload? Extremely large contexts require different provider routing to optimize costs.
              <br/>
              • <strong>Budget Awareness:</strong> Tightly integrated with the billing module, Auto Mode will aggressively favor cheaper models if the active tenant is approaching their configured monthly or daily spend limits.
            </p>

            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Based on this analysis, simple tasks like summarization are automatically routed to lightning-fast, highly economical models (like Gemini Flash or Claude Haiku). Conversely, complex analytical queries are escalated to frontier models (like GPT-4o or Claude 3.5 Sonnet), ensuring you never overpay for basic compute.
            </p>
          </div>

          {/* Implementation */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white border-b border-white/5 pb-2">Implementation</h2>
            
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              Using Auto Model Selection requires zero configuration on the client side. Simply inject <code>auto</code> as the model string. The gateway handles the upstream provider translation transparently and returns the response in standard OpenAI-compatible format.
            </p>

            <CodeGroup 
              defaultLanguage="rest"
              code={{
                  rest: curlCode,
                  python: pyCode,
                  typescript: tsCode,
              }}
            >
              {{
                rest: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{curlCode}</code></pre>,
                python: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{pyCode}</code></pre>,
                typescript: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{tsCode}</code></pre>,
              }}
            </CodeGroup>
          </div>

        </section>
      </div>
    </DocsLayout>
  );
}
