'use client';

import React, { useState } from 'react';
import { FileText, Check, ChevronDown, ChevronUp, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="card p-7">
    <h4 className="font-display text-[18px] font-semibold text-text mb-3">
      {title}
    </h4>
    <p className="text-[15px] text-text-secondary leading-[1.7]">
      {description}
    </p>
  </div>
);

const Accordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left font-medium text-gray-900 hover:text-emerald-600 transition-colors">
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function SarwBill() {
  return (
    <div className="bg-bg pt-20">
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-light text-green-icon px-4 py-1.5 rounded-full text-[13px] font-medium mb-6">
              <FileText className="w-4 h-4 text-green-icon" />
              <span>CA-Verified GST Invoicing &amp; Billing</span>
            </div>
            <h1 className="text-[46px] md:text-[60px] font-display font-extrabold tracking-[-0.06em] text-text mb-6">
              Ditch the Excel Sheets. Bill Like a Pro.
            </h1>
            <p className="text-[17px] text-text-secondary leading-[1.75]">
              Indian SMEs lose hours every week wrestling with manual invoices and chasing payments on WhatsApp. SarwBill automates your entire billing workflow—from GST-compliant e-invoicing to automated payment reminders—so you get paid faster and stay perfectly compliant.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="glass-button-primary">
                Start Billing Free
              </button>
              <button className="glass-button-ghost">
                Talk to an Expert
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-20 text-[14px] font-medium text-text-secondary">
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-icon mr-2 rounded-[8px]" />
              CA-Verified Templates
            </div>
            <span className="w-1 h-1 rounded-full bg-button-outline" />
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-icon mr-2 rounded-[8px]" />
              100% GST Compliant
            </div>
            <span className="w-1 h-1 rounded-full bg-button-outline" />
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-icon mr-2 rounded-[8px]" />
              Bank-Grade Security
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="1-Click GST Invoicing" 
              description="Generate professional, error-free GST invoices in seconds. Automatically calculate CGST, SGST, and IGST based on client location." 
            />
            <FeatureCard 
              title="Automated Payment Reminders" 
              description="Stop chasing clients. Set up automated email and SMS reminders for overdue invoices and improve your cash flow instantly." 
            />
            <FeatureCard 
              title="Inventory Management" 
              description="Track stock levels in real-time. Get low-stock alerts and automatically update inventory when an invoice is generated." 
            />
            <FeatureCard 
              title="E-Invoicing & E-Way Bills" 
              description="Generate government-mandated e-invoices (IRN) and e-way bills directly from the platform with a single click." 
            />
            <FeatureCard 
              title="Expense Tracking" 
              description="Log vendor bills, categorize expenses, and upload receipts. Keep your books clean and ready for tax season." 
            />
            <FeatureCard 
              title="CA-Ready Reports" 
              description="Export GSTR-1, GSTR-2, and GSTR-3B reports instantly. Give your accountant read-only access to save hours during filing." 
            />
          </div>

          <div className="bg-[var(--color-green-light)] rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display font-semibold text-text mb-8">Trusted by Growing Indian Businesses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card p-6">
                  <p className="text-[#4A5550] italic mb-4 text-sm">"SarwBill cut our invoicing time in half. The automated reminders alone have improved our cash flow by 30%."</p>
                  <p className="font-semibold text-text text-sm">Owner, Retail Chain</p>
                </div>
                <div className="card p-6">
                  <p className="text-[#4A5550] italic mb-4 text-sm">"Finally, a billing software that actually understands Indian GST rules without being overly complicated."</p>
                  <p className="font-semibold text-text text-sm">Freelance Consultant</p>
                </div>
                <div className="card p-6">
                  <p className="text-[#4A5550] italic mb-4 text-sm">"My CA loves the reports SarwBill generates. It makes month-end reconciliation a breeze."</p>
                  <p className="font-semibold text-text text-sm">Director, Manufacturing SME</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-16 mb-20 text-center bg-text text-white">
            <h3 className="text-white text-3xl font-display font-semibold mb-6">Ready to Streamline Your Billing?</h3>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
              Our pricing is as flexible as your business needs. Whether you're a solo entrepreneur or a large enterprise, we have a plan for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="glass-button-primary bg-white text-primary hover:bg-primary-hover">
                Get Started Free
              </button>
              <button className="glass-button-ghost bg-transparent text-text border-border-subtle hover:border-border-subtle">
                Contact for Custom Pricing
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-display font-semibold text-text mb-6 text-center">Common Questions from SME Owners</h4>
            <Accordion question="Is my financial data secure?" answer="Absolutely. We use bank-grade 256-bit encryption and host your data on secure AWS servers located in India, ensuring full compliance with local data localization laws." />
            <Accordion question="Can my CA access my reports directly?" answer="Yes, on the Business and Enterprise plans, you can invite your CA with read-only access so they can download GSTR reports directly without you having to email them." />
            <Accordion question="Do you support e-invoicing?" answer="Yes, our Enterprise plan fully supports direct e-invoice (IRN) generation and e-way bill creation in compliance with the latest government mandates." />
          </div>
        </div>
      </section>

      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-bg/60 backdrop-blur-md">
        <div className="max-w-xl w-full card p-10 md:p-16 text-center relative overflow-hidden bg-surface shadow-2xl border-border-subtle">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-icon" />
          
          <div className="w-20 h-20 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-8 text-green-icon">
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Coming Soon
          </h2>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            SarwBill is in beta testing with select partners. We're ensuring 100% compliance with the latest GST mandates before our public launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-button-primary px-10 py-4 font-bold">
              Join the Waitlist
            </button>
            <Link href="/" className="glass-button-ghost px-10 py-4 font-bold text-center">
              Back to Home
            </Link>
          </div>

          <p className="mt-8 text-xs text-text-muted uppercase tracking-widest font-semibold">
            Expected Launch: Q2 2026
          </p>
        </div>
      </div>
    </div>
  );
}
