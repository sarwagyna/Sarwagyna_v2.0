import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text pt-16">
      <SEO
        title="Careers | Sarwagyna"
        description="Join the team at Sarwagyna. We're looking for people who are restless, rigorous, and ready to do the best work of their lives."
      />

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

          {/* Why Work Here + Open Positions Split */}
          <div className="flex flex-col lg:flex-row gap-16 mb-24">

            {/* Benefits List */}
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-text mb-8">Why Work Here</h3>
              <div className="space-y-8">
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
                    initial={{ opacity: 0, x: -20 }}
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

            {/* Open Positions */}
            <div className="flex-1 lg:max-w-[500px]">
              <div className="card p-8 bg-bg border-border-subtle sticky top-28">
                <h3 className="text-2xl font-display font-bold text-text mb-8">Open Positions</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Engineering</h4>
                    <ul className="space-y-3">
                      {["Full Stack Developer (React / Node.js)", "AI/ML Engineer", "Backend Engineer (Python / FastAPI)", "DevOps & Infrastructure Engineer"].map((role, i) => (
                        <li key={i} className="text-text-secondary hover:text-text transition-colors cursor-pointer text-[15px] flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-amber-500" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Product & Design</h4>
                    <ul className="space-y-3">
                      {["Product Manager", "UI/UX Designer"].map((role, i) => (
                        <li key={i} className="text-text-secondary hover:text-text transition-colors cursor-pointer text-[15px] flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-amber-500" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Sales & Growth</h4>
                    <ul className="space-y-3">
                      {["Business Development Manager — AI & IT", "Growth & Marketing Associate"].map((role, i) => (
                        <li key={i} className="text-text-secondary hover:text-text transition-colors cursor-pointer text-[15px] flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-amber-500" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Operations</h4>
                    <ul className="space-y-3">
                      {["Client Success Manager"].map((role, i) => (
                        <li key={i} className="text-text-secondary hover:text-text transition-colors cursor-pointer text-[15px] flex items-center gap-2 group">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 transition-all text-amber-500" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 p-5 rounded-xl bg-surface border border-border-subtle">
                  <h5 className="text-[15px] font-semibold text-text mb-2">Don't see your role?</h5>
                  <p className="text-[13px] text-text-secondary mb-3">We hire for talent first. If you believe you can contribute to what we're building, send us your profile anyway.</p>
                  <a href="mailto:careers@sarwagyna.com" className="text-amber-500 hover:text-amber-400 text-[14px] font-medium transition-colors flex items-center gap-1">
                    careers@sarwagyna.com <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
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
              <a href="mailto:careers@sarwagyna.com" className="glass-button-primary px-8 py-4 text-center flex items-center justify-center gap-2 group/btn">
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
