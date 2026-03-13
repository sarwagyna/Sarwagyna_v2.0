// components/clients/wizard/Step2Project.tsx
import { useState } from 'react'
import type { WizardProjectForm } from './wizardTypes'
import type { ProjectStatus } from '../../../lib/database.types'

const INPUT = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL = 'text-xs font-medium text-text-secondary mb-1 block'

const PROJECT_STATUSES: { value: ProjectStatus; label: string }[] = [
  { value: 'planning', label: 'Planning' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'review', label: 'Review' },
  { value: 'completed', label: 'Completed' },
  { value: 'on_hold', label: 'On Hold' },
]

interface Props {
  data: WizardProjectForm
  onChange: (data: WizardProjectForm) => void
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

export default function Step2Project({ data, onChange, onNext, onBack, onSkip }: Props) {
  const [error, setError] = useState<string | null>(null)
  const [tagInput, setTagInput] = useState('')

  const set = (patch: Partial<WizardProjectForm>) => onChange({ ...data, ...patch })

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !data.tags.includes(t)) {
      set({ tags: [...data.tags, t] })
      setTagInput('')
    }
  }

  const handleNext = () => {
    if (!data.name.trim()) { setError('Project name is required.'); return }
    setError(null)
    onNext()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-text-muted">This step is optional — you can skip it and add projects later.</p>
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
          <label className={LABEL}>Project Name *</label>
          <input value={data.name} onChange={e => set({ name: e.target.value })} className={INPUT} placeholder="e.g. Website Redesign" />
        </div>
        <div>
          <label className={LABEL}>Status</label>
          <select value={data.status} onChange={e => set({ status: e.target.value as ProjectStatus })} className={INPUT}>
            {PROJECT_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL}>Description</label>
        <textarea value={data.description} onChange={e => set({ description: e.target.value })} rows={2} className={INPUT + ' resize-none'} placeholder="Brief project description..." />
      </div>

      {/* Tech Stack / Tags */}
      <div>
        <label className={LABEL}>Tech Stack / Tags</label>
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
            placeholder="React, Node.js, etc. — press Enter"
            className={INPUT + ' flex-1'}
          />
          <button onClick={addTag} className="bg-surface hover:bg-button-outline px-3 py-2 rounded-xl text-sm text-text border border-border-subtle transition-colors">Add</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL}>Figma URL</label>
          <input value={data.figma_url} onChange={e => set({ figma_url: e.target.value })} className={INPUT} placeholder="https://figma.com/..." />
        </div>
        <div>
          <label className={LABEL}>Repo URL</label>
          <input value={data.repo_url} onChange={e => set({ repo_url: e.target.value })} className={INPUT} placeholder="https://github.com/..." />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={LABEL}>Start Date</label>
          <input type="date" value={data.start_date} onChange={e => set({ start_date: e.target.value })} className={INPUT} />
        </div>
        <div>
          <label className={LABEL}>Deadline</label>
          <input type="date" value={data.end_date} onChange={e => set({ end_date: e.target.value })} className={INPUT} />
        </div>
        <div>
          <label className={LABEL}>Budget (INR)</label>
          <input type="number" value={data.budget} onChange={e => set({ budget: e.target.value })} className={INPUT} placeholder="0" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
        <button onClick={onBack} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">← Back</button>
        <button onClick={handleNext} className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-sm rounded-[100px] font-medium transition-colors">
          Next: Invoice →
        </button>
      </div>
    </div>
  )
}
