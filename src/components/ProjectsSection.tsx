import React, { useState } from 'react';
import { ChevronRight, Filter, Layers, ExternalLink } from 'lucide-react';
import { ProjectCategory, ProjectDetail } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'metallurgy', label: 'Mineral & Metallurgy' },
    { id: 'cad-hardware', label: 'CAD & Hardware' },
    { id: 'fullstack', label: 'Mining AI Systems' },
    { id: 'ventures', label: 'Venture Initiatives' },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference layout */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            Here, I have displayed a number of engineering focussed endeavors that I have either completed or am currently working on. These projects focus on physical pilot rigs, SolidWorks CAD drafting, finite element simulations (FEA/CFD), extractive metallurgy, and intelligent mining AI systems.
          </p>

          {/* Interactive Category Filter Bar */}
          <div className="pt-4 flex flex-wrap justify-center gap-1.5 p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-lg max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Project Cards matching user reference screenshots */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Subtle Corner Badge */}
                    <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-zinc-300 border border-zinc-800">
                      {project.metrics[0].label}: <span className="text-amber-400 font-semibold">{project.metrics[0].value}</span>
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Subtitle in distinctive accent color matching user reference red/amber highlight */}
                  <div className="text-sm font-semibold tracking-wide text-red-500 uppercase font-mono">
                    {project.subtitle}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.leadText}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tag}</span>
                        {idx < 3 && <span className="text-zinc-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Button matching the user's "Click to See Details >" reference image */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 rounded-sm transition-all group"
                    >
                      <span>Click to See Details</span>
                      <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
