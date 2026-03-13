// components/clients/wizard/Step5Review.tsx
import { CheckCircle2, Circle, Pencil } from 'lucide-react'
import type { WizardState, SavePhase } from './wizardTypes'

interface Props {
  state: WizardState
  savePhase: SavePhase
  saveError: string | null
  onBack: () => void
  onGoToStep: (step: 1 | 2 | 3 | 4 | 5) => void
  onSave: () => void
}

interface PhaseRow {
  phase: SavePhase
  donePhase: SavePhase
  label: string
}

const PHASES: PhaseRow[] = [
  { phase: 'client',  donePhase: 'client_done',  label: 'Creating client...' },
  { phase: 'project', donePhase: 'project_done', label: 'Adding project...' },
  { phase: 'invoice', donePhase: 'invoice_done', label: 'Creating invoice...' },
  { phase: 'payment', donePhase: 'payment_done', label: 'Recording payment...' },
]

const PHASE_ORDER: SavePhase[] = [
  'idle', 'client', 'client_done', 'project', 'project_done',
  'invoice', 'invoice_done', 'payment', 'payment_done', 'error',
]

function phaseIndex(p: SavePhase) { return PHASE_ORDER.indexOf(p) }

function SectionCard({
  title, skipped, step, onEdit, children,
}: {
  title: string; skipped?: boolean; step: 1 | 2 | 3 | 4; onEdit: () => void; children?: React.ReactNode
}) {
  return (
    <div className={`rounded-2xl border p-4 ${skipped ? 'border-border-subtle bg-surface opacity-60' : 'border-border-subtle bg-white'}`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{title}</p>
        {!skipped && (
          <button
            onClick={onEdit}
            className="flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <Pencil size={11} /> Edit
          </button>
        )}
      </div>
      {skipped ? (
        <p className="text-xs text-text-muted italic">Skipped — can be added later</p>
      ) : children}
    </div>
  )
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <div className="flex gap-2 text-xs">
      <span className="text-text-muted w-28 shrink-0">{label}</span>
      <span className="text-text font-medium truncate">{value}</span>
    </div>
  )
}

export default function Step5Review({ state, savePhase, saveError, onBack, onGoToStep, onSave }: Props) {
  const { client, project, invoice, payment } = state
  const isSaving = savePhase !== 'idle' && savePhase !== 'error'
  const isDone = savePhase === 'payment_done' || (savePhase === 'invoice_done' && payment.skip) || (savePhase === 'project_done' && invoice.skip && payment.skip)

  return (
    <div className="space-y-4">
      <p className="text-xs text-text-muted">Review everything below before saving. Click <strong>Edit</strong> on any section to go back and change it.</p>

      {/* Client */}
      <SectionCard title="Client" step={1} onEdit={() => onGoToStep(1)}>
        <div className="space-y-1">
          <Row label="Name" value={client.name} />
          <Row label="Company" value={client.company} />
          <Row label="Email" value={client.email} />
          <Row label="Phone" value={client.phone} />
          <Row label="Status" value={client.status} />
          <Row label="Account Mgr" value={client.account_manager} />
          {client.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap pt-1">
              {client.tags.map(t => (
                <span key={t} className="text-xs bg-green-light text-primary px-2 py-0.5 rounded-full border border-border-subtle">{t}</span>
              ))}
            </div>
          )}
        </div>
      </SectionCard>

      {/* Project */}
      <SectionCard title="Project" step={2} skipped={project.skip} onEdit={() => onGoToStep(2)}>
        <div className="space-y-1">
          <Row label="Name" value={project.name} />
          <Row label="Status" value={project.status} />
          <Row label="Budget" value={project.budget ? `${project.currency} ${parseFloat(project.budget).toLocaleString()}` : undefined} />
          <Row label="Deadline" value={project.end_date} />
          <Row label="Figma URL" value={project.figma_url} />
          {project.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap pt-1">
              {project.tags.map(t => (
                <span key={t} className="text-xs bg-surface text-text-secondary px-2 py-0.5 rounded-full border border-border-subtle">{t}</span>
              ))}
            </div>
          )}
        </div>
      </SectionCard>

      {/* Invoice */}
      <SectionCard title="Invoice" step={3} skipped={invoice.skip || project.skip} onEdit={() => onGoToStep(3)}>
        <div className="space-y-1">
          <Row label="Invoice #" value={invoice.invoice_number} />
          <Row label="Amount" value={`${invoice.currency} ${parseFloat(invoice.amount || '0').toLocaleString()}`} />
          <Row label="Issue Date" value={invoice.issue_date} />
          <Row label="Due Date" value={invoice.due_date} />
          <Row label="Status" value={invoice.status} />
          {invoice.file && <Row label="PDF" value={invoice.file.name} />}
        </div>
      </SectionCard>

      {/* Payment */}
      <SectionCard title="Payment" step={4} skipped={payment.skip || invoice.skip || project.skip} onEdit={() => onGoToStep(4)}>
        <div className="space-y-1">
          <Row label="Amount" value={`${invoice.currency} ${parseFloat(payment.amount || '0').toLocaleString()}`} />
          <Row label="Date" value={payment.payment_date} />
          <Row label="Method" value={payment.method.replace('_', ' ')} />
          <Row label="Reference" value={payment.reference} />
          {!payment.skip && !invoice.skip && payment.amount && invoice.amount &&
            parseFloat(payment.amount) >= parseFloat(invoice.amount) && (
              <p className="text-xs text-emerald-600 font-medium mt-1">✓ Invoice will be auto-marked as paid</p>
            )}
        </div>
      </SectionCard>

      {/* Save progress */}
      {(isSaving || savePhase === 'error') && (
        <div className="bg-surface border border-border-subtle rounded-2xl p-4 space-y-2">
          {PHASES.filter(row => {
            // Filter out skipped phases
            if (row.phase === 'project' && project.skip) return false
            if (row.phase === 'invoice' && (invoice.skip || project.skip)) return false
            if (row.phase === 'payment' && (payment.skip || invoice.skip || project.skip)) return false
            return true
          }).map(row => {
            const current = phaseIndex(savePhase) === phaseIndex(row.phase)
            const done = phaseIndex(savePhase) > phaseIndex(row.phase) && savePhase !== 'error'
            return (
              <div key={row.phase} className={`flex items-center gap-2 text-sm transition-all ${done ? 'text-emerald-600' : current ? 'text-text font-medium' : 'text-text-muted'}`}>
                {done
                  ? <CheckCircle2 size={15} className="shrink-0" />
                  : <Circle size={15} className={`shrink-0 ${current ? 'animate-pulse text-primary' : ''}`} />
                }
                {row.label}
                {done && ' ✓'}
              </div>
            )
          })}
        </div>
      )}

      {saveError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{saveError}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
        <button
          onClick={onBack}
          disabled={isSaving}
          className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors disabled:opacity-40"
        >
          ← Back
        </button>
        <button
          onClick={onSave}
          disabled={isSaving}
          className="px-8 py-2.5 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-sm rounded-[100px] font-semibold transition-colors"
        >
          {isSaving ? 'Saving...' : '✓ Create Client'}
        </button>
      </div>
    </div>
  )
}
