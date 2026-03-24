'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import DOMPurify from 'isomorphic-dompurify';
import { getActiveJobListings } from '@/lib/careers';
import type { JobListing } from '@/types/careers';

function JobCard({ listing }: { listing: JobListing }) {
  const [expanded, setExpanded] = useState(false);

  const sanitizedHTML = DOMPurify.sanitize(listing.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card p-6 sm:p-8 bg-bg border-border-subtle group hover:border-amber-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Top row: Role + Type badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-display font-bold text-text group-hover:text-amber-600 transition-colors">
          {listing.job_role}
        </h3>
        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold border border-amber-300 text-amber-600 bg-amber-50">
          {listing.job_type}
        </span>
      </div>

      {/* Engagement time */}
      <div className="flex items-center gap-1.5 text-text-secondary text-sm mb-3">
        <Clock size={14} className="text-text-muted" />
        {listing.engagement_time}
      </div>

      {/* Short description preview */}
      {listing.short_description && (
        <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
          {listing.short_description}
        </p>
      )}

      {/* Expandable description */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-sm font-medium text-amber-500 hover:text-amber-600 transition-colors mb-3"
      >
        {expanded ? 'Hide Details' : 'View Details'}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="prose prose-sm max-w-none text-text-secondary mb-4 pb-4 border-b border-border-subtle
                [&_h2]:text-base [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-text [&_h2]:mb-2
                [&_h3]:text-sm [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mb-2
                [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5
                [&_blockquote]:border-l-2 [&_blockquote]:border-amber-400 [&_blockquote]:pl-4 [&_blockquote]:italic
                [&_hr]:border-border-subtle [&_p]:text-sm [&_p]:leading-relaxed [&_li]:text-sm [&_li]:text-text-secondary"
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <a
        href={listing.cta_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200 group/cta"
      >
        {listing.cta_label}
        <ExternalLink size={14} className="group-hover/cta:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  );
}


export default function Careers() {
  const [listings, setListings] = useState<JobListing[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  useEffect(() => {
    getActiveJobListings()
      .then(setListings)
      .catch(() => setListings([]))
      .finally(() => setLoadingJobs(false));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text pt-16">

      {/* Join the Team Section */}
      <section className="py-24 relative bg-surface overflow-hidden" id="careers">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {/* Main Careers Header */}
          <div className="text-center mb-20 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              JOIN THE TEAM
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Build the Future With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] sm:text-[20px] text-text-secondary leading-relaxed mb-6 font-medium"
            >
              We're looking for people who are restless, rigorous, and ready to do the best work of their lives.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-text-muted leading-relaxed"
            >
              We're not building just another company. We're building something that sits at the intersection of AI and software — and we're doing it from India, for the world. If that excites you, you're our kind of person.
            </motion.p>
          </div>

          {/* Life at Sarwagyna + Culture Values */}
          <div className="mb-24">
            <div className="max-w-[800px] mx-auto mb-16 text-center">
              <h3 className="text-3xl font-display font-bold text-text mb-6">Life at Sarwagyna: What It's Actually Like to Work Here</h3>
              <p className="text-[16px] text-text-secondary leading-relaxed mb-6">
                We're a small team doing big things. That means you'll wear multiple hats, make real decisions, and see the direct impact of your work — sometimes within days. There's no bureaucracy to navigate, no politics to play. Just smart people working on hard problems together.
              </p>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                We're remote-friendly, async-first, and deeply committed to giving everyone the space to do their best thinking. We care about output, not optics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Autonomy Over Micromanagement", description: "You were hired because you're good. We give you the context, the tools, and the trust — then we get out of your way." },
                { title: "Deep Work Over Performative Busyness", description: "We protect focus time. Long meetings and unnecessary check-ins are not our culture. Results are." },
                { title: "Continuous Learning", description: "Every team member gets a learning budget. We expect you to grow here — and we invest in making that happen." },
                { title: "Radical Transparency", description: "Company direction, financials, and decisions are shared openly with the team. No information silos, no closed-door strategy." },
                { title: "Move Fast, Fix Fast", description: "We ship, we learn, we iterate. Mistakes are fine — hiding them isn't." },
                { title: "Global Impact, Indian Heart", description: "We're proud of where we come from. We're ambitious about where we're going." }
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card p-8 bg-bg group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-lg font-display font-semibold text-text mb-3 relative z-10 group-hover:text-amber-400 transition-colors duration-300">{val.title}</h4>
                  <p className="text-text-secondary leading-relaxed relative z-10 text-[14px]">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Open Positions — Dynamic from Supabase */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-display font-bold text-text mb-3"
              >
                Open Positions
              </motion.h3>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary text-[16px]"
              >
                Join us in building the future of AI
              </motion.p>
            </div>

            {loadingJobs ? (
              <div className="flex items-center justify-center py-16">
                <span className="animate-spin w-8 h-8 border-2 border-border-subtle border-t-text rounded-full" />
              </div>
            ) : listings.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center py-16"
              >
                <p className="text-text-muted text-[16px]">No open positions right now. Check back soon.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {listings.map((listing) => (
                  <JobCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}

            {/* Don't see your role? */}
            <div className="mt-10 max-w-xl mx-auto p-6 rounded-xl bg-bg border border-border-subtle text-center">
              <h5 className="text-[15px] font-semibold text-text mb-2">Don't see your role?</h5>
              <p className="text-[13px] text-text-secondary mb-3">We hire for talent first. If you believe you can contribute to what we're building, send us your profile anyway.</p>
              <a href="mailto:contact@sarwagyna.com" className="text-amber-500 hover:text-amber-400 text-[14px] font-medium transition-colors inline-flex items-center gap-1">
                contact@sarwagyna.com <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Why Work Here */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold text-text mb-8 text-center">Why Work Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-[900px] mx-auto">
              {[
                { title: "Competitive Compensation", description: "Market-rate salaries with performance-linked bonuses and future equity options as the company scales." },
                { title: "Flexible Hours", description: "We care about when you deliver, not when you log in. Build a schedule that works for your life." },
                { title: "Remote-First", description: "Work from anywhere in India. We have no mandatory office days — just optional ones for team sprints and offsites." },
                { title: "Learning Budget", description: "Annual budget for courses, books, conferences, and certifications — because your growth is our growth." },
                { title: "International Exposure", description: "Work on projects with clients and partners across multiple countries. Your work has a global footprint from day one." },
                { title: "Open-Door Leadership", description: "Direct access to founders and senior leadership. Your ideas will be heard — not filtered through three layers of management." },
                { title: "Real Ownership", description: "You won't be a cog here. You'll own your work, your roadmap, and your outcomes." }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <h4 className="text-lg font-semibold text-text mb-1">{benefit.title}</h4>
                  <p className="text-text-secondary text-[14px] leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hiring Process */}
          <div className="max-w-[1000px] mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-text mb-12">Our Hiring Process</h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border-subtle z-0" />

              {[
                { step: "Step 1", title: "Apply", desc: "Send us your resume and a short note on why Sarwagyna and why now." },
                { step: "Step 2", title: "Intro Call", desc: "A 30-minute conversation with our team to understand your background." },
                { step: "Step 3", title: "Assessment", desc: "A practical, role-specific task — taking no more than 2–3 hours. We respect your time." },
                { step: "Step 4", title: "Final Interview", desc: "A deeper conversation with the founders. We talk about vision, values, and fit." },
                { step: "Step 5", title: "Offer", desc: "Fast decisions. No ghost rounds." }
              ].map((process, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-amber-500 font-bold mb-4 shadow-sm shadow-black/50">
                    {i + 1}
                  </div>
                  <h4 className="text-[16px] font-semibold text-text mb-2">{process.title}</h4>
                  <p className="text-[13px] text-text-secondary leading-relaxed max-w-[160px]">{process.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@sarwagyna.com" className="glass-button-primary px-8 py-4 text-center flex items-center justify-center gap-2 group/btn">
                Send Speculative Application
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
