import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA, SKILLSET_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-950 border-b border-zinc-800">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            Curriculum Vitae / Engineering Resume
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-zinc-950 text-zinc-200 space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Resume Header */}
          <div className="border-b border-zinc-800 pb-6 text-center space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              TCHOULEKO TANEKEU JUDICAEL
            </h1>
            <p className="text-xs sm:text-sm font-medium text-amber-400 font-mono tracking-wide">
              Graduate Mining & Mineral Engineer · Quarry & Exploration Specialist · Mining AI & Geomechanics
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:judicaeltchouleko@gmail.com" className="hover:text-amber-400 transition-colors">
                  judicaeltchouleko@gmail.com
                </a>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:+237676136827" className="hover:text-amber-400 transition-colors">
                  +(237) 676136827
                </a>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                <a
                  href="https://www.linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b
                </a>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Mbouda, Cameroon
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-b border-zinc-800 pb-1">
              Education & Certifications
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-zinc-400">{edu.period}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 italic text-zinc-300">
                  <span>{edu.degree}</span>
                  {edu.gpa && (
                    <span className="not-italic text-[11px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
                {edu.coursework && edu.coursework.length > 0 && (
                  <p className="text-zinc-400 leading-relaxed pt-0.5">
                    <strong className="text-zinc-300 font-mono">Coursework / Focus:</strong> {edu.coursework.join(', ')}.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-b border-zinc-800 pb-1">
              Professional & Engineering Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-sm">{exp.company}</span>
                  <span className="font-mono text-zinc-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="italic text-amber-400/90">{exp.role} — {exp.location}</div>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1 pt-1">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-b border-zinc-800 pb-1">
              Key Engineering Projects & Research
            </h2>
            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="font-mono text-zinc-400 text-[11px] uppercase">{proj.subtitle}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed pt-0.5">
                  {proj.leadText}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-b border-zinc-800 pb-1">
              Technical Skillset Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLSET_DATA.map((cat, idx) => (
                <div key={idx} className="p-3 bg-zinc-900 border border-zinc-800 rounded">
                  <span className="font-mono font-semibold text-zinc-200 uppercase text-[11px]">
                    {cat.categoryName}
                  </span>
                  <p className="text-zinc-400 mt-1 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 bg-zinc-950 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
