'use client';

import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-text-secondary font-medium mb-8">
            SARWAGYNA PVT LTD<br/>
            Effective Date: June 1, 2025<br/>
            Last Updated: June 1, 2025<br/>
            Applies to: sarwagyna.com, sarwagyna.in and all Sarwagyna web applications
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4 mt-8">1. What Are Cookies?</h2>
            <p className="text-text-secondary mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to the website owners.
            </p>
            <p className="text-text-secondary">
              This Cookie Policy explains what cookies and similar technologies we use on the Sarwagyna websites and products, why we use them, and how you can control them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">2.1 Strictly Necessary Cookies</h3>
            <p className="text-text-secondary mb-4">
              These cookies are essential for you to browse our website and use its features. Without these cookies, certain services you have asked for cannot be provided. These cookies do not require your consent.
            </p>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Session management cookies (maintain your login state across pages)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Security cookies (protect against CSRF and other attacks)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Load balancing cookies (ensure stable service delivery)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Cookie consent preference storage</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">2.2 Performance and Analytics Cookies</h3>
            <p className="text-text-secondary mb-4">
              These cookies collect anonymized information about how visitors use our website, which pages are most visited, and where users experience errors. This data helps us improve the performance and user experience of our website.
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Google Analytics 4 (anonymized IP; no cross-site tracking)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Internal session recording (scroll depth, CTA engagement — used only in aggregate form)</span></li>
            </ul>
            <p className="text-text-secondary mb-6">These cookies require your consent and can be disabled.</p>

            <h3 className="text-xl font-semibold text-text mb-3">2.3 Functional Cookies</h3>
            <p className="text-text-secondary mb-4">
              Functional cookies enable our website to remember choices you make (such as your language preference, region, or login state) to provide a more personalized experience.
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Language preference cookies</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>UI preference cookies (dark/light mode, regional settings)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Form auto-save cookies (for multi-step forms)</span></li>
            </ul>
            <p className="text-text-secondary mb-6">
              These cookies are set with your consent and can be disabled, though doing so may affect functionality.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">2.4 Marketing and Targeting Cookies</h3>
            <p className="text-text-secondary mb-4">
              These cookies are used to track your browsing activity across websites and deliver targeted advertisements relevant to your interests. They are set by third-party advertising partners.
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>LinkedIn Insight Tag (for LinkedIn campaign measurement)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Google Ads conversion cookies</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Meta Pixel (Facebook/Instagram retargeting)</span></li>
            </ul>
            <p className="text-text-secondary">
              These cookies require explicit consent. You can withdraw consent at any time via our Cookie Preference Centre. Note that opting out does not mean you will see fewer ads — it means ads will not be tailored to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">3. Cookie Duration</h2>
            <p className="text-text-secondary mb-4">
              Cookies can be either “session cookies” (deleted when you close your browser) or “persistent cookies” (stored on your device for a defined period). Below is a summary:
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Session cookies:</strong> Last for the duration of your browsing session</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Short-term persistent cookies:</strong> 7–30 days (e.g., login state, preferences)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Long-term analytics cookies:</strong> Up to 13 months (Google Analytics default)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Marketing cookies:</strong> Up to 90 days (vary by provider)</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">4. Third-Party Cookies</h2>
            <p className="text-text-secondary mb-4">
              Some cookies on our site are set by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the privacy and cookie policies of the relevant third parties:
            </p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Google LLC (Analytics, Ads):</strong> <a href="https://policies.google.com/privacy" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Meta Platforms Ireland Ltd (Facebook/Instagram Pixel):</strong> <a href="https://facebook.com/privacy/policy" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>LinkedIn Ireland Unlimited Company (Insight Tag):</strong> <a href="https://linkedin.com/legal/privacy-policy" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">linkedin.com/legal/privacy-policy</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Razorpay Software Pvt Ltd (payment processing):</strong> <a href="https://razorpay.com/privacy" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">razorpay.com/privacy</a></span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">5. How to Manage Cookies</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">5.1 Our Cookie Preference Centre</h3>
            <p className="text-text-secondary mb-6">
              When you first visit our website, you will see a cookie consent banner. You can choose which categories of cookies to accept. You can update your preferences at any time by clicking the “Cookie Preferences” link in the footer of our website.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">5.2 Browser Settings</h3>
            <p className="text-text-secondary mb-4">You can also control cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>View cookies currently stored on your device</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Delete cookies individually or in bulk</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Block cookies from specific or all websites</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Enable private/incognito browsing mode</span></li>
            </ul>
            <p className="text-text-secondary mb-6">
              Please note that blocking all cookies may impair the functionality of our website and products. Refer to your browser’s help documentation for specific instructions.
            </p>

            <h3 className="text-xl font-semibold text-text mb-3">5.3 Opt-Out Tools</h3>
            <p className="text-text-secondary mb-4">You can use the following tools to opt out of specific third-party cookies:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Your Online Choices (EU):</strong> <a href="https://youronlinechoices.eu" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a></span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">6. Do Not Track (DNT)</h2>
            <p className="text-text-secondary">
              Some browsers send a “Do Not Track” signal. Our website does not currently respond to DNT signals as there is no universally accepted standard for what websites should do when they receive such signals. We will update this policy if an industry standard emerges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">7. Changes to This Cookie Policy</h2>
            <p className="text-text-secondary">
              We may update this Cookie Policy to reflect changes in technology, law, or our data practices. When we do, we will revise the “Last Updated” date and notify you via the cookie consent banner on your next visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">8. Contact Us</h2>
            <p className="text-text-secondary mb-4">For questions about our use of cookies:</p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Email:</strong> <a href="mailto:contact@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">contact@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Address:</strong> Sarwagyna Pvt Ltd, Registered Office, India</span></li>
            </ul>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
