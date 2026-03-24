'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Plus, Pencil, Trash2, Briefcase,
  Clock, AlertTriangle, Loader2
} from 'lucide-react'
import { useAdminAuth } from '@/hooks/useAdminAuth'
import {
  getAllJobListings,
  upsertJobListing,
  deleteJobListing,
  toggleJobActive,
} from '@/lib/careers'
import type { JobListing, JobListingInsert, JobType } from '@/types/careers'
import Modal from '@/components/ui/Modal'
import ConfirmDialog from '@/components/ui/ConfirmDialog'

const TiptapEditor = dynamic(() => import('@/components/careers/TiptapEditor'), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] rounded-xl border border-border-subtle bg-surface flex items-center justify-center">
      <Loader2 className="w-5 h-5 animate-spin text-text-muted" />
    </div>
  ),
})

const JOB_TYPES: JobType[] = ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance']

const emptyForm: JobListingInsert = {
  job_role: '',
  job_type: 'Full-Time',
  engagement_time: '',
  short_description: '',
  description: '',
  cta_label: '',
  cta_url: '',
  is_active: true,
}

export default function AdminCareers() {
  const router = useRouter()
  const { session, loading: authLoading } = useAdminAuth()

  const [listings, setListings] = useState<JobListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<JobListingInsert>(emptyForm)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  // Delete confirm state
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const fetchListings = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getAllJobListings()
      setListings(data)
      setError('')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch listings')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (session) fetchListings()
  }, [session, fetchListings])

  const openAdd = () => {
    setEditingId(null)
    setForm(emptyForm)
    setFormError('')
    setModalOpen(true)
  }

  const openEdit = (listing: JobListing) => {
    setEditingId(listing.id)
    setForm({
      job_role: listing.job_role,
      job_type: listing.job_type,
      engagement_time: listing.engagement_time,
      short_description: listing.short_description,
      description: listing.description,
      cta_label: listing.cta_label,
      cta_url: listing.cta_url,
      is_active: listing.is_active,
    })
    setFormError('')
    setModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Validate
    if (!form.job_role || !form.engagement_time || !form.description || !form.cta_label || !form.cta_url) {
      setFormError('All fields are required.')
      return
    }
    try {
      setSaving(true)
      setFormError('')
      await upsertJobListing(editingId ? { ...form, id: editingId } : form)
      setModalOpen(false)
      await fetchListings()
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    try {
      setDeleting(true)
      await deleteJobListing(deleteTarget)
      setDeleteTarget(null)
      await fetchListings()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to delete')
      setDeleteTarget(null)
    } finally {
      setDeleting(false)
    }
  }

  const handleToggle = async (id: string, current: boolean) => {
    try {
      await toggleJobActive(id, !current)
      setListings((prev) =>
        prev.map((l) => (l.id === id ? { ...l, is_active: !current } : l))
      )
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to toggle')
    }
  }

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg">
        <span className="animate-spin w-8 h-8 border-2 border-border-subtle border-t-text rounded-full" />
      </div>
    )
  }

  if (!session) {
    router.push('/admin')
    return null
  }

  return (
    <div className="min-h-screen bg-bg text-text font-sans pt-20">
      {/* Header */}
      <div className="border-b border-border-subtle px-8 py-6 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin')}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
              >
                <ArrowLeft size={14} />
                Admin
              </button>
              <div className="w-px h-4 bg-border-subtle" />
              <div>
                <div className="section-label mb-1">SARWAGYNA</div>
                <h1 className="text-2xl font-display font-bold text-text tracking-tight">Careers</h1>
                <p className="text-sm text-text-secondary mt-0.5">Manage job listings</p>
              </div>
            </div>

            <button
              onClick={openAdd}
              className="glass-button-primary flex items-center gap-2 text-sm px-5 py-2.5"
            >
              <Plus size={16} />
              Add Job Listing
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto p-8">
        {error && (
          <div className="mb-6 flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            <AlertTriangle size={14} />
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-text-muted" />
          </div>
        ) : listings.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center mb-6">
              <Briefcase className="w-10 h-10 text-text-muted" />
            </div>
            <h3 className="text-lg font-display font-semibold text-text mb-2">No job listings yet</h3>
            <p className="text-text-secondary text-sm mb-6">Add your first one to get started.</p>
            <button onClick={openAdd} className="glass-button-primary text-sm px-5 py-2.5 flex items-center gap-2">
              <Plus size={16} />
              Add Job Listing
            </button>
          </motion.div>
        ) : (
          /* Table */
          <div className="card overflow-hidden rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface">
                    <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Job Role</th>
                    <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Type</th>
                    <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Engagement</th>
                    <th className="text-center px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Created</th>
                    <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr
                      key={listing.id}
                      className="border-b border-border-subtle last:border-b-0 hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-medium text-text">{listing.job_role}</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                          {listing.job_type}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-text-secondary flex items-center gap-1.5">
                        <Clock size={13} className="text-text-muted shrink-0" />
                        {listing.engagement_time}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => handleToggle(listing.id, listing.is_active)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            listing.is_active ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                              listing.is_active ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </td>
                      <td className="px-5 py-4 text-text-muted text-xs">
                        {new Date(listing.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center gap-1 justify-end">
                          <button
                            onClick={() => openEdit(listing)}
                            className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors"
                            title="Edit"
                          >
                            <Pencil size={14} />
                          </button>
                          <button
                            onClick={() => setDeleteTarget(listing.id)}
                            className="p-2 rounded-lg text-text-secondary hover:text-red-500 hover:bg-red-50 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingId ? 'Edit Job Listing' : 'Add Job Listing'}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Role */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              Job Role
            </label>
            <input
              type="text"
              value={form.job_role}
              onChange={(e) => setForm({ ...form, job_role: e.target.value })}
              placeholder="e.g. Frontend Engineer"
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              Job Type
            </label>
            <select
              value={form.job_type}
              onChange={(e) => setForm({ ...form, job_type: e.target.value as JobType })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            >
              {JOB_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Engagement Time */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              Engagement Time
            </label>
            <input
              type="text"
              value={form.engagement_time}
              onChange={(e) => setForm({ ...form, engagement_time: e.target.value })}
              placeholder="e.g. Remote · Flexible Hours"
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              Short Description
            </label>
            <textarea
              value={form.short_description}
              onChange={(e) => setForm({ ...form, short_description: e.target.value })}
              placeholder="Brief plain-text summary shown on the job card (max ~160 chars)"
              maxLength={200}
              rows={2}
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
            />
            <p className="text-xs text-text-muted mt-1">{form.short_description.length}/200 characters</p>
          </div>

          {/* Description (Tiptap) */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              Description
            </label>
            <TiptapEditor
              content={form.description}
              onChange={(html) => setForm({ ...form, description: html })}
            />
          </div>

          {/* CTA Label */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              CTA Label
            </label>
            <input
              type="text"
              value={form.cta_label}
              onChange={(e) => setForm({ ...form, cta_label: e.target.value })}
              placeholder="e.g. Apply Now"
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              required
            />
          </div>

          {/* CTA URL */}
          <div>
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">
              CTA URL
            </label>
            <input
              type="text"
              value={form.cta_url}
              onChange={(e) => setForm({ ...form, cta_url: e.target.value })}
              placeholder="https:// or mailto:"
              className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Active Toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="text-sm font-medium text-text">Active</label>
            <button
              type="button"
              onClick={() => setForm({ ...form, is_active: !form.is_active })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                form.is_active ? 'bg-emerald-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                  form.is_active ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {formError && (
            <p className="text-red-500 text-xs flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 shrink-0" /> {formError}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="flex-1 px-4 py-2.5 bg-surface hover:bg-button-outline text-text-secondary hover:text-text text-sm rounded-xl border border-border-subtle transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 glass-button-primary py-2.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : null}
              {saving ? 'Saving…' : editingId ? 'Update Listing' : 'Create Listing'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete Listing"
        message="Are you sure you want to delete this listing? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  )
}
