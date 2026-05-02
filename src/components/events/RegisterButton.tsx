'use client'

import { ArrowUpRight } from 'lucide-react'

interface Props {
  href: string
  size?: 'sm' | 'md'
}

export default function RegisterButton({ href, size = 'md' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={
        size === 'sm'
          ? 'shrink-0 inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white text-[12px] font-bold px-4 py-2 rounded-full transition-colors duration-200'
          : 'inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white text-[13px] font-bold px-6 py-3 rounded-full transition-colors duration-200'
      }
    >
      {size === 'sm' ? (
        <>Register <ArrowUpRight className="w-3.5 h-3.5" /></>
      ) : (
        <>Register Now <ArrowUpRight className="w-4 h-4" /></>
      )}
    </a>
  )
}
