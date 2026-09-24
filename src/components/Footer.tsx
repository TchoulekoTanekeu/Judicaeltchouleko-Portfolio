import React from 'react';
import { ArrowUp, Linkedin, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-850 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-serif text-lg text-zinc-100">
            Judicael Tchouleko, M.Eng.
          </div>
          <p className="text-xs text-zinc-500">
            Mining & Mineral Engineering · Materials Science & Metallurgy · Mining AI Systems
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a
            href="https://www.linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:judicaeltchouleko@gmail.com"
            className="hover:text-amber-400 transition-colors"
          >
            judicaeltchouleko@gmail.com
          </a>
          <a
            href="#projects"
            className="hover:text-amber-400 transition-colors"
          >
            Projects
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
