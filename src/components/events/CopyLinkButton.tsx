'use client'

export default function CopyLinkButton() {
  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-amber-600 font-semibold hover:underline"
    >
      Copy link
    </button>
  )
}
