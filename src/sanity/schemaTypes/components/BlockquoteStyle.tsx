'use client'

import React from 'react'

/**
 * Custom blockquote renderer for the Sanity Studio portable-text editor.
 *
 * Sanity's default BlockQuote component from @sanity/ui wraps the block text
 * in <ForwardRef(Text) as="p"> which outputs a <p>, then internally adds a
 * styled <div> inside it — invalid HTML that triggers a React hydration error.
 *
 * By supplying our own `component` here we bypass that entire code path and
 * render a plain <blockquote> wrapping a <div> (block-level throughout), so
 * there is never a <div> nested inside a <p>.
 */
export default function BlockquoteStyle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <blockquote
      style={{
        borderLeft: '3px solid #d97706',
        paddingLeft: '0.875rem',
        margin: '0.5rem 0',
        fontStyle: 'italic',
        color: '#6b7280',
      }}
    >
      <div>{children}</div>
    </blockquote>
  )
}
