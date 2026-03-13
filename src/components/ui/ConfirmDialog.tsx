// components/ui/ConfirmDialog.tsx
import { AlertTriangle } from 'lucide-react'

interface Props {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({ open, title, message, onConfirm, onCancel }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white border border-border-subtle rounded-2xl w-full max-w-sm p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle size={16} className="text-red-500" />
          </div>
          <h2 className="text-base font-semibold font-display text-text">{title}</h2>
        </div>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel}
            className="flex-1 px-4 py-2 bg-surface hover:bg-button-outline text-text-secondary hover:text-text text-sm rounded-xl border border-border-subtle transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-xl transition-colors font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
