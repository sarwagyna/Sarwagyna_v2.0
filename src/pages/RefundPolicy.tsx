'use client';

import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="py-24 relative bg-bg">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text mb-2">
            Refund Policy
          </h1>
          <p className="text-text-secondary font-medium mb-8">
            SARWAGYNA PVT LTD<br/>
            Effective Date: June 1, 2025<br/>
            Last Updated: June 1, 2025<br/>
            Applies to: All Sarwagyna products (SarwHub, SarwCal, SarwBill) and professional services
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4 mt-8">1. Overview</h2>
            <p className="text-text-secondary mb-4">
              Sarwagyna Pvt Ltd is committed to ensuring customer satisfaction across all our products and services. This Refund Policy outlines the conditions under which refunds are provided for our SaaS subscriptions, professional service engagements, event ticketing (via SarwHub), and trade services.
            </p>
            <p className="text-text-secondary">
              Please read this policy carefully before making a purchase. By completing a transaction with us, you agree to this Refund Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">2. SaaS Product Subscriptions (SarwHub, SarwCal, SarwBill)</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">2.1 Free Plans</h3>
            <p className="text-text-secondary mb-6">
              Free plan users are not charged and are therefore not eligible for monetary refunds. Feature disputes or service issues for free accounts are handled through our support team at <a href="mailto:support@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">support@sarwagyna.com</a>.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">2.2 Monthly Subscriptions</h3>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>You may cancel your monthly subscription at any time. Cancellation takes effect at the end of your current billing cycle.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>No refunds are issued for partial months. You will retain access to paid features until the end of the billing period.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>If you cancel within 7 days of your first paid subscription (new customers only) and have used the product for fewer than 3 events, bookings, or invoices (as applicable), you are eligible for a full refund. This is a one-time offer per account.</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">2.3 Annual Subscriptions</h3>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Annual subscriptions include a 14-day full refund window from the date of first payment.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>After 14 days, annual subscriptions are non-refundable. However, you may cancel at any time, and your plan will remain active until the end of the annual term.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Switching from annual to monthly billing mid-term is not permitted. You must wait until your annual term expires.</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">2.4 Enterprise Plans</h3>
            <p className="text-text-secondary mb-4">
              Refund terms for Enterprise plans are governed by the signed Enterprise Service Agreement between Sarwagyna and the client. Contact your account manager for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">3. AI &amp; IT Professional Services</h2>
            <p className="text-text-secondary mb-4">
              For technology services, consulting, and development engagements:
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Discovery &amp; Strategy Phase (Week 1–2):</strong> If you choose to disengage after the discovery phase but before design begins, you may be entitled to a partial refund of up to 50% of any advance payment, at Sarwagyna’s discretion, based on work completed.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Design Phase (Week 3–5):</strong> Refunds are not available once high-fidelity designs have been delivered and approved by the client.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Development Phase (Week 7+):</strong> No refunds are issued once development work has commenced. You retain all intellectual property for completed deliverables transferred to you.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Milestone-Based Contracts:</strong> Payments tied to specific milestones are non-refundable once the milestone deliverable has been accepted.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Cancellation Notice:</strong> Either party may cancel an engagement with 30 days’ written notice. Work completed up to the cancellation date will be invoiced at the agreed rate.</span></li>
            </ul>
            <p className="text-text-secondary">
              All professional service refund requests must be submitted in writing to <a href="mailto:billing@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">billing@sarwagyna.com</a> within 14 days of the disputed payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">4. Imports &amp; Exports Trade Services</h2>
            <p className="text-text-secondary mb-4">
              Trade service fees are structured as follows:
            </p>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Consultation and Inquiry Fees:</strong> Fully refundable within 48 hours of payment if no work has commenced.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Sourcing and Vetting Fees:</strong> Non-refundable once supplier/buyer identification and verification has been initiated.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Logistics and Customs Fees:</strong> Non-refundable once shipment documentation has been prepared or goods have been dispatched. Disputes related to shipment damage or loss are subject to insurance claims and the terms of the trade agreement.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Order Cancellation by Client:</strong> If you cancel a confirmed trade order after supplier commitment, you may be liable for cancellation charges as specified in the trade agreement. Sarwagyna will endeavor to minimize these charges.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Order Cancellation by Sarwagyna:</strong> If Sarwagyna is unable to fulfill a confirmed trade order for reasons within our control, you will receive a full refund of all fees paid.</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">5. Event Ticketing via SarwHub</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">5.1 Attendee Refunds</h3>
            <p className="text-text-secondary mb-4">
              Ticket refund terms are set by the individual event organizer and displayed on the event’s booking page. Sarwagyna is not responsible for refund decisions made by organizers. We act as a platform facilitator only.
            </p>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>If an event is cancelled by the organizer, Sarwagyna will initiate a full refund to all ticket purchasers within 7–14 business days.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>If an event is postponed, organizers may offer refund options or credit for the rescheduled event.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Processing fees (payment gateway charges) are non-refundable in all cases.</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">5.2 Organizer Refunds (SarwHub Platform Fees)</h3>
            <p className="text-text-secondary mb-4">
              Platform subscription fees for SarwHub follow the SaaS subscription refund terms in Section 2 above. Event-level platform fees (per-ticket processing) are non-refundable once tickets have been issued.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">6. How to Request a Refund</h2>
            <p className="text-text-secondary mb-4">To submit a refund request:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Email:</strong> <a href="mailto:billing@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">billing@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Subject line:</strong> “Refund Request – [Product/Service Name] – [Your Account Email]”</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Include:</strong> Your account details, invoice number, amount paid, date of payment, and reason for the refund request</span></li>
            </ul>
            <p className="text-text-secondary mb-4">
              Refund requests must be submitted within the timeframes specified in each section above. Requests submitted after the applicable window will not be processed.
            </p>
            <p className="text-text-secondary">
              We will acknowledge your request within 2 business days and aim to resolve it within 7–10 business days. Approved refunds will be credited to the original payment method within 5–10 business days, depending on your bank or payment provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">7. Non-Refundable Items</h2>
            <p className="text-text-secondary mb-4">The following are non-refundable in all circumstances:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Payment gateway processing fees (Razorpay, Stripe, UPI charges)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>GST paid on transactions (will appear as a GST credit note where applicable under Indian law)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Completed and delivered design assets, software modules, or AI models</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Domain registration, hosting setup fees, or third-party tool licensing procured on your behalf</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Trial period accounts converted to paid accounts where the trial was fully utilized</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">8. Chargebacks and Disputes</h2>
            <p className="text-text-secondary mb-4">
              We request that you contact us at <a href="mailto:billing@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">billing@sarwagyna.com</a> before initiating a chargeback with your bank. We aim to resolve all billing disputes directly and promptly.
            </p>
            <p className="text-text-secondary">
              Initiating a chargeback without prior communication may result in immediate suspension of your account pending investigation. If a chargeback is found to be fraudulent or unjustified, we reserve the right to terminate your account and pursue recovery through appropriate legal channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">9. Policy Updates</h2>
            <p className="text-text-secondary">
              We may update this Refund Policy from time to time. Material changes will be communicated by email to registered users and posted on our website. The revised policy will apply to purchases made after the effective date of the update.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">10. Contact Us</h2>
            <p className="text-text-secondary mb-4">For billing and refund queries:</p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Email:</strong> <a href="mailto:billing@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">billing@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>General:</strong> <a href="mailto:sarwan@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">sarwan@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Phone:</strong> +91-XXXXXXXXXX (Mon–Fri, 9AM–6PM IST)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Address:</strong> Sarwagyna Pvt Ltd, Registered Office, India</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Response time:</strong> Within 2 business days for refund requests</span></li>
            </ul>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
