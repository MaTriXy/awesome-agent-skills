# Awesome Agent Skills

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md)

A curated list of skills, tools, and capabilities for AI coding agents. Unlike bulk-generated skill repositories, this collection focuses on real-world Agent Skills created and used by actual engineering teams.

Compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, Windsurf, and more.

---

## Table of Contents

- [What Are Agent Skills?](#what-are-agent-skills)
- [How to Find Skills (Recommended)](#how-to-find-skills-recommended)
- [Compatible Agents](#compatible-agents)
- [Official Skill Directories](#official-skill-directories)
  - [AI Platforms & Models](#ai-platforms--models)
    - [Official Claude Skills](#official-claude-skills)
    - [Skills by OpenAI (Codex)](#skills-by-openai)
    - [Skills by Google Gemini](#skills-by-google-gemini)
    - [Skills by Hugging Face](#skills-by-hugging-face)
    - [Skills by Replicate](#skills-by-replicate)
    - [Skills by fal.ai](#skills-by-falai)
    - [Skills by MiniMax](#skills-by-minimax)
  - [Cloud & Infrastructure](#cloud--infrastructure)
    - [Skills by Cloudflare](#skills-by-cloudflare)
    - [Skills by Netlify](#skills-by-netlify)
    - [Skills by Vercel](#skills-by-vercel)
    - [Skills by HashiCorp (Terraform)](#skills-by-hashicorp)
    - [Skills by Neon](#skills-by-neon)
    - [Skill by ClickHouse](#skill-by-clickhouse)
    - [Skills by Supabase](#skills-by-supabase)
    - [Skills by Tinybird](#skills-by-tinybird)
  - [Developer Tools & Frameworks](#developer-tools--frameworks)
    - [Skills by VoltAgent](#skills-by-voltagent)
    - [Skills by CallStack](#skills-by-callstack)
    - [Skills by Expo](#skills-by-expo)
    - [Skills by Remotion](#skills-by-remotion)
    - [Skills by GSAP](#skills-by-gsap)
    - [Skills by DuckDB](#skills-by-duckdb)
    - [Skills by WordPress](#skills-by-wordpress)
    - [Skills by Figma](#skills-by-figma)
  - [Google Ecosystem](#google-ecosystem)
    - [Skills by Google Labs (Stitch)](#skills-by-google-labs-stitch)
    - [Skills by Google Workspace CLI](#skills-by-google-workspace-cli)
  - [Business, Productivity & Marketing](#business-productivity--marketing)
    - [Skills by Stripe](#skills-by-stripe)
    - [Skills by Courier](#skills-by-courier)
    - [Skills by Typefully](#skills-by-typefully)
    - [Skills by Composio](#skills-by-composio)
    - [Skills by Notion](#skills-by-notion)
    - [Skills by Resend](#skills-by-resend)
    - [Skills by Sanity](#skills-by-sanity)
    - [Skills by Better Auth](#skills-by-better-auth)
    - [Marketing Skills by Corey Haines](#marketing-skills-by-corey-haines)
    - [Product Manager Skills by Dean Peters](#product-manager-skills-by-dean-peters)
    - [Product Management Skills by Pawel Huryn](#product-management-skills-by-pawel-huryn)
    - [Skills by Garry Tan (gstack)](#skills-by-garry-tan-gstack)
  - [Security & Web Intelligence](#security--web-intelligence)
    - [Skills by Trail of Bits](#skills-by-trail-of-bits)
    - [Skills by Sentry](#skills-by-sentry)
    - [Skills by Firecrawl](#skills-by-firecrawl)
    - [Skills by Microsoft](#skills-by-microsoft)
    - [Skills by Binance](#skills-by-binance)
- [Community Skills](#community-skills)
- [Skill Quality Standards](#skill-quality-standards)
- [Using Skills](#using-skills)
- [Creating Skills](#creating-skills)
- [Official Tutorials and Guides](#official-tutorials-and-guides)
- [Additional Vendor Repositories](#additional-vendor-repositories)
- [Trends & Capabilities (2026)](#trends--capabilities-2026)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Contributing](#contributing)
- [License](#license)

---

## What Are Agent Skills?

Think of **Agent Skills** as "how-to guides" for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly — like giving someone a recipe card instead of making them memorize an entire cookbook.

Skills are simple text files (called `SKILL.md`) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.

### How It Works

Skills load in three stages:

1. **Browse** — The AI sees a list of available skills (just names and short descriptions)
2. **Load** — When a skill is needed, the AI reads the full instructions
3. **Use** — The AI follows the instructions and accesses any helper files

### Why This Matters

- **Faster and lighter** — The AI only loads what it needs, when it needs it
- **Works everywhere** — Create a skill once, use it with any compatible AI tool
- **Easy to share** — Skills are just files you can copy, download, or share on GitHub

Skills are **instructions**, not code. The AI reads them like a human would read a guide, then follows the steps.

---

## How to Find Skills (Recommended)

### SkillsMP Marketplace

It is recommended to use the **[SkillsMP Marketplace](https://skillsmp.com)**, which automatically indexes all Skill projects on GitHub and organizes them by category, update time, star count, and other tags — making it the easiest way to discover and evaluate skills.

### skills.sh Leaderboard by Vercel

You can also use **[skills.sh](https://skills.sh)** — Vercel's leaderboard — to intuitively view the most popular Skills repositories and individual Skill usage statistics.

### npx skills CLI Tool

For specific skills, use the `npx skills` command-line tool to quickly discover, add, and manage skills. For detailed parameters, see [vercel-labs/skills](https://github.com/vercel-labs/skills).

```bash
npx skills find [query]            # Search for related skills
npx skills add <owner/repo>        # Install skills (supports GitHub shorthand, full URL, local path)
npx skills list                    # List installed skills
npx skills check                   # Check for available updates
npx skills update                  # Upgrade all skills
npx skills remove [skill-name]     # Uninstall skills
```

---

## Compatible Agents

| Agent | Documentation |
|-------|---------------|
| Claude Code | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| Claude.ai | [support.claude.com](https://support.claude.com/en/articles/12512180-using-skills-in-claude) |
| Codex (OpenAI) | [developers.openai.com](https://developers.openai.com/codex/skills) |
| GitHub Copilot | [docs.github.com](https://docs.github.com/copilot/concepts/agents/about-agent-skills) |
| VS Code | [code.visualstudio.com](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |
| Antigravity | [antigravity.google](https://antigravity.google/docs/skills) |
| Kiro | [kiro.dev](https://kiro.dev/docs/skills/) |
| Gemini CLI | [geminicli.com](https://geminicli.com/docs/cli/skills/) |
| Junie | [junie.jetbrains.com](https://junie.jetbrains.com/docs/agent-skills.html) |

---

## Official Skill Directories

### AI Platforms & Models

#### Official Claude Skills

Claude provides built-in skills for common document types and workflows. Install from [anthropics/skills](https://github.com/anthropics/skills).

| Skill | Description |
|-------|-------------|
| [docx](https://github.com/anthropics/skills/tree/main/docx) | Create, edit, analyze Word documents with tracked changes |
| [xlsx](https://github.com/anthropics/skills/tree/main/xlsx) | Spreadsheet manipulation: formulas, charts, data transformations |
| [pptx](https://github.com/anthropics/skills/tree/main/pptx) | Read, generate, and adjust slides, layouts, templates |
| [pdf](https://github.com/anthropics/skills/tree/main/pdf) | Extract text, tables, metadata from PDFs |
| [algorithmic-art](https://github.com/anthropics/skills/tree/main/algorithmic-art) | Create generative art using p5.js with seeded randomness |
| [canvas-design](https://github.com/anthropics/skills/tree/main/canvas-design) | Design visual art in PNG and PDF formats |
| [frontend-design](https://github.com/anthropics/skills/tree/main/frontend-design) | Frontend design and UI/UX development tools |
| [webapp-testing](https://github.com/anthropics/skills/tree/main/webapp-testing) | Test local web applications using Playwright |
| [mcp-builder](https://github.com/anthropics/skills/tree/main/mcp-builder) | Create MCP servers to integrate external APIs and services |
| [skill-creator](https://github.com/anthropics/skills/tree/main/skill-creator) | Guide for creating skills that extend Claude's capabilities |

#### Skills by OpenAI (Codex)

Codex supports skills at different scopes from [openai/skills](https://github.com/openai/skills):

| Scope | Location | Use |
|-------|----------|-----|
| REPO | `$CWD/.codex/skills` | Skills for a working folder |
| REPO | `$REPO_ROOT/.codex/skills` | Root skills for everyone using the repo |
| USER | `~/.codex/skills` | Personal skills across any repository |
| ADMIN | `/etc/codex/skills` | Default admin skills |
| SYSTEM | Bundled with Codex | Built-ins like `skill-creator` and `plan` |

#### Skills by Google Gemini

Install from [google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills).

| Skill | Description |
|-------|-------------|
| [gemini-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/gemini-api-dev) | Best practices for developing Gemini-powered apps |
| [vertex-ai-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/vertex-ai-api-dev) | Developing Gemini-powered apps on Google Cloud Vertex AI |
| [gemini-live-api-dev](https://github.com/google-gemini/gemini-skills/tree/main/gemini-live-api-dev) | Building real-time bidirectional streaming apps with the Gemini Live API |
| [gemini-interactions-api](https://github.com/google-gemini/gemini-skills/tree/main/gemini-interactions-api) | Building apps with the Gemini Interactions API |

#### Skills by Hugging Face

Install from [huggingface/skills](https://github.com/huggingface/skills).

| Skill | Description |
|-------|-------------|
| [hf-cli](https://github.com/huggingface/skills/tree/main/hf-cli) | HF CLI tool for Hub operations |
| [hf-dataset-creator](https://github.com/huggingface/skills/tree/main/hf-dataset-creator) | Create structured training datasets |
| [hf-model-evaluation](https://github.com/huggingface/skills/tree/main/hf-model-evaluation) | Orchestrate evaluation jobs and generate reports |
| [hf-llm-trainer](https://github.com/huggingface/skills/tree/main/hf-llm-trainer) | Train models with TRL: SFT, DPO, GRPO, GGUF conversion |
| [hf-paper-publisher](https://github.com/huggingface/skills/tree/main/hf-paper-publisher) | Publish and manage research papers on Hugging Face Hub |

#### Skills by Replicate

Install from [replicate/skills](https://github.com/replicate/skills).

| Skill | Description |
|-------|-------------|
| [replicate](https://github.com/replicate/skills) | Discover, compare, and run AI models using Replicate's API |

#### Skills by fal.ai

| Skill | Description |
|-------|-------------|
| [fal-ai](https://github.com/fal-ai/skills) | Run AI inference, image generation, and video models via fal.ai |

#### Skills by MiniMax

| Skill | Description |
|-------|-------------|
| [minimax-skills](https://github.com/MiniMax-AI/skills) | MiniMax model API usage, video generation, and multimodal integration |

---

### Cloud & Infrastructure

#### Skills by Cloudflare

Install from [cloudflare/skills](https://github.com/cloudflare/skills).

| Skill | Description |
|-------|-------------|
| [agents-sdk](https://github.com/cloudflare/skills/tree/main/agents-sdk) | Build stateful AI agents with scheduling, RPC, and MCP servers |
| [building-ai-agent-on-cloudflare](https://github.com/cloudflare/skills/tree/main/building-ai-agent-on-cloudflare) | Build AI agents with state and WebSockets on Cloudflare |
| [building-mcp-server-on-cloudflare](https://github.com/cloudflare/skills/tree/main/building-mcp-server-on-cloudflare) | Build remote MCP servers with tools and OAuth |
| [durable-objects](https://github.com/cloudflare/skills/tree/main/durable-objects) | Stateful coordination with RPC, SQLite, and WebSockets |
| [wrangler](https://github.com/cloudflare/skills/tree/main/wrangler) | Deploy and manage Workers, KV, R2, D1, Vectorize, Queues, Workflows |

#### Skills by Netlify

| Skill | Description |
|-------|-------------|
| [netlify-functions](https://github.com/netlify/skills/tree/main/netlify-functions) | Build serverless API endpoints and background tasks |
| [netlify-edge-functions](https://github.com/netlify/skills/tree/main/netlify-edge-functions) | Low-latency edge middleware and geolocation logic |
| [netlify-db](https://github.com/netlify/skills/tree/main/netlify-db) | Managed Postgres with deploy preview branching |
| [netlify-ai-gateway](https://github.com/netlify/skills/tree/main/netlify-ai-gateway) | Access AI models via unified gateway endpoint |
| [netlify-cli-and-deploy](https://github.com/netlify/skills/tree/main/netlify-cli-and-deploy) | CLI setup, local dev, and deployment workflows |

#### Skills by Vercel

Install from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills).

| Skill | Description |
|-------|-------------|
| [react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/react-best-practices) | React best practices and patterns |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/web-design-guidelines) | Web design guidelines and standards |
| [next-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/next-best-practices) | Next.js best practices and recommended patterns |
| [next-cache-components](https://github.com/vercel-labs/agent-skills/tree/main/next-cache-components) | Caching strategies and cache-aware components in Next.js |
| [next-upgrade](https://github.com/vercel-labs/agent-skills/tree/main/next-upgrade) | Upgrade Next.js projects to newer versions |

#### Skills by HashiCorp (Terraform)

Install from [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills).

| Skill | Description |
|-------|-------------|
| [new-terraform-provider](https://github.com/hashicorp/agent-skills/tree/main/new-terraform-provider) | Scaffold a new Terraform provider project |
| [provider-resources](https://github.com/hashicorp/agent-skills/tree/main/provider-resources) | Implement Terraform Provider resources and data sources |
| [provider-test-patterns](https://github.com/hashicorp/agent-skills/tree/main/provider-test-patterns) | Acceptance test patterns for Terraform providers |
| [refactor-module](https://github.com/hashicorp/agent-skills/tree/main/refactor-module) | Transform monolithic Terraform configurations into reusable modules |
| [terraform-style-guide](https://github.com/hashicorp/agent-skills/tree/main/terraform-style-guide) | Generate Terraform HCL following HashiCorp style conventions |

#### Skills by Neon

Install from [neondatabase/skills](https://github.com/neondatabase/skills).

| Skill | Description |
|-------|-------------|
| [neon-postgres](https://github.com/neondatabase/skills/tree/main/neon-postgres) | Best practices for Neon Serverless Postgres |
| [claimable-postgres](https://github.com/neondatabase/skills/tree/main/claimable-postgres) | Claimable Postgres database provisioning with Neon |

#### Skill by ClickHouse

Install from [ClickHouse/agent-skills](https://github.com/ClickHouse/agent-skills).

| Skill | Description |
|-------|-------------|
| [clickhouse-best-practices](https://github.com/ClickHouse/agent-skills/tree/main/clickhouse-best-practices) | Best practices for working with ClickHouse |

#### Skills by Supabase

Install from [supabase/agent-skills](https://github.com/supabase/agent-skills).

| Skill | Description |
|-------|-------------|
| [postgres-best-practices](https://github.com/supabase/agent-skills/tree/main/postgres-best-practices) | PostgreSQL best practices for Supabase |

#### Skills by Tinybird

| Skill | Description |
|-------|-------------|
| [tinybird-best-practices](https://github.com/tinybirdco/skills/tree/main/tinybird-best-practices) | Tinybird project guidelines for datasources, pipes, endpoints, and SQL |
| [tinybird-cli-guidelines](https://github.com/tinybirdco/skills/tree/main/tinybird-cli-guidelines) | Tinybird CLI usage guidelines and commands |
| [tinybird-python-sdk-guidelines](https://github.com/tinybirdco/skills/tree/main/tinybird-python-sdk-guidelines) | Tinybird Python SDK usage guidelines |
| [tinybird-typescript-sdk-guidelines](https://github.com/tinybirdco/skills/tree/main/tinybird-typescript-sdk-guidelines) | Tinybird TypeScript SDK usage guidelines |

---

### Developer Tools & Frameworks

#### Skills by VoltAgent

Official skills for building AI agents with the VoltAgent TypeScript framework. Install from [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills).

| Skill | Description |
|-------|-------------|
| [create-voltagent](https://github.com/VoltAgent/awesome-agent-skills/tree/main/.claude/skills/create-voltagent) | Project setup guide with CLI and manual steps |
| [voltagent-best-practices](https://github.com/VoltAgent/awesome-agent-skills/tree/main/.claude/skills/voltagent-best-practices) | Architecture and usage patterns for agents, workflows, memory, and servers |
| [voltagent-core-reference](https://github.com/VoltAgent/awesome-agent-skills/tree/main/.claude/skills/voltagent-core-reference) | Reference for the VoltAgent class options and lifecycle methods |
| [voltagent-docs-bundle](https://github.com/VoltAgent/awesome-agent-skills/tree/main/.claude/skills/voltagent-docs-bundle) | Version-matched embedded docs from @voltagent/core |

#### Skills by CallStack

| Skill | Description |
|-------|-------------|
| [react-native-best-practices](https://github.com/callstackincubator/skills/tree/main/react-native-best-practices) | Performance optimization for React Native apps |
| [github](https://github.com/callstackincubator/skills/tree/main/github) | GitHub workflow patterns for PRs, code review, branching |
| [upgrading-react-native](https://github.com/callstackincubator/skills/tree/main/upgrading-react-native) | React Native upgrade workflow: templates, dependencies, and pitfalls |

#### Skills by Expo

Install from [expo/skills](https://github.com/expo/skills).

| Skill | Description |
|-------|-------------|
| [building-native-ui](https://github.com/expo/skills/tree/main/building-native-ui) | Build apps with Expo Router, styling, components, navigation, and animations |
| [expo-api-routes](https://github.com/expo/skills/tree/main/expo-api-routes) | Create API routes in Expo Router with EAS Hosting |
| [expo-deployment](https://github.com/expo/skills/tree/main/expo-deployment) | Deploy Expo apps to production |
| [expo-tailwind-setup](https://github.com/expo/skills/tree/main/expo-tailwind-setup) | Set up Tailwind CSS v4 in Expo with NativeWind v5 |
| [upgrading-expo](https://github.com/expo/skills/tree/main/upgrading-expo) | Upgrade Expo SDK versions |

#### Skills by Remotion

Install from [remotion-dev/skills](https://github.com/remotion-dev/skills).

| Skill | Description |
|-------|-------------|
| [remotion](https://github.com/remotion-dev/skills) | Programmatic video creation with React |

#### Skills by GSAP

| Skill | Description |
|-------|-------------|
| [gsap-skills](https://github.com/greensock/gsap-skills) | GSAP animation libraries, ScrollTrigger, and timeline management |

#### Skills by DuckDB

| Skill | Description |
|-------|-------------|
| [duckdb-skills](https://github.com/duckdb/skills) | DuckDB SQL patterns, in-process analytics, and Parquet file handling |

#### Skills by WordPress

Install from [WordPress/agent-skills](https://github.com/WordPress/agent-skills).

| Skill | Description |
|-------|-------------|
| [agent-skills](https://github.com/WordPress/agent-skills) | WordPress development, block editor, and plugin authoring skills |

#### Skills by Figma

| Skill | Description |
|-------|-------------|
| [figma](https://github.com/figma/skills) | Design token extraction, component documentation, and Dev Mode workflows |

---

### Google Ecosystem

#### Skills by Google Labs (Stitch)

Agent Skills for the Stitch MCP server, compatible with Claude Code, Gemini CLI, Cursor, and more. Install from [google-labs-code/skills](https://github.com/google-labs-code/skills).

| Skill | Description |
|-------|-------------|
| [design-md](https://github.com/google-labs-code/skills/tree/main/design-md) | Create and manage DESIGN.md files |
| [enhance-prompt](https://github.com/google-labs-code/skills/tree/main/enhance-prompt) | Improve prompts with design specs and UI/UX vocabulary |
| [react-components](https://github.com/google-labs-code/skills/tree/main/react-components) | Stitch to React components conversion |
| [shadcn-ui](https://github.com/google-labs-code/skills/tree/main/shadcn-ui) | Build UI components with shadcn/ui |
| [stitch-loop](https://github.com/google-labs-code/skills/tree/main/stitch-loop) | Iterative design-to-code feedback loop |

#### Skills by Google Workspace CLI

Official Google Workspace CLI skills for managing Google Workspace services via the `gws` CLI tool. Install from [googleworkspace/skills](https://github.com/googleworkspace/skills).

| Skill | Description |
|-------|-------------|
| [gws-drive](https://github.com/googleworkspace/skills/tree/main/gws-drive) | Manage Google Drive files, folders, and shared drives |
| [gws-sheets](https://github.com/googleworkspace/skills/tree/main/gws-sheets) | Read and write Google Sheets spreadsheets |
| [gws-gmail](https://github.com/googleworkspace/skills/tree/main/gws-gmail) | Send, read, and manage Gmail email |
| [gws-calendar](https://github.com/googleworkspace/skills/tree/main/gws-calendar) | Manage Google Calendar calendars and events |
| [gws-docs](https://github.com/googleworkspace/skills/tree/main/gws-docs) | Read and write Google Docs documents |
| [gws-chat](https://github.com/googleworkspace/skills/tree/main/gws-chat) | Manage Google Chat spaces and messages |
| [gws-workflow](https://github.com/googleworkspace/skills/tree/main/gws-workflow) | Cross-service Google Workspace productivity workflows |

---

### Business, Productivity & Marketing

#### Skills by Stripe

Install from [stripe/ai](https://github.com/stripe/ai).

| Skill | Description |
|-------|-------------|
| [stripe-best-practices](https://github.com/stripe/ai/tree/main/stripe-best-practices) | Best practices for building Stripe integrations |
| [upgrade-stripe](https://github.com/stripe/ai/tree/main/upgrade-stripe) | Upgrade Stripe SDK and API versions |

#### Skills by Courier

| Skill | Description |
|-------|-------------|
| [courier-skills](https://github.com/trycourier/courier-skills) | Multi-channel notifications via email, SMS, push, and chat |

#### Skills by Typefully

| Skill | Description |
|-------|-------------|
| [typefully](https://github.com/typefully/skills) | Create, schedule, and publish social media content across X, LinkedIn, Threads, Bluesky, and Mastodon |

#### Skills by Composio

| Skill | Description |
|-------|-------------|
| [composio](https://github.com/composiohq/composio/tree/main/skills) | Connect AI agents to 1000+ external apps with managed authentication |

#### Skills by Notion

| Skill | Description |
|-------|-------------|
| [skills](https://github.com/makenotion/skills) | Notion API integration, database operations, and content management |

#### Skills by Resend

| Skill | Description |
|-------|-------------|
| [resend-skills](https://github.com/resend/skills) | Transactional email sending, templates, and domain configuration |

#### Skills by Sanity

Install from [sanity-io/agent-toolkit](https://github.com/sanity-io/agent-toolkit).

| Skill | Description |
|-------|-------------|
| [sanity-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/sanity-best-practices) | Best practices for Sanity Studio, GROQ queries, and content workflows |
| [content-modeling-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/content-modeling-best-practices) | Guidelines for designing scalable content models in Sanity |
| [seo-aeo-best-practices](https://github.com/sanity-io/agent-toolkit/tree/main/seo-aeo-best-practices) | SEO and answer engine optimization patterns for content sites |

#### Skills by Better Auth

Install from [better-auth/skills](https://github.com/better-auth/skills).

| Skill | Description |
|-------|-------------|
| [best-practices](https://github.com/better-auth/skills/tree/main/best-practices) | Best practices for Better Auth integration |
| [explain-error](https://github.com/better-auth/skills/tree/main/explain-error) | Explain Better Auth error messages |
| [create-auth](https://github.com/better-auth/skills/tree/main/create-auth) | Create authentication setup with Better Auth |
| [twoFactor](https://github.com/better-auth/skills/tree/main/twoFactor) | Two-factor authentication with Better Auth |

#### Marketing Skills by Corey Haines

| Skill | Description |
|-------|-------------|
| [agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills) | 18 go-to-market skills: pricing, outbound, SEO, ads, retention, and ops |

#### Product Manager Skills by Dean Peters

| Skill | Description |
|-------|-------------|
| [pm-skills](https://github.com/product-on-purpose/pm-skills) | 24 product management skills covering discovery, definition, delivery, and optimization |

#### Product Management Skills by Pawel Huryn

| Skill | Description |
|-------|-------------|
| [pm-skills-huryn](https://github.com/product-on-purpose/pm-skills) | Advanced product management frameworks, OKRs, and strategy skills |

#### Skills by Garry Tan (gstack)

| Skill | Description |
|-------|-------------|
| [gstack](https://github.com/garrytan/gstack) | YC founder stack recommendations for infra, tooling, and deployment |

---

### Security & Web Intelligence

#### Skills by Trail of Bits

| Skill | Description |
|-------|-------------|
| [safe-encryption-skill](https://github.com/grittygrease/safe-encryption-skill) | Modern encryption alternative to GPG/PGP with post-quantum support |
| [threat-hunting](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) | Hunt for threats using Sigma detection rules |

#### Skills by Sentry

Install from [getsentry/skills](https://github.com/getsentry/skills).

| Skill | Description |
|-------|-------------|
| [sentry-skills](https://github.com/getsentry/skills) | Debug errors, performance issues, and traces directly with Sentry integration |

#### Skills by Firecrawl

Install from [firecrawl/cli](https://github.com/firecrawl/cli).

| Skill | Description |
|-------|-------------|
| [firecrawl-cli](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-cli) | Scrape, crawl, search, and map the web via CLI |
| [firecrawl-agent](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-agent) | AI agent for autonomous web scraping and data extraction |
| [firecrawl-scrape](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-scrape) | Scrape web pages and extract content |
| [firecrawl-search](https://github.com/firecrawl/cli/tree/main/skills/firecrawl-search) | Search the web and extract results |

#### Skills by Microsoft

Install from [microsoft/agent-skills](https://github.com/microsoft/agent-skills).

| Skill | Description |
|-------|-------------|
| [agent-skills](https://github.com/microsoft/agent-skills) | Official Microsoft agent skills collection |

#### Skills by Binance

| Skill | Description |
|-------|-------------|
| [kyberswap-skills](https://github.com/kybernetwork/kyberswap-skills) | Token swap quotes and transactions across 18 EVM chains |

---

## Community Skills

Community-maintained skills and collections (verify before use):

### Skill Collections

| Repository | Description |
|------------|-------------|
| [anthropics/skills](https://github.com/anthropics/skills) | Official Anthropic collection (document editing, data analysis) |
| [openai/skills](https://github.com/openai/skills) | Official OpenAI Codex skills catalog |
| [huggingface/skills](https://github.com/huggingface/skills) | HuggingFace skills (compatible with Claude, Codex, Gemini) |
| [skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills) | SkillCreator.ai collection with CLI installer |
| [agentskill.sh](https://agentskill.sh) | 44k+ skills directory with security scanning and `/learn` installer |
| [TutuoAI](https://www.tutuoai.com/) | Agent-native marketplace for skills, tools, and workflow blueprints |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | 50+ verified skills for Claude Code and Claude.ai |
| [uxuiprinciples/agent-skills](https://github.com/uxuiprinciples/agent-skills) | 5 UX/UI skills: evaluate interfaces against 168 research-backed principles |
| [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | npm-like CLI for skills — aggregates 177+ skills from 24 providers |
| [gotalab/skillport](https://github.com/gotalab/skillport) | Skills distribution via CLI or MCP |
| [kukapay/crypto-skills](https://github.com/kukapay/crypto-skills) | Cryptocurrency, web3 and blockchain skills |
| [browser-act/skills](https://github.com/browser-act/skills) | 22 browser automation skills for structured data extraction |
| [noizai/skills](https://github.com/noizai/skills) | Voice-first skills: TTS with SRT dubbing and companion voice presets |

### Development & Code Tools

| Skill | Description |
|-------|-------------|
| [aws-skills](https://github.com/zxkane/aws-skills) | AWS development with CDK best practices |
| [D3.js Visualization](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | D3 charts and interactive data visualizations |
| [Playwright Automation](https://github.com/lackeyjb/playwright-skill) | Browser automation for testing web apps |
| [iOS Simulator](https://github.com/conorluddy/ios-simulator-skill) | Interact with iOS Simulator for testing |
| [SwiftUI Skills](https://github.com/ameyalambat128/swiftui-skills) | Apple-authored SwiftUI and platform guidance extracted from Xcode |
| [rule-porter](https://github.com/nedcodes-ok/rule-porter) | Convert AI IDE rules between Cursor, CLAUDE.md, AGENTS.md, Copilot, and Windsurf |
| [AppDeploy](https://github.com/AppDeploy-AI/skills) | Deploy apps with full stack and get a live URL back |
| [Dart/Flutter](https://github.com/Wreos/mobile-app-developer/tree/main/platforms/Flutter/skills) | Community Flutter skills for implementation, testing, and release workflows |
| [rule-gen](https://github.com/nedcodes-ok/rule-gen) | Generate AI coding rules from your codebase using Google Gemini |

### Data & Analysis

| Skill | Description |
|-------|-------------|
| [CSV Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Analyze CSV files and generate insights with visualizations |
| [Kaggle Skill](https://github.com/shepsci/kaggle-skill) | Complete Kaggle integration — competition reports, dataset downloads, submissions |
| [DNA Claude Analysis](https://github.com/shmlkv/dna-claude-analysis) | Personal genome analysis toolkit across 17 categories |

### Integration & Automation

| Skill | Description |
|-------|-------------|
| [Dev Browser](https://github.com/SawyerHood/dev-browser) | Web browser capability for agents |
| [Agent Manager](https://github.com/fractalmind-ai/agent-manager-skill) | Manage local CLI AI agents via tmux |
| [Sheets CLI](https://github.com/gmickel/sheets-cli) | Google Sheets CLI automation |
| [Spotify Skill](https://github.com/fabioc-aloha/spotify-skill) | Spotify API integration |
| [AgentStore](https://github.com/techgangboss/agentstore) | Open-source plugin marketplace with CLI install |
| [Transloadit Skills](https://github.com/transloadit/skills) | Media processing: video encoding, image manipulation, OCR |
| [steel-browser](https://github.com/steel-dev/cli/tree/main/skills/steel-browser) | Session-backed browser automation skill |

### Security & Systems

| Skill | Description |
|-------|-------------|
| [computer-forensics](https://github.com/mhattingpete/claude-skills-marketplace) | Digital forensics analysis and investigation |
| [Agent OS Governance](https://github.com/imran-siddique/agent-os) | Kernel-level governance for AI agents — deterministic policy enforcement |

### Advanced & Research

| Skill | Description |
|-------|-------------|
| [Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | Context engineering techniques |
| [Pomodoro System Skill](https://github.com/jakedahn/pomodoro) | System Skill Pattern — skills that remember and improve |
| [Mind Cloning](https://github.com/yzfly/Mind-Cloning-Engineering) | Mind cloning with LLM skills |

---

## Skill Quality Standards

When evaluating or contributing skills, look for:

- **Clear instructions**: Steps are unambiguous and actionable
- **Appropriate scope**: Skill handles one focused task, not everything
- **Working examples**: Demonstrates real usage, not just theory
- **Documented trade-offs**: Honest about limitations and edge cases
- **Size limit**: SKILL.md under 500 lines for optimal agent performance
- **Tested**: Verified to actually work with the agent it targets

---

## Using Skills

### Using Skills in Claude.ai
1. Click the skill icon in your chat interface.
2. Add skills from the marketplace or upload custom skills.
3. Claude automatically activates relevant skills based on your task.

### Using Skills in Google Antigravity

Antigravity supports two types of skills:

- **Workspace Skills**: Project-specific skills located in `/.agent/skills/`
- **Global Skills**: User-wide skills located in `~/.gemini/antigravity/skills`

For more details, see the [official documentation](https://antigravity.google/docs/skills).

### Using Skills in Claude Code

```bash
mkdir -p ~/.claude/skills/
cp -r skill-name ~/.claude/skills/
```

Verify skill metadata:
```bash
head ~/.claude/skills/skill-name/SKILL.md
```

The skill loads automatically and activates when relevant.

### Using Skills in Codex

Use the built-in `$skill-creator` skill in Codex. Or install manually:

```bash
$skill-installer linear
```

Restart Codex after installing a skill to pick it up.

### Using Skills in VS Code / GitHub Copilot

Skills are stored in directories with a `SKILL.md` file:

- `.github/skills/` — Recommended location for all new skills
- `.claude/skills/` — Legacy location, also supported

**SKILL.md structure:**
- `name` (required): A unique lowercase identifier using hyphens for spaces
- `description` (required): What the skill does and when the agent should use it
- Markdown body with instructions, examples, and guidelines

### Using MCP Servers (Claude Desktop)

Edit your configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Desktop"]
    }
  }
}
```

---

## Creating Skills

Skills are instruction bundles that tell the agent how to perform specific tasks. They are not executable code.

### Skill Structure

```
skill-name/
├── SKILL.md          # Required: Instructions and metadata
├── scripts/          # Optional: Helper scripts
├── templates/        # Optional: Document templates
└── resources/        # Optional: Reference files
```

### Basic SKILL.md Template

```markdown
---
name: my-skill-name
description: A clear description of what this skill does.
---

# My Skill Name

Detailed description of the skill's purpose.

## When to Use This Skill

- Use case 1
- Use case 2

## Instructions

[Detailed instructions for the agent on how to execute this skill]

## Examples

[Real-world examples]
```

### MCP Server Example (Python)

For skills that need to connect to external data sources:

```bash
pip install fastmcp
```

```python
from fastmcp import FastMCP

mcp = FastMCP("My Server")

@mcp.tool()
def hello_world(name: str = "World") -> str:
    """A simple tool that says hello."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    mcp.run()
```

---

## Official Tutorials and Guides

### Claude and Anthropic
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) — Official quick start guide
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) — Step-by-step authoring
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills) — Official reference

### GitHub Copilot
- [About Agent Skills](https://docs.github.com/copilot/concepts/agents/about-agent-skills) — GitHub documentation
- [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills) — VS Code integration

### Model Context Protocol (MCP)
- [MCP Official Documentation](https://modelcontextprotocol.io/) — The open standard
- [Build your first MCP Server](https://modelcontextprotocol.io/docs/first-server) — Python/TypeScript guide
- [MCP Server Examples](https://github.com/modelcontextprotocol/servers) — Official server implementations

---

## Additional Vendor Repositories

The following organizations maintain official GitHub repositories with curated `SKILL.md` collections:

| Organization | Repository |
|-------------|------------|
| Anthropic | [anthropics/skills](https://github.com/anthropics/skills) |
| OpenAI | [openai/skills](https://github.com/openai/skills) |
| Google Gemini | [google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills) |
| HuggingFace | [huggingface/skills](https://github.com/huggingface/skills) |
| Replicate | [replicate/skills](https://github.com/replicate/skills) |
| ElevenLabs | [elevenlabs/skills](https://github.com/elevenlabs/skills) |
| Black Forest Labs | [black-forest-labs/skills](https://github.com/black-forest-labs/skills) |
| Cloudflare | [cloudflare/skills](https://github.com/cloudflare/skills) |
| HashiCorp | [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills) |
| Databricks | [databricks/databricks-agent-skills](https://github.com/databricks/databricks-agent-skills) |
| ClickHouse | [ClickHouse/agent-skills](https://github.com/ClickHouse/agent-skills) |
| Supabase | [supabase/agent-skills](https://github.com/supabase/agent-skills) |
| Stripe | [stripe/ai](https://github.com/stripe/ai) |
| LaunchDarkly | [launchdarkly/agent-skills](https://github.com/launchdarkly/agent-skills) |
| Sentry | [getsentry/skills](https://github.com/getsentry/skills) |
| Vercel | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| Microsoft | [microsoft/agent-skills](https://github.com/microsoft/agent-skills) |
| Expo | [expo/skills](https://github.com/expo/skills) |
| Better Auth | [better-auth/skills](https://github.com/better-auth/skills) |
| Remotion | [remotion-dev/skills](https://github.com/remotion-dev/skills) |
| GSAP | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) |
| Notion | [makenotion/skills](https://github.com/makenotion/skills) |
| WordPress | [WordPress/agent-skills](https://github.com/WordPress/agent-skills) |

---

## Trends & Capabilities (2026)

The AI agent ecosystem has dramatically shifted from reactive chat interfaces to **autonomous, goal-driven systems** executing end-to-end multi-step workflows — a period often called the "Agent Leap."

### 1. Autonomous Execution

Modern agents move past simple "prompt-response" models. They break down broad objectives into multi-step strategic plans, weighing trade-offs and executing sequences independently.

### 2. Multi-Agent Orchestration

Complex tasks are managed by specialized agent teams (documentation, testing, coding) coordinated by "manager" agents that synthesize deliverables and resolve conflicts.

### 3. Agentic IDEs

Environments like Cursor, Windsurf, Claude Code, and GitHub Copilot have evolved into full "Agentic IDEs" where agents execute terminal commands, monitor telemetry, and manage files natively via MCP and direct filesystem access.

### 4. Domain-Specific Skills at Scale

Organizations are moving from general-purpose prompting to highly specialized skills for each platform and workflow — reducing hallucinations and improving reliability in production deployments.

---

## Frequently Asked Questions

### What are Agent Skills?

Agent Skills are instruction files that teach AI assistants how to do specific tasks. They only load when needed, so the AI stays fast and focused.

### How are Agent Skills different from fine-tuning?

Fine-tuning permanently changes how an AI thinks (expensive and hard to update). Agent Skills are just instruction files — you can update, swap, or share them anytime without touching the AI itself.

### What's the difference between Agent Skills and MCP?

They work great together:
- **Agent Skills** — teach the AI *how* to do something (workflows, best practices)
- **MCP** — help the AI *access* things (APIs, databases, external tools)

### Which AI tools support Agent Skills?

Currently supported: **Claude** (Claude.ai and Claude Code), **GitHub Copilot**, **VS Code**, **Codex** (OpenAI), **Antigravity** (Google), **Gemini CLI**, **Kiro**, and **Junie**. The ecosystem is growing rapidly.

### Do Agent Skills run code?

No. Skills are just text instructions — the AI reads and follows them like a recipe. If you need to run actual code, you'd use MCP servers alongside skills.

### How do I create my first Agent Skill?

1. Create a `SKILL.md` file with a name and description at the top
2. Write clear, step-by-step instructions in the file
3. Put it in your `.github/skills/` or `.claude/skills/` folder
4. Test it out!

Full guide: [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)

---

## Contributing

Contributions are welcome. See **[CONTRIBUTING.md](CONTRIBUTING.md)** for full guidelines.

Quick summary:
- Follow the skill template structure
- Provide clear, actionable instructions
- Include working examples where appropriate
- Document trade-offs and potential issues
- Keep SKILL.md under 500 lines for optimal performance
- Verify that skills actually exist before adding them

---

## License

MIT License — see LICENSE file for details.
