import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/portfolioData';
import { Award, Briefcase, GraduationCap, Building2 } from 'lucide-react';

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Split matching user's reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ================= LEFT COLUMN: EDUCATION ================= */}
          <div className="space-y-8">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="font-serif italic text-3xl sm:text-4xl text-white font-normal flex items-center gap-3">
                <span>Education</span>
              </h2>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 sm:pl-8 space-y-10 ml-2">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative space-y-4">
                  {/* Timeline Dot Marker matching reference */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-amber-400 ring-4 ring-zinc-950" />

                  {/* Period */}
                  <div className="text-xs font-mono text-zinc-400">
                    {edu.period}
                  </div>

                  {/* Institution & Degree */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {edu.institution}
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 italic">
                      {edu.degree}
                    </p>
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mt-1 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-mono font-semibold">
                        <span>GPA:</span>
                        <span>{edu.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Coursework Block matching reference image style */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                        Coursework / Focus:
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {edu.coursework.join(', ')}.
                      </p>
                    </div>
                  )}

                  {/* Involvement Block matching reference image style */}
                  {edu.involvement && edu.involvement.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                        Involvement & Leadership:
                      </div>
                      <div className="space-y-3">
                        {edu.involvement.map((inv, i) => (
                          <div key={i} className="space-y-1">
                            <div className="text-xs font-medium text-amber-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <span>{inv.role}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-zinc-400">
                              {inv.details.map((detail, dIdx) => (
                                <li key={dIdx} className="leading-relaxed">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Awards / Honors */}
                  {edu.honors && (
                    <div className="pt-2 border-t border-zinc-900">
                      <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono mb-1.5">
                        Honors & Awards:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: EXPERIENCE ================= */}
          <div className="space-y-8">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="font-serif italic text-3xl sm:text-4xl text-white font-normal flex items-center gap-3">
                <span>Experience</span>
              </h2>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 sm:pl-8 space-y-10 ml-2">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="relative space-y-3">
                  {/* Timeline Dot Marker matching reference */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-amber-400 ring-4 ring-zinc-950" />

                  {/* Period */}
                  <div className="text-xs font-mono text-zinc-400">
                    {exp.period}
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 italic">
                      {exp.role}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-amber-400 font-bold shrink-0 mt-0.5">·</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  {exp.technologiesUsed && (
                    <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400">
                      <span className="text-zinc-500 font-mono">Tools:</span>
                      {exp.technologiesUsed.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span>{tech}</span>
                          {tIdx < exp.technologiesUsed!.length - 1 && (
                            <span className="text-zinc-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
