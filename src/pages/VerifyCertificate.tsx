import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ShieldCheck, ShieldX, Search, Award, Calendar, User, Building2, Hash, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabaseClient';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

interface Certificate {
  id: string;
  certificate_id: string;
  name: string;
  program: string;
  issue_date: string;
  issued_by: string;
  status: 'Valid' | 'Revoked';
}

export default function VerifyCertificate() {
  const { id: routeId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [inputId, setInputId] = useState(routeId ?? '');
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const verify = async (certId: string) => {
    const trimmed = certId.trim();
    if (!trimmed) return;
    setLoading(true);
    setCertificate(null);
    setNotFound(false);

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('certificate_id', trimmed)
      .single();

    setLoading(false);
    if (error || !data) {
      setNotFound(true);
    } else {
      setCertificate(data as Certificate);
      navigate(`/verify/${encodeURIComponent(trimmed)}`, { replace: true });
    }
  };

  // Auto-verify if a route param is present on first load
  useEffect(() => {
    if (routeId) {
      verify(routeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verify(inputId);
  };

  const verifyUrl = certificate
    ? `${window.location.origin}/verify/${encodeURIComponent(certificate.certificate_id)}`
    : '';

  const formattedDate = certificate
    ? new Date(certificate.issue_date).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
      })
    : '';

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      <SEO
        title="Verify Certificate | Sarwagyna"
        description="Instantly verify the authenticity of certificates issued by Sarwagyna Pvt Ltd."
        url="/verify"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-16 flex flex-col items-center text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-2xl w-full mx-auto"
        >
          <div className="section-label justify-center mb-5">CERTIFICATE VERIFICATION</div>
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-display font-extrabold leading-[1.05] tracking-tight mb-5">
            <span className="text-text block">Verify Your</span>
            <span className="text-gradient block">Certificate.</span>
          </h1>
          <p className="text-lg text-text-secondary font-light mb-10 leading-[1.7]">
            Enter the Certificate ID found on your document to instantly confirm its authenticity.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto">
            <div className="relative flex-1">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
              <input
                type="text"
                value={inputId}
                onChange={e => { setInputId(e.target.value); setCertificate(null); setNotFound(false); }}
                placeholder="e.g. SARW-2026-A1B2C3"
                className="w-full pl-11 pr-4 py-4 rounded-2xl bg-surface border border-border-subtle text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-border-subtle/60 transition-colors text-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="glass-button-primary px-7 py-4 flex items-center gap-2 justify-center shrink-0 disabled:opacity-60"
            >
              {loading ? (
                <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              {loading ? 'Verifying…' : 'Verify'}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Result Area */}
      <section className="max-w-[900px] mx-auto w-full px-4 pb-28">
        <AnimatePresence mode="wait">

          {/* Not Found */}
          {notFound && (
            <motion.div
              key="not-found"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="card p-10 rounded-3xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                <ShieldX className="w-10 h-10 text-red-400" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text mb-3">Invalid or Unrecognized Certificate</h2>
              <p className="text-text-secondary max-w-md mx-auto">
                The certificate ID <span className="font-mono font-semibold text-text">{inputId}</span> does not match any records in our database. Please check the ID and try again.
              </p>
              <p className="text-sm text-text-secondary mt-6">
                If you believe this is an error, contact <a href="mailto:contact@sarwagyna.com" className="underline hover:text-text transition-colors">contact@sarwagyna.com</a>
              </p>
            </motion.div>
          )}

          {/* Valid Certificate Card */}
          {certificate && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="card rounded-3xl overflow-hidden"
            >
              {/* Status Banner */}
              <div className={`px-8 py-4 flex items-center gap-3 ${certificate.status === 'Valid' ? 'bg-emerald-500/10 border-b border-emerald-500/20' : 'bg-red-500/10 border-b border-red-500/20'}`}>
                {certificate.status === 'Valid'
                  ? <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  : <ShieldX className="w-5 h-5 text-red-400" />
                }
                <span className={`font-semibold text-sm tracking-wide ${certificate.status === 'Valid' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {certificate.status === 'Valid' ? '✓  Valid Certificate' : '✗  Certificate Revoked'}
                </span>
              </div>

              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-10">
                {/* Left: Details */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center text-(--color-green-icon)">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary">Certificate</p>
                      <p className="font-mono font-bold text-text">{certificate.certificate_id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Detail icon={<User className="w-4 h-4" />} label="Candidate Name" value={certificate.name} />
                    <Detail icon={<Award className="w-4 h-4" />} label="Program / Course" value={certificate.program} />
                    <Detail icon={<Calendar className="w-4 h-4" />} label="Issue Date" value={formattedDate} />
                    <Detail icon={<Building2 className="w-4 h-4" />} label="Issued By" value={certificate.issued_by} />
                  </div>
                </div>

                {/* Right: QR Code */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                  <div className="p-4 rounded-2xl bg-white shadow-lg">
                    <QRCodeSVG
                      value={verifyUrl}
                      size={160}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                  <p className="text-[11px] text-text-secondary text-center max-w-[160px] leading-relaxed">
                    Scan to verify on <br />sarwagyna.com
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 md:px-12 py-5 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-text-secondary">
                  Verified on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <a
                  href={verifyUrl}
                  className="text-xs font-medium text-text-secondary hover:text-text transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="w-3 h-3" /> Share verification link
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    </div>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-text-secondary shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-secondary mb-0.5">{label}</p>
        <p className="text-text font-medium text-[15px]">{value}</p>
      </div>
    </div>
  );
}
