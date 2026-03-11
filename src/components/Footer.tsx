import { Link } from 'react-router-dom';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const navColumns = [
  {
    heading: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Leadership", path: "/about#leadership" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/about#press" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "AI Agents", path: "/ai-it" },
      { name: "Enterprise Workflows", path: "/ai-it#enterprise-workflows" },
      { name: "Web Development", path: "/ai-it#web-development" },
      { name: "Custom Software", path: "/ai-it#custom-software" },
      { name: "Import/Export", path: "/trade" },
    ],
  },
  {
    heading: "Products",
    links: [
      { name: "SarwHub", path: "/products/sarwhub" },
      { name: "SarwCal", path: "/products/sarwcal" },
      { name: "SarwBill", path: "/products/sarwbill" },
    ],
  },
  {
    heading: "Investors",
    links: [
      { name: "Investor Relations", path: "/about#investors" },
      { name: "Annual Report", path: "/about#annual-report" },
      { name: "ESG", path: "/about#esg" },
      { name: "Governance", path: "/about#governance" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Refund Policy", path: "/refund-policy" },
    ],
  },
];

const socialLinks = [
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <TwitterIcon />, label: "Twitter/X", href: "https://x.com" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com" },
  { icon: <YouTubeIcon />, label: "YouTube", href: "https://youtube.com" },
];

export default function GraphyFooter() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#f5f5f5",
        paddingTop: "0",
        paddingBottom: "40px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
        {/* ── CTA Banner ── */}
        <div
          style={{
            backgroundColor: "#0a0a0a",
            borderRadius: "20px",
            padding: "72px 40px",
            textAlign: "center",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "300px",
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 700,
              margin: "0 0 16px",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
              position: "relative",
            }}
          >
            Ready to Build Something Extraordinary?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "15px",
              margin: "0 auto 32px",
              maxWidth: "400px",
              lineHeight: 1.6,
              position: "relative",
            }}
          >
            Let's talk about your next AI project, business partnership, or investment opportunity.
          </p>

          <button
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              borderRadius: "9px",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.1px",
              position: "relative",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e8e8e8")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff")
            }
          >
            <Link to="/contact" className="px-2 py-1">Schedule a Call</Link>
          </button>
        </div>

        {/* ── Footer Card ── */}
        <footer
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #e8e8e8",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.06)",
            padding: "44px 48px 0",
            overflow: "hidden",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: "280px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <img
                  src="/_Transparent logo.png"
                  alt="Sarwagyna Logo"
                  style={{
                    height: "auto",
                    width: "auto",
                    objectFit: "contain"
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "#6b6b6b",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                }}
              >
                Sarwagyna Pvt Ltd is a technology-driven enterprise focused on artificial intelligence, digital products, and global trade. We build scalable solutions that help businesses innovate, automate, and grow across industries.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                {socialLinks.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    style={{
                      color: "#6b6b6b",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseOver={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a")
                    }
                    onMouseOut={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#6b6b6b")
                    }
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
              {navColumns.map(({ heading, links }) => (
                <div key={heading}>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0a0a0a",
                      margin: "0 0 14px",
                      letterSpacing: "-0.1px",
                    }}
                  >
                    {heading}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {links.map((link) => (
                      <li key={link.name} style={{ marginBottom: "10px" }}>
                        <Link
                          to={link.path}
                          style={{
                            fontSize: "13px",
                            color: "#6b6b6b",
                            textDecoration: "none",
                            transition: "color 0.15s",
                          }}
                          onMouseOver={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a")
                          }
                          onMouseOut={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = "#6b6b6b")
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#ebebeb",
              marginBottom: "24px",
            }}
          />

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "32px",
            }}
          >
            <p style={{ fontSize: "12.5px", color: "#9b9b9b", margin: 0 }}>
              © 2026 SARWAGYNA Pvt Ltd. All rights reserved.
            </p>
          </div>

          {/* Big bold watermark */}
          <div style={{ overflow: "hidden", lineHeight: 1, marginLeft: "-4px" }}>
            <span
              style={{
                fontSize: "clamp(80px, 16vw, 180px)",
                fontWeight: 800,
                color: "#f0f0f0",
                letterSpacing: "-10px",
                whiteSpace: "nowrap",
                display: "block",
                userSelect: "none",
              }}
            >
              SARWAGYNA
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}