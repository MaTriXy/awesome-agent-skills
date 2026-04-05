"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains("dark")) {
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200 dark:border-zinc-800 h-16">
      <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white dark:text-black text-[10px] font-bold">AS</span>
          </div>
          <span className="text-sm font-bold tracking-tight">awesome-agent-skills</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500 hover:text-black dark:hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={toggleDark}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500 hover:text-black dark:hover:text-white"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden fixed top-16 right-0 bottom-0 w-72 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-200 dark:border-zinc-800 p-8 shadow-2xl z-50 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {[
                { id: "what-is-it", label: "What is it" },
                { id: "skills", label: "Skill Directory" },
                { id: "standards", label: "Quality Standards" },
                { id: "guides", label: "Usage Guides" },
                { id: "trends", label: "2026 Trends" },
                { id: "faq", label: "Common Questions" },
                { id: "contributing", label: "Contribute" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold tracking-tight hover:text-zinc-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
