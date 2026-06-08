'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Check, Play, GraduationCap, Users, Sparkles } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const fadeUpViewport = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">

      {/* ===================== HERO ===================== */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-bg">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(14,40,29,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[820px]">
            <motion.div variants={fadeIn} className="section-label mb-6">Our Products</motion.div>
            <motion.h1 variants={fadeIn} className="text-[44px] sm:text-[56px] lg:text-[68px] font-display font-extrabold leading-[1.04] tracking-[-0.04em] mb-6">
              <span className="text-text block">Built for India.</span>
              <span className="text-gradient block">Deployed for impact.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-[18px] text-text-secondary leading-[1.75] max-w-[620px]">
              Every product Sarwagyna builds solves a real problem in the Indian market — with AI at its core and zero compromise on execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===================== SECTION 1 — NOW LIVE ===================== */}
      <section className="py-20 relative bg-surface border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div {...fadeUpViewport} className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-(--color-primary) animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">Now Live</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text tracking-tight">
              Products you can use today.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8">

            {/* ---------- SvaraRx (green palette) ---------- */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] overflow-hidden bg-[#f6faf2] border border-[#e2ecd8] relative">
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#9ae65c]/20 rounded-full blur-[140px] pointer-events-none" />
              <div className="relative p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
                {/* Left */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9ae65c]/20 border border-[#9ae65c]/45 text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f6212] mb-6">
                    Healthcare · Live
                  </span>
                  <div className="mb-5">
                    <Image src="/SvaraRx-Logo-Transparent.png" alt="SvaraRx" width={190} height={50} className="h-[44px] w-auto" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0a0a0a] mb-4 tracking-tight">
                    Doctor speaks. <span className="text-[#65a30d]">Prescription writes itself.</span>
                  </h3>
                  <div className="space-y-3 text-[15px] text-[#4a5444] leading-relaxed mb-6">
                    <p>Prescription writing consumes 3–5 minutes per patient. For a doctor seeing 40+ patients a day, that is over 3 hours of documentation — every single day.</p>
                    <p className="font-bold text-[#0a0a0a]">SvaraRx eliminates it entirely.</p>
                    <p>Speak in Telugu or English. SvaraRx transcribes, structures, and delivers a bilingual prescription PDF in under 35 seconds. No hardware. No disruption.</p>
                  </div>
                  <p className="text-[13px] text-[#6b7560] mb-7">
                    <span className="font-semibold text-[#3f6212]">Built for:</span> Solo and small clinic GPs across Andhra Pradesh and Telangana.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a href="https://svararx.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#9ae65c] text-[#0a0a0a] font-bold text-[15px] hover:bg-[#8ad94a] transition-colors w-full sm:w-auto">
                      Request Early Access
                    </a>
                    <a href="https://svararx.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#cdd9c2] text-[#0a0a0a] font-bold text-[15px] hover:border-[#9ae65c] hover:bg-white transition-colors w-full sm:w-auto group">
                      <Play className="w-4 h-4" /> Watch Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '< 35 sec', label: 'End-to-end latency' },
                      { value: 'Telugu + English', label: 'Bilingual output' },
                      { value: '₹3,000/mo', label: 'Per doctor pricing' },
                      { value: '8,000+', label: 'Reachable clinics, AP + TG' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-white border border-[#e8eee2] p-5">
                        <div className="text-[20px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-1">{s.value}</div>
                        <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#6b7560]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Voice to structured prescription in under 35 seconds',
                      'Telugu and English bilingual PDF output',
                      'Full review and edit screen before every print',
                      'Works on any smartphone. Zero hardware required.',
                    ].map((f) => (
                      <li key={f} className="flex gap-3 items-start text-[14px] text-[#3f4a39]">
                        <span className="w-5 h-5 rounded-full bg-[#9ae65c]/30 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[#3f6212]" /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ---------- RizzMyResume (monochrome) ---------- */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] overflow-hidden bg-[#fafafa] border border-[#ececec]">
              <div className="p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-[#0a0a0a]/10 text-[12px] font-bold uppercase tracking-[0.12em] text-[#0a0a0a] mb-6">
                    Career · Live
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#0a0a0a] flex items-center justify-center text-white font-display font-extrabold text-[20px]">R</div>
                    <span className="text-[24px] font-display font-extrabold tracking-tight text-[#0a0a0a]">RizzMyResume</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0a0a0a] mb-4 tracking-tight">
                    Your resume. AI-written. <span className="text-[#6b7280]">Job-ready in 60 seconds.</span>
                  </h3>
                  <div className="space-y-3 text-[15px] text-[#52555c] leading-relaxed mb-6">
                    <p>75% of resumes are rejected before a human ever reads them. Not due to poor qualifications — due to poor formatting and ATS incompatibility.</p>
                    <p className="font-bold text-[#0a0a0a]">RizzMyResume generates a fully structured, ATS-optimised resume in under 60 seconds.</p>
                    <p>No subscription. No monthly fees. Pay only when you need it — ₹50 per resume.</p>
                  </div>
                  <p className="text-[13px] text-[#6b7280] mb-7">
                    <span className="font-semibold text-[#0a0a0a]">Built for:</span> College students, freshers, and early-career professionals entering the Indian job market.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a href="https://rizzmyresume.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0a0a0a] text-white font-bold text-[15px] hover:bg-[#222] transition-colors w-full sm:w-auto">
                      Build My Resume — ₹50
                    </a>
                    <a href="https://rizzmyresume.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#d4d4d4] text-[#0a0a0a] font-bold text-[15px] hover:border-[#0a0a0a] hover:bg-white transition-colors w-full sm:w-auto group">
                      See Sample Output <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '₹50 flat', label: 'Per resume, no subscription' },
                      { value: '< 60 sec', label: 'Turnaround time' },
                      { value: 'ATS-ready', label: 'Passes screening filters' },
                      { value: 'Zero lock-in', label: 'Pay only when you use it' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-white border border-[#ececec] p-5">
                        <div className="text-[20px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-1">{s.value}</div>
                        <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#6b7280]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {[
                      'ATS-optimised output built for Indian job portals',
                      'Structured format for freshers and early-career profiles',
                      'Instant generation — no back-and-forth, no editing loops',
                      'Pay per use — ₹50 flat, no hidden charges',
                    ].map((f) => (
                      <li key={f} className="flex gap-3 items-start text-[14px] text-[#3f4046]">
                        <span className="w-5 h-5 rounded-full bg-[#0a0a0a]/5 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[#0a0a0a]" /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ---------- Sarwagyna School (indigo) ---------- */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] overflow-hidden bg-[#f5f5ff] border border-[#e3e3f5] relative">
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#6366f1]/15 rounded-full blur-[140px] pointer-events-none" />
              <div className="relative p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/25 text-[12px] font-bold uppercase tracking-[0.12em] text-[#4338ca] mb-6">
                    Education · Live
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#4f46e5] flex items-center justify-center text-white"><GraduationCap className="w-6 h-6" /></div>
                    <span className="text-[24px] font-display font-extrabold tracking-tight text-[#0a0a0a]">Sarwagyna School</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0a0a0a] mb-4 tracking-tight">
                    Real knowledge. <span className="text-[#4f46e5]">From people actually doing it.</span>
                  </h3>
                  <div className="space-y-3 text-[15px] text-[#4a4a5a] leading-relaxed mb-6">
                    <p>Most career advice is given by people who haven&apos;t built anything in years.</p>
                    <p>Sarwagyna School brings together founders, investors, engineers, and operators to share what actually works — through live speaker sessions designed for students and freshers entering the workforce.</p>
                    <p className="font-bold text-[#0a0a0a]">Free. Accessible. No fluff.</p>
                  </div>
                  <div className="flex items-center gap-4 mb-7 text-[13px] text-[#4a4a5a]">
                    <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-[#4f46e5]" /> <span className="font-semibold text-[#0a0a0a]">410+ members</span> on WhatsApp</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a href="https://school.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#4f46e5] text-white font-bold text-[15px] hover:bg-[#4338ca] transition-colors w-full sm:w-auto">
                      Join the Community
                    </a>
                    <a href="https://school.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#cdcdf0] text-[#0a0a0a] font-bold text-[15px] hover:border-[#4f46e5] hover:bg-white transition-colors w-full sm:w-auto group">
                      View All Sessions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl bg-white border border-[#e3e3f5] p-6">
                    <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#4f46e5] mb-4">What we cover</div>
                    <ul className="space-y-3">
                      {[
                        'How to start and build a startup from college',
                        'How to read markets and invest intelligently',
                        'How to use AI tools to work 10x faster',
                        'How to become job-ready before your peers',
                      ].map((f) => (
                        <li key={f} className="flex gap-3 items-start text-[14px] text-[#3a3a4a]">
                          <span className="w-5 h-5 rounded-full bg-[#4f46e5]/10 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[#4f46e5]" /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white border border-[#e3e3f5] p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b7280] mb-1.5">Past session</div>
                      <div className="text-[14px] font-bold text-[#0a0a0a] mb-1">Resume Decoded</div>
                      <p className="text-[12px] text-[#6b7280] leading-relaxed">How to write a resume that gets past ATS and lands interviews.</p>
                    </div>
                    <div className="rounded-2xl bg-[#4f46e5]/[0.06] border border-[#4f46e5]/20 p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4f46e5] mb-1.5">Upcoming</div>
                      <div className="text-[14px] font-bold text-[#0a0a0a] mb-1">Internship Decoded</div>
                      <p className="text-[12px] text-[#52525b] leading-relaxed">A founders panel on how to find, apply for, and convert internships that actually matter.</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#6b7280]">Live webinar sessions every 2 months. Free to attend. Hosted at <span className="font-semibold text-[#4f46e5]">school.sarwagyna.com</span></p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===================== CTA STRIP ===================== */}
      <section className="py-20 bg-surface border-t border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Custom products & services */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-[420px] h-[260px] bg-(--color-primary)/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-4">
                  Need a custom product or service?
                </h3>
                <p className="text-[16px] text-white/70 leading-relaxed mb-8 grow">
                  From AI agents and automation to full-stack platforms — we design and build tailored products and services for your business, end to end.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0a0a0a] font-bold text-[15px] hover:bg-white/90 transition-colors w-full sm:w-auto self-start group">
                  Build with Sarwagyna <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Free demo of products */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] bg-bg border border-border-subtle p-8 md:p-12 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-[420px] h-[260px] bg-(--color-primary)/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center text-(--color-green-icon) mb-6">
                  <Play className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-text tracking-tight mb-4">
                  Get a free demo of our products.
                </h3>
                <p className="text-[16px] text-text-secondary leading-relaxed mb-8 grow">
                  See SvaraRx, RizzMyResume, or Sarwagyna School in action with a free, guided walkthrough — no commitment required.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-(--color-primary) text-white font-bold text-[15px] hover:bg-primary-hover transition-colors w-full sm:w-auto self-start group">
                  Get a Free Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
