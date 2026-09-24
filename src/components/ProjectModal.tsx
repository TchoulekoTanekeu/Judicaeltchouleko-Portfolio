import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ExternalLink, 
  Cpu, 
  Wrench, 
  BarChart2, 
  CheckCircle2, 
  Layers, 
  Image as ImageIcon,
  Compass,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { ProjectDetail } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeImageCaption, setActiveImageCaption] = useState<string>('');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Initialize active image when project opens
  useEffect(() => {
    if (project) {
      setActiveImage(project.image || project.galleryImages?.[0]?.url || null);
      setActiveImageCaption(project.galleryImages?.[0]?.caption || project.title);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, lightboxImage]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/95 backdrop-blur-md animate-in fade-in duration-200">
      {/* Top Floating Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Engineering Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              Engineering Case Study
            </span>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-colors"
              aria-label="Close project details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - Case Study Article Style */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        {/* Project Header Banner */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>{project.subtitle}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-4xl pt-2">
            {project.leadText}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-amber-400/40 transition-colors"
              >
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">{metric.label}</div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tabular-nums mt-1">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Competency Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mr-2">Core Tech:</span>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Interactive Media Showcase with Space for Images */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Project Visuals & Engineering Artifacts</span>
            </h2>
            <span className="text-xs font-mono text-zinc-500">
              Click images to expand & inspect
            </span>
          </div>

          {/* Main Selected Image Stage */}
          {activeImage && (
            <div 
              className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl cursor-pointer"
              onClick={() => setLightboxImage(activeImage)}
            >
              <img
                src={activeImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 md:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div className="text-xs sm:text-sm text-zinc-200 bg-zinc-950/80 backdrop-blur-md px-3.5 py-2 rounded-md border border-zinc-800/80 max-w-2xl">
                  {activeImageCaption}
                </div>
                <div className="p-2 rounded-md bg-zinc-950/80 text-zinc-300 border border-zinc-800 hover:text-amber-400 transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* Multi-Image Gallery Row if available */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {project.galleryImages
                .filter((imgItem) => Boolean(imgItem?.url))
                .map((imgItem, idx) => {
                  const isSelected = activeImage === imgItem.url;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveImage(imgItem.url);
                        setActiveImageCaption(imgItem.caption);
                      }}
                      className={`relative rounded-lg overflow-hidden border text-left transition-all p-1 group ${
                        isSelected 
                          ? 'border-amber-400 bg-amber-400/10' 
                          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                      }`}
                    >
                      <img
                        src={imgItem.url}
                        alt={`Artifact ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-24 sm:h-32 object-cover rounded"
                      />
                      <div className="p-1.5 text-[11px] text-zinc-400 truncate font-mono">
                        {imgItem.caption}
                      </div>
                    </button>
                  );
                })}
            </div>
          )}
        </section>

        {/* Detailed Design Sections (like reference portfolio) */}
        {project.designSections && project.designSections.length > 0 ? (
          <section className="space-y-16">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="font-serif text-3xl text-white font-normal">
                Engineering Design Process & Analysis
              </h2>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                Detailed breakdown of methodology, calculations, simulations, and outcomes
              </p>
            </div>

            <div className="space-y-14">
              {project.designSections.map((sec, idx) => (
                <article 
                  key={idx} 
                  className="space-y-6 p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="space-y-1 border-b border-zinc-800/60 pb-3">
                    {sec.subtitle && (
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                        {sec.subtitle}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal">
                      {sec.title}
                    </h3>
                  </div>

                  {/* Section Narrative */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                    {sec.narrative}
                  </p>

                  {/* Dedicated In-Section Technical Image (Space to add screenshots/diagrams) */}
                  {Boolean(sec.image && sec.image.trim()) && (
                    <div className="space-y-2 pt-2">
                      <div 
                        className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer group"
                        onClick={() => setLightboxImage(sec.image!)}
                      >
                        <img
                          src={sec.image}
                          alt={sec.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-[1.01] transition-transform duration-300"
                        />
                      </div>
                      {sec.imageCaption && (
                        <p className="text-xs text-zinc-400 italic font-sans text-center sm:text-left">
                          {sec.imageCaption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Engineering Bullet Points */}
                  {sec.points && sec.points.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Key Engineering Highlights & Parameters:
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Callout box for critical metrics/conclusions */}
                  {sec.calloutBox && (
                    <div className="p-4 rounded-lg bg-amber-400/5 border border-amber-400/20 text-xs sm:text-sm space-y-1">
                      <span className="font-mono uppercase font-semibold text-amber-400 text-xs tracking-wider">
                        {sec.calloutBox.label}
                      </span>
                      <p className="text-zinc-200 leading-relaxed font-sans">
                        {sec.calloutBox.text}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ) : (
          /* Fallback Narrative if design sections aren't populated */
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">
              System Architecture & Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </section>
        )}

        {/* Technical Specifications Matrix */}
        <section className="space-y-6 border-t border-zinc-800 pt-10">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <h2 className="font-serif text-2xl text-white font-normal">
              Technical Specifications & Operational Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {project.engineeringSpecs.material && (
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <span className="text-zinc-500 font-mono uppercase text-[11px]">Material / Geology</span>
                <p className="text-zinc-100 font-medium text-sm">{project.engineeringSpecs.material}</p>
              </div>
            )}
            {project.engineeringSpecs.cadSoftware && (
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <span className="text-zinc-500 font-mono uppercase text-[11px]">Software & CAD Tools</span>
                <p className="text-zinc-100 font-medium text-sm">{project.engineeringSpecs.cadSoftware}</p>
              </div>
            )}
            {project.engineeringSpecs.analysisMethod && (
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <span className="text-zinc-500 font-mono uppercase text-[11px]">Analysis & Calculation Methodology</span>
                <p className="text-zinc-100 font-medium text-sm">{project.engineeringSpecs.analysisMethod}</p>
              </div>
            )}
            {project.engineeringSpecs.operatingParams && (
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1">
                <span className="text-zinc-500 font-mono uppercase text-[11px]">Design Operational Parameters</span>
                <p className="text-zinc-100 font-medium text-sm">{project.engineeringSpecs.operatingParams}</p>
              </div>
            )}
            {project.engineeringSpecs.codeStack && (
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-1 sm:col-span-2">
                <span className="text-zinc-500 font-mono uppercase text-[11px]">Computing / Computational Stack</span>
                <p className="text-zinc-100 font-mono text-xs">{project.engineeringSpecs.codeStack}</p>
              </div>
            )}
          </div>
        </section>

        {/* Quantified Impact / Outcomes */}
        <section className="space-y-4 border-t border-zinc-800 pt-10">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-amber-400" />
            <h2 className="font-serif text-2xl text-white font-normal">
              Validated Results & Industrial Impact
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-400/10 via-zinc-900 to-zinc-900 border border-amber-400/30">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
              {project.resultsAndImpact}
            </p>
          </div>
        </section>

        {/* Bottom Back Button & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 rounded-md transition-all group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Engineering Projects</span>
          </button>

          <span className="text-xs font-mono text-zinc-500">
            Project ID: {project.id}
          </span>
        </div>
      </main>

      {/* Lightbox Modal for Fullscreen Image Inspection */}
      {Boolean(lightboxImage && lightboxImage.trim()) && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-150"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 p-2.5 text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 rounded-full border border-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightboxImage!}
            alt="Expanded engineering artifact"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
