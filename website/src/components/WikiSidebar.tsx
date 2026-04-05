"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Book, 
  Layers, 
  Award, 
  Terminal, 
  Zap, 
  HelpCircle, 
  LineChart, 
  Heart,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { id: "what-is-it", label: "What is it", icon: <Book className="w-4 h-4" /> },
  { id: "skills", label: "Skill Directory", icon: <Layers className="w-4 h-4" /> },
  { id: "standards", label: "Quality Standards", icon: <Award className="w-4 h-4" /> },
  { id: "guides", label: "Usage Guides", icon: <Terminal className="w-4 h-4" /> },
  { id: "trends", label: "2026 Trends", icon: <LineChart className="w-4 h-4" /> },
  { id: "faq", label: "Common Questions", icon: <HelpCircle className="w-4 h-4" /> },
  { id: "contributing", label: "Contribute", icon: <Heart className="w-4 h-4" /> },
];

export default function WikiSidebar() {
  const [activeSegment, setActiveSegment] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSegment(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 border-r border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-xl overflow-y-auto p-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Navigation</h4>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center justify-between group px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeSegment === item.id
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/5 dark:shadow-white/5"
                    : "text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>
                {activeSegment === item.id && (
                  <motion.div layoutId="sidebar-arrow">
                    <ChevronRight className="w-3 h-3" />
                  </motion.div>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 rounded-[1.5rem] bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Network Status</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">
            All agent kernels synced. Standard protocols updated for <b>March 2026</b> architectures.
          </p>
        </div>
      </div>
    </aside>
  );
}
