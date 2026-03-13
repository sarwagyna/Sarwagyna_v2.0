// components/clients/wizard/AddClientWizard.tsx
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'
import { useClients, useProjects, useInvoices, usePayments } from '../../../hooks/useClients'
import { DEFAULT_WIZARD_STATE, type WizardState, type SavePhase } from './wizardTypes'
import Step1ClientInfo from './Step1ClientInfo'
import Step2Project from './Step2Project'
import Step3Invoice from './Step3Invoice'
import Step4Payment from './Step4Payment'
import Step5Review from './Step5Review'

interface Props {
  open: boolean
  onClose: () => void
  onDone: () => void
}

const STEP_LABELS = ['Client Info', 'Project', 'Invoice', 'Payment', 'Review']

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-0 mb-6">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1
        const done = step < current
        const active = step === current
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                done ? 'bg-primary text-white' :
                active ? 'bg-primary text-white ring-4 ring-primary/20' :
                'bg-surface border border-border-subtle text-text-muted'
              }`}>
                {done ? '✓' : step}
              </div>
              <span className={`text-[10px] font-medium whitespace-nowrap ${active ? 'text-primary' : done ? 'text-text-secondary' : 'text-text-muted'}`}>
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-4 transition-all ${done ? 'bg-primary' : 'bg-border-subtle'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function AddClientWizard({ open, onClose, onDone }: Props) {
  const [state, setState] = useState<WizardState>(DEFAULT_WIZARD_STATE)
  const [savePhase, setSavePhase] = useState<SavePhase>('idle')
  const [saveError, setSaveError] = useState<string | null>(null)
  const [createdIds, setCreatedIds] = useState<{
    client: string | null
    project: string | null
    invoice: string | null
  }>({ client: null, project: null, invoice: null })

  const { addClient } = useClients()
  const { addProject } = useProjects()
  const { addInvoice } = useInvoices()
  const { addPayment } = usePayments()

  if (!open) return null

  const step = state.currentStep
  const setStep = (s: 1 | 2 | 3 | 4 | 5) => setState(prev => ({ ...prev, currentStep: s }))

  const handleClose = () => {
    if (savePhase !== 'idle' && savePhase !== 'error') return // don't close while saving
    setState(DEFAULT_WIZARD_STATE)
    setSavePhase('idle')
    setSaveError(null)
    setCreatedIds({ client: null, project: null, invoice: null })
    onClose()
  }

  // ── Navigation ──────────────────────────────────────────────────────────────

  const goNext = () => {
    const next = (step + 1) as 1 | 2 | 3 | 4 | 5
    setStep(next)
  }

  const goBack = () => {
    const prev = (step - 1) as 1 | 2 | 3 | 4 | 5
    setStep(prev)
  }

  const skipStep2 = () => {
    setState(prev => ({
      ...prev,
      project: { ...prev.project, skip: true },
      invoice: { ...prev.invoice, skip: true },
      payment: { ...prev.payment, skip: true },
      currentStep: 5,
    }))
  }

  const skipStep3 = () => {
    setState(prev => ({
      ...prev,
      invoice: { ...prev.invoice, skip: true },
      payment: { ...prev.payment, skip: true },
      currentStep: 5,
    }))
  }

  const skipStep4 = () => {
    setState(prev => ({
      ...prev,
      payment: { ...prev.payment, skip: true },
      currentStep: 5,
    }))
  }

  // ── Sequential Save ─────────────────────────────────────────────────────────

  const handleSave = async () => {
    setSaveError(null)
    let { client: clientId, project: projectId, invoice: invoiceId } = createdIds

    try {
      // 1. Client (always)
      if (!clientId) {
        setSavePhase('client')
        try {
          const clientData = await addClient({
            name: state.client.name,
            company: state.client.company || null,
            email: state.client.email,
            phone: state.client.phone || null,
            address: state.client.address || null,
            tags: state.client.tags,
            status: state.client.status,
            account_manager: state.client.account_manager || null,
            notes: state.client.notes || null,
            avatar_url: null,
          })
          clientId = clientData.id
        } catch (insertErr: any) {
          // If client already exists (from a prior partial save), look it up
          if (insertErr.message?.includes('clients_email_key')) {
            const { data: existing } = await supabase
              .from('clients')
              .select('id')
              .eq('email', state.client.email)
              .maybeSingle()
            if (existing) {
              clientId = existing.id
            } else {
              throw insertErr
            }
          } else {
            throw insertErr
          }
        }
        setCreatedIds(prev => ({ ...prev, client: clientId }))
      }
      setSavePhase('client_done')

      // 2. Project (optional)
      if (!state.project.skip) {
        if (!projectId) {
          setSavePhase('project')
          const projectData = await addProject({
            client_id: clientId!,
            name: state.project.name,
            description: state.project.description || null,
            tech_stack: state.project.tech_stack,
            tags: state.project.tags,
            figma_url: state.project.figma_url || null,
            repo_url: state.project.repo_url || null,
            start_date: state.project.start_date || null,
            end_date: state.project.end_date || null,
            status: state.project.status,
            budget: state.project.budget ? parseFloat(state.project.budget) : null,
            currency: state.project.currency,
          })
          projectId = projectData.id
          setCreatedIds(prev => ({ ...prev, project: projectId }))
        }
        setSavePhase('project_done')
      }

      // 3. Invoice (optional)
      if (!state.invoice.skip) {
        if (!invoiceId) {
          setSavePhase('invoice')
          const invoiceData = await addInvoice(
            {
              client_id: clientId!,
              project_id: projectId,
              invoice_number: state.invoice.invoice_number,
              issue_date: state.invoice.issue_date,
              due_date: state.invoice.due_date,
              amount: parseFloat(state.invoice.amount),
              currency: state.invoice.currency,
              status: state.invoice.status,
              notes: state.invoice.notes || null,
              file_url: null,
            },
            state.invoice.file,
          )
          invoiceId = invoiceData.id
          setCreatedIds(prev => ({ ...prev, invoice: invoiceId }))
        }
        setSavePhase('invoice_done')
      }

      // 4. Payment (optional)
      if (!state.payment.skip) {
        setSavePhase('payment')
        await addPayment({
          client_id: clientId!,
          invoice_id: invoiceId,
          amount: parseFloat(state.payment.amount),
          currency: state.invoice.currency,
          payment_date: state.payment.payment_date,
          method: state.payment.method,
          reference: state.payment.reference || null,
          notes: state.payment.notes || null,
        })
        setSavePhase('payment_done')
      }

      // Done!
      setTimeout(() => {
        setState(DEFAULT_WIZARD_STATE)
        setSavePhase('idle')
        setCreatedIds({ client: null, project: null, invoice: null })
        onDone()
      }, 800)
    } catch (e: any) {
      setSaveError(e.message)
      setSavePhase('error')
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white border border-border-subtle rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border-subtle shrink-0">
          <div>
            <h2 className="text-base font-semibold font-display text-text">New Client</h2>
            <p className="text-xs text-text-muted mt-0.5">Step {step} of 5</p>
          </div>
          <button
            onClick={handleClose}
            className="text-text-muted hover:text-text transition-colors p-1 rounded-lg hover:bg-surface"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 pt-5 pb-6">
          <StepIndicator current={step} />

          {step === 1 && (
            <Step1ClientInfo
              data={state.client}
              onChange={client => setState(s => ({ ...s, client }))}
              onNext={goNext}
            />
          )}

          {step === 2 && (
            <Step2Project
              data={state.project}
              onChange={project => setState(s => ({ ...s, project: { ...project, skip: false } }))}
              onNext={goNext}
              onBack={goBack}
              onSkip={skipStep2}
            />
          )}

          {step === 3 && (
            <Step3Invoice
              data={state.invoice}
              project={state.project}
              onChange={invoice => setState(s => ({ ...s, invoice: { ...invoice, skip: false } }))}
              onNext={goNext}
              onBack={goBack}
              onSkip={skipStep3}
            />
          )}

          {step === 4 && (
            <Step4Payment
              data={state.payment}
              invoice={state.invoice}
              onChange={payment => setState(s => ({ ...s, payment: { ...payment, skip: false } }))}
              onNext={goNext}
              onBack={goBack}
              onSkip={skipStep4}
            />
          )}

          {step === 5 && (
            <Step5Review
              state={state}
              savePhase={savePhase}
              saveError={saveError}
              onBack={goBack}
              onGoToStep={s => setState(prev => ({ ...prev, currentStep: s }))}
              onSave={handleSave}
            />
          )}
        </div>
      </div>
    </div>
  )
}
