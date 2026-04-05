"use client";

import { Package, Code2, BookOpen } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function WhatIsIt() {
  const t = useTranslations();
  const cards = [
    { Icon: BookOpen, title: t.what.cards.faster.title, desc: t.what.cards.faster.desc },
    { Icon: Package, title: t.what.cards.everywhere.title, desc: t.what.cards.everywhere.desc },
    { Icon: Code2, title: t.what.cards.share.title, desc: t.what.cards.share.desc },
  ];

  return (
    <section id="what-are-skills" className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t.what.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-base leading-relaxed">
        {t.what.subtitle}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        Skills are simple text files (called <code>SKILL.md</code>) that teach an AI how to do specific tasks. When you ask the AI to do something, it finds the right skill, reads the instructions, and gets to work.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {cards.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 h-fit">
              <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <strong className="text-neutral-900 dark:text-white">In plain English:</strong> {t.what.callout}
        </p>
      </div>
    </section>
  );
}
