'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Check, Play, GraduationCap, Users, Sparkles, PhoneCall, Shield } from 'lucide-react';

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
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">Our Products</motion.div>
            <motion.h1 variants={fadeIn} className="text-[44px] sm:text-[56px] lg:text-[68px] font-display font-extrabold leading-[1.04] tracking-[-0.04em] mb-6">
              <span className="text-text block">Built for India.</span>
              <span className="text-gradient block">Deployed for impact.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-[18px] text-text-secondary leading-[1.75] max-w-2xl mx-auto">
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

          {/* ---------- Svara Health ecosystem intro ---------- */}
          <motion.div {...fadeUpViewport} className="mb-10 rounded-[32px] bg-[#f6faf2] border border-[#e2ecd8] p-8 md:p-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-[#0a0a0a]/10 text-[12px] font-bold uppercase tracking-[0.14em] text-[#3f6212] mb-5">
              Healthcare Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0a0a0a] tracking-tight mb-4">
              Svara Health
            </h2>
            <p className="text-lg md:text-xl text-[#3f4a39] font-medium leading-relaxed mb-4 max-w-3xl">
              An AI healthcare ecosystem for India&apos;s Tier-2 &amp; Tier-3 clinics — starting with SvaraRx, expanding with SvaraCall AI.
            </p>
            <p className="text-[15px] text-[#4a5444] leading-relaxed max-w-3xl">
              One voice-AI platform attacking the two highest-friction points in the patient journey: documentation (SvaraRx, live) and follow-up communication (SvaraCall AI, in development).
            </p>
          </motion.div>

          <div className="rounded-[40px] border border-[#e2ecd8] bg-[#f6faf2]/50 p-4 md:p-6 flex flex-col gap-6 mb-8">

            {/* ---------- SvaraRx (green palette) ---------- */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] overflow-hidden bg-[#f6faf2] border border-[#e2ecd8] relative">
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#9ae65c]/20 rounded-full blur-[140px] pointer-events-none" />
              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-10">
                  {/* Left */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9ae65c]/20 border border-[#9ae65c]/45 text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f6212]">
                        Healthcare · Live in Pilot
                      </span>
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#cdd9c2] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3f6212]">
                        Part of Svara Health
                      </span>
                    </div>
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
                    <p className="text-[13px] text-[#6b7560] mb-5">
                      <span className="font-semibold text-[#3f6212]">Built for:</span> Solo and small clinic GPs across Andhra Pradesh and Telangana.
                    </p>
                    <p className="text-[13px] font-semibold text-[#3f6212] uppercase tracking-[0.06em] mb-3">What&apos;s already built</p>
                    <ul className="space-y-2.5 mb-7">
                      {[
                        'Proprietary speech & Rx-structuring pipeline live (Whisper + Groq LLaMA 3.3 + WeasyPrint)',
                        'Multi-tenant healthcare AI platform in build; pricing tiers defined',
                        '5 active pilot clinics; high intent to continue post-beta',
                        'Incorporated Mar 2026 · DPIIT recognition in progress',
                      ].map((item) => (
                        <li key={item} className="flex gap-3 items-start text-[14px] text-[#3f4a39]">
                          <span className="w-5 h-5 rounded-full bg-[#9ae65c]/30 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[#3f6212]" /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <a href="https://svararx.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#9ae65c] text-[#0a0a0a] font-bold text-[15px] hover:bg-[#8ad94a] transition-colors w-full sm:w-auto">
                        Request Early Access
                      </a>
                      <a href="https://svararx.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#cdd9c2] text-[#0a0a0a] font-bold text-[15px] hover:border-[#9ae65c] hover:bg-white transition-colors w-full sm:w-auto group">
                        <Play className="w-4 h-4" /> Watch Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  {/* Right — stat cards */}
                  <div className="grid grid-cols-2 gap-3 content-start">
                    {[
                      { value: '< 35 sec', label: 'End-to-end latency' },
                      { value: 'Telugu + English', label: 'Bilingual PDF output' },
                      { value: '₹1,750–5,900/mo', label: 'Starter · Growth · Pro tiers' },
                      { value: '1,200+ Rx · 95%', label: 'Generated · doctor satisfaction' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-white border border-[#e8eee2] p-5">
                        <div className="text-[20px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-1">{s.value}</div>
                        <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#6b7560]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing table */}
                <div className="rounded-2xl bg-white border border-[#e8eee2] p-6 md:p-8 mb-6">
                  <h4 className="text-[15px] font-bold text-[#0a0a0a] mb-4">Pricing</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px]">
                      <thead>
                        <tr className="border-b border-[#e8eee2] text-left">
                          <th className="pb-3 pr-4 font-semibold text-[#3f6212]">Plan</th>
                          <th className="pb-3 pr-4 font-semibold text-[#3f6212]">Price</th>
                          <th className="pb-3 font-semibold text-[#3f6212]">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#4a5444]">
                        <tr className="border-b border-[#f0f4ec]">
                          <td className="py-3 pr-4 font-medium text-[#0a0a0a]">Starter</td>
                          <td className="py-3 pr-4">₹1,750/mo + GST</td>
                          <td className="py-3">500 Rx/mo — low-volume clinics</td>
                        </tr>
                        <tr className="border-b border-[#f0f4ec]">
                          <td className="py-3 pr-4 font-medium text-[#0a0a0a]">
                            Growth <span className="ml-1.5 inline-block px-2 py-0.5 rounded-full bg-[#9ae65c]/25 text-[#3f6212] text-[10px] font-bold uppercase">Popular</span>
                          </td>
                          <td className="py-3 pr-4">₹2,500/mo + GST</td>
                          <td className="py-3">1,000 Rx/mo — most solo GPs</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium text-[#0a0a0a]">Pro</td>
                          <td className="py-3 pr-4">₹5,900/mo + GST</td>
                          <td className="py-3">3,000 Rx/mo — high-volume</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[13px] text-[#6b7560] mt-4">+₹250 per extra 100 Rx block</p>
                </div>

                {/* Trust & compliance */}
                <div className="rounded-2xl bg-[#0a0a0a] p-6 md:p-8 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-5 h-5 text-[#9ae65c] shrink-0 mt-0.5" />
                    <h4 className="text-[15px] font-bold text-white">Doctor-in-the-loop, always.</h4>
                  </div>
                  <p className="text-[14px] text-white/75 leading-relaxed mb-4 pl-8">
                    No AI output reaches a patient unreviewed — the doctor confirms every prescription before it&apos;s finalized. Confidence scoring flags low-certainty fields. Full audit trail of every edit and approval.
                  </p>
                  <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#9ae65c] pl-8">
                    Aligned to: DPDP Act (India) · GDPR (EU) · HIPAA (USA) · UK GDPR
                  </p>
                </div>

                {/* Roadmap */}
                <div className="rounded-2xl bg-white border border-[#e8eee2] p-6 md:p-8">
                  <h4 className="text-[15px] font-bold text-[#0a0a0a] mb-3">Next 12 months</h4>
                  <p className="text-[14px] text-[#4a5444] leading-relaxed">
                    Commercial launch of SvaraRx → Expand pilots across AP &amp; Telangana → Launch SvaraCall AI → Begin ABDM integration → Expand multilingual support → Grow to 100+ clinics.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------- SvaraCall AI (green palette, in development) ---------- */}
            <motion.div {...fadeUpViewport} id="svacall-ai" className="rounded-[32px] overflow-hidden bg-[#f6faf2] border border-[#e2ecd8] relative scroll-mt-28">
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#9ae65c]/10 rounded-full blur-[140px] pointer-events-none" />
              <div className="relative p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fef3c7] border border-[#fcd34d] text-[12px] font-bold uppercase tracking-[0.12em] text-[#92400e]">
                      Healthcare · In Development
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#cdd9c2] text-[11px] font-bold uppercase tracking-[0.1em] text-[#3f6212]">
                      Part of Svara Health
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#65a30d] flex items-center justify-center text-white"><PhoneCall className="w-6 h-6" /></div>
                    <span className="text-[24px] font-display font-extrabold tracking-tight text-[#0a0a0a]">SvaraCall AI</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0a0a0a] mb-4 tracking-tight">
                    Outbound voice, <span className="text-[#65a30d]">without the outbound staff.</span>
                  </h3>
                  <div className="space-y-3 text-[15px] text-[#4a5444] leading-relaxed mb-7">
                    <p>Post-visit follow-up, NPS collection, and appointment reminders — a vernacular voice agent for hospitals, not another SMS tool.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#9ae65c] text-[#0a0a0a] font-bold text-[15px] hover:bg-[#8ad94a] transition-colors w-full sm:w-auto">
                      Join the Waitlist
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#cdd9c2] text-[#0a0a0a] font-bold text-[15px] hover:border-[#9ae65c] hover:bg-white transition-colors w-full sm:w-auto group">
                      Talk to Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 content-start">
                  {[
                    { value: '₹30,000', label: 'One-time setup, per hospital' },
                    { value: '₹5.50 / min', label: 'Per connected minute' },
                    { value: 'Telugu + English', label: 'Vernacular voice agent' },
                    { value: 'SvaraRx-linked', label: 'Same voice-AI core & records' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white border border-[#e8eee2] p-5">
                      <div className="text-[20px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-1">{s.value}</div>
                      <div className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#6b7560]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          <div className="flex flex-col gap-8">

            {/* ---------- Sarwagyna School (warm orange) ---------- */}
            <motion.div {...fadeUpViewport} className="rounded-[32px] overflow-hidden bg-[#f8f4f0] border border-[#e8e4db] relative">
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#ff4f00]/15 rounded-full blur-[140px] pointer-events-none" />
              <div className="relative p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff4f00]/10 border border-[#ff4f00]/25 text-[12px] font-bold uppercase tracking-[0.12em] text-[#ff4f00] mb-6">
                    Education · Live
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#ff4f00] flex items-center justify-center text-[#fffefb]"><GraduationCap className="w-6 h-6" /></div>
                    <span className="text-[24px] font-display font-extrabold tracking-tight text-[#201515]">Sarwagyna School</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#201515] mb-4 tracking-tight">
                    Real knowledge. <span className="text-[#ff4f00]">From people actually doing it.</span>
                  </h3>
                  <div className="space-y-3 text-[15px] text-[#605d52] leading-relaxed mb-6">
                    <p>Most career advice is given by people who haven&apos;t built anything in years.</p>
                    <p>Sarwagyna School brings together founders, investors, engineers, and operators to share what actually works — through live speaker sessions designed for students and freshers entering the workforce.</p>
                    <p className="font-bold text-[#201515]">Free. Accessible. No fluff.</p>
                  </div>
                  <div className="flex items-center gap-4 mb-7 text-[13px] text-[#605d52]">
                    <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-[#ff4f00]" /> <span className="font-semibold text-[#201515]">410+ members</span> on WhatsApp</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a href="https://school.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#ff4f00] text-[#fffefb] font-bold text-[15px] hover:bg-[#e64800] transition-colors w-full sm:w-auto">
                      Join the Community
                    </a>
                    <a href="https://school.sarwagyna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#c5c0b1] text-[#201515] font-bold text-[15px] hover:border-[#ff4f00] hover:bg-[#fffefb] transition-colors w-full sm:w-auto group">
                      View All Sessions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl bg-[#fffefb] border border-[#e8e4db] p-6">
                    <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#ff4f00] mb-4">What we cover</div>
                    <ul className="space-y-3">
                      {[
                        'How to start and build a startup from college',
                        'How to read markets and invest intelligently',
                        'How to use AI tools to work 10x faster',
                        'How to become job-ready before your peers',
                      ].map((f) => (
                        <li key={f} className="flex gap-3 items-start text-[14px] text-[#605d52]">
                          <span className="w-5 h-5 rounded-full bg-[#ff4f00]/10 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[#ff4f00]" /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#fffefb] border border-[#e8e4db] p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#939084] mb-1.5">Past session</div>
                      <div className="text-[14px] font-bold text-[#201515] mb-1">Resume Decoded</div>
                      <p className="text-[12px] text-[#939084] leading-relaxed">How to write a resume that gets past ATS and lands interviews.</p>
                    </div>
                    <div className="rounded-2xl bg-[#ff4f00]/[0.06] border border-[#ff4f00]/20 p-5">
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff4f00] mb-1.5">Upcoming</div>
                      <div className="text-[14px] font-bold text-[#201515] mb-1">Internship Decoded</div>
                      <p className="text-[12px] text-[#605d52] leading-relaxed">A founders panel on how to find, apply for, and convert internships that actually matter.</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#939084]">Live webinar sessions every 2 months. Free to attend. Hosted at <span className="font-semibold text-[#ff4f00]">school.sarwagyna.com</span></p>
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
                  See SvaraRx, SvaraCall AI, RizzMyResume, or Sarwagyna School in action with a free, guided walkthrough — no commitment required.
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
