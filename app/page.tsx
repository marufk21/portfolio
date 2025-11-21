"use client";

import { useActiveSection } from "../hooks/use-active";
import IntroSidebar from "@/components/sidebar";
import AboutSection from "@/components/about";
import ExperienceSection from "@/components/experiences";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12 font-sans md:px-8 md:py-16 lg:px-12 lg:py-0 relative">
      {/* Background Mesh Effect */}
      <div className="bg-mesh" />

      <main className="lg:flex lg:justify-between lg:gap-8">
        {/* Left Sidebar - Introduction, Navigation, Social Links */}
        <IntroSidebar activeSection={activeSection} />

        {/* Main Content */}
        <main className="pt-16 lg:w-2/3 lg:py-16 xl:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
      </main>
    </div>
  );
}
