"use client";

import Hero from "@/components/sections/Hero";
import WhatIsIt from "@/components/sections/WhatIsIt";
import SkillDirectory from "@/components/sections/SkillDirectory";
import QualityStandards from "@/components/sections/QualityStandards";
import UsingSkills from "@/components/sections/UsingSkills";
import CreatingSkills from "@/components/sections/CreatingSkills";
import Tutorials from "@/components/sections/Tutorials";
import Trends from "@/components/sections/Trends";
import FAQ from "@/components/sections/FAQ";
import Contributing from "@/components/sections/Contributing";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-40 mb-40">
        <Hero />
        <WhatIsIt />
        <SkillDirectory />
        <QualityStandards />
        <UsingSkills />
        <CreatingSkills />
        <Tutorials />
        <Trends />
        <FAQ />
        <Contributing />
      </div>
    </div>
  );
}
