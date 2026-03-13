// components/clients/ClientsTab.tsx
import { useState } from 'react'
import { Plus, Pencil, Trash2, Building2, Mail } from 'lucide-react'
import { useClients } from '../../hooks/useClients'
import type { Client, ClientStatus } from '../../lib/database.types'
import Modal from '../ui/Modal'
import ConfirmDialog from '../ui/ConfirmDialog'
import AddClientWizard from './wizard/AddClientWizard'

const STATUS_COLORS: Record<ClientStatus, string> = {
  active:   'bg-emerald-100 text-emerald-700 border-emerald-200',
  inactive: 'bg-zinc-100 text-zinc-500 border-zinc-200',
  prospect: 'bg-blue-100 text-blue-700 border-blue-200',
  churned:  'bg-red-100 text-red-600 border-red-200',
}

const EDIT_EMPTY: Omit<Client, 'id' | 'created_at' | 'updated_at'> = {
  name: '', company: null, email: '', phone: null, address: null,
  tags: [], status: 'prospect', account_manager: null, notes: null, avatar_url: null,
}

const INPUT_CLS = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL_CLS = 'text-xs font-medium text-text-secondary mb-1 block'

interface Props {
  search: string
  selectedClientId: string | null
  onSelectClient: (id: string | null) => void
  onRefresh?: () => void
}

export default function ClientsTab({ search, selectedClientId, onSelectClient, onRefresh }: Props) {
  const { clients, loading, updateClient, deleteClient, refetch } = useClients()
  // Wizard
  const [showWizard, setShowWizard] = useState(false)
  // Edit
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingClient, setEditingClient] = useState<string | null>(null)
  const [form, setForm] = useState<Omit<Client, 'id' | 'created_at' | 'updated_at'>>(EDIT_EMPTY)
  const [tagInput, setTagInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const filtered = clients.filter(c =>
    [c.name, c.company, c.email].some(v => v?.toLowerCase().includes(search.toLowerCase()))
  )

  const openEdit = (c: typeof clients[0]) => {
    setForm({
      name: c.name, company: c.company ?? null, email: c.email,
      phone: null, address: null, tags: [], status: c.status,
      account_manager: null, notes: null, avatar_url: null,
    })
    setEditingClient(c.id); setError(null); setShowEditModal(true)
  }

  const handleEditSave = async () => {
    if (!form.name || !form.email) { setError('Name and email are required.'); return }
    setSaving(true)
    try {
      if (editingClient) await updateClient(editingClient, form)
      setShowEditModal(false)
    } catch (e: any) { setError(e.message) }
    finally { setSaving(false) }
  }

  const handleDelete = async () => {
    if (!confirmDelete) return
    await deleteClient(confirmDelete)
    setConfirmDelete(null)
    if (selectedClientId === confirmDelete) onSelectClient(null)
  }

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !form.tags.includes(t)) {
      setForm(f => ({ ...f, tags: [...f.tags, t] })); setTagInput('')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-text-secondary">{filtered.length} client{filtered.length !== 1 ? 's' : ''}</p>
        <button
          onClick={() => setShowWizard(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-[100px] text-sm font-medium transition-colors"
        >
          <Plus size={14} /> Add Client
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 bg-surface rounded-2xl animate-pulse border border-border-subtle" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <Building2 size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-text-secondary">No clients found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(client => (
            <div
              key={client.id}
              onClick={() => onSelectClient(client.id === selectedClientId ? null : client.id)}
              className={`card rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 ${
                selectedClientId === client.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center text-primary font-semibold text-sm">
                    {client.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold font-display text-text text-sm">{client.name}</p>
                    {client.company && <p className="text-xs text-text-secondary">{client.company}</p>}
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border capitalize ${STATUS_COLORS[client.status]}`}>
                  {client.status}
                </span>
              </div>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Mail size={11} /> {client.email}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-text-secondary border-t border-border-subtle pt-3">
                <span>{client.total_projects} project{client.total_projects !== 1 ? 's' : ''}</span>
                <span className={client.outstanding_amount > 0 ? 'text-amber-600 font-medium' : 'text-emerald-600 font-medium'}>
                  {client.outstanding_amount > 0
                    ? `₹${client.outstanding_amount.toLocaleString()} due`
                    : 'All paid'}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-3" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => openEdit(client)}
                  className="flex items-center gap-1 text-xs text-text-secondary hover:text-text px-2 py-1 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-border-subtle"
                >
                  <Pencil size={11} /> Edit
                </button>
                <button
                  onClick={() => setConfirmDelete(client.id)}
                  className="flex items-center gap-1 text-xs text-red-500/70 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={11} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Wizard — Add Client */}
      <AddClientWizard
        open={showWizard}
        onClose={() => setShowWizard(false)}
        onDone={() => { setShowWizard(false); refetch(); onRefresh?.() }}
      />

      {/* Edit Modal */}
      <Modal open={showEditModal} onClose={() => setShowEditModal(false)} title="Edit Client">
        <div className="space-y-4">
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Name *</label>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Company</label>
              <input value={form.company ?? ''} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Email *</label>
              <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Phone</label>
               <input value={form.phone ?? ''} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Address</label>
             <input value={form.address ?? ''} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} className={INPUT_CLS} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Status</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as ClientStatus }))} className={INPUT_CLS}>
                {(['active', 'inactive', 'prospect', 'churned'] as ClientStatus[]).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Account Manager</label>
               <input value={form.account_manager ?? ''} onChange={e => setForm(f => ({ ...f, account_manager: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Tags</label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {form.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-xs bg-green-light text-primary px-2 py-0.5 rounded-full border border-border-subtle">
                  {tag}
                  <button onClick={() => setForm(f => ({ ...f, tags: f.tags.filter(t => t !== tag) }))} className="ml-0.5 opacity-60 hover:opacity-100">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={tagInput} onChange={e => setTagInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTag()}
                placeholder="Add tag + Enter"
                className={INPUT_CLS + ' flex-1'} />
              <button onClick={addTag} className="bg-surface hover:bg-button-outline px-3 py-2 rounded-xl text-sm text-text border border-border-subtle transition-colors">Add</button>
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Notes</label>
             <textarea value={form.notes ?? ''} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={3}
              className={INPUT_CLS + ' resize-none'} />
          </div>

          <div className="flex justify-end gap-3 pt-2 border-t border-border-subtle">
            <button onClick={() => setShowEditModal(false)} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">Cancel</button>
            <button onClick={handleEditSave} disabled={saving}
              className="px-6 py-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-sm rounded-[100px] transition-colors font-medium">
              {saving ? 'Saving...' : 'Update Client'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!confirmDelete}
        title="Delete Client"
        message="This will permanently delete the client and all associated projects, invoices, and payments."
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete(null)}
      />
    </div>
  )
}
