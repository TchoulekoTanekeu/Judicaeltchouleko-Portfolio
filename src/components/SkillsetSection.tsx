import React, { useState } from 'react';
import { Search, Info, SlidersHorizontal, Check } from 'lucide-react';
import { SKILLSET_DATA } from '../data/portfolioData';

export const SkillsetSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['ALL', ...SKILLSET_DATA.map((c) => c.categoryName)];

  const filteredCategories = SKILLSET_DATA.map((cat) => {
    if (selectedCategory !== 'ALL' && cat.categoryName !== selectedCategory) {
      return null;
    }
    const skills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.context.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (skills.length === 0) return null;
    return { ...cat, skills };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching user reference typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div className="space-y-2">
            <h2 className="font-serif italic text-4xl sm:text-5xl font-normal text-white">
              Skillset
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Cross-disciplinary proficiency across mineral extractive metallurgy, computational CAD & FEA mechanics, and mining AI systems.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search skill (e.g. SolidWorks, Flotation, React)..."
                className="pl-9 pr-3 py-1.5 text-xs bg-zinc-900 border border-zinc-800 rounded-md text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Proficiency Scale Header Labels matching reference: Introduced | Proficient | Expert */}
        <div className="hidden sm:grid grid-cols-12 gap-4 pb-3 border-b border-zinc-800/60 text-xs font-mono text-zinc-400 mb-8">
          <div className="col-span-5 uppercase tracking-wider text-zinc-500">
            Competency Domain
          </div>
          <div className="col-span-7 grid grid-cols-3 text-center">
            <span className="text-left pl-2">Introduced</span>
            <span>Proficient</span>
            <span className="text-right pr-2">Expert</span>
          </div>
        </div>

        {/* Skill Matrix Groups */}
        <div className="space-y-12">
          {filteredCategories.map((group) => {
            if (!group) return null;
            return (
              <div key={group.categoryName} className="space-y-6">
                {/* Category Header with "Introduced / Proficient / Expert" on mobile if needed */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-2">
                  <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300 font-mono">
                    {group.categoryName}
                  </h3>
                  <div className="flex sm:hidden justify-between text-[11px] font-mono text-zinc-500 mt-2">
                    <span>Introduced</span>
                    <span>Proficient</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Skill Items with Horizontal Slider Lines matching reference */}
                <div className="space-y-5">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group relative cursor-default"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                          {/* Skill Name */}
                          <div className="sm:col-span-5 flex items-center justify-between sm:justify-start gap-2">
                            <span className="text-xs sm:text-sm text-zinc-300 group-hover:text-amber-400 transition-colors font-medium">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 sm:hidden">
                              {skill.level}
                            </span>
                          </div>

                          {/* Horizontal Slider Bar */}
                          <div className="sm:col-span-7 relative flex items-center h-6">
                            {/* Background Track Line with 3 subtle tick markers */}
                            <div className="w-full h-[2px] bg-zinc-800 relative">
                              {/* 0% marker */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-zinc-700" />
                              {/* 50% marker (Proficient) */}
                              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1 h-2 bg-zinc-700" />
                              {/* 100% marker (Expert) */}
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-zinc-700" />

                              {/* Active Fill Line */}
                              <div
                                className="h-full bg-zinc-400 group-hover:bg-amber-400 transition-all duration-300 relative"
                                style={{ width: `${skill.percentage}%` }}
                              >
                                {/* Active Indicator Nib */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-sm ring-2 ring-zinc-950" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Context Tooltip / Applied Subtitle */}
                        <div
                          className={`text-xs text-zinc-500 font-sans mt-1 sm:pl-0 transition-opacity duration-200 ${
                            isHovered ? 'opacity-100 text-zinc-400' : 'opacity-80'
                          }`}
                        >
                          <span className="text-amber-400/80 mr-1.5 font-mono text-[11px]">↳</span>
                          {skill.context}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
