// components/clients/ProjectsTab.tsx
import { useState } from 'react'
import { Plus, Pencil, Trash2, FolderKanban, Link, GitBranch, Calendar } from 'lucide-react'
import { useProjects, useClients } from '../../hooks/useClients'
import type { Project, ProjectStatus } from '../../lib/database.types'
import Modal from '../ui/Modal'
import ConfirmDialog from '../ui/ConfirmDialog'

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string }> = {
  planning:    { label: 'Planning',     color: 'bg-blue-100 text-blue-700 border-blue-200' },
  in_progress: { label: 'In Progress',  color: 'bg-amber-100 text-amber-700 border-amber-200' },
  review:      { label: 'Review',       color: 'bg-purple-100 text-purple-700 border-purple-200' },
  completed:   { label: 'Completed',    color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  on_hold:     { label: 'On Hold',      color: 'bg-zinc-100 text-zinc-500 border-zinc-200' },
}

const EMPTY_FORM = {
  client_id: '', name: '', description: '', tech_stack: [] as string[],
  tags: [] as string[], repo_url: '', figma_url: '', start_date: '', end_date: '',
  status: 'planning' as ProjectStatus, budget: '', currency: 'INR',
}

const INPUT_CLS = 'w-full bg-white border border-border-subtle rounded-xl px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors'
const LABEL_CLS = 'text-xs font-medium text-text-secondary mb-1 block'

interface Props { search: string; clientId: string | null }

export default function ProjectsTab({ search, clientId }: Props) {
  const { projects, loading, addProject, updateProject, deleteProject } = useProjects(clientId ?? undefined)
  const { clients } = useClients()
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [techInput, setTechInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const filtered = projects.filter(p =>
    [p.name, p.description].some(v => v?.toLowerCase().includes(search.toLowerCase()))
  )

  const openAdd = () => {
    setForm({ ...EMPTY_FORM, client_id: clientId ?? '' })
    setEditingId(null); setError(null); setShowModal(true)
  }

  const openEdit = (p: Project) => {
    setForm({
      client_id: p.client_id, name: p.name, description: p.description ?? '',
      tech_stack: p.tech_stack, tags: p.tags ?? [], repo_url: p.repo_url ?? '',
      figma_url: p.figma_url ?? '', start_date: p.start_date ?? '',
      end_date: p.end_date ?? '', status: p.status,
      budget: p.budget?.toString() ?? '', currency: p.currency,
    })
    setEditingId(p.id); setError(null); setShowModal(true)
  }

  const handleSave = async () => {
    if (!form.name || !form.client_id) { setError('Name and client are required.'); return }
    setSaving(true)
    try {
      const payload = {
        ...form,
        budget: form.budget ? parseFloat(form.budget) : null,
        start_date: form.start_date || null,
        end_date: form.end_date || null,
        repo_url: form.repo_url || null,
        figma_url: form.figma_url || null,
        description: form.description || null,
      }
      if (editingId) await updateProject(editingId, payload)
      else await addProject(payload as any)
      setShowModal(false)
    } catch (e: any) { setError(e.message) }
    finally { setSaving(false) }
  }

  const addTech = () => {
    const t = techInput.trim()
    if (t && !form.tech_stack.includes(t)) {
      setForm(f => ({ ...f, tech_stack: [...f.tech_stack, t] }))
      setTechInput('')
    }
  }

  const clientName = (id: string) => clients.find(c => c.id === id)?.name ?? '—'

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-text-secondary">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</p>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-[100px] text-sm font-medium transition-colors">
          <Plus size={14} /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">{[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-surface rounded-2xl animate-pulse border border-border-subtle" />)}</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <FolderKanban size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-text-secondary">No projects found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(project => (
            <div key={project.id} className="card rounded-2xl p-5 transition-all hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold font-display text-text text-sm">{project.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_CONFIG[project.status].color}`}>
                      {STATUS_CONFIG[project.status].label}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mb-3">{clientName(project.client_id)}</p>
                  {project.description && <p className="text-xs text-text-muted mb-3">{project.description}</p>}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                    {project.tech_stack.length > 0 && (
                      <div className="flex items-center gap-1">
                        <GitBranch size={11} />
                        <span>{project.tech_stack.join(', ')}</span>
                      </div>
                    )}
                    {project.end_date && (
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>Due {new Date(project.end_date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {project.repo_url && (
                      <a href={project.repo_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline font-medium">
                        <Link size={11} /> Repo
                      </a>
                    )}
                    {project.figma_url && (
                      <a href={project.figma_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-600 hover:underline font-medium">
                        <Link size={11} /> Figma
                      </a>
                    )}
                    {project.budget && (
                      <span className="text-text-secondary">Budget: {project.currency} {project.budget.toLocaleString()}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button onClick={() => openEdit(project)}
                    className="flex items-center gap-1 text-xs text-text-secondary hover:text-text px-2 py-1 rounded-lg hover:bg-surface transition-colors border border-transparent hover:border-border-subtle">
                    <Pencil size={11} /> Edit
                  </button>
                  <button onClick={() => setConfirmDelete(project.id)}
                    className="flex items-center gap-1 text-xs text-red-500/70 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={11} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)} title={editingId ? 'Edit Project' : 'Add Project'}>
        <div className="space-y-4">
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Client *</label>
              <select value={form.client_id} onChange={e => setForm(f => ({ ...f, client_id: e.target.value }))} className={INPUT_CLS}>
                <option value="">Select client</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Project Name *</label>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Description</label>
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2}
              className={INPUT_CLS + ' resize-none'} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Status</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as ProjectStatus }))} className={INPUT_CLS}>
                {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                  <option key={k} value={k}>{v.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL_CLS}>Budget (INR)</label>
              <input type="number" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Start Date</label>
              <input type="date" value={form.start_date} onChange={e => setForm(f => ({ ...f, start_date: e.target.value }))} className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>End Date</label>
              <input type="date" value={form.end_date} onChange={e => setForm(f => ({ ...f, end_date: e.target.value }))} className={INPUT_CLS} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={LABEL_CLS}>Repo URL</label>
              <input value={form.repo_url} onChange={e => setForm(f => ({ ...f, repo_url: e.target.value }))}
                placeholder="https://github.com/..." className={INPUT_CLS} />
            </div>
            <div>
              <label className={LABEL_CLS}>Figma URL</label>
              <input value={form.figma_url} onChange={e => setForm(f => ({ ...f, figma_url: e.target.value }))}
                placeholder="https://figma.com/..." className={INPUT_CLS} />
            </div>
          </div>

          <div>
            <label className={LABEL_CLS}>Tech Stack</label>
            <div className="flex gap-1.5 mb-2 flex-wrap">
              {form.tech_stack.map(t => (
                <span key={t} className="flex items-center gap-1 text-xs bg-green-light text-primary px-2 py-0.5 rounded-full border border-border-subtle">
                  {t}
                  <button onClick={() => setForm(f => ({ ...f, tech_stack: f.tech_stack.filter(x => x !== t) }))} className="ml-0.5 opacity-60 hover:opacity-100">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={techInput} onChange={e => setTechInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTech()}
                placeholder="React, Node.js... + Enter"
                className={INPUT_CLS + ' flex-1'} />
              <button onClick={addTech} className="bg-surface hover:bg-button-outline px-3 py-2 rounded-xl text-sm text-text border border-border-subtle transition-colors">Add</button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors">Cancel</button>
            <button onClick={handleSave} disabled={saving}
              className="px-4 py-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-sm rounded-[100px] font-medium transition-colors">
              {saving ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog open={!!confirmDelete} title="Delete Project"
        message="This will permanently delete the project."
        onConfirm={async () => { await deleteProject(confirmDelete!); setConfirmDelete(null) }}
        onCancel={() => setConfirmDelete(null)} />
    </div>
  )
}
