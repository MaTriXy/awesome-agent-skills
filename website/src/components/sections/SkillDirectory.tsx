"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Code2, Cloud, Wrench, Shield, Briefcase, Zap } from "lucide-react";

// Parsed from README.md
const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI Platforms" },
  { id: "cloud", label: "Cloud & Infra" },
  { id: "devtools", label: "Dev Tools" },
  { id: "business", label: "Business" },
  { id: "security", label: "Security" },
];

const mockSkills = [
  // AI Platforms
  {
    id: "anthropic-docx",
    name: "anthropics/docx",
    description: "Create, edit, and analyze Word documents with Claude",
    category: "ai",
    tags: ["Document", "Office"],
    icon: <Zap className="w-5 h-5 text-purple-500" />,
    url: "https://agent-skill.co/anthropics/skills/docx"
  },
  {
    id: "anthropic-webapp",
    name: "anthropics/webapp-testing",
    description: "Test local web applications using Playwright natively",
    category: "ai",
    tags: ["Testing", "E2E"],
    icon: <Zap className="w-5 h-5 text-purple-500" />,
    url: "https://agent-skill.co/anthropics/skills/webapp-testing"
  },
  {
    id: "openai-cloudflare",
    name: "openai/cloudflare-deploy",
    description: "Deploy apps to Cloudflare using Workers and Pages",
    category: "ai",
    tags: ["Deployment", "Edge"],
    icon: <Zap className="w-5 h-5 text-green-500" />,
    url: "https://agent-skill.co/openai/skills/cloudflare-deploy"
  },
  {
    id: "gemini-api",
    name: "google-gemini/gemini-api-dev",
    description: "Best practices for developing Gemini-powered apps",
    category: "ai",
    tags: ["LLM", "Google"],
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    url: "https://agent-skill.co/google-gemini/skills/gemini-api-dev"
  },
  
  // Cloud
  {
    id: "cf-agents",
    name: "cloudflare/agents-sdk",
    description: "Build stateful AI agents with scheduling, RPC, and MCP servers",
    category: "cloud",
    tags: ["Workers", "State"],
    icon: <Cloud className="w-5 h-5 text-orange-500" />,
    url: "https://agent-skill.co/cloudflare/skills/agents-sdk"
  },
  {
    id: "vercel-react",
    name: "vercel-labs/react-best-practices",
    description: "React best practices and modern server component patterns",
    category: "cloud",
    tags: ["React", "UI"],
    icon: <Cloud className="w-5 h-5 text-white" />,
    url: "https://agent-skill.co/vercel-labs/skills/react-best-practices"
  },
  {
    id: "hashi-tf",
    name: "hashicorp/terraform-style-guide",
    description: "Generate Terraform HCL code following HashiCorp's official style",
    category: "cloud",
    tags: ["IaC", "AWS"],
    icon: <Cloud className="w-5 h-5 text-indigo-500" />,
    url: "https://agent-skill.co/hashicorp/skills/terraform-style-guide"
  },

  // Dev Tools
  {
    id: "figma-impl",
    name: "figma/figma-implement-design",
    description: "Translate Figma designs into production-ready code with 1:1 fidelity",
    category: "devtools",
    tags: ["UI", "CSS"],
    icon: <Wrench className="w-5 h-5 text-pink-500" />,
    url: "https://agent-skill.co/figma/skills/figma-implement-design"
  },
  {
    id: "duckdb-query",
    name: "duckdb/query",
    description: "Run SQL queries against attached databases or ad-hoc files",
    category: "devtools",
    tags: ["Data", "SQL"],
    icon: <Wrench className="w-5 h-5 text-yellow-500" />,
    url: "https://agent-skill.co/duckdb/skills/query"
  },

  // Business
  {
    id: "stripe-best",
    name: "stripe/stripe-best-practices",
    description: "Best practices for building Stripe billing and checkout integrations",
    category: "business",
    tags: ["Payments", "API"],
    icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
    url: "https://agent-skill.co/stripe/skills/stripe-best-practices"
  },
  {
    id: "notion-intel",
    name: "makenotion/meeting-intelligence",
    description: "Prepare meeting materials by gathering real-time Notion context",
    category: "business",
    tags: ["Productivity", "Docs"],
    icon: <Briefcase className="w-5 h-5 text-zinc-400" />,
    url: "https://agent-skill.co/makenotion/skills/meeting-intelligence"
  },

  // Security
  {
    id: "trail-audit",
    name: "trailofbits/static-analysis",
    description: "Static analysis toolkit with CodeQL and Semgrep for vulnerability hunting",
    category: "security",
    tags: ["Audit", "CodeQL"],
    icon: <Shield className="w-5 h-5 text-red-500" />,
    url: "https://agent-skill.co/trailofbits/skills/static-analysis"
  }
];

export default function SkillDirectory() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="directory" className="relative scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 dark:via-white/[0.02] to-transparent pointer-events-none rounded-[3rem]" />
      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Directory</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Browse official and community-maintained capabilities across AI platforms, cloud infrastructure, and security workflows.
        </p>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skills (e.g., 'figma' or 'database')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-800 transition-all font-medium placeholder:text-zinc-500"
            />
          </div>
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                    : "glass hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={skill.id}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-panel p-6 flex flex-col items-start gap-4 hover:scale-[1.02] transition-transform cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 flex items-center justify-center">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {skill.description}
                  </p>
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-2 w-full">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredSkills.length === 0 && (
          <div className="w-full text-center py-20 text-zinc-500 font-medium">
            No agent skills found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
