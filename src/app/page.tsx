"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { FeaturedProjectSection } from "@/sections/FeaturedProjectSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ResumeSection } from "@/sections/ResumeSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
