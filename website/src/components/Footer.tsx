"use client";

import { Mail } from "lucide-react";
import { Github, Twitter } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 bg-white dark:bg-black transition-colors border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              awesome-agent-skills
            </Link>
            <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Curated capabilities for the next leap in agentic engineering. Standardizing the instructions that power the world&apos;s most intelligent autonomous assistants.
            </p>
            <div className="max-w-xs text-xs text-zinc-500 dark:text-zinc-400 font-medium space-y-1">
              <p>Questions, partnership inquiries, or feedback about this project:</p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>LinkedIn: <a href="https://www.linkedin.com/in/heilcheng/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-white hover:underline">Hailey Cheng</a></li>
                <li>X / Twitter: <a href="https://x.com/haileyhmt" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-white hover:underline">@haileyhmt</a></li>
                <li>Email: <a href="mailto:haileycheng@proton.me" className="text-zinc-900 dark:text-white hover:underline">haileycheng@proton.me</a></li>
              </ul>
            </div>
            
            <div className="max-w-xs text-xs text-zinc-500 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-lg mt-2 font-mono">
              <p className="font-semibold text-[10px] uppercase tracking-wider mb-1">Citation</p>
              @misc&#123;awesome-agent-skills,
                author = &#123;Hailey Cheng&#125;,
                title = &#123;Awesome Agent Skills&#125;,
                year = &#123;2026&#125;,
                publisher = &#123;GitHub&#125;,
                url = &#123;https://github.com/heilcheng/awesome-agent-skills&#125;
              &#125;
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://agent-skill.co" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs font-semibold hover:opacity-80 transition-opacity">
                agent-skill.co
              </a>
              <a href="https://github.com/heilcheng/awesome-agent-skills" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/haileyhmt" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:haileycheng@proton.me" className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Navigation</h4>
            <ul className="space-y-4">
              {["What is it", "Skill Directory", "Standards", "Guides", "Trends", "FAQ"].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "agent-skill.co", href: "https://agent-skill.co" },
                { label: "GitHub Repo", href: "https://github.com/heilcheng/awesome-agent-skills" },
                { label: "Contributing", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md" },
                { label: "Skill Template", href: "#creating-skills" },
                { label: "License", href: "https://github.com/heilcheng/awesome-agent-skills/blob/main/LICENSE" },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            &copy; 2026 Awesome Agent Skills. Open source under MIT.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Built with Next.js &amp; Three.js</span>
            <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Curated by Engineering Teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
