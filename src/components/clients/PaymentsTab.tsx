// components/clients/PaymentsTab.tsx
import { useState } from 'react'
import { Plus, Trash2, CreditCard, ArrowDownLeft } from 'lucide-react'
import { usePayments, useClients, useInvoices } from '../../hooks/useClients'
import type { PaymentMethod } from '../../lib/database.types'
import Modal from '../ui/Modal'
import ConfirmDialog from '../ui/ConfirmDialog'

const METHOD_LABELS: Record<PaymentMethod, string> = {
  upi: 'UPI', bank_transfer: 'Bank Transfer', card: 'Card',
  cash: 'Cash', cheque: 'Cheque', other: 'Other',
}

const METHOD_COLORS: Record<PaymentMethod, string> = {
  upi: 'text-purple-700 bg-purple-100 border-purple-200',
  bank_transfer: 'text-blue-700 bg-blue-100 border-blue-200',
  card: 'text-cyan-700 bg-cyan-100 border-cyan-200',
  cash: 'text-emerald-700 bg-emerald-100 border-emerald-200',
  cheque: 'text-amber-700 bg-amber-100 border-amber-200',
  other: 'text-zinc-600 bg-zinc-100 border-zinc-200',
}

const EMPTY_FORM = {
  client_id: '', invoice_id: '', amount: '', currency: 'INR',
  payment_date: new Date().toISOString().split('T')[0],
  method: 'upi' as PaymentMethod, reference: '', notes: '',
}

const INPUT_CLS = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL_CLS = 'text-xs font-medium text-text-secondary mb-1 block'

interface Props { search: string; clientId: string | null }

export default function PaymentsTab({ search, clientId }: Props) {
  const { payments, loading, addPayment, deletePayment } = usePayments(clientId ?? undefined)
  const { clients } = useClients()
  const { invoices } = useInvoices(clientId ?? undefined)
  const [showModal, setShowModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const filtered = payments.filter(p =>
    !search || [p.reference, p.notes].some(v => v?.toLowerCase().includes(search.toLowerCase()))
  )

  const clientName = (id: string) => clients.find(c => c.id === id)?.name ?? '—'
  const invoiceNum = (id: string | null) => id ? invoices.find(i => i.id === id)?.invoice_number ?? '—' : '—'

  const totalReceived = filtered.reduce((sum, p) => sum + p.amount, 0)
  const thisMonth = filtered.filter(p => new Date(p.payment_date).getMonth() === new Date().getMonth())
    .reduce((sum, p) => sum + p.amount, 0)

  const openAdd = () => {
    setForm({ ...EMPTY_FORM, client_id: clientId ?? '' })
    setError(null); setShowModal(true)
  }

  const handleSave = async () => {
    if (!form.client_id || !form.amount || !form.payment_date) {
      setError('Client, amount and date are required.'); return
    }
    setSaving(true)
    try {
      await addPayment({
        client_id: form.client_id,
        invoice_id: form.invoice_id || null,
        amount: parseFloat(form.amount),
        currency: form.currency,
        payment_date: form.payment_date,
        method: form.method,
        reference: form.reference || null,
        notes: form.notes || null,
      })
      setShowModal(false)
    } catch (e: any) { setError(e.message) }
    finally { setSaving(false) }
  }

  return (
    <div>
      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Received', value: `₹${totalReceived.toLocaleString()}`, color: 'text-emerald-600' },
          { label: 'This Month', value: `₹${thisMonth.toLocaleString()}`, color: 'text-text' },
          { label: 'Transactions', value: filtered.length, color: 'text-text' },
        ].map(s => (
          <div key={s.label} className="card rounded-2xl p-4">
            <p className="text-xs text-text-muted mb-1">{s.label}</p>
            <p className={`text-xl font-semibold font-display ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-text-secondary">{filtered.length} payment{filtered.length !== 1 ? 's' : ''}</p>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-[100px] text-sm font-medium transition-colors">
          <Plus size={14} /> Record Payment
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">{[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-surface rounded-2xl animate-pulse border border-border-subtle" />)}</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <CreditCard size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-text-secondary">No payments recorded</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(payment => (
            <div key={payment.id} className="card rounded-2xl px-5 py-4 flex items-center justify-between transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ArrowDownLeft size={14} className="text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold font-display text-text">
                      {payment.currency} {payment.amount.toLocaleString()}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${METHOD_COLORS[payment.method]}`}>
                      {METHOD_LABELS[payment.method]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-text-muted">
                    <span>{clientName(payment.client_id)}</span>
                    {payment.invoice_id && <span>· Inv #{invoiceNum(payment.invoice_id)}</span>}
                    {payment.reference && <span>· Ref: {payment.reference}</span>}
                    <span>{new Date(payment.payment_date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setConfirmDelete(payment.id)}
                className="flex items-center gap-1 text-xs text-red-500/70 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 size={11} /> Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)} title="Record Payment">
        <div className="space-y-4">
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Client *</label>
              <select value={form.client_id} onChange={e => setForm(f => ({ ...f, client_id: e.target.value, invoice_id: '' }))} className={INPUT_CLS}>
                <option value="">Select client</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Invoice</label>
              <select value={form.invoice_id} onChange={e => setForm(f => ({ ...f, invoice_id: e.target.value }))} className={INPUT_CLS}>
                <option value="">No invoice</option>
                {invoices
                  .filter(i => !form.client_id || i.client_id === form.client_id)
                  .filter(i => i.status !== 'paid')
                  .map(i => <option key={i.id} value={i.id}>#{i.invoice_number} — ₹{i.amount}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={LABEL_CLS}>Amount *</label>
              <input type="number" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Date *</label>
              <input type="date" value={form.payment_date} onChange={e => setForm(f => ({ ...f, payment_date: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Method</label>
              <select value={form.method} onChange={e => setForm(f => ({ ...f, method: e.target.value as PaymentMethod }))} className={INPUT_CLS}>
                {Object.entries(METHOD_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Reference / UTR</label>
            <input value={form.reference} onChange={e => setForm(f => ({ ...f, reference: e.target.value }))}
              placeholder="Transaction / UTR number" className={INPUT_CLS} />
          </div>

          <div>
            <label className={LABEL_CLS}>Notes</label>
            <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2}
              className={INPUT_CLS + ' resize-none'} />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">Cancel</button>
            <button onClick={handleSave} disabled={saving}
              className="px-4 py-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-sm rounded-[100px] font-medium transition-colors">
              {saving ? 'Saving...' : 'Record Payment'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog open={!!confirmDelete} title="Delete Payment"
        message="This will permanently remove this payment record."
        onConfirm={async () => { await deletePayment(confirmDelete!); setConfirmDelete(null) }}
        onCancel={() => setConfirmDelete(null)} />
    </div>
  )
}
