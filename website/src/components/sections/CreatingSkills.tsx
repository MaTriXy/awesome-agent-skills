"use client";

import { FolderOpen, FileText, Code2, Layers, ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const structure = [
  { Icon: FolderOpen, path: "my-skill/", desc: "A cool name for your invention" },
  { Icon: FileText, path: "├── SKILL.md", desc: "Required: The 'Brain' of the skill" },
  { Icon: Code2, path: "├── scripts/", desc: "Optional: Secret sauces & helpers" },
  { Icon: Layers, path: "└── templates/", desc: "Optional: Fancy pre-filled files" },
];

export default function CreatingSkills() {
  const t = useTranslations();

  return (
    <section id="creating-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.creating.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        {t.creating.subtitle}
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Folder anatomy */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">Folder structure</h3>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
            {structure.map((item, i) => (
              <div
                key={item.path}
                className={`flex items-center gap-4 px-4 py-3 ${i < structure.length - 1 ? "border-b border-neutral-100 dark:border-neutral-800" : ""}`}
              >
                <item.Icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0" />
                <code className="text-sm text-neutral-700 dark:text-neutral-300 font-mono flex-1">{item.path}</code>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SKILL.md blueprint */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">SKILL.md blueprint</h3>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
            <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">SKILL.md</span>
            </div>
            <pre className="px-4 py-4 text-sm leading-7 font-mono text-neutral-600 dark:text-neutral-400 overflow-x-auto">
              <code>{`---
name: awesome-new-skill
description: Tell the AI what this does in plain English.
---

# Instructions

1. Explain it like the AI is your smart intern.
2. Give it step-by-step logic (it loves lists).
3. Tell it when to STOP or when it fails.`}</code>
            </pre>
          </div>

          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            View full template on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
