import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Lab Simulator', href: '#metallurgy-lab', id: 'metallurgy-lab' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience & Education', href: '#experience', id: 'experience' },
    { label: 'Ventures', href: '#ventures', id: 'ventures' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Smooth scroll handler with offset compensation for the fixed header
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'metallurgy-lab', 'skills', 'experience', 'ventures', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800/80 transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Wordmark */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Judicael Tchouleko
          </span>
          <span className="text-[11px] font-mono text-zinc-400 hidden xl:inline-block border-l border-zinc-800 pl-2.5 py-0.5">
            M.Eng. · Mining AI & Metallurgy
          </span>
        </a>

        {/* Clean, well-spaced Nav Links (desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-md transition-all duration-150 ${
                  isActive
                    ? 'text-amber-400 bg-amber-400/10 font-semibold shadow-inner'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-all shadow-sm active:scale-95"
            title="Open printable curriculum vitae"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden text-[11px]">CV</span>
          </button>
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm active:scale-95"
          >
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Inquire</span>
            <span className="sm:hidden text-[11px]">Contact</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-md border border-zinc-800 transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/95 px-4 pt-3 pb-5 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-150 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-amber-400 bg-amber-400/10 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-md"
            >
              <Send className="w-4 h-4" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
