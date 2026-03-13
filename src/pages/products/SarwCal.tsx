'use client';

import React, { useState } from 'react';
import { Calendar, Check, ChevronDown, ChevronUp } from 'lucide-react';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function SarwCal() {
  return (
    <div className="bg-white pt-20">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              <span>The Smart Scheduling Tool Built for India</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stop the Back-and-Forth Emails.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Booking meetings shouldn't be a chore. SarwCal is the Calendly alternative designed specifically for Indian professionals. With native UPI integration, WhatsApp reminders, and IST-first timezone handling, you can focus on the meeting, not the scheduling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="glass-button-primary px-8 py-3 text-[var(--color-text)] rounded-lg font-semibold hover:bg-[var(--color-bg)]/5 transition-colors">Create Free Account</button>
              <button className="glass-button-ghost px-8 py-3 text-[var(--color-text)] border-[var(--color-border-subtle)] rounded-lg font-semibold hover:bg-[var(--color-bg)]/5 transition-colors">View Live Demo</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why SarwCal vs Calendly?</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                While global tools are great, they often miss the nuances of the Indian market. SarwCal is built from the ground up to solve local friction points. We integrate directly with Indian payment gateways (Razorpay, PayU) so you can collect consultation fees via UPI before the meeting is even booked. We replace easily ignored email reminders with high-open-rate WhatsApp notifications, drastically reducing no-shows. And our pricing is in Rupees, making it affordable for independent consultants and growing teams alike.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="UPI & Payment Integration" 
              description="Require payment at the time of booking. Connect your Razorpay or Stripe account to collect consultation fees instantly via UPI or cards." 
            />
            <FeatureCard 
              title="Automated WhatsApp Reminders" 
              description="Reduce no-shows by up to 40%. Send automated booking confirmations and reminders directly to your clients' WhatsApp." 
            />
            <FeatureCard 
              title="Multi-Calendar Sync" 
              description="Never double-book again. Sync your Google Calendar, Outlook, and Apple Calendar in real-time to block out busy slots automatically." 
            />
            <FeatureCard 
              title="Custom Booking Pages" 
              description="Look professional with a branded booking page. Add your logo, custom colors, and personalized welcome messages." 
            />
            <FeatureCard 
              title="Team Scheduling (Round Robin)" 
              description="Distribute meetings fairly across your sales or support team. Automatically route clients to the next available team member." 
            />
            <FeatureCard 
              title="Buffer Times & Limits" 
              description="Protect your energy. Automatically add buffer times between meetings and cap the maximum number of meetings per day." 
            />
          </div>

          <div className="bg-[var(--color-text)] text-white rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl text-white font-bold mb-8 text-center">Built for How You Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Consultants & Freelancers</h4>
                <p className="text-[var(--color-text-secondary)] text-sm">Monetize your time effortlessly. Share your link, collect payment via UPI, and meet.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Doctors & Clinics</h4>
                <p className="text-[var(--color-text-secondary)] text-sm">Manage patient appointments, send WhatsApp reminders, and reduce costly no-shows.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Sales & Support Teams</h4>
                <p className="text-[var(--color-text-secondary)] text-sm">Route leads to the right rep instantly with Round Robin scheduling and CRM integrations.</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-text)] rounded-2xl p-8 md:p-16 mb-20 text-center text-white">
            <h3 className="text-white text-3xl font-bold mb-6">Ready to Simplify Your Scheduling?</h3>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
              Our plans are designed to scale with your professional growth. From solo practitioners to large teams, we have the right fit for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="glass-button-primary px-8 py-4 bg-white text-[var(--color-primary)] rounded-xl font-bold hover:bg-[var(--color-primary-hover)] transition-colors">Start Free Account</button>
              <button className="glass-button-ghost px-8 py-4 bg-transparent text-[var(--color-text)] border-[var(--color-border-subtle)] rounded-xl font-bold hover:bg-[var(--color-border-subtle)] transition-colors">Talk to Sales for Custom Pricing</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
