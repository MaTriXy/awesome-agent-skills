"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "zh-TW" | "zh-CN" | "ja" | "ko" | "es";

export const LANGUAGES = [
  { code: "en" as Language, label: "English", flag: "🇺🇸" },
  { code: "zh-TW" as Language, label: "繁體中文", flag: "🇹🇼" },
  { code: "zh-CN" as Language, label: "简体中文", flag: "🇨🇳" },
  { code: "ja" as Language, label: "日本語", flag: "🇯🇵" },
  { code: "ko" as Language, label: "한국어", flag: "🇰🇷" },
  { code: "es" as Language, label: "Español", flag: "🇪🇸" },
];

const t = {
  en: {
    nav: { brand: "Agent Skill Index", search: "Search docs...", github: "View on GitHub" },
    sidebar: {
      intro: "Introduction", directory: "Directory",
      standards: "Standards & Guides", resources: "Resources",
      items: {
        whatAreSkills: "What Are Agent Skills?", howItWorks: "How It Works",
        findingSkills: "Finding Skills", compatibleAgents: "Compatible Agents",
        aiPlatforms: "AI Platforms", cloudInfra: "Cloud & Infrastructure",
        devTools: "Developer Tools", business: "Business & Marketing",
        security: "Security", qualityStandards: "Quality Standards",
        usingSkills: "Using Skills", creatingSkills: "Creating Skills",
        tutorials: "Official Tutorials", trends: "Trends (2026)",
        faq: "FAQ", contributing: "Contributing",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "Updated April 2026",
      subtitle: "The definitive list of AI agent skills, tools, and workflows. Expert tutorials for the modern agentic era.",
      browseBtn: "Browse Directory", githubBtn: "View on GitHub",
    },
    what: {
      title: "What Are Agent Skills?",
      subtitle: "Think of Agent Skills as how-to guides for AI assistants. Instead of the AI needing to know everything upfront, skills let it learn new abilities on the fly, like giving someone a recipe card instead of making them memorize an entire cookbook.",
      callout: "Skills are instructions, not code. The AI reads them like a human reads a guide, then follows the steps. You don't need to be a developer to write or use them.",
      cards: {
        faster: { title: "Faster and lighter", desc: "The AI only loads what it needs, when it needs it. No massive monolithic prompts slowing things down." },
        everywhere: { title: "Works everywhere", desc: "Create a skill once and use it with any compatible AI tool, including Claude, Copilot, Codex, and more." },
        share: { title: "Easy to share", desc: "Skills are just files. Copy them, download them, or share them on GitHub like any other project." },
      },
    },
    how: {
      title: "How It Works",
      subtitle: "Skills load in three stages. This keeps the AI fast: it never loads more than it needs.",
      steps: {
        browse: { title: "Browse", desc: "The AI sees a list of available skills, just names and short descriptions. It scans this list to understand what capabilities are available." },
        load: { title: "Load", desc: "When a skill is needed, the AI reads the full instructions from the SKILL.md file. It only loads what's relevant to your current task." },
        use: { title: "Use", desc: "The AI follows the instructions and accesses any helper files: scripts, templates, or reference documents included with the skill." },
      },
    },
    finding: {
      title: "How to Find Skills",
      subtitle: "There are three recommended ways to discover and install skills.",
      mpTitle: "SkillsMP Marketplace",
      mpDesc: "Automatically indexes all Skill projects on GitHub and organizes them by category, update time, star count, and other tags, making it the easiest way to discover and evaluate skills.",
      shTitle: "skills.sh Leaderboard by Vercel",
      shDesc: "Vercel's leaderboard for intuitively viewing the most popular Skills repositories and individual skill usage statistics.",
      cliTitle: "npx skills CLI Tool",
      cliDesc: "Use the npx skills command-line tool to quickly discover, add, and manage skills directly from your terminal.",
    },
    compatible: { title: "Compatible Agents", subtitle: "Agent Skills work across the major AI coding tools and assistants. Click any row to visit the official documentation." },
    directory: { title: "Skill Directory", subtitle: "Browse 81+ community-curated skills across categories." },
    quality: { title: "Quality Standards", subtitle: "Every skill in this directory meets a minimum bar for clarity, precision, and real-world usability." },
    using: { title: "Using Skills", subtitle: "Adding a skill takes under a minute. No configuration files, no runtime changes." },
    creating: { title: "Creating Skills", subtitle: "A good skill is precise, portable, and testable." },
    tutorials: { title: "Tutorials and Guides", subtitle: "Resources to help you go from zero to production with agent skills." },
    trends: {
      title: "Trends and Capabilities (2026)",
      subtitle: "The AI agent ecosystem has shifted from chat interfaces to autonomous, goal-driven systems. Here is what defines the landscape today.",
      chartLabel: "Projected Adoption, 2026",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "New to agent skills? These are the most common questions.",
      items: [
        { q: "What exactly is a 'skill'?", a: "A skill is a structured SKILL.md file that teaches an AI agent how to perform a specific workflow. Think of it like a recipe card: the agent reads it to gain new, reliable capabilities without any retraining or fine-tuning." },
        { q: "Is a skill the same as a prompt?", a: "Not quite. A skill contains prompts, but it also includes situational instructions, folder structure, and optionally linked scripts or templates. It is a standardized, portable way to package a capability for reuse across different agents and tools." },
        { q: "When should I create a new skill instead of just prompting?", a: "Create a skill when you keep repeating the same complex instructions across different sessions. If it is a reusable pattern or a specific workflow, it belongs in a skill so you never have to re-explain it." },
        { q: "Can skills call external tools or APIs?", a: "Yes. Skills often define the logic for when and how to call tools via the Model Context Protocol (MCP), a shared language that lets AI tools communicate with external services. They act as the coordination layer between the agent's reasoning and the tool's execution." },
        { q: "How do I evaluate if a skill is high quality?", a: "A high-quality skill has clear success criteria, defined failure modes, no ambiguous language, and at least two real-world usage examples. It should work reliably even in long context sessions." },
        { q: "Do skills work across all AI coding tools?", a: "Most modern AI tools (Cursor, Claude Code, Windsurf, GitHub Copilot) support skill-like constructs. The SKILL.md format in this repo is designed to be framework-agnostic and readable by any MCP-compatible agent." },
      ],
    },
    contributing: { title: "Contributing", subtitle: "Help grow the most comprehensive open source collection of AI agent skills." },
    snake: {
      title: "Agent Snake",
      gameOver: "Ouch! Try Again?",
      desc: "Navigate your agent through the directory. Eat skills to grow stronger.",
      init: "INITIALIZE",
      reboot: "REBOOT",
      controls: "WASD / ARROWS",
      mode: "CUTE MODE: ON",
      score: "Score",
      best: "Best",
    },
  },

  "zh-TW": {
    nav: { brand: "Agent Skill Index", search: "搜尋文件...", github: "在 GitHub 上查看" },
    sidebar: {
      intro: "介紹", directory: "目錄",
      standards: "標準與指南", resources: "資源",
      items: {
        whatAreSkills: "什麼是 Agent 技能？", howItWorks: "運作方式",
        findingSkills: "如何找到技能", compatibleAgents: "相容的 AI 工具",
        aiPlatforms: "AI 平台", cloudInfra: "雲端與基礎設施",
        devTools: "開發工具", business: "商業與行銷",
        security: "安全性", qualityStandards: "品質標準",
        usingSkills: "使用技能", creatingSkills: "創建技能",
        tutorials: "官方教學", trends: "趨勢 (2026)",
        faq: "常見問題", contributing: "貢獻",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026 年 4 月更新",
      subtitle: "Agent Skill Index 技能目錄：AI Agent 能力、工具與工作流程的權威清單與教學。",
      browseBtn: "瀏覽目錄", githubBtn: "在 GitHub 上查看",
    },
    what: {
      title: "什麼是 Agent 技能？",
      subtitle: "把 Agent 技能想像成 AI 助手的操作指南。技能讓 AI 在需要時隨時學習新能力，就像給人一張食譜卡，而不需要背整本食譜書。",
      callout: "技能是指令，不是程式碼。AI 像人類閱讀指南一樣讀取它們，然後按照步驟執行。您不需要成為開發者就能撰寫或使用它們。",
      cards: {
        faster: { title: "更快更輕量", desc: "AI 只在需要時載入所需內容，不會有龐大的提示詞拖慢速度。" },
        everywhere: { title: "隨處可用", desc: "創建一次技能，就能在任何相容的 AI 工具上使用，包括 Claude、Copilot、Codex 等。" },
        share: { title: "易於分享", desc: "技能只是文件。可以複製、下載，或像其他專案一樣在 GitHub 上分享。" },
      },
    },
    how: {
      title: "運作方式",
      subtitle: "技能分三個階段載入，讓 AI 保持快速運行，永遠不會載入超出所需的內容。",
      steps: {
        browse: { title: "瀏覽", desc: "AI 看到可用技能列表，只有名稱和簡短描述。它掃描此列表以了解有哪些能力可用。" },
        load: { title: "載入", desc: "當需要某個技能時，AI 從 SKILL.md 文件讀取完整說明。它只載入與當前任務相關的內容。" },
        use: { title: "使用", desc: "AI 按照說明操作，並存取技能附帶的任何輔助文件，例如腳本、模板或參考文件。" },
      },
    },
    finding: {
      title: "如何找到技能",
      subtitle: "有三種推薦方式可以發現和安裝技能。",
      mpTitle: "SkillsMP 市場",
      mpDesc: "自動索引 GitHub 上的所有 Skill 專案，並按類別、更新時間、星數和其他標籤進行組織——這是發現和評估技能最簡單的方法。",
      shTitle: "skills.sh 排行榜 (由 Vercel 提供)",
      shDesc: "Vercel 的排行榜，可直觀地查看最受歡迎的 Skills 倉庫和單個技能的使用統計數據。",
      cliTitle: "npx skills CLI 工具",
      cliDesc: "使用 npx skills 命令行工具直接從終端快速發現、添加和管理技能。",
    },
    compatible: { title: "相容的 AI 工具", subtitle: "Agent 技能可在主要 AI 程式輔助工具和助手中使用。點擊任意行即可查看官方文件。" },
    directory: { title: "技能目錄", subtitle: "瀏覽超過 81 個社群精心策劃的技能。" },
    quality: { title: "品質標準", subtitle: "此目錄中的每個技能都符合清晰度、精確性和實際可用性的最低標準。" },
    using: { title: "使用技能", subtitle: "添加技能不到一分鐘。無需配置文件，無需更改運行時。" },
    creating: { title: "創建技能", subtitle: "好的技能是精確、可移植且可測試的。" },
    tutorials: { title: "教學與指南", subtitle: "幫助您從零到生產環境使用 Agent 技能的資源。" },
    trends: {
      title: "趨勢與能力 (2026)",
      subtitle: "AI Agent 生態系統已從聊天界面轉變為自主的目標驅動系統。以下是定義當今格局的關鍵。",
      chartLabel: "預計採用率，2026",
    },
    faq: {
      title: "常見問題",
      subtitle: "對 Agent 技能感到陌生？這些是最常見的問題。",
      items: [
        { q: "技能究竟是什麼？", a: "技能是一個結構化的 SKILL.md 文件，教導 AI Agent 如何執行特定的工作流程。把它想像成食譜卡：Agent 讀取它以獲得新的可靠能力，無需任何重新訓練或微調。" },
        { q: "技能和提示詞一樣嗎？", a: "不完全是。技能包含提示詞，但也包含情境說明、文件夾結構，以及可選的連結腳本或模板。它是一種標準化、可移植的方式，將能力打包以便在不同 Agent 和工具之間重複使用。" },
        { q: "什麼時候應該創建新技能而不是直接提示？", a: "當您在不同會話中不斷重複相同的複雜說明時，請創建技能。如果它是可重複使用的模式或特定工作流程，就應該放入技能中，這樣您就不必再重複解釋了。" },
        { q: "技能可以調用外部工具或 API 嗎？", a: "可以。技能通常定義通過 Model Context Protocol (MCP，一種讓 AI 工具與外部服務通信的共享語言) 調用工具的時機和方式。它們充當 Agent 推理和工具執行之間的協調層。" },
        { q: "如何評估技能的品質？", a: "高品質技能具有明確的成功標準、定義的失敗模式、無模糊語言，以及至少兩個實際使用示例。它應該在長上下文會話中也能可靠地運行。" },
        { q: "技能可以在所有 AI 程式工具中使用嗎？", a: "大多數現代 AI 工具（Cursor、Claude Code、Windsurf、GitHub Copilot）都支持類技能結構。此倉庫中的 SKILL.md 格式設計為與框架無關，可被任何 MCP 相容的 Agent 讀取。" },
      ],
    },
    contributing: { title: "貢獻", subtitle: "幫助打造最全面的開源 AI Agent 技能集合。" },
    snake: {
      title: "Agent 貪食蛇",
      gameOver: "哎呀！再試一次？",
      desc: "引導您的 Agent 穿梭於目錄中。吞噬技能以變得更強。",
      init: "初始化",
      reboot: "重啟",
      controls: "WASD / 方向鍵",
      mode: "可愛模式：開啟",
      score: "分數",
      best: "最高",
    },
  },

  "zh-CN": {
    nav: { brand: "Agent Skill Index", search: "搜索文档...", github: "在 GitHub 上查看" },
    sidebar: {
      intro: "介绍", directory: "目录",
      standards: "标准与指南", resources: "资源",
      items: {
        whatAreSkills: "什么是 Agent 技能？", howItWorks: "工作原理",
        findingSkills: "如何找到技能", compatibleAgents: "兼容的 AI 工具",
        aiPlatforms: "AI 平台", cloudInfra: "云端与基础设施",
        devTools: "开发工具", business: "商业与营销",
        security: "安全性", qualityStandards: "质量标准",
        usingSkills: "使用技能", creatingSkills: "创建技能",
        tutorials: "官方教程", trends: "趋势 (2026)",
        faq: "常见问题", contributing: "贡献",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026 年 4 月更新",
      subtitle: "Agent Skill Index 技能目录：AI Agent 能力、工具与工作流程的权威清单与教程。",
      browseBtn: "浏览目录", githubBtn: "在 GitHub 上查看",
    },
    what: {
      title: "什么是 Agent 技能？",
      subtitle: "把 Agent 技能想象成 AI 助手的操作指南。技能让 AI 在需要时随时学习新能力，就像给人一张菜谱卡，而不需要背整本食谱书。",
      callout: "技能是指令，不是代码。AI 像人类阅读指南一样读取它们，然后按照步骤执行。您不需要成为开发者就能编写或使用它们。",
      cards: {
        faster: { title: "更快更轻量", desc: "AI 只在需要时加载所需内容，不会有庞大的提示词拖慢速度。" },
        everywhere: { title: "随处可用", desc: "创建一次技能，就能在任何兼容的 AI 工具上使用，包括 Claude、Copilot、Codex 等。" },
        share: { title: "易于分享", desc: "技能只是文件。可以复制、下载，或像其他项目一样在 GitHub 上分享。" },
      },
    },
    how: {
      title: "工作原理",
      subtitle: "技能分三个阶段加载，让 AI 保持快速运行，永远不会加载超出所需的内容。",
      steps: {
        browse: { title: "浏览", desc: "AI 看到可用技能列表，只有名称和简短描述。它扫描此列表以了解有哪些能力可用。" },
        load: { title: "加载", desc: "当需要某个技能时，AI 从 SKILL.md 文件读取完整说明。它只加载与当前任务相关的内容。" },
        use: { title: "使用", desc: "AI 按照说明操作，并访问技能附带的任何辅助文件，例如脚本、模板或参考文档。" },
      },
    },
    finding: {
      title: "如何找到技能",
      subtitle: "有三种推荐方式可以发现和安装技能。",
      mpTitle: "SkillsMP 市场",
      mpDesc: "自动索引 GitHub 上的所有 Skill 项目，并按类别、更新时间、星数和其他标签进行组织——这是发现和评估技能最简单的方法。",
      shTitle: "skills.sh 排行榜 (由 Vercel 提供)",
      shDesc: "Vercel 的排行榜，可直观地查看最受欢迎的 Skills 仓库和单个技能的使用统计数据。",
      cliTitle: "npx skills CLI 工具",
      cliDesc: "使用 npx skills 命令行工具直接从终端快速发现、添加和管理技能。",
    },
    compatible: { title: "兼容的 AI 工具", subtitle: "Agent 技能可在主要 AI 编程辅助工具和助手中使用。点击任意行即可查看官方文档。" },
    directory: { title: "技能目录", subtitle: "浏览超过 81 个社区精心策划的技能。" },
    quality: { title: "质量标准", subtitle: "此目录中的每个技能都符合清晰度、精确性和实际可用性的最低标准。" },
    using: { title: "使用技能", subtitle: "添加技能不到一分钟。无需配置文件，无需更改运行时。" },
    creating: { title: "创建技能", subtitle: "好的技能是精确、可移植且可测试的。" },
    tutorials: { title: "教程与指南", subtitle: "帮助您从零到生产环境使用 Agent 技能的资源。" },
    trends: {
      title: "趋势与能力 (2026)",
      subtitle: "AI Agent 生态系统已从聊天界面转变为自主的目标驱动系统。以下是定义当今格局的关键。",
      chartLabel: "预计采用率，2026",
    },
    faq: {
      title: "常见问题",
      subtitle: "对 Agent 技能感到陌生？这些是最常见的问题。",
      items: [
        { q: "技能究竟是什么？", a: "技能是一个结构化的 SKILL.md 文件，教导 AI Agent 如何执行特定的工作流程。把它想象成菜谱卡：Agent 读取它以获得新的可靠能力，无需任何重新训练或微调。" },
        { q: "技能和提示词一样吗？", a: "不完全是。技能包含提示词，但也包含情境说明、文件夹结构，以及可选的链接脚本或模板。它是一种标准化、可移植的方式，将能力打包以便在不同 Agent 和工具之间重复使用。" },
        { q: "什么时候应该创建新技能而不是直接提示？", a: "当您在不同会话中不断重复相同的复杂说明时，请创建技能。如果它是可重复使用的模式或特定工作流程，就应该放入技能中，这样您就不必再重复解释了。" },
        { q: "技能可以调用外部工具或 API 吗？", a: "可以。技能通常定义通过 Model Context Protocol (MCP，一种让 AI 工具与外部服务通信的共享语言) 调用工具的时机和方式。它们充当 Agent 推理和工具执行之间的协调层。" },
        { q: "如何评估技能的质量？", a: "高质量技能具有明确的成功标准、定义的失败模式、无模糊语言，以及至少两个实际使用示例。它应该在长上下文会话中也能可靠地运行。" },
        { q: "技能可以在所有 AI 编程工具中使用吗？", a: "大多数现代 AI 工具（Cursor、Claude Code、Windsurf、GitHub Copilot）都支持类技能结构。此仓库中的 SKILL.md 格式设计为与框架无关，可被任何 MCP 兼容的 Agent 读取。" },
      ],
    },
    contributing: { title: "贡献", subtitle: "帮助打造最全面的开源 AI Agent 技能集合。" },
    snake: {
      title: "Agent 贪食蛇",
      gameOver: "哎呀！再试一次？",
      desc: "引导您的 Agent 穿梭于目录中。吞噬技能以变得更强。",
      init: "初始化",
      reboot: "重启",
      controls: "WASD / 方向键",
      mode: "可爱模式：开启",
      score: "分数",
      best: "最高",
    },
  },

  ja: {
    nav: { brand: "Agent Skill Index", search: "ドキュメントを検索...", github: "GitHubで見る" },
    sidebar: {
      intro: "はじめに", directory: "ディレクトリ",
      standards: "標準とガイド", resources: "リソース",
      items: {
        whatAreSkills: "Agent スキルとは？", howItWorks: "仕組み",
        findingSkills: "スキルの見つけ方", compatibleAgents: "対応 AI ツール",
        aiPlatforms: "AI プラットフォーム", cloudInfra: "クラウドとインフラ",
        devTools: "開発ツール", business: "ビジネスとマーケティング",
        security: "セキュリティ", qualityStandards: "品質基準",
        usingSkills: "スキルの使い方", creatingSkills: "スキルの作り方",
        tutorials: "公式チュートリアル", trends: "トレンド (2026)",
        faq: "よくある質問", contributing: "コントリビュート",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026年4月更新",
      subtitle: "AIエージェントスキルの究極のリストとチュートリアル。現代のエージェント時代のための機能、ツール、ワークフロー。",
      browseBtn: "ディレクトリを見る", githubBtn: "GitHubで見る",
    },
    what: {
      title: "Agent スキルとは？",
      subtitle: "Agent スキルとは、AI アシスタントのための「使い方ガイド」です。AI があらかじめすべてを知っている必要はなく、スキルによって必要に応じて新しい能力を習得できます。料理本を丸暗記させるのではなく、レシピカードを渡すようなイメージです。",
      callout: "スキルはコードではなく指示です。AI は人間がガイドを読むようにそれを読み、手順に従います。書いたり使ったりするのに開発者である必要はありません。",
      cards: {
        faster: { title: "高速・軽量", desc: "AI は必要なときに必要なものだけを読み込みます。大きなプロンプトで動作が遅くなることはありません。" },
        everywhere: { title: "どこでも使える", desc: "スキルを一度作れば、Claude、Copilot、Codexなど、対応するどの AI ツールでも使えます。" },
        share: { title: "簡単に共有", desc: "スキルはただのファイルです。コピーしたり、ダウンロードしたり、他のプロジェクトと同様に GitHub で共有できます。" },
      },
    },
    how: {
      title: "仕組み",
      subtitle: "スキルは 3 段階で読み込まれます。AI は常に必要以上に読み込まないため、高速を維持します。",
      steps: {
        browse: { title: "ブラウズ", desc: "AI は利用可能なスキルの一覧を確認します。名前と短い説明だけです。このリストをスキャンして、利用可能な機能を把握します。" },
        load: { title: "ロード", desc: "スキルが必要になると、AI は SKILL.md ファイルから完全な手順を読み込みます。現在のタスクに関連するものだけを読み込みます。" },
        use: { title: "使用", desc: "AI は指示に従い、スキルに含まれる補助ファイル（スクリプト、テンプレート、参照ドキュメントなど）にアクセスします。" },
      },
    },
    finding: {
      title: "スキルの見つけ方",
      subtitle: "スキルを発見してインストールするための 3 つの推奨方法があります。",
      mpTitle: "SkillsMP マーケットプレイス",
      mpDesc: "GitHub上のすべてのSkillプロジェクトを自動的にインデックス化し、カテゴリ、更新時間、スター数などで整理しています。スキルを発見し評価する最も簡単な方法です。",
      shTitle: "skills.sh リーダーボード (Vercel提供)",
      shDesc: "最も人気のあるSkillsリポジトリや個々のスキルの使用統計を直感的に確認できる、Vercelのリーダーボードです。",
      cliTitle: "npx skills CLIツール",
      cliDesc: "npx skillsコマンドラインツールを使用して、ターミナルから直接スキルを迅速に発見、追加、管理できます。",
    },
    compatible: { title: "対応 AI ツール", subtitle: "Agent スキルは主要な AI コーディングツールで動作します。行をクリックすると公式ドキュメントに移動します。" },
    directory: { title: "スキルディレクトリ", subtitle: "コミュニティが厳選した 81 以上のスキルを閲覧できます。" },
    quality: { title: "品質基準", subtitle: "このディレクトリのすべてのスキルは、明確さ、精度、実用性の最低基準を満たしています。" },
    using: { title: "スキルの使い方", subtitle: "スキルの追加は 1 分以内です。設定ファイルや実行時の変更は不要です。" },
    creating: { title: "スキルの作り方", subtitle: "良いスキルは正確で、ポータブルで、テスト可能です。" },
    tutorials: { title: "チュートリアルとガイド", subtitle: "Agent スキルをゼロから本番環境まで活用するためのリソース。" },
    trends: {
      title: "トレンドと能力 (2026)",
      subtitle: "AI エージェントのエコシステムは、チャットインターフェースから自律的な目標駆動型システムへと移行しています。",
      chartLabel: "予測採用率、2026年",
    },
    faq: {
      title: "よくある質問",
      subtitle: "Agent スキルが初めてですか？最もよくある質問をまとめました。",
      items: [
        { q: "「スキル」とは具体的に何ですか？", a: "スキルとは、AI エージェントが特定のワークフローを実行する方法を教える構造化された SKILL.md ファイルです。レシピカードのようなもので、エージェントはそれを読んで再トレーニングや微調整なしに新しい信頼できる能力を得ます。" },
        { q: "スキルはプロンプトと同じですか？", a: "少し違います。スキルにはプロンプトが含まれますが、状況に応じた指示、フォルダ構成、オプションでリンクされたスクリプトやテンプレートも含まれます。異なるエージェントやツール間で再利用するための標準化された移植可能な能力パッケージです。" },
        { q: "いつ新しいスキルを作るべきですか？", a: "同じ複雑な指示を異なるセッションで繰り返し使用するときに作成します。再利用可能なパターンや特定のワークフローであれば、スキルに入れることで再説明の手間を省けます。" },
        { q: "スキルは外部ツールや API を呼び出せますか？", a: "はい。スキルは Model Context Protocol (MCP、AI ツールが外部サービスと通信するための共通言語) を介してツールを呼び出す時期と方法を定義することが多いです。エージェントの推論とツールの実行の間の調整レイヤーとして機能します。" },
        { q: "スキルの品質はどう評価しますか？", a: "高品質なスキルは、明確な成功基準、定義された失敗モード、曖昧さのない言語、そして少なくとも 2 つの実際の使用例を持ちます。長いコンテキストセッションでも確実に動作する必要があります。" },
        { q: "スキルはすべての AI ツールで動作しますか？", a: "ほとんどの最新 AI ツール（Cursor、Claude Code、Windsurf、GitHub Copilot）はスキルに似た構造をサポートしています。このリポジトリの SKILL.md 形式は、フレームワークに依存せず、MCP 対応エージェントで読み取れるように設計されています。" },
      ],
    },
    contributing: { title: "コントリビュート", subtitle: "最も包括的なオープンソース AI エージェントスキルコレクションの成長を助けてください。" },
    snake: {
      title: "Agent スネーク",
      gameOver: "おっと！もう一度？",
      desc: "エージェントをディレクトリ内で操作してください。スキルを食べて強くなりましょう。",
      init: "初期化",
      reboot: "再起動",
      controls: "WASD / 矢印キー",
      mode: "キュートモード：オン",
      score: "スコア",
      best: "ベスト",
    },
  },

  ko: {
    nav: { brand: "Agent Skill Index", search: "문서 검색...", github: "GitHub에서 보기" },
    sidebar: {
      intro: "소개", directory: "디렉토리",
      standards: "표준 및 가이드", resources: "리소스",
      items: {
        whatAreSkills: "Agent 스킬이란?", howItWorks: "작동 방식",
        findingSkills: "스킬 찾기", compatibleAgents: "호환 AI 도구",
        aiPlatforms: "AI 플랫폼", cloudInfra: "클라우드 및 인프라",
        devTools: "개발 도구", business: "비즈니스 및 마케팅",
        security: "보안", qualityStandards: "품질 기준",
        usingSkills: "스킬 사용법", creatingSkills: "스킬 만들기",
        tutorials: "공식 튜토리얼", trends: "트렌드 (2026)",
        faq: "자주 묻는 질문", contributing: "기여하기",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "2026년 4월 업데이트",
      subtitle: "AI 에이전트 스킬의 궁극적인 리스트와 튜토리얼. 현대 에이전트 시대를 위한 기능, 도구, 워크플로우.",
      browseBtn: "디렉토리 보기", githubBtn: "GitHub에서 보기",
    },
    what: {
      title: "Agent 스킬이란?",
      subtitle: "Agent 스킬을 AI 어시스턴트를 위한 '사용 설명서'라고 생각하세요. AI가 모든 것을 미리 알 필요 없이, 스킬을 통해 필요할 때 새로운 능력을 배울 수 있습니다. 요리책 전체를 외우게 하는 대신 레시피 카드를 주는 것과 같습니다.",
      callout: "스킬은 코드가 아닌 지시사항입니다. AI는 인간이 가이드를 읽듯이 읽고 단계를 따릅니다. 작성하거나 사용하기 위해 개발자일 필요는 없습니다.",
      cards: {
        faster: { title: "더 빠르고 가볍게", desc: "AI는 필요할 때만 필요한 것을 로드합니다. 무거운 프롬프트로 속도가 느려지지 않습니다." },
        everywhere: { title: "어디서나 사용 가능", desc: "스킬을 한 번 만들면 Claude, Copilot, Codex 등 모든 호환 AI 도구에서 사용할 수 있습니다." },
        share: { title: "쉬운 공유", desc: "스킬은 단순한 파일입니다. 복사하거나, 다운로드하거나, 다른 프로젝트처럼 GitHub에서 공유할 수 있습니다." },
      },
    },
    how: {
      title: "작동 방식",
      subtitle: "스킬은 세 단계로 로드됩니다. 이렇게 하면 AI가 빠르게 유지됩니다: 필요 이상으로 로드하지 않습니다.",
      steps: {
        browse: { title: "탐색", desc: "AI는 사용 가능한 스킬 목록을 확인합니다. 이름과 짧은 설명만 있습니다. 어떤 기능이 사용 가능한지 파악하기 위해 목록을 스캔합니다." },
        load: { title: "로드", desc: "스킬이 필요하면 AI는 SKILL.md 파일에서 전체 지시사항을 읽습니다. 현재 작업과 관련된 것만 로드합니다." },
        use: { title: "사용", desc: "AI는 지시사항을 따르고 스킬에 포함된 도우미 파일(스크립트, 템플릿, 참조 문서 등)에 접근합니다." },
      },
    },
    finding: {
      title: "스킬 찾는 방법",
      subtitle: "스킬을 발견하고 설치하는 세 가지 추천 방법이 있습니다.",
      mpTitle: "SkillsMP 마켓플레이스",
      mpDesc: "GitHub의 모든 Skill 프로젝트를 자동으로 인덱싱하고 카테고리, 업데이트 시간, 스타 수 등에 따라 정리하여 보여줍니다. 스킬을 발견하고 평가하는 가장 쉬운 방법입니다.",
      shTitle: "skills.sh 리더보드 (Vercel 제공)",
      shDesc: "가장 인기 있는 스킬 저장소와 개별 스킬 사용 통계를 직관적으로 확인할 수 있는 Vercel의 리더보드입니다.",
      cliTitle: "npx skills CLI 도구",
      cliDesc: "npx skills 명령줄 도구를 사용하여 터미널에서 직접 빠르게 스킬을 발견, 추가 및 관리할 수 있습니다.",
    },
    compatible: { title: "호환 AI 도구", subtitle: "Agent 스킬은 주요 AI 코딩 도구에서 작동합니다. 행을 클릭하면 공식 문서로 이동합니다." },
    directory: { title: "스킬 디렉토리", subtitle: "커뮤니티가 엄선한 81개 이상의 스킬을 탐색하세요." },
    quality: { title: "품질 기준", subtitle: "이 디렉토리의 모든 스킬은 명확성, 정밀도, 실제 사용 가능성의 최소 기준을 충족합니다." },
    using: { title: "스킬 사용법", subtitle: "스킬 추가는 1분 미만입니다. 설정 파일이나 런타임 변경이 필요 없습니다." },
    creating: { title: "스킬 만들기", subtitle: "좋은 스킬은 정확하고, 이식 가능하며, 테스트 가능합니다." },
    tutorials: { title: "튜토리얼 및 가이드", subtitle: "Agent 스킬을 처음부터 프로덕션까지 활용하는 데 도움이 되는 리소스." },
    trends: {
      title: "트렌드와 역량 (2026)",
      subtitle: "AI 에이전트 생태계는 채팅 인터페이스에서 자율적인 목표 중심 시스템으로 전환되었습니다.",
      chartLabel: "예상 채택률, 2026년",
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "Agent 스킬이 처음이신가요? 가장 자주 묻는 질문들입니다.",
      items: [
        { q: "'스킬'이 정확히 무엇인가요?", a: "스킬은 AI 에이전트가 특정 워크플로우를 수행하는 방법을 가르치는 구조화된 SKILL.md 파일입니다. 레시피 카드처럼 생각하세요: 에이전트는 재훈련이나 파인튜닝 없이 새로운 신뢰할 수 있는 기능을 얻기 위해 이를 읽습니다." },
        { q: "스킬은 프롬프트와 같은가요?", a: "꼭 그렇지는 않습니다. 스킬에는 프롬프트가 포함되지만, 상황별 지시사항, 폴더 구조, 선택적으로 연결된 스크립트나 템플릿도 포함됩니다. 다양한 에이전트와 도구에서 재사용하기 위해 기능을 패키지화하는 표준화된 이식 가능한 방법입니다." },
        { q: "언제 새 스킬을 만들어야 하나요?", a: "다른 세션에서 동일한 복잡한 지시사항을 계속 반복할 때 스킬을 만드세요. 재사용 가능한 패턴이나 특정 워크플로우라면 스킬에 넣어두면 다시 설명할 필요가 없습니다." },
        { q: "스킬이 외부 도구나 API를 호출할 수 있나요?", a: "네. 스킬은 종종 Model Context Protocol (MCP, AI 도구가 외부 서비스와 통신하는 공통 언어)을 통해 도구를 호출하는 시기와 방법을 정의합니다. 에이전트의 추론과 도구 실행 사이의 조정 레이어 역할을 합니다." },
        { q: "스킬의 품질을 어떻게 평가하나요?", a: "고품질 스킬은 명확한 성공 기준, 정의된 실패 모드, 모호하지 않은 언어, 최소 두 개의 실제 사용 예시를 갖추고 있습니다. 긴 컨텍스트 세션에서도 안정적으로 작동해야 합니다." },
        { q: "스킬은 모든 AI 코딩 도구에서 작동하나요?", a: "대부분의 현대 AI 도구 (Cursor, Claude Code, Windsurf, GitHub Copilot)는 스킬과 유사한 구조를 지원합니다. 이 저장소의 SKILL.md 형식은 프레임워크에 독립적이며 MCP 호환 에이전트가 읽을 수 있도록 설계되었습니다." },
      ],
    },
    contributing: { title: "기여하기", subtitle: "가장 포괄적인 오픈 소스 AI 에이전트 스킬 컬렉션 성장에 도움을 주세요." },
    snake: {
      title: "Agent 스네이크",
      gameOver: "앗! 다시 시도할까요?",
      desc: "에이전트를 디렉토리에서 안내하세요. 스킬을 먹고 더 강해지세요.",
      init: "초기화",
      reboot: "재부팅",
      controls: "WASD / 방향키",
      mode: "큐트 모드: 켜짐",
      score: "점수",
      best: "최고",
    },
  },

  es: {
    nav: { brand: "Agent Skill Index", search: "Buscar documentación...", github: "Ver en GitHub" },
    sidebar: {
      intro: "Introducción", directory: "Directorio",
      standards: "Estándares y Guías", resources: "Recursos",
      items: {
        whatAreSkills: "¿Qué son las Agent Skills?", howItWorks: "Cómo funciona",
        findingSkills: "Encontrar Skills", compatibleAgents: "Agentes compatibles",
        aiPlatforms: "Plataformas de IA", cloudInfra: "Cloud e Infraestructura",
        devTools: "Herramientas de desarrollo", business: "Negocios y Marketing",
        security: "Seguridad", qualityStandards: "Estándares de calidad",
        usingSkills: "Usando Skills", creatingSkills: "Creando Skills",
        tutorials: "Tutoriales oficiales", trends: "Tendencias (2026)",
        faq: "Preguntas frecuentes", contributing: "Contribuir",
      },
    },
    hero: {
      title: "Agent Skill Index",
      badge: "Actualizado abril 2026",
      subtitle: "La lista definitiva de habilidades, herramientas y flujos de trabajo para agentes de IA. Tutoriales expertos para la era agéntica moderna.",
      browseBtn: "Ver Directorio", githubBtn: "Ver en GitHub",
    },
    what: {
      title: "¿Qué son las Agent Skills?",
      subtitle: "Piensa en las Agent Skills como guías prácticas para asistentes de IA. En lugar de que la IA necesite saberlo todo de antemano, las skills le permiten aprender nuevas habilidades al instante, como darle a alguien una tarjeta de receta en lugar de hacerle memorizar un libro de cocina entero.",
      callout: "Las skills son instrucciones, no código. La IA las lee como un humano lee una guía y luego sigue los pasos. No necesitas ser desarrollador para escribirlas o usarlas.",
      cards: {
        faster: { title: "Más rápido y ligero", desc: "La IA solo carga lo que necesita, cuando lo necesita. Sin enormes prompts que ralenticen las cosas." },
        everywhere: { title: "Funciona en todas partes", desc: "Crea una skill una vez y úsala con cualquier herramienta de IA compatible, incluyendo Claude, Copilot, Codex y más." },
        share: { title: "Fácil de compartir", desc: "Las skills son solo archivos. Cópialas, descárgalas o compártelas en GitHub como cualquier otro proyecto." },
      },
    },
    how: {
      title: "Cómo funciona",
      subtitle: "Las skills se cargan en tres etapas. Esto mantiene la IA rápida: nunca carga más de lo que necesita.",
      steps: {
        browse: { title: "Explorar", desc: "La IA ve una lista de skills disponibles, solo nombres y descripciones cortas. Escanea esta lista para entender qué capacidades están disponibles." },
        load: { title: "Cargar", desc: "Cuando se necesita una skill, la IA lee las instrucciones completas del archivo SKILL.md. Solo carga lo relevante para tu tarea actual." },
        use: { title: "Usar", desc: "La IA sigue las instrucciones y accede a cualquier archivo auxiliar: scripts, plantillas o documentos de referencia incluidos con la skill." },
      },
    },
    finding: {
      title: "Cómo encontrar Skills",
      subtitle: "Hay tres formas recomendadas para descubrir e instalar skills.",
      mpTitle: "SkillsMP Marketplace",
      mpDesc: "Indexa automáticamente todos los proyectos de Skill en GitHub y los organiza por categoría, tiempo de actualización, estrellas y otras etiquetas, siendo la forma más fácil de descubrir skills.",
      shTitle: "skills.sh Leaderboard (de Vercel)",
      shDesc: "El leaderboard de Vercel para ver intuitivamente los repositorios de Skills más populares y estadísticas de uso de skills individuales.",
      cliTitle: "Herramienta CLI npx skills",
      cliDesc: "Usa la herramienta de línea de comandos npx skills para descubrir, añadir y gestionar skills rápidamente desde tu terminal.",
    },
    compatible: { title: "Agentes compatibles", subtitle: "Las Agent Skills funcionan en las principales herramientas de codificación con IA. Haz clic en cualquier fila para visitar la documentación oficial." },
    directory: { title: "Directorio de Skills", subtitle: "Explora más de 81 skills curadas por la comunidad." },
    quality: { title: "Estándares de calidad", subtitle: "Cada skill en este directorio cumple un mínimo de claridad, precisión y usabilidad en el mundo real." },
    using: { title: "Usando Skills", subtitle: "Agregar una skill toma menos de un minuto. Sin archivos de configuración ni cambios en tiempo de ejecución." },
    creating: { title: "Creando Skills", subtitle: "Una buena skill es precisa, portable y testeable." },
    tutorials: { title: "Tutoriales y Guías", subtitle: "Recursos para ayudarte a ir de cero a producción con agent skills." },
    trends: {
      title: "Tendencias y Capacidades (2026)",
      subtitle: "El ecosistema de agentes de IA ha pasado de interfaces de chat a sistemas autónomos orientados a objetivos.",
      chartLabel: "Adopción proyectada, 2026",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "¿Nuevo en agent skills? Estas son las preguntas más comunes.",
      items: [
        { q: "¿Qué es exactamente una 'skill'?", a: "Una skill es un archivo SKILL.md estructurado que enseña a un agente de IA cómo realizar un flujo de trabajo específico. Piénsalo como una tarjeta de receta: el agente la lee para obtener nuevas capacidades confiables sin reentrenamiento ni ajuste fino." },
        { q: "¿Una skill es lo mismo que un prompt?", a: "No exactamente. Una skill contiene prompts, pero también incluye instrucciones situacionales, estructura de carpetas y opcionalmente scripts o plantillas vinculadas. Es una forma estandarizada y portable de empaquetar una capacidad para reutilizarla en diferentes agentes y herramientas." },
        { q: "¿Cuándo debo crear una nueva skill en lugar de solo hacer prompting?", a: "Crea una skill cuando sigues repitiendo las mismas instrucciones complejas en diferentes sesiones. Si es un patrón reutilizable o un flujo de trabajo específico, pertenece a una skill para que nunca tengas que re-explicarlo." },
        { q: "¿Pueden las skills llamar a herramientas externas o APIs?", a: "Sí. Las skills a menudo definen la lógica para cuándo y cómo llamar a herramientas a través del Model Context Protocol (MCP), un lenguaje compartido que permite a las herramientas de IA comunicarse con servicios externos. Actúan como la capa de coordinación entre el razonamiento del agente y la ejecución de la herramienta." },
        { q: "¿Cómo evalúo si una skill es de alta calidad?", a: "Una skill de alta calidad tiene criterios de éxito claros, modos de falla definidos, lenguaje sin ambigüedad y al menos dos ejemplos de uso en el mundo real. Debe funcionar de manera confiable incluso en sesiones de contexto largo." },
        { q: "¿Las skills funcionan en todas las herramientas de codificación con IA?", a: "La mayoría de las herramientas modernas de IA (Cursor, Claude Code, Windsurf, GitHub Copilot) admiten construcciones similares a skills. El formato SKILL.md en este repositorio está diseñado para ser agnóstico al framework y legible por cualquier agente compatible con MCP." },
      ],
    },
    contributing: { title: "Contribuir", subtitle: "Ayuda a hacer crecer la colección de código abierto más completa de agent skills de IA." },
    snake: {
      title: "Agent Snake",
      gameOver: "¡Ups! ¿Intentar de nuevo?",
      desc: "Navega con tu agente por el directorio. Come skills para fortalecerte.",
      init: "INICIALIZAR",
      reboot: "REINICIAR",
      controls: "WASD / FLECHAS",
      mode: "MODO CUTE: ACTIVADO",
      score: "Puntuación",
      best: "Mejor",
    },
  },
} as const;

export type Translations = typeof t.en;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && LANGUAGES.some((l) => l.code === saved)) setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslations(): Translations {
  const { lang } = useLanguage();
  return t[lang] as unknown as Translations;
}
