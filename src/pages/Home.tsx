'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Cpu, Rocket, Users, Zap, Languages, Smartphone, ClipboardCheck, Target, IndianRupee, CheckCircle2, Brain, BarChart3, Code2, Shield, Database, Cloud, PieChart, Boxes, Heart, GraduationCap, Newspaper, Play, TrendingUp, LayoutGrid } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { Globe } from 'cobe';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Home() {
  const globeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = globeCanvasRef.current;
    if (!canvas) return;

    let globe: Globe | null = null;
    let rafId = 0;
    let phi = 0;
    let width = 0;
    let running = false;
    let visible = false;
    let destroyed = false;
    let initStarted = false;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    // Cap DPR: 2x on this 460px box meant a 920px buffer is plenty — no need to render at 2000px.
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const measure = () => { width = canvas.offsetWidth || 460; };

    const startLoop = () => {
      if (running || !globe || reduceMotion) return;
      running = true;
      const render = () => {
        if (!globe || destroyed) return;
        phi += 0.0015;
        globe.update({ phi, theta: Math.sin(Date.now() * 0.00018) * 0.15 });
        rafId = requestAnimationFrame(render);
      };
      rafId = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };

    // Defer the (heavy) WebGL init + cobe download until the globe is near the viewport.
    const init = async () => {
      if (initStarted) return;
      initStarted = true;
      const { default: createGlobe } = await import('cobe');
      if (destroyed) return;
      measure();
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta: 0.15,
        dark: 0.08,
        diffuse: 0.9,
        scale: 0.9,
        mapSamples: 12000,
        mapBrightness: 10,
        baseColor: [0.96, 0.96, 0.96],
        markerColor: [0.84, 0.84, 0.84],
        glowColor: [1, 1, 1],
        offset: [0, 0],
        markers: [],
      });
      // Paint one frame, then fade in to avoid a hard pop.
      globe.update({ phi: 0, theta: 0.15 });
      requestAnimationFrame(() => { canvas.style.opacity = '0.8'; });
      if (visible && !document.hidden) startLoop();
    };

    // rootMargin pre-warms slightly before it enters view; loop only runs while on-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (!initStarted) init();
          else if (!document.hidden) startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0, rootMargin: '200px' }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else if (visible) startLoop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      destroyed = true;
      stopLoop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-bg">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1 text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="section-label mb-6">
                INDIA'S NEXT-GEN MULTI-INDUSTRY COMPANY
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-[46px] sm:text-[56px] lg:text-[64px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
                <span className="text-text block">Where Intelligence</span>
                <span className="text-gradient block">Meets Enterprise</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-[17px] text-text-secondary font-normal mb-8 max-w-[520px] leading-[1.75]">
                AI & IT Solutions. Strategic Holdings. We build the infrastructure for modern business, combining deep technical expertise with global market access to drive unprecedented growth.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/ai-it" className="glass-button-primary px-8 py-4 text-center">
                  Explore Our Divisions
                </Link>
                <Link href="/partner" className="glass-button-ghost px-8 py-4 text-center">
                  Partner with Us
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
                {['AI-Powered', 'Global Reach', 'DPIIT Recognized(under process)'].map((chip) => (
                  <span key={chip} className="px-4 py-2 rounded-full bg-green-light text-[13px] font-medium tracking-[0.08em] uppercase text-(--color-primary)">
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl glass-panel p-1 overflow-hidden group">
                <div className="absolute inset-0 bg-bg-[var(--color-bg)]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-black/80 backdrop-blur-xl rounded-xl p-6 h-[400px] flex flex-col border border-black/5 dark:border-white/5 transition-colors duration-300">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-border-subtle transition-colors duration-300">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-bg/10 dark:bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-bg/20 dark:bg-white/40" />
                      <div className="w-3 h-3 rounded-full bg-bg/30 dark:bg-white/60" />
                    </div>
                    <div className="text-xs font-mono text-text-muted dark:text-white/40">SYSTEM.STATUS: OPTIMAL</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-24 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-end p-4 gap-2 transition-colors duration-300">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-(--color-lavender) dark:bg-white/40 rounded-t-sm opacity-80"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 flex flex-col justify-center transition-colors duration-300">
                        <div className="text-xs text-text-muted dark:text-white/40 mb-1">Global Nodes</div>
                        <div className="text-xl font-display font-bold text-text dark:text-white">15+ Active</div>
                      </div>
                      <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 flex flex-col justify-center transition-colors duration-300">
                        <div className="text-xs text-text-muted dark:text-white/40 mb-1">Processing</div>
                        <div className="text-xl font-display font-bold text-text dark:text-white">99.99%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border-subtle bg-surface py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10 dark:divide-white/[0.07]">
            {[
              { number: '10+', label: 'Enterprise Clients' },
              { number: '4', label: 'Business Verticals' },
              { number: '2+', label: 'Countries Reached' },
              { number: '3', label: 'SaaS Products' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-[56px] font-display font-extrabold text-gradient mb-2">{stat.number}</div>
                <div className="text-[13px] text-text-secondary font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section — Our Business Verticals */}
      <section className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center py-16 bg-[#f4f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-7"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-400" />
              <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-gray-500">Our Business Verticals</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-[32px] md:text-[42px] font-display font-extrabold tracking-[-0.03em] text-[#0f1115] leading-[1.02] mb-2">
              Engineered for Scale
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[15px] text-gray-500 max-w-[460px] leading-relaxed">
              From intelligent services and digital products to strategic investments and future-ready education.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">

            {/* ---------- Column 1: AI-First Technology Services ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-4 bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-[19px] font-bold text-[#0f1115] tracking-tight mb-2">
                AI-First Technology Services
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Enterprise AI agents, custom software, web platforms, and startup solutions designed to automate workflows and accelerate growth.
              </p>

              {/* AI chip diagram */}
              <div className="relative flex-1 my-5 min-h-[180px]">
                {/* connecting lines */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  {[[50, 9], [16, 27], [84, 27], [16, 73], [84, 73], [50, 91]].map(([x, y], i) => (
                    <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#d1d5db" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  ))}
                </svg>
                {/* surrounding nodes */}
                {[
                  { Icon: Brain, top: '9%', left: '50%' },
                  { Icon: BarChart3, top: '27%', left: '16%' },
                  { Icon: Code2, top: '27%', left: '84%' },
                  { Icon: Shield, top: '73%', left: '16%' },
                  { Icon: Database, top: '73%', left: '84%' },
                  { Icon: Cloud, top: '91%', left: '50%' },
                ].map(({ Icon, top, left }, i) => (
                  <div
                    key={i}
                    style={{ top, left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#171717] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                ))}
                {/* center AI cube */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
                  <span className="text-xl font-display font-extrabold tracking-tight">AI</span>
                </div>
              </div>

              {/* chips */}
              <div className="flex items-center gap-2 flex-wrap">
                {['AI Agents', 'Web Dev', 'Automation'].map((c) => (
                  <span key={c} className="px-3.5 py-1.5 rounded-full bg-gray-100 text-[12px] font-medium text-gray-700">{c}</span>
                ))}
              </div>
            </motion.div>

            {/* ---------- Column 2: stacked cards ---------- */}
            <div className="md:col-span-4 flex flex-col gap-4">

              {/* AI Products & Digital Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex-1 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <h3 className="text-[19px] font-bold text-[#0f1115] tracking-tight leading-snug">
                    AI Products &amp;<br />Digital Platforms
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <Rocket className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  Development and commercialization of AI-powered software products, SaaS platforms, mobile applications, and automation tools for global markets.
                </p>

                {/* mock dashboard */}
                <div className="mt-auto rounded-2xl bg-[#fafafa] border border-gray-100 p-3 flex gap-3">
                  <div className="flex flex-col items-center gap-3 pt-1 text-gray-300">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <BarChart3 className="w-3.5 h-3.5" />
                    <PieChart className="w-3.5 h-3.5" />
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <Boxes className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="rounded-lg bg-white border border-gray-100 p-2.5">
                        <div className="text-[9px] text-gray-400 mb-1">Monthly Active Users</div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[15px] font-bold text-[#0f1115]">24.8K</span>
                          <span className="text-[9px] font-semibold text-emerald-500">↑ 18.6%</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white border border-gray-100 p-2.5">
                        <div className="text-[9px] text-gray-400 mb-1">Revenue</div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[15px] font-bold text-[#0f1115]">$142.6K</span>
                          <span className="text-[9px] font-semibold text-emerald-500">↑ 24.7%</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white border border-gray-100 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-medium text-gray-500">Growth Overview</span>
                        <span className="text-[9px] font-semibold text-emerald-500">+27.4%</span>
                      </div>
                      <svg viewBox="0 0 200 50" preserveAspectRatio="none" className="w-full h-12">
                        <polyline
                          points="0,40 25,32 50,36 75,22 100,28 125,16 150,20 175,8 200,12"
                          fill="none"
                          stroke="#111827"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {[[0,40],[25,32],[50,36],[75,22],[100,28],[125,16],[150,20],[175,8],[200,12]].map(([x,y],i)=>(
                          <circle key={i} cx={x} cy={y} r="1.6" fill="#111827" />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Strategic Holdings & Investments */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex-1 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <h3 className="text-[19px] font-bold text-[#0f1115] tracking-tight leading-snug">
                    Strategic Holdings &amp;<br />Investments
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <PieChart className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                  Cross-vertical portfolio management, strategic investments, and the incubation of high-potential SaaS products.
                </p>

                <div className="mt-auto">
                  <div className="rounded-2xl bg-[#fafafa] border border-gray-100 p-4 grid grid-cols-5 gap-1">
                    {[
                      { Icon: Cpu, label: 'AI' },
                      { Icon: Boxes, label: 'SaaS' },
                      { Icon: Heart, label: 'HealthTech' },
                      { Icon: GraduationCap, label: 'EdTech' },
                      { Icon: Newspaper, label: 'Media' },
                    ].map(({ Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-medium text-gray-500 text-center leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-gray-400 mt-4">
                    <span>Building</span><span className="text-gray-300">•</span>
                    <span>Scaling</span><span className="text-gray-300">•</span>
                    <span>Investing</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ---------- Column 3: Sarwagyna School ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-4 relative overflow-hidden rounded-[24px] bg-white border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              {/* globe background */}
              <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] pointer-events-none">
                <canvas ref={globeCanvasRef} aria-hidden="true" className="w-full h-full block opacity-0 transition-opacity duration-700" />
                {/* floating badges */}
                <div className="absolute top-[26%] right-[34%] w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600">
                  <Users className="w-4 h-4" />
                </div>
                <div className="absolute top-[48%] right-[58%] w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700">
                  <Play className="w-4 h-4" />
                </div>
                <div className="absolute top-[66%] right-[42%] w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-[24px] md:text-[26px] font-bold text-[#0f1115] tracking-tight leading-[1.1] max-w-[60%]">
                    Sarwagyna School
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <GraduationCap className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[58%]">
                  Sarwagyna School brings together founders, innovators, engineers, and operators to share, learn, and grow.
                </p>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[58%] mt-3">
                  Live sessions, workshops, and speaker programs designed for students and freshers entering the workforce.
                </p>

                <div className="mt-auto pt-6 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                      <Users className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <div className="text-[17px] font-bold text-[#0f1115] leading-none">2,500+</div>
                      <div className="text-[11px] text-gray-400 mt-1">Students Reached</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                      <Play className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <div className="text-[17px] font-bold text-[#0f1115] leading-none">1+</div>
                      <div className="text-[11px] text-gray-400 mt-1">Sessions Delivered</div>
                    </div>
                  </div>

                  <a
                    href="https://school.sarwagyna.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0a0a0a] text-white font-bold text-[14px] hover:bg-[#222] transition-colors group"
                  >
                    Explore School <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SvaraRx — Flagship Product Section (custom green palette) */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#f6faf2] border-y border-[#e2ecd8]">
        {/* Decorative green glows */}
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#9ae65c]/25 rounded-full blur-[140px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-[#9ae65c]/15 rounded-full blur-[140px] -z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: label, logo, tagline, descriptor, description, CTAs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9ae65c]/20 border border-[#9ae65c]/45 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#65a30d] animate-pulse" />
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#3f6212]">Flagship Product</span>
              </motion.div>

              <motion.div variants={fadeIn} className="mb-5">
                <Image
                  src="/SvaraRx-Logo-Transparent.png"
                  alt="SvaraRx Ai"
                  width={200}
                  height={53}
                  priority
                  className="h-[48px] w-auto"
                />
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-[42px] font-display font-bold text-[#0a0a0a] mb-4 tracking-tight leading-[1.08]">
                Doctor speaks. <span className="text-[#65a30d]">Prescription writes itself.</span>
              </motion.h2>

              <motion.p variants={fadeIn} className="text-[16px] text-[#3f4a39] font-medium leading-relaxed mb-4">
                AI-powered voice-to-prescription for solo and small clinic doctors across Andhra Pradesh and Telangana.
              </motion.p>

              <motion.p variants={fadeIn} className="text-[15px] text-[#4a5444] leading-relaxed mb-6">
                Prescription writing eats 3–5 minutes per patient — over 3 hours a day at 40+ patients. <span className="font-bold text-[#0a0a0a]">SvaraRx eliminates it.</span> Speak in Telugu or English; get a bilingual prescription PDF in under 35 seconds. No hardware, no training.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://svararx.sarwagyna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#9ae65c] text-[#0a0a0a] font-bold text-[15px] hover:bg-[#8ad94a] transition-colors w-full sm:w-auto"
                >
                  Request Early Access
                </a>
                <a
                  href="https://svararx.sarwagyna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-[#cdd9c2] text-[#0a0a0a] font-bold text-[15px] hover:border-[#9ae65c] hover:bg-white transition-colors w-full sm:w-auto group"
                >
                  See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: feature points — 2×2 grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Core differentiator — dark card */}
              <div className="rounded-[22px] p-6 bg-[#0a0a0a]">
                <div className="w-10 h-10 rounded-xl bg-[#9ae65c]/15 flex items-center justify-center text-[#9ae65c] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">Sub-35 Second Delivery</h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-3">
                  Voice to structured prescription PDF — in under 35 seconds.
                </p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#9ae65c]/15 text-[#9ae65c] text-[10px] font-bold uppercase tracking-wider">
                  Core differentiator
                </span>
              </div>

              {/* Telugu + English — light card */}
              <div className="rounded-[22px] p-6 bg-white border border-[#e8eee2]">
                <div className="w-10 h-10 rounded-xl bg-[#eef6e6] flex items-center justify-center text-[#65a30d] mb-4">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">Telugu + English</h3>
                <p className="text-[13px] text-[#4a5444] leading-relaxed">
                  Bilingual output, built for AP and Telangana doctors.
                </p>
              </div>

              {/* Any Smartphone — light card */}
              <div className="rounded-[22px] p-6 bg-white border border-[#e8eee2]">
                <div className="w-10 h-10 rounded-xl bg-[#eef6e6] flex items-center justify-center text-[#65a30d] mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">Any Smartphone</h3>
                <p className="text-[13px] text-[#4a5444] leading-relaxed">
                  No special hardware. Works on the device in your pocket.
                </p>
              </div>

              {/* Review Before Print — accent green card */}
              <div className="rounded-[22px] p-6 bg-[#e9f7dd] border border-[#cfe9b6]">
                <div className="w-10 h-10 rounded-xl bg-[#9ae65c]/30 flex items-center justify-center text-[#3f6212] mb-4">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">Review Before Print</h3>
                <p className="text-[13px] text-[#3f4a39] leading-relaxed">
                  Full edit screen before print. Doctor stays in control.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats strip + footer */}
          <motion.div
            className="mt-10 pt-8 border-t border-[#e2ecd8] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: '8,000–15,000', label: 'Reachable clinics, AP + Telangana' },
                { value: '₹2,499/mo', label: 'Per doctor, ARPU' },
                { value: '< 35 sec', label: 'End-to-end latency' },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="text-[22px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#6b7560]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#6b7560] max-w-[300px] lg:text-right">
              First product of Sarwagyna Private Limited. Built for Indian doctors. Launching in Andhra Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RizzMyResume — Product Section (monochrome palette) */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#fafafa] border-b border-[#ececec]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: label, logo, tagline, descriptor, description, CTAs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0a]/5 border border-[#0a0a0a]/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#0a0a0a] animate-pulse" />
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0a0a0a]">Product</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#0a0a0a] flex items-center justify-center text-white font-display font-extrabold text-[20px]">
                  R
                </div>
                <span className="text-[26px] font-display font-extrabold tracking-tight text-[#0a0a0a]">
                  RizzMyResume
                </span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-[42px] font-display font-bold text-[#0a0a0a] mb-4 tracking-tight leading-[1.08]">
                Your resume. AI-written. <span className="text-[#6b7280]">Job-ready in 60 seconds.</span>
              </motion.h2>

              <motion.p variants={fadeIn} className="text-[16px] text-[#3f4046] font-medium leading-relaxed mb-4">
                Pay-per-use AI resume builder for students, freshers, and early-career professionals. No subscription. No fluff.
              </motion.p>

              <motion.p variants={fadeIn} className="text-[15px] text-[#52555c] leading-relaxed mb-6">
                ATS systems filter out 75% of applications automatically — not because candidates are unqualified, but because the resume isn't written correctly. <span className="font-bold text-[#0a0a0a]">RizzMyResume fixes that.</span> Enter your details, get a fully structured, ATS-optimised resume in under 60 seconds. Pay only when you use it — ₹50 per resume.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://rizzmyresume.sarwagyna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0a0a0a] text-white font-bold text-[15px] hover:bg-[#222] transition-colors w-full sm:w-auto"
                >
                  Build My Resume — ₹50
                </a>
                <a
                  href="https://rizzmyresume.sarwagyna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-[#d4d4d4] text-[#0a0a0a] font-bold text-[15px] hover:border-[#0a0a0a] hover:bg-white transition-colors w-full sm:w-auto group"
                >
                  See Sample Output <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: feature points — 2×2 grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* ATS-Optimised — dark card */}
              <div className="rounded-[22px] p-6 bg-[#0a0a0a]">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">ATS-Optimised Output</h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-3">
                  Structured for applicant tracking systems. Passes filters before a recruiter even sees it.
                </p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                  Core differentiator
                </span>
              </div>

              {/* 60-Second — light card */}
              <div className="rounded-[22px] p-6 bg-white border border-[#ececec]">
                <div className="w-10 h-10 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#0a0a0a] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">60-Second Turnaround</h3>
                <p className="text-[13px] text-[#52555c] leading-relaxed">
                  Input your details. Get a ready-to-send resume. Instantly.
                </p>
              </div>

              {/* ₹50 Per Resume — light card */}
              <div className="rounded-[22px] p-6 bg-white border border-[#ececec]">
                <div className="w-10 h-10 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#0a0a0a] mb-4">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">₹50 Per Resume</h3>
                <p className="text-[13px] text-[#52555c] leading-relaxed">
                  No subscription. No hidden charges. Pay only when you need it.
                </p>
              </div>

              {/* Built for Indian Freshers — accent gray card */}
              <div className="rounded-[22px] p-6 bg-[#f3f4f6] border border-[#e5e7eb]">
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a]/5 flex items-center justify-center text-[#0a0a0a] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0a0a0a] mb-2">Built for Indian Freshers</h3>
                <p className="text-[13px] text-[#3f4046] leading-relaxed">
                  Designed for students and early-career professionals entering the Indian job market.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats strip + footer */}
          <motion.div
            className="mt-10 pt-8 border-t border-[#ececec] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {[
                { value: '₹50 flat', label: 'Per resume' },
                { value: '< 60 sec', label: 'Turnaround time' },
                { value: 'Zero', label: 'Subscription, no lock-in' },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="text-[22px] font-display font-extrabold text-[#0a0a0a] tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#6b7280]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#6b7280] max-w-[320px] lg:text-right">
              Built and operated by Sarwagyna Private Limited. Powered by AI. Priced for every fresher in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sarwagyna Section */}
      <section className="py-24 relative bg-bg border-t border-border-subtle overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16 max-w-[700px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              WHY SARWAGYNA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Why Leading Businesses Choose Sarwagyna
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. AI-Native Approach",
                description: "We don't bolt AI on as an afterthought. Every solution we build starts with intelligence at its core — so your business doesn't just keep up with the future, it leads it."
              },
              {
                title: "2. End-to-End Ownership",
                description: "From strategy and design to development, deployment, and ongoing support — we own the entire journey. One team, full accountability, zero handoff chaos."
              },
              {
                title: "3. India-Rooted, Global-Ready",
                description: "Deep local market knowledge combined with international execution capability. We understand the Indian business landscape and build solutions that scale across borders."
              },
              {
                title: "4. Startup Speed, Enterprise Grade",
                description: "We move with the urgency of a startup and the discipline of an enterprise. Fast delivery doesn't mean cutting corners — it means smarter processes and sharper focus."
              },
              {
                title: "5. Multi-Industry Perspective",
                description: "Operating across AI, and software gives us a cross-industry lens that pure-play firms simply don't have. Better context means better solutions."
              },
              {
                title: "6. Transparent Partnerships",
                description: "Fixed-scope engagements, milestone-based billing, and full project visibility from day one. No surprises on scope, timeline, or cost."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-8 group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-display font-semibold text-text mb-4 relative z-10 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed relative z-10 text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 relative bg-surface border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              OUR VALUES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              The Core Values &amp; Principles That Drive Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary leading-relaxed"
            >
              Everything we build, every partnership we form, and every decision we make is guided by a set of principles we don't compromise on.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. Intelligence First",
                description: "We believe technology should think, not just execute. Every product we build and every service we deliver starts with a question: how can intelligence make this better, faster, and smarter?"
              },
              {
                title: "2. Integrity Always",
                description: "We say what we mean and deliver what we promise. In a world of overpromising, we've built our reputation on honest communication, transparent pricing, and accountable delivery."
              },
              {
                title: "3. Client Obsession",
                description: "Our clients' success is our success. We don't close a project and walk away — we stay invested in outcomes, not just outputs, and measure our performance by the results our clients achieve."
              },
              {
                title: "4. Speed with Quality",
                description: "Speed without quality is just noise. We've built our processes to move fast without sacrificing security, reliability, or craftsmanship — because our clients deserve both."
              },
              {
                title: "5. Global Mindset",
                description: "We were born in India and built for the world. Every solution we create is designed with global standards, international scalability, and cross-border ambition in mind."
              },
              {
                title: "6. Inclusive Growth",
                description: "We grow when our clients, partners, employees, and communities grow. We actively build opportunities that extend beyond our walls — because sustainable business is shared business."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-8 group hover:border-border-subtle transition-all duration-300 relative overflow-hidden bg-bg"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-display font-semibold text-text mb-4 relative z-10 group-hover:text-amber-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed relative z-10 text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives & Insights Section */}
      <section className="py-24 relative bg-bg border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {/* Header */}
          <div className="mb-16 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              PERSPECTIVES & INSIGHTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Our Thinking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary leading-relaxed mb-6"
            >
              Ideas, perspectives, and insights from the people building Sarwagyna.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-text-muted leading-relaxed"
            >
              We don't just build products and close deals. We think deeply about the industries we operate in, the problems worth solving, and the direction the world is heading. This is where we share that thinking — honestly and without the jargon.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column: Categories List */}
            <div className="flex-1 space-y-8">
              {[
                {
                  title: "Category 1: AI & Technology",
                  description: "From large language models to enterprise automation, we break down what's real, what's hype, and what actually moves the needle for businesses adopting AI today."
                },
                {
                  title: "Category 2: Product & Design",
                  description: "Behind every SarwHub event page, every SarwCal booking flow, and every SarwBill dashboard is a design decision. We talk about how we think about building software that people actually want to use."
                },
                {
                  title: "Category 3: Business & Strategy",
                  description: "What does it take to build a multi-industry company from India? We share lessons from the trenches — on growth, on capital, on hiring, and on the hard calls that don't make it into pitch decks."
                },
                {
                  title: "Category 4: India & the World",
                  description: "India is at an inflection point. We write about the opportunity, the infrastructure, the policy shifts, and what it means for entrepreneurs, investors, and enterprises operating here."
                }
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group"
                >
                  <h3 className="text-xl font-display font-semibold text-text mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-[15px]">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Featured Post & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[480px] shrink-0"
            >
              <div className="card p-8 lg:p-10 sticky top-28 bg-surface border-border-subtle overflow-hidden group">
                {/* Subtle gradient background effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold tracking-wide uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Featured Post
                </div>

                <h3 className="text-2xl font-display font-bold text-text mb-4 leading-snug group-hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                  Why We Built Three Businesses Instead of One
                </h3>

                <p className="text-text-secondary mb-8 leading-relaxed">
                  Most founders are told to focus. We disagreed — here's why building across AI, and software made us stronger, not thinner.
                </p>

                <div className="flex flex-col gap-4">
                  <Link href="/insights" className="glass-button-primary w-full text-center flex items-center justify-center gap-2 group/btn">
                    Read Our Latest
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/newsletter" className="glass-button-ghost w-full text-center flex items-center justify-center gap-2 group/btn">
                    Subscribe to Our Newsletter
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 relative bg-surface border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {/* Main Header */}
          <div className="text-center mb-20 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              HOW WE WORK
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] sm:text-[20px] text-text-secondary leading-relaxed mb-6 font-medium"
            >
              We don't just deliver projects. We build partnerships — and every partnership starts with the same commitment to doing things the right way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-text-muted leading-relaxed"
            >
              Most agencies will tell you what you want to hear to win the deal. We'd rather tell you what you need to hear to actually succeed. That's the foundation of how we work — honest, structured, and relentlessly focused on outcomes over optics.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 mb-24">
            {/* The Way We Think */}
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-text mb-8 border-b border-border-subtle pb-4">The Way We Think</h3>
              <div className="space-y-6">
                {[
                  { title: "Outcomes Before Outputs", desc: "A beautiful website that generates no leads is a failure. A perfectly written AI agent that nobody uses is a waste. We measure our work by what it produces for your business — not by what it looks like on a portfolio slide." },
                  { title: "Simplicity is the Hardest Thing to Build", desc: "It's easy to make things complicated. The real craft is in making complex problems feel simple for the people using your product. We obsess over clarity — in design, in code, and in communication." },
                  { title: "Technology Serves the Business, Not the Other Way Around", desc: "We're not here to implement the trendiest stack or recommend AI because it's fashionable. Every technology decision we make is grounded in one question: does this actually solve your problem better?" },
                  { title: "Transparency as a Default", desc: "You'll always know where your project stands. Budget, timeline, blockers, risks — we surface everything, early. No surprises at delivery." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card p-6 bg-bg group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h4 className="text-[17px] font-semibold text-text mb-2 relative z-10 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How We Engage */}
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-text mb-8 border-b border-border-subtle pb-4">How We Engage</h3>
              <div className="space-y-6">
                {[
                  { title: "Discovery First, Always", desc: "Before we write a line of code or move a single shipment, we invest time understanding your business, your constraints, and your definition of success. Skipping discovery is how projects fail." },
                  { title: "Fixed Scope, Milestone-Based", desc: "We don't believe in open-ended retainers that quietly drain budgets. Our engagements are scoped clearly, priced honestly, and structured around milestones you can see and sign off on." },
                  { title: "Collaborative, Not Transactional", desc: "You're not a ticket in our queue. Your team works alongside ours — with regular demos, open communication channels, and a shared sense of ownership over the outcome." },
                  { title: "Built to Last, Not Just to Launch", desc: "We build with maintainability, security, and scalability in mind from day one. What we hand over to you should be something you can grow into — not something you'll need to rebuild in 18 months." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card p-6 bg-bg group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h4 className="text-[17px] font-semibold text-text mb-2 relative z-10 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Process & Expectations */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

            {/* Process */}
            <div>
              <h3 className="text-2xl font-display font-bold text-text mb-8">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { step: "01", title: "Discover", desc: "We immerse ourselves in your world. Stakeholder interviews, competitive analysis, technical audits, and goal-setting sessions to build a complete picture before anything else." },
                  { step: "02", title: "Strategize", desc: "We map out the optimal path — architecture decisions, project roadmap, risk identification, and resource planning. You see the full plan before we start." },
                  { step: "03", title: "Design", desc: "Every interface, flow, and user experience is prototyped and reviewed before development begins. We don't design and build simultaneously — that's how rework happens." },
                  { step: "04", title: "Build", desc: "Agile development in focused two-week sprints. You see working software regularly — not just at the end. Feedback loops are built into the rhythm, not bolted on at the finish line." },
                  { step: "05", title: "Deploy", desc: "Rigorous QA, security review, performance testing, and a structured go-live process. Launch day is planned, not scrambled." },
                  { step: "06", title: "Evolve", desc: "Post-launch isn't the end — it's the beginning of optimization. We monitor, measure, and continuously improve what we've built together." }
                ].map((process, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="text-2xl font-bold text-amber-500/50 group-hover:text-amber-500 transition-colors font-display w-8 shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-text mb-1">{process.title}</h4>
                      <p className="text-[13px] text-text-secondary leading-relaxed">{process.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expectations & CTA */}
            <div className="card p-8 bg-bg border-border-subtle sticky top-28">
              <h3 className="text-xl font-display font-bold text-text mb-6">What You Can Always Expect From Us</h3>

              <ul className="space-y-4 mb-10">
                {[
                  "A single point of contact who knows your project inside out",
                  "Weekly progress updates without you having to ask",
                  "Honest timelines — including when something is going to take longer than planned",
                  "Clean, documented, handover-ready deliverables",
                  "A team that treats your budget like it's their own"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-text-secondary leading-relaxed">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <Link href="/contact" className="glass-button-primary w-full text-center flex items-center justify-center gap-2 group/btn">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link href="/" className="glass-button-ghost w-full text-center flex items-center justify-center gap-2 group/btn">
                  See How We've Worked With Others
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
