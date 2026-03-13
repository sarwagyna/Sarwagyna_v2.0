// components/clients/wizard/Step3Invoice.tsx
import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import type { WizardInvoiceForm, WizardProjectForm } from './wizardTypes'
import type { InvoiceStatus } from '../../../lib/database.types'

const INPUT = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL = 'text-xs font-medium text-text-secondary mb-1 block'

const INVOICE_STATUSES: { value: InvoiceStatus; label: string }[] = [
  { value: 'draft', label: 'Draft' },
  { value: 'sent', label: 'Sent' },
  { value: 'overdue', label: 'Overdue' },
  { value: 'paid', label: 'Paid' },
]

interface Props {
  data: WizardInvoiceForm
  project: WizardProjectForm
  onChange: (data: WizardInvoiceForm) => void
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

export default function Step3Invoice({ data, project, onChange, onNext, onBack, onSkip }: Props) {
  const [error, setError] = useState<string | null>(null)

  const set = (patch: Partial<WizardInvoiceForm>) => onChange({ ...data, ...patch })

  const handleNext = () => {
    if (!data.invoice_number.trim()) { setError('Invoice number is required.'); return }
    if (!data.issue_date) { setError('Issue date is required.'); return }
    if (!data.due_date) { setError('Due date is required.'); return }
    if (!data.amount || parseFloat(data.amount) <= 0) { setError('Amount must be greater than 0.'); return }
    setError(null)
    onNext()
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) set({ file })
  }

  return (
    <div className="space-y-4">
      {/* Link context */}
      {!project.skip && (
        <div className="flex items-center gap-2 bg-surface border border-border-subtle rounded-xl px-3 py-2">
          <span className="text-xs text-text-muted">Linked to project:</span>
          <span className="text-xs font-medium text-text">{project.name}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs text-text-muted">This step is optional — you can add invoices later.</p>
        <button
          onClick={onSkip}
          className="text-xs text-text-secondary hover:text-text border border-border-subtle px-3 py-1.5 rounded-lg hover:bg-surface transition-colors"
        >
          Skip this step →
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Invoice Number *</label>
          <input value={data.invoice_number} onChange={e => set({ invoice_number: e.target.value })} className={INPUT} placeholder="INV-001" />
        </div>
        <div>
          <label className={LABEL}>Status</label>
          <select value={data.status} onChange={e => set({ status: e.target.value as InvoiceStatus })} className={INPUT}>
            {INVOICE_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Issue Date *</label>
          <input type="date" value={data.issue_date} onChange={e => set({ issue_date: e.target.value })} className={INPUT} />
        </div>
        <div>
          <label className={LABEL}>Due Date *</label>
          <input type="date" value={data.due_date} onChange={e => set({ due_date: e.target.value })} className={INPUT} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Amount *</label>
          <input type="number" value={data.amount} onChange={e => set({ amount: e.target.value })} className={INPUT} placeholder="0.00" />
        </div>
        <div>
          <label className={LABEL}>Currency</label>
          <select value={data.currency} onChange={e => set({ currency: e.target.value })} className={INPUT}>
            {['INR', 'USD', 'EUR', 'GBP', 'AED'].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL}>Notes</label>
        <textarea value={data.notes} onChange={e => set({ notes: e.target.value })} rows={2} className={INPUT + ' resize-none'} placeholder="Payment terms, references..." />
      </div>

      {/* PDF Upload */}
      <div>
        <label className={LABEL}>Upload Invoice PDF</label>
        {data.file ? (
          <div className="flex items-center gap-2 bg-surface border border-border-subtle rounded-xl px-3 py-2">
            <span className="text-xs text-text flex-1 truncate">{data.file.name}</span>
            <button onClick={() => set({ file: undefined })} className="text-text-muted hover:text-red-500 transition-colors">
              <X size={14} />
            </button>
          </div>
        ) : (
          <label className="flex items-center gap-2 border border-dashed border-border-subtle rounded-xl px-4 py-3 cursor-pointer hover:bg-surface transition-colors">
            <Upload size={14} className="text-text-muted" />
            <span className="text-xs text-text-secondary">Click to upload PDF</span>
            <input type="file" accept="application/pdf" onChange={handleFile} className="hidden" />
          </label>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
        <button onClick={onBack} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">← Back</button>
        <button onClick={handleNext} className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm rounded-[100px] font-medium transition-colors">
          Next: Payment →
        </button>
      </div>
    </div>
  )
}
