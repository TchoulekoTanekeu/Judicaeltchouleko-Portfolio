import React from 'react';
import { ArrowDown, Linkedin, Mail, Github, Compass, Flame, Terminal, FileCode } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative w-full bg-zinc-950 text-zinc-100 overflow-hidden border-b border-zinc-800">
      {/* Split Hero Grid matching the user's reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Side: Cinematic Lab Atmosphere with Bold Editorial Typography */}
        <div className="lg:col-span-7 relative flex flex-col justify-end p-8 sm:p-12 lg:p-16 min-h-[440px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-800 group">
          {/* Background image without modifying filters */}
          <img
            src={PORTFOLIO_IMAGES.heroLab}
            alt="Judicael Tchouleko conducting materials and metallurgical characterization in the lab"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Subtle gradient scrim at the base for typographic readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

          {/* Foreground Title & Headline */}
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-400/90 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-sm border border-amber-400/20">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Mining AI Systems & Metallurgist</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-none">
              Judicael Tchouleko
            </h1>

            <p className="text-sm sm:text-base font-medium text-zinc-300 tracking-wide leading-relaxed">
              Mining & Mineral Engineer <span className="text-amber-400 font-bold">|</span> Metallurgy & Material Science <span className="text-amber-400 font-bold">|</span> Mining AI Systems
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-sm transition-colors shadow-lg shadow-amber-400/10"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#metallurgy-lab"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700 rounded-sm transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>Launch Interactive Lab</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Portrait, Bio, and Direct Credentials */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-zinc-950/95">
          <div className="space-y-6">
            {/* Circular Avatar + Social Link matching reference layout */}
            <div className="flex items-center gap-5">
              <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-amber-400/40 shadow-xl bg-zinc-900">
                <img
                  src={PORTFOLIO_IMAGES.avatar}
                  alt="Judicael Tchouleko Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                  Candidate Profile
                </div>
                <div className="text-base font-semibold text-zinc-100">
                  Judicael Tchouleko, M.Eng.
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <a
                    href="https://www.linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <span className="text-zinc-700">·</span>
                  <a
                    href="mailto:judicaeltchouleko@gmail.com"
                    className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>jtchouleko@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* About Narrative */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Professional Profile & Engineering Focus
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                A mining and mineral engineer with over a year of hands-on experience across quarry production and geological exploration environments. Proficient in developing drill and blast designs, open pit mine layouts, and optimizing aggregate production circuits.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Experienced in supervising quarry crushing lines, diamond wire saw block cutting, and detailed exploration field mapping with core logging. Combines classical mining engineering with modern data-driven tools including machine learning neural networks for drilling optimization, computer-based core logging, and  mining software (Micromine, Surpac, Deswik, Opit-blast, and QGIS) and Continuously develops mining AI systems.
              </p>
            </div>

            {/* Quick Action Buttons matching reference style */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="px-4 py-2 text-xs font-medium text-amber-400 hover:text-amber-300 border border-amber-400/60 hover:border-amber-400 rounded-sm transition-colors"
              >
                Read Full Resume
              </button>
              <a
                href="#skills"
                className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-sm transition-colors"
              >
                View Technical Skills
              </a>
            </div>
          </div>

          {/* Quantitative Adjacency Strip */}
          <div className="pt-8 mt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white font-mono tabular-nums">
                93.4%
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                Flotation Recovery
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white font-mono tabular-nums">
                2,420
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                Nm/deg Rigidity
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-amber-400 font-mono tabular-nums">
                $75K
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                Clean Tech Grants
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
