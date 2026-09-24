import React, { useState } from 'react';
import { Sparkles, Atom, Cpu, Flame, Camera, ChevronRight, Award, Compass } from 'lucide-react';
import { VENTURES_AND_INTERESTS } from '../data/portfolioData';

export const VenturesAndInterests: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-400" />;
      default:
        return <Compass className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="ventures" className="py-20 bg-zinc-900/40 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Entrepreneurship & Applied Research
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Ventures, Field Rigs & Aerial Topography
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Translating fundamental materials science into commercial pilot hardware, grant-backed clean mineral extraction, and drone photogrammetry.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENTURES_AND_INTERESTS.map((item, idx) => {
            const isSelected = selectedVenture === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedVenture(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-zinc-900 border-amber-400/80 shadow-lg shadow-amber-400/5'
                    : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {item.stage}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 text-[11px]">
                    {item.metrics}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Focus Detail Drawer */}
        <div className="mt-8 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-amber-400">Selected Focus</span>
              <h4 className="text-lg font-serif text-white">
                {VENTURES_AND_INTERESTS[selectedVenture].name} — Strategic Significance
              </h4>
              <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
                {VENTURES_AND_INTERESTS[selectedVenture].description}
              </p>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-medium text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap font-semibold"
            >
              Discuss Collaboration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
