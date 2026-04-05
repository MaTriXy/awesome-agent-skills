"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const resources = [
  {
    title: "Official Skills Guide",
    type: "Documentation",
    level: "Beginner",
    description: "Anthropic's official step-by-step guide to authoring skills for Claude Code.",
    href: "https://support.claude.com/en/articles/12512180-using-skills-in-claude",
  },
  {
    title: "Building MCP Servers",
    type: "Technical Guide",
    level: "Advanced",
    description: "Connect skills to external APIs using the open Model Context Protocol (a shared language for AI tools) standard.",
    href: "https://modelcontextprotocol.io/docs/first-server",
  },
  {
    title: "Agentic IDE Mastery",
    type: "Video Series",
    level: "Intermediate",
    description: "Visual walkthroughs for Cursor, Windsurf, and Claude Code, covering setup through end-to-end workflows.",
    href: "#",
  },
  {
    title: "Skill Architecture Patterns",
    type: "Deep Dive",
    level: "Intermediate",
    description: "Advanced patterns: hierarchical skill trees, state-aware agents, and multi-agent orchestration.",
    href: "#",
  },
];

export default function Tutorials() {
  const t = useTranslations();

  return (
    <section id="tutorials" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Tutorials & Quests 🎮</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl">
          Learning to build AI skills shouldn't feel like reading a dictionary. Follow the chat below to start your journey!
        </p>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm max-w-3xl space-y-8">
        
        {/* Dialogue 1 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">🧑‍💻</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Human Newcomer</div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-700 shadow-sm text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-bold">Help!</span> I just got here. I want my AI to know how to deploy my specific app, but I don't want to type a 500-word prompt every single time... What do I do? 😭
            </div>
          </div>
        </div>

        {/* Dialogue 2 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl border border-blue-200 dark:border-blue-800/50 shadow-sm">🤖</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Helpful Agent</div>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 lg:p-5 rounded-2xl rounded-tl-sm border border-blue-200 dark:border-blue-800/30 shadow-sm text-sm text-neutral-800 dark:text-neutral-200">
              <p className="mb-3">Beep boop! That's exactly what <strong className="text-blue-600 dark:text-blue-400">Agent Skills</strong> are for! You just write the instructions ONCE in a simple Markdown file (usually called <code>SKILL.md</code>). I will read it automatically whenever I need to deploy your app!</p>
              
              <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <div className="text-xs font-bold text-neutral-400 mb-2 uppercase">Quest 1: The Basics 🔰</div>
                <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                  <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">Read the Official Starter Guide</div>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dialogue 3 */}
        <div className="flex gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">🧑‍💻</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Human Newcomer</div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl rounded-tl-sm border border-neutral-200 dark:border-neutral-700 shadow-sm text-sm text-neutral-700 dark:text-neutral-300">
              Wait... so a "Skill" is literally just a Markdown file? It's that easy? No advanced coding required? 🤯
            </div>
          </div>
        </div>

        {/* Dialogue 4 */}
        <div className="flex gap-3 sm:gap-4 w-full">
           <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl border border-blue-200 dark:border-blue-800/50 shadow-sm">🤖</div>
          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Helpful Agent</div>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 lg:p-5 rounded-2xl rounded-tl-sm border border-blue-200 dark:border-blue-800/30 shadow-sm text-sm text-neutral-800 dark:text-neutral-200">
              <p className="mb-3">Exactly! 🎉 You can even add advanced things like <strong>MCP Servers</strong> if you want me to talk to external databases, but starting off is literally just writing down how you want a task done.</p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <div className="text-xs font-bold text-neutral-400 mb-2 uppercase">Quest 2: Power Up ⚡️</div>
                  <a href="#directory" className="flex items-center justify-between group">
                    <div className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">Copy a Template from the Directory</div>
                    <ArrowUpRight className="w-4 h-4 text-blue-400" />
                  </a>
                </div>
                <div className="bg-white dark:bg-neutral-800/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">Achievement: Arch-Mage 🧙‍♂️</div>
                  <a href="https://modelcontextprotocol.io/docs/first-server" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">Learn MCP Architecture</div>
                    <ArrowUpRight className="w-4 h-4 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
