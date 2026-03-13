// components/clients/wizard/Step4Payment.tsx
import { useState } from 'react'
import type { WizardPaymentForm, WizardInvoiceForm } from './wizardTypes'
import type { PaymentMethod } from '../../../lib/database.types'

const INPUT = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL = 'text-xs font-medium text-text-secondary mb-1 block'

const METHODS: { value: PaymentMethod; label: string }[] = [
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'upi', label: 'UPI' },
  { value: 'cash', label: 'Cash' },
  { value: 'card', label: 'Card' },
  { value: 'cheque', label: 'Cheque' },
  { value: 'other', label: 'Other' },
]

interface Props {
  data: WizardPaymentForm
  invoice: WizardInvoiceForm
  onChange: (data: WizardPaymentForm) => void
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

export default function Step4Payment({ data, invoice, onChange, onNext, onBack, onSkip }: Props) {
  const [error, setError] = useState<string | null>(null)

  const set = (patch: Partial<WizardPaymentForm>) => onChange({ ...data, ...patch })

  const today = new Date().toISOString().split('T')[0]

  // Pre-fill amount from invoice if not yet set
  const invoiceAmount = invoice.amount ? parseFloat(invoice.amount) : null

  const handleNext = () => {
    if (!data.amount || parseFloat(data.amount) <= 0) { setError('Amount must be greater than 0.'); return }
    if (!data.payment_date) { setError('Payment date is required.'); return }
    setError(null)
    onNext()
  }

  return (
    <div className="space-y-4">
      {/* Invoice hint */}
      {!invoice.skip && invoiceAmount && (
        <div className="flex items-center justify-between bg-surface border border-border-subtle rounded-xl px-3 py-2">
          <div>
            <span className="text-xs text-text-muted">Invoice: </span>
            <span className="text-xs font-medium text-text">{invoice.invoice_number}</span>
          </div>
          <div>
            <span className="text-xs text-text-muted">Amount due: </span>
            <span className="text-xs font-semibold text-text">{invoice.currency} {invoiceAmount.toLocaleString()}</span>
          </div>
          {parseFloat(data.amount || '0') >= invoiceAmount && (
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              ✓ Full payment — invoice will be marked paid
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs text-text-muted">This step is optional — you can record payments later.</p>
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
          <label className={LABEL}>Amount Paid *</label>
          <input
            type="number"
            value={data.amount}
            onChange={e => set({ amount: e.target.value })}
            className={INPUT}
            placeholder={invoiceAmount ? String(invoiceAmount) : '0.00'}
          />
          {invoiceAmount && !data.amount && (
            <button
              onClick={() => set({ amount: String(invoiceAmount) })}
              className="mt-1 text-xs text-primary hover:underline"
            >
              Use invoice amount ({invoice.currency} {invoiceAmount.toLocaleString()})
            </button>
          )}
        </div>
        <div>
          <label className={LABEL}>Payment Date *</label>
          <input
            type="date"
            value={data.payment_date || today}
            onChange={e => set({ payment_date: e.target.value })}
            className={INPUT}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Payment Method</label>
          <select value={data.method} onChange={e => set({ method: e.target.value as PaymentMethod })} className={INPUT}>
            {METHODS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL}>Reference / Transaction ID</label>
          <input value={data.reference} onChange={e => set({ reference: e.target.value })} className={INPUT} placeholder="UTR, TXN, Cheque #..." />
        </div>
      </div>

      <div>
        <label className={LABEL}>Notes</label>
        <textarea value={data.notes} onChange={e => set({ notes: e.target.value })} rows={2} className={INPUT + ' resize-none'} placeholder="Any payment notes..." />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
        <button onClick={onBack} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">← Back</button>
        <button onClick={handleNext} className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm rounded-[100px] font-medium transition-colors">
          Review & Confirm →
        </button>
      </div>
    </div>
  )
}
