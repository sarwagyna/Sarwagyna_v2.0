// components/ui/StatusBadge.tsx
interface Props {
  status: string
  colorMap?: Record<string, string>
}

const DEFAULT_COLORS: Record<string, string> = {
  active:    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  inactive:  'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  prospect:  'bg-blue-500/20 text-blue-400 border-blue-500/30',
  churned:   'bg-red-500/20 text-red-400 border-red-500/30',
  planning:  'bg-purple-500/20 text-purple-400 border-purple-500/30',
  on_hold:   'bg-amber-500/20 text-amber-400 border-amber-500/30',
  completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
  draft:     'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  sent:      'bg-blue-500/20 text-blue-400 border-blue-500/30',
  overdue:   'bg-red-500/20 text-red-400 border-red-500/30',
  paid:      'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

export default function StatusBadge({ status, colorMap }: Props) {
  const colors = colorMap ?? DEFAULT_COLORS
  const cls = colors[status] ?? 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border capitalize ${cls}`}>
      {status.replace('_', ' ')}
    </span>
  )
}
