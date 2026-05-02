'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryImage {
  url: string
  alt?: string
}

export default function EventGallery({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const prevLightbox = () => setLightbox((c) => ((c ?? 0) - 1 + images.length) % images.length)
  const nextLightbox = () => setLightbox((c) => ((c ?? 0) + 1) % images.length)

  // Show up to 4 thumbs at a time in a scrollable row
  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border-subtle bg-surface cursor-zoom-in"
          onClick={() => setLightbox(current)}
        >
          <Image
            src={images[current].url}
            alt={images[current].alt || `Gallery image ${current + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 900px) 100vw, 900px"
          />

          {/* Counter */}
          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[12px] font-medium rounded-full px-3 py-1">
            {current + 1} / {images.length}
          </div>

          {/* Nav arrows — only if more than 1 image */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-text" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-text" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  i === current
                    ? 'border-amber-500 opacity-100 scale-105'
                    : 'border-border-subtle opacity-60 hover:opacity-90'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt || `Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-[13px] font-medium">
            {lightbox + 1} / {images.length}
          </div>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full max-h-[80vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].url}
              alt={images[lightbox].alt || `Image ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Nav */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevLightbox() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextLightbox() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
