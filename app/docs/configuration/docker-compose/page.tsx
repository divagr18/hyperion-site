"use client";

import DocsLayout from "@/components/docs/DocsLayout";
import CodeGroup from "@/components/docs/CodeGroup";

export default function DockerComposePage() {
  const composeYaml = `version: '3.8'

services:
  gateway:
    image: hyperion-ai/gateway:latest
    ports: ["8080:8080"]
    env_file: [.env]
    depends_on: [redis, postgres, qdrant, clickhouse]

  redis:
    image: redis:7-alpine
    container_name: hyperion-redis

  postgres:
    image: postgres:16-alpine
    container_name: hyperion-postgres
    environment:
      POSTGRES_DB: hyperion_db
      POSTGRES_PASSWORD: your_password

  qdrant:
    image: qdrant/qdrant:latest
    container_name: hyperion-qdrant

  clickhouse:
    image: clickhouse/clickhouse-server:24.1
    container_name: hyperion-clickhouse`;

  return (
    <DocsLayout activeSlug="configuration/docker-compose">
      <div className="space-y-8 pb-12">
        {/* Hero Section */}
        <section className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">Configuration</div>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Docker Compose</h1>
          <p className="text-[15px] text-neutral-300 leading-7 max-w-3xl">
            Deploy the complete Hyperion infrastructure including the semantic search engine, analytics layer, and audit storage in a single command.
          </p>
        </section>

        {/* Steps Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {[
            { n: "01", l: "INFRASTRUCTURE", t: "The Core Stack", d: "Hyperion requires Redis (L1), Qdrant (L2), ClickHouse (Analytics), and Postgres (Metadata) to operate at full capacity." },
            { n: "02", l: "SETUP", t: "Secrets & .env", d: "Copy .env.example to .env and generate your master secrets (ADMIN_API_KEY, CACHE_MASTER_SECRET)." },
            { n: "03", l: "ORCHESTRATION", t: "Production Build", d: "The gateway builds from source by default. Use 'docker compose up --build' for the first run." },
            { n: "04", l: "STORAGE", t: "Persistent Volumes", d: "Data is persisted across restarts via named volumes for Postgres, Redis, and Qdrant." },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="text-[10px] font-semibold tracking-[0.16em] mb-1.5 text-emerald-300 uppercase">{item.n} — {item.l}</div>
              <div className="text-sm font-semibold text-white">{item.t}</div>
              <div className="text-[13px] text-neutral-400 mt-2 font-light leading-relaxed">{item.d}</div>
            </div>
          ))}
        </section>

        {/* Compose Example */}
        <section className="space-y-4 pt-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-white">Example Specification</h2>
            <p className="text-[15px] text-neutral-400 leading-7 font-light">
              This condensed specification shows the required services. See the root <code>docker-compose.yml</code> for the full configuration.
            </p>
          </div>
          
          <CodeGroup 
            defaultLanguage="yaml"
            code={{ yaml: composeYaml }}
          >
            {{
              yaml: <pre className="text-cyan-100/85 text-[13px] leading-relaxed"><code>{composeYaml}</code></pre>
            }}
          </CodeGroup>
        </section>
      </div>
    </DocsLayout>
  );
}
