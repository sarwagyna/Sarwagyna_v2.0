// components/clients/wizard/wizardTypes.ts
import type { ClientStatus, ProjectStatus, InvoiceStatus, PaymentMethod } from '../../../lib/database.types'

export interface WizardClientForm {
  name: string
  company: string
  email: string
  phone: string
  address: string
  status: ClientStatus
  account_manager: string
  tags: string[]
  notes: string
  avatar_url: null
}

export interface WizardProjectForm {
  skip: boolean
  name: string
  description: string
  tech_stack: string[]
  tags: string[]
  figma_url: string
  repo_url: string
  start_date: string
  end_date: string
  status: ProjectStatus
  budget: string
  currency: string
}

export interface WizardInvoiceForm {
  skip: boolean
  invoice_number: string
  issue_date: string
  due_date: string
  amount: string
  currency: string
  status: InvoiceStatus
  notes: string
  file?: File
}

export interface WizardPaymentForm {
  skip: boolean
  amount: string
  payment_date: string
  method: PaymentMethod
  reference: string
  notes: string
}

export interface WizardState {
  currentStep: 1 | 2 | 3 | 4 | 5
  client: WizardClientForm
  project: WizardProjectForm
  invoice: WizardInvoiceForm
  payment: WizardPaymentForm
}

export const DEFAULT_WIZARD_STATE: WizardState = {
  currentStep: 1,
  client: {
    name: '', company: '', email: '', phone: '', address: '',
    status: 'prospect', account_manager: '', tags: [], notes: '', avatar_url: null,
  },
  project: {
    skip: false, name: '', description: '', tech_stack: [], tags: [],
    figma_url: '', repo_url: '', start_date: '', end_date: '',
    status: 'planning', budget: '', currency: 'INR',
  },
  invoice: {
    skip: false, invoice_number: '', issue_date: '', due_date: '',
    amount: '', currency: 'INR', status: 'draft', notes: '',
  },
  payment: {
    skip: false, amount: '', payment_date: '', method: 'bank_transfer',
    reference: '', notes: '',
  },
}

export type SavePhase =
  | 'idle'
  | 'client'
  | 'client_done'
  | 'project'
  | 'project_done'
  | 'invoice'
  | 'invoice_done'
  | 'payment'
  | 'payment_done'
  | 'error'
