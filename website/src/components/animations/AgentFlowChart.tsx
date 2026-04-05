"use client";

import { motion, Easing } from "framer-motion";
import { UserCircle, Cpu, FileJson, Sparkles } from "lucide-react";

export default function AgentFlowChart() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as Easing, repeat: Infinity, repeatType: "loop" as const, repeatDelay: 1 }
    }
  };

  const nodeClass = "relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm z-20";
  const iconClass = "w-7 h-7 text-neutral-600 dark:text-neutral-400 mb-2";
  const labelClass = "text-xs font-semibold text-neutral-700 dark:text-neutral-300 text-center";

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/20 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* SVG Path lines */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))" }}>
        {/* User to Agent */}
        <path d="M 120,200 L 200,200" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 120,200 L 200,200" stroke="#3b82f6" strokeWidth="3" fill="none" variants={pathVariants} initial="hidden" animate="visible" />
        
        {/* Agent to Skill */}
        <path d="M 280,200 C 320,200 320,120 360,120" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 280,200 C 320,200 320,120 360,120" stroke="#8b5cf6" strokeWidth="3" fill="none" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} />

        {/* Agent to Action */}
        <path d="M 280,200 C 320,200 320,280 360,280" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-30 dark:opacity-50" />
        <motion.path d="M 280,200 C 320,200 320,280 360,280" stroke="#10b981" strokeWidth="3" fill="none" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
      </svg>

      {/* Nodes container - we use absolute positioning for perfect alignment with SVG */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* User Node */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
          className="absolute left-[30px] top-[152px]"
        >
          <div className={nodeClass}>
            <UserCircle className={iconClass} />
            <span className={labelClass}>User<br/>Prompt</span>
          </div>
        </motion.div>

        {/* Agent Node */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-[200px] top-[152px]"
        >
          <div className={`${nodeClass} border-blue-500/50 shadow-blue-500/10`}>
            <Cpu className={`${iconClass} text-blue-500`} />
            <span className={labelClass}>AI Agent<br/>Router</span>
          </div>
        </motion.div>

        {/* Skill Node */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute left-[360px] top-[72px]"
        >
          <div className={`${nodeClass} border-purple-500/50 shadow-purple-500/10`}>
             <FileJson className={`${iconClass} text-purple-500`} />
            <span className={labelClass}>SKILL.md<br/>Loaded</span>
          </div>
        </motion.div>

        {/* Output Node */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute left-[360px] top-[232px]"
        >
          <div className={`${nodeClass} border-emerald-500/50 shadow-emerald-500/10`}>
            <Sparkles className={`${iconClass} text-emerald-500`} />
            <span className={labelClass}>Task<br/>Executed</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
