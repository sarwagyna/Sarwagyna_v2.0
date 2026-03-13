'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Plus, Trash2, ShieldCheck, FileText, ArrowLeft, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useAdminAuth } from '../hooks/useAdminAuth';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
};

interface Certificate {
  id: string;
  certificate_id: string;
  name: string;
  program: string;
  issue_date: string;
  issued_by: string;
  status: 'Valid' | 'Revoked';
  created_at: string;
}

export default function AdminCertificates() {
  const router = useRouter();
  const { session, loading: authLoading, signOut } = useAdminAuth();

  const [certs, setCerts] = useState<Certificate[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const [form, setForm] = useState({
    certificate_id: '',
    name: '',
    program: '',
    issue_date: '',
    issued_by: 'Sarwagyna Private Limited',
    status: 'Valid' as 'Valid' | 'Revoked'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchCerts = async () => {
    setLoadingList(true);
    const { data } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: false });
    setLoadingList(false);
    if (data) setCerts(data as Certificate[]);
  };

  useEffect(() => {
    if (session) fetchCerts();
  }, [session]);

  // Redirect to /admin if not authenticated
  useEffect(() => {
    if (!authLoading && !session) {
      router.replace('/admin');
    }
  }, [authLoading, session, router]);

  if (authLoading || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg">
        <span className="animate-spin w-8 h-8 border-2 border-border-subtle border-t-text rounded-full" />
      </div>
    );
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMsg(null);
    const { error } = await supabase.from('certificates').insert({
      certificate_id: form.certificate_id.trim(),
      name: form.name.trim(),
      program: form.program.trim(),
      issue_date: form.issue_date,
      issued_by: form.issued_by.trim(),
      status: form.status
    });
    setSubmitting(false);
    if (error) {
      setSubmitMsg({ type: 'error', text: error.message });
    } else {
      setSubmitMsg({ type: 'success', text: 'Certificate added successfully!' });
      setForm({ certificate_id: '', name: '', program: '', issue_date: '', issued_by: 'Sarwagyna Private Limited', status: 'Valid' });
      fetchCerts();
    }
  };

  const handleDelete = async (id: string, certId: string) => {
    if (!window.confirm(`Delete certificate ${certId}? This cannot be undone.`)) return;
    setDeleting(id);
    await supabase.from('certificates').delete().eq('id', id);
    setDeleting(null);
    fetchCerts();
  };

  const handleToggleStatus = async (cert: Certificate) => {
    const newStatus = cert.status === 'Valid' ? 'Revoked' : 'Valid';
    await supabase.from('certificates').update({ status: newStatus }).eq('id', cert.id);
    fetchCerts();
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/admin')} className="glass-button-ghost p-2.5 rounded-xl">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center text-(--color-green-icon)">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-text">Certificate Manager</h1>
              <p className="text-text-secondary text-sm">{session.user.email}</p>
            </div>
          </div>
          <button onClick={signOut} className="glass-button-ghost px-5 py-2.5 flex items-center gap-2 text-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start">

          {/* Add Certificate Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="card p-8 rounded-3xl sticky top-28">
            <h2 className="text-xl font-display font-bold text-text mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5" /> Add Certificate
            </h2>
            <form onSubmit={handleAdd} className="space-y-4">
              <Field label="Certificate ID" required>
                <input type="text" value={form.certificate_id} onChange={e => setForm(p => ({ ...p, certificate_id: e.target.value }))} placeholder="SARW-2026-A1B2C3" required className="admin-input" />
              </Field>
              <Field label="Candidate Name" required>
                <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name" required className="admin-input" />
              </Field>
              <Field label="Program / Course" required>
                <input type="text" value={form.program} onChange={e => setForm(p => ({ ...p, program: e.target.value }))} placeholder="e.g. AI Fundamentals" required className="admin-input" />
              </Field>
              <Field label="Issue Date" required>
                <input type="date" value={form.issue_date} onChange={e => setForm(p => ({ ...p, issue_date: e.target.value }))} required className="admin-input" />
              </Field>
              <Field label="Issued By">
                <input type="text" value={form.issued_by} onChange={e => setForm(p => ({ ...p, issued_by: e.target.value }))} className="admin-input" />
              </Field>
              <Field label="Status">
                <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as 'Valid' | 'Revoked' }))} className="admin-input appearance-none">
                  <option value="Valid">Valid</option>
                  <option value="Revoked">Revoked</option>
                </select>
              </Field>

              {submitMsg && (
                <p className={`text-xs text-center pt-1 ${submitMsg.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {submitMsg.text}
                </p>
              )}

              <button type="submit" disabled={submitting} className="glass-button-primary w-full py-3 flex items-center justify-center gap-2 mt-2 disabled:opacity-60">
                {submitting ? <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> : <Plus className="w-4 h-4" />}
                {submitting ? 'Adding…' : 'Add Certificate'}
              </button>
            </form>
          </motion.div>

          {/* Certificates Table */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-bold text-text flex items-center gap-2">
                <FileText className="w-5 h-5" /> All Certificates
                <span className="text-sm font-normal text-text-secondary ml-1">({certs.length})</span>
              </h2>
              <button onClick={fetchCerts} className="glass-button-ghost px-4 py-2 text-sm">Refresh</button>
            </div>

            {loadingList ? (
              <div className="text-center text-text-secondary py-20">Loading…</div>
            ) : certs.length === 0 ? (
              <div className="card p-12 rounded-3xl text-center text-text-secondary">No certificates yet. Add one using the form.</div>
            ) : (
              <div className="space-y-3">
                {certs.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="card p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-sm font-bold text-text">{cert.certificate_id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${cert.status === 'Valid' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-text font-medium text-sm mt-1">{cert.name}</p>
                      <p className="text-text-secondary text-xs">{cert.program} · {new Date(cert.issue_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => handleToggleStatus(cert)} className="glass-button-ghost px-3 py-2 text-xs">
                        {cert.status === 'Valid' ? 'Revoke' : 'Reinstate'}
                      </button>
                      <button
                        onClick={() => handleDelete(cert.id, cert.certificate_id)}
                        disabled={deleting === cert.id}
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-40"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          padding: 0.625rem 1rem;
          border-radius: 0.75rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border-subtle);
          color: var(--color-text);
          outline: none;
          transition: border-color 0.2s;
          font-size: 0.875rem;
        }
        .admin-input:focus {
          border-color: color-mix(in srgb, var(--color-border-subtle), transparent 40%);
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
