export interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: "What is Hyperion AI Gateway?",
        answer: "Hyperion AI Gateway is an enterprise-grade gateway for production LLM applications. It provides a single API layer that routes requests to multiple AI providers, optimizes latency and cost, enforces security policies, and ensures reliability through caching, failover, and load balancing."
    },
    {
        question: "What is an AI gateway?",
        answer: "An AI gateway is an infrastructure layer that sits between an application and AI model providers. It manages routing, authentication, caching, monitoring, and reliability so developers can use multiple models through a unified interface without vendor lock-in."
    },
    {
        question: "Why do production LLM applications need an AI gateway?",
        answer: "Production AI systems require reliability, cost control, security, and scalability. An AI gateway provides centralized management for these concerns, preventing outages, runaway costs, provider lock-in, and inconsistent performance."
    },
    {
        question: "How is an AI gateway different from a traditional API gateway?",
        answer: "Traditional API gateways manage REST services, while an AI gateway is designed specifically for generative AI workloads. It understands model behavior, token usage, streaming responses, provider differences, and AI-specific security risks such as prompt injection."
    },
    {
        question: "Which AI providers does Hyperion support?",
        answer: "Hyperion AI Gateway supports major commercial and open AI providers, including OpenAI, Anthropic, Google, Mistral, Groq, DeepSeek, and self-hosted models. Support varies by deployment configuration."
    },
    {
        question: "Can Hyperion route requests across multiple AI models?",
        answer: "Yes. Hyperion can route requests dynamically across multiple providers or models based on latency, cost, availability, or custom policies. This enables redundancy and performance optimization."
    },
    {
        question: "Does Hyperion prevent vendor lock-in?",
        answer: "Yes. By abstracting provider-specific APIs behind a unified interface, Hyperion allows applications to switch models or providers without code changes, reducing dependency on any single vendor."
    },
    {
        question: "How does Hyperion improve reliability?",
        answer: "Hyperion improves reliability through automatic failover, retries, load balancing, health monitoring, and multi-provider routing. If one model or provider becomes unavailable, requests can be redirected to another."
    },
    {
        question: "What happens if an AI provider goes down?",
        answer: "If a provider fails or becomes unreachable, Hyperion can automatically route requests to alternative providers or models, ensuring continuous service without manual intervention."
    },
    {
        question: "How does Hyperion reduce AI costs?",
        answer: "Hyperion reduces costs through semantic caching, model selection policies, budget controls, and analytics. Repeated or similar requests can be served from cache, and less expensive models can be used when appropriate."
    },
    {
        question: "What is semantic caching?",
        answer: "Semantic caching stores responses based on meaning rather than exact text matches. If a new request is similar to a previous one, the cached response can be reused, reducing latency and token usage."
    },
    {
        question: "Does Hyperion support streaming responses?",
        answer: "Yes. Hyperion supports real-time streaming of model outputs, enabling responsive chat interfaces and low perceived latency."
    },
    {
        question: "Can Hyperion optimize latency?",
        answer: "Hyperion optimizes latency using intelligent routing, connection reuse, caching, and infrastructure designed for high-throughput AI workloads. It can select the fastest available model automatically."
    },
    {
        question: "Does Hyperion track usage and costs?",
        answer: "Yes. Hyperion provides usage monitoring, analytics, and cost tracking across providers, enabling organizations to understand and control AI spending."
    },
    {
        question: "Can Hyperion enforce budgets or rate limits?",
        answer: "Yes. Hyperion can enforce per-user, per-application, or per-API-key limits to prevent excessive usage or unexpected costs."
    },
    {
        question: "Is it safe to send sensitive data through Hyperion?",
        answer: "Hyperion is designed with enterprise security in mind and can enforce policies such as data filtering, redaction, and access controls before requests reach external providers."
    },
    {
        question: "Does Hyperion protect against prompt injection?",
        answer: "Hyperion can apply validation and policy checks to detect or mitigate malicious inputs before forwarding requests to models, helping reduce prompt injection risks."
    },
    {
        question: "Does Hyperion store prompts or responses?",
        answer: "Storage behavior depends on deployment configuration. Hyperion can operate without persistent storage of sensitive data or with logging enabled for observability and debugging."
    },
    {
        question: "Can Hyperion be deployed on-premise?",
        answer: "Yes. Hyperion can be deployed in private cloud environments, on-premise infrastructure, or controlled networks to meet security and compliance requirements."
    },
    {
        question: "Does Hyperion support self-hosted or local models?",
        answer: "Yes. Hyperion can route requests to self-hosted models running on private infrastructure alongside commercial providers."
    },
    {
        question: "How do I integrate Hyperion into my application?",
        answer: "Hyperion exposes a unified API compatible with common LLM request formats. Applications send requests to Hyperion instead of directly to model providers."
    },
    {
        question: "Is Hyperion compatible with the OpenAI API format?",
        answer: "Hyperion can support OpenAI-style request formats, allowing many existing applications to migrate with minimal code changes."
    },
    {
        question: "Does Hyperion work with AI agent frameworks?",
        answer: "Yes. Hyperion can be used as the model access layer for agent frameworks, orchestration systems, chatbots, and copilots."
    },
    {
        question: "Who should use Hyperion AI Gateway?",
        answer: "Hyperion is designed for organizations running production AI systems, including SaaS platforms, enterprise applications, developer tools, and high-traffic consumer products."
    },
    {
        question: "Is Hyperion suitable for startups?",
        answer: "Yes. Startups can use Hyperion to avoid building complex infrastructure from scratch while retaining flexibility to scale as usage grows."
    },
    {
        question: "Can Hyperion scale to high traffic?",
        answer: "Hyperion is designed for high concurrency and large-scale workloads, making it suitable for applications serving many simultaneous users."
    },
    {
        question: "How long does it take to deploy Hyperion?",
        answer: "Deployment time depends on environment complexity, but many organizations can integrate Hyperion quickly due to its unified interface."
    },
    {
        question: "When should I use an AI gateway instead of calling model APIs directly?",
        answer: "Direct API calls may be sufficient for prototypes, but production systems benefit from an AI gateway's reliability, security, cost control, and flexibility across providers."
    },
    {
        question: "Is Hyperion open source or managed?",
        answer: "Availability depends on the product offering and deployment model. Hyperion may be provided as managed infrastructure, self-hosted software, or enterprise deployment."
    }
];

export const generateFAQSchema = (faqsList: FAQ[] = faqs) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsList.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};
