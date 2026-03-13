// hooks/useClients.ts
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import type { Client, Project, Invoice, Payment, ClientSummary, ProjectStatus } from '../lib/database.types'

// ─── CLIENTS ────────────────────────────────────────────────────────────────

export function useClients() {
  const [clients, setClients] = useState<ClientSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchClients = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('client_summary')
      .select('*')
      .order('name')
    if (error) setError(error.message)
    else setClients(data ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchClients() }, [fetchClients])

  const addClient = async (payload: Omit<Client, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase.from('clients').insert(payload).select().single()
    if (error) throw new Error(error.message)
    await fetchClients()
    return data
  }

  const updateClient = async (id: string, payload: Partial<Client>) => {
    const { error } = await supabase.from('clients').update(payload).eq('id', id)
    if (error) throw new Error(error.message)
    await fetchClients()
  }

  const deleteClient = async (id: string) => {
    const { error } = await supabase.from('clients').delete().eq('id', id)
    if (error) throw new Error(error.message)
    await fetchClients()
  }

  return { clients, loading, error, refetch: fetchClients, addClient, updateClient, deleteClient }
}

export function useClientDetail(clientId: string | null) {
  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!clientId) return
    setLoading(true)
    supabase.from('clients').select('*').eq('id', clientId).single()
      .then(({ data }) => { setClient(data); setLoading(false) })
  }, [clientId])

  return { client, loading }
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

// Maps any display label or malformed value → valid DB enum value
const VALID_PROJECT_STATUSES: ProjectStatus[] = ['planning', 'in_progress', 'review', 'completed', 'on_hold']
const PROJECT_STATUS_LABEL_MAP: Record<string, ProjectStatus> = {
  'planning': 'planning',
  'in progress': 'in_progress',
  'in_progress': 'in_progress',
  'inprogress': 'in_progress',
  'review': 'review',
  'completed': 'completed',
  'complete': 'completed',
  'on hold': 'on_hold',
  'on_hold': 'on_hold',
  'onhold': 'on_hold',
}

function sanitizeProjectStatus(status: string): ProjectStatus {
  const normalized = status.toLowerCase().trim()
  if (PROJECT_STATUS_LABEL_MAP[normalized]) return PROJECT_STATUS_LABEL_MAP[normalized]
  if (VALID_PROJECT_STATUSES.includes(normalized as ProjectStatus)) return normalized as ProjectStatus
  return 'planning' // safe fallback
}

export function useProjects(clientId?: string) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    let query = supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (clientId) query = query.eq('client_id', clientId)
    const { data } = await query
    setProjects(data ?? [])
    setLoading(false)
  }, [clientId])

  useEffect(() => { fetchProjects() }, [fetchProjects])

  const addProject = async (payload: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
    const safePayload = { ...payload, status: sanitizeProjectStatus(payload.status) }
    const { data, error } = await supabase.from('projects').insert(safePayload).select().single()
    if (error) throw new Error(error.message)
    await fetchProjects()
    return data
  }

  const updateProject = async (id: string, payload: Partial<Project>) => {
    const safePayload = payload.status
      ? { ...payload, status: sanitizeProjectStatus(payload.status) }
      : payload
    const { error } = await supabase.from('projects').update(safePayload).eq('id', id)
    if (error) throw new Error(error.message)
    await fetchProjects()
  }

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id)
    if (error) throw new Error(error.message)
    await fetchProjects()
  }

  return { projects, loading, refetch: fetchProjects, addProject, updateProject, deleteProject }
}

// ─── INVOICES ────────────────────────────────────────────────────────────────

export function useInvoices(clientId?: string) {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  const fetchInvoices = useCallback(async () => {
    setLoading(true)
    let query = supabase.from('invoices').select('*').order('issue_date', { ascending: false })
    if (clientId) query = query.eq('client_id', clientId)
    const { data } = await query
    setInvoices(data ?? [])
    setLoading(false)
  }, [clientId])

  useEffect(() => { fetchInvoices() }, [fetchInvoices])

  const addInvoice = async (
    payload: Omit<Invoice, 'id' | 'created_at' | 'updated_at'>,
    file?: File
  ) => {
    let file_url: string | null = null

    if (file) {
      const ext = file.name.split('.').pop()
      const path = `${payload.client_id}/${payload.invoice_number}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('invoices')
        .upload(path, file, { upsert: true })
      if (uploadError) throw new Error(uploadError.message)
      const { data: urlData } = supabase.storage.from('invoices').getPublicUrl(path)
      file_url = urlData.publicUrl
    }

    const { data, error } = await supabase
      .from('invoices')
      .insert({ ...payload, file_url })
      .select()
      .single()
    if (error) throw new Error(error.message)
    await fetchInvoices()
    return data
  }

  const updateInvoice = async (id: string, payload: Partial<Invoice>) => {
    const { error } = await supabase.from('invoices').update(payload).eq('id', id)
    if (error) throw new Error(error.message)
    await fetchInvoices()
  }

  const deleteInvoice = async (id: string) => {
    const { error } = await supabase.from('invoices').delete().eq('id', id)
    if (error) throw new Error(error.message)
    await fetchInvoices()
  }

  return { invoices, loading, refetch: fetchInvoices, addInvoice, updateInvoice, deleteInvoice }
}

// ─── PAYMENTS ────────────────────────────────────────────────────────────────

export function usePayments(clientId?: string) {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPayments = useCallback(async () => {
    setLoading(true)
    let query = supabase.from('payments').select('*').order('payment_date', { ascending: false })
    if (clientId) query = query.eq('client_id', clientId)
    const { data } = await query
    setPayments(data ?? [])
    setLoading(false)
  }, [clientId])

  useEffect(() => { fetchPayments() }, [fetchPayments])

  const addPayment = async (payload: Omit<Payment, 'id' | 'created_at'>) => {
    const { data, error } = await supabase.from('payments').insert(payload).select().single()
    if (error) throw new Error(error.message)
    // Auto-mark invoice as paid if full amount
    if (payload.invoice_id) {
      const { data: inv } = await supabase
        .from('invoices').select('amount').eq('id', payload.invoice_id).single()
      if (inv && payload.amount >= inv.amount) {
        await supabase.from('invoices').update({ status: 'paid' }).eq('id', payload.invoice_id)
      }
    }
    await fetchPayments()
    return data
  }

  const deletePayment = async (id: string) => {
    const { error } = await supabase.from('payments').delete().eq('id', id)
    if (error) throw new Error(error.message)
    await fetchPayments()
  }

  return { payments, loading, refetch: fetchPayments, addPayment, deletePayment }
}
