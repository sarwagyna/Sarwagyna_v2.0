// components/clients/wizard/Step1ClientInfo.tsx
import { useState } from 'react'
import type { WizardClientForm } from './wizardTypes'
import type { ClientStatus } from '../../../lib/database.types'

const INPUT = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL = 'text-xs font-medium text-text-secondary mb-1 block'

const STATUSES: ClientStatus[] = ['prospect', 'active', 'inactive', 'churned']

interface Props {
  data: WizardClientForm
  onChange: (data: WizardClientForm) => void
  onNext: () => void
}

export default function Step1ClientInfo({ data, onChange, onNext }: Props) {
  const [error, setError] = useState<string | null>(null)
  const [tagInput, setTagInput] = useState('')

  const set = (patch: Partial<WizardClientForm>) => onChange({ ...data, ...patch })

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !data.tags.includes(t)) {
      set({ tags: [...data.tags, t] })
      setTagInput('')
    }
  }

  const handleNext = () => {
    if (!data.name.trim()) { setError('Name is required.'); return }
    if (!data.email.trim()) { setError('Email is required.'); return }
    setError(null)
    onNext()
  }

  return (
    <div className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Name *</label>
          <input value={data.name} onChange={e => set({ name: e.target.value })} className={INPUT} placeholder="Full name" />
        </div>
        <div>
          <label className={LABEL}>Company</label>
          <input value={data.company} onChange={e => set({ company: e.target.value })} className={INPUT} placeholder="Company name" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Email *</label>
          <input type="email" value={data.email} onChange={e => set({ email: e.target.value })} className={INPUT} placeholder="email@example.com" />
        </div>
        <div>
          <label className={LABEL}>Phone</label>
          <input value={data.phone} onChange={e => set({ phone: e.target.value })} className={INPUT} placeholder="+91 ..." />
        </div>
      </div>

      <div>
        <label className={LABEL}>Address</label>
        <input value={data.address} onChange={e => set({ address: e.target.value })} className={INPUT} placeholder="City, State" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Status</label>
          <select value={data.status} onChange={e => set({ status: e.target.value as ClientStatus })} className={INPUT}>
            {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL}>Account Manager</label>
          <input value={data.account_manager} onChange={e => set({ account_manager: e.target.value })} className={INPUT} placeholder="Name" />
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className={LABEL}>Tags</label>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {data.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-green-light text-primary px-2 py-0.5 rounded-full border border-border-subtle">
              {tag}
              <button onClick={() => set({ tags: data.tags.filter(t => t !== tag) })} className="opacity-60 hover:opacity-100 ml-0.5">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTag()}
            placeholder="Add tag, press Enter"
            className={INPUT + ' flex-1'}
          />
          <button onClick={addTag} className="bg-surface hover:bg-button-outline px-3 py-2 rounded-xl text-sm text-text border border-border-subtle transition-colors">Add</button>
        </div>
      </div>

      <div>
        <label className={LABEL}>Notes</label>
        <textarea value={data.notes} onChange={e => set({ notes: e.target.value })} rows={3} className={INPUT + ' resize-none'} placeholder="Any notes about this client..." />
      </div>

      {/* Footer */}
      <div className="flex justify-end pt-2 border-t border-border-subtle">
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm rounded-[100px] font-medium transition-colors"
        >
          Next: Project →
        </button>
      </div>
    </div>
  )
}
