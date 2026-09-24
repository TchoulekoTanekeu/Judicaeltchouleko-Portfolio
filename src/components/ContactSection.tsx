import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Phone, Loader2 } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Role Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const recipientEmail = 'judicaeltchouleko@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    const emailSubject = `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`;

    try {
      // Send directly and automatically to judicaeltchouleko@gmail.com via FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: emailSubject,
          category: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Automated mail delivery service responded with an issue');
      }
    } catch (err) {
      // Fallback to mailto client directly with prefilled body and subject
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Initiate Conversation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Let's Build Something High-Yield
              </h2>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Whether you are hiring for advanced mining and mineral engineering, seeking mining AI systems for industrial operations, or exploring collaboration on mineral projects—I welcome direct inquiries.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-800/80 text-xs">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase text-[10px]">Email Direct</div>
                  <a
                    href={`mailto:${recipientEmail}`}
                    className="text-zinc-100 hover:text-amber-400 font-medium transition-colors"
                  >
                    {recipientEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
                  <Linkedin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase text-[10px]">Professional Network</div>
                  <a
                    href="https://www.linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-100 hover:text-amber-400 font-medium transition-colors break-all"
                  >
                    linkedin.com/in/tchouleko-tanekeu-judicael-63b46320b
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase text-[10px]">Phone Direct</div>
                  <a
                    href="tel:+237676136827"
                    className="text-zinc-100 hover:text-amber-400 font-medium transition-colors"
                  >
                    +(237) 676136827
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase text-[10px]">Location</div>
                  <div className="text-zinc-100">
                    Mbouda, Cameroon (Open to Global Relocation)
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Lab Work Snapshot Card */}
            <div className="pt-2">
              <div className="group relative rounded-xl overflow-hidden border border-zinc-800/90 bg-zinc-900/60 p-3 hover:border-amber-400/40 transition-colors">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-zinc-950">
                  <img
                    src={PORTFOLIO_IMAGES.metallurgyAction}
                    alt="Judicael Tchouleko testing refractory clay specimens in materials laboratory"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-left">
                    <span className="text-[10px] font-mono uppercase text-amber-400 font-semibold tracking-wider">
                      In The Lab
                    </span>
                    <p className="text-xs text-zinc-200 font-medium leading-snug">
                      Refractory clay sintering & physical mass verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-zinc-950/80 border border-zinc-800 rounded-lg">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-lg font-serif text-white">Inquiry Sent Successfully</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-amber-400 font-medium">{formData.subject}</span> has been dispatched to <span className="text-amber-400 font-mono">{recipientEmail}</span>.
                </p>
                <p className="text-[11px] text-zinc-400">
                  A response will be sent to <span className="text-zinc-200 font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Full-Time Role Opportunity', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                action={`https://formsubmit.co/${recipientEmail}`} 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                {/* FormSubmit Configuration Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value={`[Portfolio Inquiry] ${formData.subject} - from ${formData.name || 'Visitor'}`} />
                <input type="hidden" name="_next" value="https://ais-dev-72vr3i2dsjoec2gizgb5ke-920766779713.europe-west2.run.app/#contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-mono text-zinc-400 uppercase text-[11px]">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Elena Vance"
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-zinc-400 uppercase text-[11px]">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@advancedmining.com"
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="font-mono text-zinc-400 uppercase text-[11px]">
                    Inquiry Category
                  </label>
                  <select
                    name="category"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Full-Time Role Opportunity">Full-Time Engineering Role (Mining & Mineral Engineering / Mining AI)</option>
                    <option value="Open Pit Mine Planning & Optimization">Open Pit Mine Planning & Optimization (Micromine / Surpac / Deswik)</option>
                    <option value="Drill & Blast Engineering & Fragmentation">Drill & Blast Engineering & Fragmentation (Opit-blast / Split)</option>
                    <option value="Exploration Core Logging & GIS Project">Exploration Core Logging & GIS Project (Strater / QGIS)</option>
                    <option value="Mining AI Systems Project">Mining AI Systems & Machine Learning Engineering</option>
                    <option value="Other Technical Collaboration">Other Technical Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="font-mono text-zinc-400 uppercase text-[11px]">
                    Project Scope or Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on your project requirements, quarry specifications, technical challenges, or engineering role..."
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 text-xs text-red-400 bg-red-950/40 border border-red-900 rounded-md">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 rounded-md transition-colors shadow-md shadow-amber-400/10 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Directly to Judicael...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message to judicaeltchouleko@gmail.com</span>
                    </>
                  )}
                </button>
                <div className="text-[10px] text-zinc-500 text-center font-mono">
                  Direct automated delivery to judicaeltchouleko@gmail.com
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

