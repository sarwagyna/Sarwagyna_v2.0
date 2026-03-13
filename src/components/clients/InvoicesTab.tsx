// components/clients/InvoicesTab.tsx
import { useState, useRef } from 'react'
import { Plus, Pencil, Trash2, FileText, Upload, ExternalLink, Calendar } from 'lucide-react'
import { useInvoices, useClients, useProjects } from '../../hooks/useClients'
import type { Invoice, InvoiceStatus } from '../../lib/database.types'
import Modal from '../ui/Modal'
import ConfirmDialog from '../ui/ConfirmDialog'

const STATUS_CONFIG: Record<InvoiceStatus, { label: string; color: string }> = {
  draft:   { label: 'Draft',   color: 'bg-zinc-100 text-zinc-600 border-zinc-200' },
  sent:    { label: 'Sent',    color: 'bg-blue-100 text-blue-700 border-blue-200' },
  overdue: { label: 'Overdue', color: 'bg-red-100 text-red-600 border-red-200' },
  paid:    { label: 'Paid',    color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
}

const EMPTY_FORM = {
  client_id: '', project_id: '', invoice_number: '', issue_date: '', due_date: '',
  amount: '', currency: 'INR', status: 'draft' as InvoiceStatus, notes: '',
}

const INPUT_CLS = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL_CLS = 'text-xs font-medium text-text-secondary mb-1 block'

interface Props { search: string; clientId: string | null }

export default function InvoicesTab({ search, clientId }: Props) {
  const { invoices, loading, addInvoice, updateInvoice, deleteInvoice } = useInvoices(clientId ?? undefined)
  const { clients } = useClients()
  const { projects } = useProjects(clientId ?? undefined)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [file, setFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const filtered = invoices.filter(i =>
    [i.invoice_number, i.notes].some(v => v?.toLowerCase().includes(search.toLowerCase()))
  )

  const clientName = (id: string) => clients.find(c => c.id === id)?.name ?? '—'
  const projectName = (id: string | null) => id ? projects.find(p => p.id === id)?.name ?? '—' : '—'

  const openAdd = () => {
    setForm({ ...EMPTY_FORM, client_id: clientId ?? '' })
    setFile(null); setEditingId(null); setError(null); setShowModal(true)
  }

  const openEdit = (inv: Invoice) => {
    setForm({
      client_id: inv.client_id, project_id: inv.project_id ?? '',
      invoice_number: inv.invoice_number, issue_date: inv.issue_date,
      due_date: inv.due_date, amount: inv.amount.toString(),
      currency: inv.currency, status: inv.status, notes: inv.notes ?? '',
    })
    setFile(null); setEditingId(inv.id); setError(null); setShowModal(true)
  }

  const handleSave = async () => {
    if (!form.client_id || !form.invoice_number || !form.amount) {
      setError('Client, invoice number and amount are required.'); return
    }
    setSaving(true)
    try {
      const payload = {
        ...form,
        amount: parseFloat(form.amount),
        project_id: form.project_id || null,
        notes: form.notes || null,
        file_url: null,
      }
      if (editingId) await updateInvoice(editingId, payload)
      else await addInvoice(payload as any, file ?? undefined)
      setShowModal(false)
    } catch (e: any) { setError(e.message) }
    finally { setSaving(false) }
  }

  const totalOutstanding = filtered.filter(i => i.status !== 'paid').reduce((sum, i) => sum + i.amount, 0)

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Invoices', value: filtered.length, highlight: false },
          { label: 'Outstanding', value: `₹${totalOutstanding.toLocaleString()}`, highlight: totalOutstanding > 0 },
          { label: 'Paid', value: filtered.filter(i => i.status === 'paid').length, highlight: false },
        ].map(s => (
          <div key={s.label} className="card rounded-2xl p-4">
            <p className="text-xs text-text-secondary mb-1">{s.label}</p>
            <p className={`text-2xl font-bold font-display ${s.highlight ? 'text-amber-600' : 'text-text'}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-text-secondary">{filtered.length} invoice{filtered.length !== 1 ? 's' : ''}</p>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-[100px] text-sm font-medium transition-colors">
          <Plus size={14} /> Add Invoice
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-surface rounded-2xl animate-pulse border border-border-subtle" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <FileText size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-text-secondary">No invoices found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(inv => (
            <div key={inv.id} className="card rounded-2xl p-5 hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-light flex items-center justify-center">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold font-display text-text text-sm">#{inv.invoice_number}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_CONFIG[inv.status].color}`}>
                        {STATUS_CONFIG[inv.status].label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 text-xs text-text-secondary">
                      <span>{clientName(inv.client_id)}</span>
                      {inv.project_id && <span>· {projectName(inv.project_id)}</span>}
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> Due {new Date(inv.due_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-text">{inv.currency} {inv.amount.toLocaleString()}</span>

                  {inv.file_url && (
                    <a href={inv.file_url} target="_blank" rel="noopener noreferrer"
                      className="text-primary hover:underline p-1.5 rounded-lg hover:bg-surface transition-colors">
                      <ExternalLink size={13} />
                    </a>
                  )}

                  <select
                    value={inv.status}
                    onChange={e => updateInvoice(inv.id, { status: e.target.value as InvoiceStatus })}
                    className="bg-surface border border-border-subtle rounded-lg px-2 py-1 text-xs text-text focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>

                  <button onClick={() => openEdit(inv)}
                    className="text-text-muted hover:text-text p-1.5 rounded-lg hover:bg-surface transition-colors">
                    <Pencil size={13} />
                  </button>
                  <button onClick={() => setConfirmDelete(inv.id)}
                    className="text-red-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)} title={editingId ? 'Edit Invoice' : 'Add Invoice'}>
        <div className="space-y-4">
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Client *</label>
              <select value={form.client_id} onChange={e => setForm(f => ({ ...f, client_id: e.target.value }))} className={INPUT_CLS}>
                <option value="">Select client</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Project</label>
              <select value={form.project_id} onChange={e => setForm(f => ({ ...f, project_id: e.target.value }))} className={INPUT_CLS}>
                <option value="">No project</option>
                {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Invoice # *</label>
              <input value={form.invoice_number} onChange={e => setForm(f => ({ ...f, invoice_number: e.target.value }))}
                placeholder="INV-001" className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Status</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as InvoiceStatus }))} className={INPUT_CLS}>
                {Object.entries(STATUS_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={LABEL_CLS}>Amount *</label>
              <input type="number" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Issue Date</label>
              <input type="date" value={form.issue_date} onChange={e => setForm(f => ({ ...f, issue_date: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Due Date</label>
              <input type="date" value={form.due_date} onChange={e => setForm(f => ({ ...f, due_date: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          {!editingId && (
            <div>
              <label className={LABEL_CLS}>Upload Invoice (PDF / Image)</label>
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-border-subtle rounded-xl p-6 text-center cursor-pointer hover:border-primary hover:bg-surface transition-all"
              >
                <Upload size={20} className="mx-auto mb-2 text-text-muted" />
                <p className="text-sm text-text-secondary">{file ? file.name : 'Click to upload PDF or image'}</p>
                <p className="text-xs text-text-muted mt-1">Max 10 MB</p>
                <input ref={fileRef} type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden"
                  onChange={e => setFile(e.target.files?.[0] ?? null)} />
              </div>
            </div>
          )}

          <div>
            <label className={LABEL_CLS}>Notes</label>
            <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2}
              className={INPUT_CLS + ' resize-none'} />
          </div>

          <div className="flex justify-end gap-3 pt-2 border-t border-border-subtle">
            <button onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">
              Cancel
            </button>
            <button onClick={handleSave} disabled={saving}
              className="px-6 py-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-sm rounded-[100px] transition-colors font-medium">
              {saving ? 'Saving…' : editingId ? 'Update Invoice' : 'Add Invoice'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!confirmDelete}
        title="Delete Invoice"
        message="This will permanently delete the invoice."
        onConfirm={async () => { await deleteInvoice(confirmDelete!); setConfirmDelete(null) }}
        onCancel={() => setConfirmDelete(null)}
      />
    </div>
  )
}
