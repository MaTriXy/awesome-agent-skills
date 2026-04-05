"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "What is it", href: "#what-is-it" },
  { name: "Directory", href: "#skills" },
  { name: "Standards", href: "#standards" },
  { name: "Guides", href: "#guides" },
  { name: "Trends", href: "#trends" },
  { name: "FAQ", href: "#faq" },
];

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity glow-text">
            awesome-agent-skills
          </Link>
          <div className="hidden lg:flex items-center gap-8 pl-8 border-l border-zinc-200 dark:border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Star on GitHub</span>
          </a>
          <button
            onClick={toggleDark}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 left-0 right-0 glass border-t border-zinc-200 dark:border-white/5 p-6 flex flex-col gap-6 shadow-2xl rounded-b-3xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
