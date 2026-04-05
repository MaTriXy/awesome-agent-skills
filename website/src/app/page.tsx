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
    <div className="flex flex-col pt-16">
      <div className="px-6 md:px-12 lg:px-16 space-y-32 mb-32 max-w-5xl">
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
