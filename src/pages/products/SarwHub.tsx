'use client';

import React, { useState } from 'react';
import { Ticket, Check, ChevronDown, ChevronUp } from 'lucide-react';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="glass-panel p-6 rounded-xl hover:bg-[var(--color-bg)]/5 transition-colors">
    <h4 className="text-lg font-bold text-[var(--color-text)] mb-3">{title}</h4>
    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{description}</p>
  </div>
);

const Accordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border-subtle)] py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left font-medium text-[var(--color-text)] hover:text-[var(--color-text)]/80 transition-colors">
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--color-text-secondary)]" /> : <ChevronDown className="w-5 h-5 text-[var(--color-text-secondary)]" />}
      </button>
      {isOpen && <p className="mt-3 text-[var(--color-text-secondary)] text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function SarwHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg)]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-[var(--color-green-light)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-[13px] font-medium mb-6">
              <Ticket className="w-4 h-4 text-[var(--color-green-icon)]" />
              <span>The all‑in‑one event management &amp; ticketing platform</span>
            </div>
            <h1 className="text-[46px] md:text-[56px] font-display font-extrabold tracking-[-0.06em] text-[var(--color-text)] mb-6">
              Sell out your next event, stress‑free.
            </h1>
            <p className="text-[17px] text-[var(--color-text-secondary)] leading-[1.75]">
              Running events in India means juggling vendors, chaotic check-ins, and delayed payouts. SarwHub brings ticketing, landing pages, and real-time analytics under one roof. Stop wrestling with multiple tools and start delivering unforgettable experiences for your attendees.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="glass-button-primary px-8 py-3">Start Selling Tickets Free</button>
              <button className="glass-button-ghost px-8 py-3">Request Enterprise Demo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="Smart Ticketing" 
              description="Create multiple ticket tiers, early bird offers, and group discounts in minutes. Manage inventory and pricing dynamically." 
            />
            <FeatureCard 
              title="Lightning-Fast QR Check-in" 
              description="Eliminate queues with our offline-first scanner app. Check in thousands of attendees seamlessly, even with spotty venue internet." 
            />
            <FeatureCard 
              title="Custom Event Landing Pages" 
              description="Launch beautiful, mobile-optimized event pages without writing code. Add your branding, schedules, and speaker profiles instantly." 
            />
            <FeatureCard 
              title="Integrated Payments & Fast Payouts" 
              description="Accept UPI, cards, and net banking with industry-leading success rates. Get your funds settled faster than industry standards." 
            />
            <FeatureCard 
              title="Real-Time Analytics Dashboard" 
              description="Track sales, traffic sources, and attendee demographics live. Make data-driven decisions to boost your marketing ROI." 
            />
            <FeatureCard 
              title="Multi-Vendor & Organizer Support" 
              description="Collaborate with co-organizers, manage vendor access, and split revenue automatically. Perfect for complex festivals and large conferences." 
            />
          </div>

          <div className="card rounded-2xl p-8 md:p-12 mb-20 bg-[var(--color-surface)]">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold text-[var(--color-text)] mb-8">
                Why SarwHub vs Townscript &amp; BookMyShow?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-green-light)] rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)] font-bold border border-[var(--color-border-subtle)]">
                    1
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Lower ticketing fees with transparent pricing—no hidden convenience charges for your attendees.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[var(--color-green-light)] rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)] font-bold border border-[var(--color-border-subtle)]">
                    2
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Faster payout cycles so you have the cash flow to run your event, not wait for it.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[var(--color-green-light)] rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)] font-bold border border-[var(--color-border-subtle)]">
                    3
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Complete control over your attendee data—we don't market competing events to your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-2xl p-8 md:p-16 mb-20 text-center relative overflow-hidden bg-[var(--color-surface)]">
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-[var(--color-text)] mb-6">
                Ready to host your best event yet?
              </h3>
              <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-2xl mx-auto">
                From intimate workshops to massive festivals, SarwHub scales with your needs. Contact us for a pricing structure that works for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="glass-button-primary px-10 py-4 font-bold">Start Selling Tickets</button>
                <button className="glass-button-ghost px-10 py-4 font-bold">Request Enterprise Demo</button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h4 className="text-xl font-display font-bold text-[var(--color-text)] mb-6 text-center">
              Frequently Asked Questions
            </h4>
            <Accordion question="Are there any setup fees?" answer="No, you can create an account and publish your first event completely free of charge. You only pay platform fees on paid ticket sales." />
            <Accordion question="How quickly do I get paid?" answer="Payouts are processed within T+2 business days after successful ticket sales, ensuring you have the cash flow you need." />
            <Accordion question="Can I pass the ticketing fee to attendees?" answer="Yes, you have full control to either absorb the fee into your ticket price or pass it on to the ticket buyer during checkout." />
          </div>

          <div className="card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto bg-[var(--color-surface)]">
            <p className="text-xl italic mb-6 text-[var(--color-text-secondary)]">
              "SarwHub completely transformed how we manage our annual tech conference. The check-in process was flawless, and the analytics helped us sell out a week early."
            </p>
            <p className="font-semibold text-[var(--color-text)]">— Event Director, Leading Tech Community</p>
          </div>
        </div>
      </section>
    </div>
  );
}
