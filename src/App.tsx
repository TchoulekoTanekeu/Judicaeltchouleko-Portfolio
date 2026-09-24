import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { MetallurgyLabCalculator } from './components/MetallurgyLabCalculator';
import { SkillsetSection } from './components/SkillsetSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { VenturesAndInterests } from './components/VenturesAndInterests';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-zinc-950">
      {/* Top Bar Navigation following 3-zone contract */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Split Hero Section inspired by user's reference mockup */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Alternating Engineering Projects Section matching user reference screenshot */}
        <ProjectsSection />

        {/* Live Interactive Metallurgy & Process Workbench */}
        <MetallurgyLabCalculator />

        {/* Skillset Slider Matrix matching user reference screenshot */}
        <SkillsetSection />

        {/* Education & Experience Two-Column Timeline matching user reference screenshot */}
        <ExperienceEducationSection />

        {/* Ventures, Field Rigs & Aerial Topography */}
        <VenturesAndInterests />

        {/* Direct Contact & Consultation Inquiry */}
        <ContactSection />
      </main>

      {/* Clean Unobtrusive Footer */}
      <Footer />

      {/* Formatted Printable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
