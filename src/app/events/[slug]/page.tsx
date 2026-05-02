import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getEventBySlug, getAllEventSlugs } from '@/sanity/lib/data'
import { Calendar, MapPin, ArrowLeft, ArrowUpRight, Tag, Images, ChevronDown, CheckCircle2 } from 'lucide-react'
import EventGallery from '@/components/events/EventGallery'
import CopyLinkButton from '@/components/events/CopyLinkButton'

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs()
  return slugs
    .filter((s: { slug: string | null }) => !!s.slug)
    .map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  if (!event) return { title: 'Event Not Found' }
  return {
    title: `${event.title} | Sarwagyna Events`,
    description: event.description || `Join us at ${event.title}.`,
    openGraph: {
      title: `${event.title} | Sarwagyna Events`,
      description: event.description || `Join us at ${event.title}.`,
      images: event.bannerUrl ? [{ url: event.bannerUrl }] : [],
    },
  }
}

// ── PortableText components ────────────────────────────────────────────────────
const ptComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-black font-display text-text mt-10 mb-3 leading-tight tracking-tight">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold font-display text-text mt-8 mb-2 leading-snug">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-[16px] text-text-secondary leading-[1.8] mb-5 wrap-break-word">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-amber-400 pl-5 text-text-muted italic my-6 text-lg leading-relaxed">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-text">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-amber-600 border-b border-amber-400 hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-outside ml-5 text-text-secondary mb-5 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-outside ml-5 text-text-secondary mb-5 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-text-secondary leading-[1.8] wrap-break-word">{children}</li>,
    number: ({ children }: any) => <li className="text-text-secondary leading-[1.8] wrap-break-word">{children}</li>,
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  if (!event) notFound()

  const eventDate = new Date(event.date)
  const isPast = eventDate < new Date()
  const hasGallery = event.gallery?.length > 0
  const hasFaqs = event.faqs?.length > 0
  const hasSteps = event.howToApply?.length > 0
  const hasBody = event.body?.length > 0

  return (
    <article className="min-h-screen pt-28 pb-24 bg-bg text-text overflow-x-hidden">

      {/* ── Back link ──────────────────────────────────────────────────── */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          All Events
        </Link>
      </div>

      {/* ── Banner ─────────────────────────────────────────────────────── */}
      {event.bannerUrl && (
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src={event.bannerUrl}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
            {event.isFeatured && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-[11px] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 shadow">
                Featured
              </div>
            )}
            {isPast && (
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full px-4 py-1.5">
                Past Event
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <header className="mb-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-text-muted mb-5">
            <span className="flex items-center gap-1.5 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              {eventDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              {' at '}
              {eventDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
            {event.location && (
              <>
                <span className="w-1 h-1 rounded-full bg-border-subtle shrink-0" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  {event.location}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-display font-black text-text leading-[1.1] tracking-[-0.04em] mb-5 wrap-break-word">
            {event.title}
          </h1>

          {/* Tags */}
          {event.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Tag className="w-3.5 h-3.5 text-text-muted shrink-0" />
              {event.tags.map((tag: string) => (
                <span key={tag} className="text-[11px] font-semibold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ── Prominent CTA — always visible at the top ── */}
          {event.registrationLink && !isPast && (
            <div className="mt-6">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white text-[15px] font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                Register Now — It&apos;s Free
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          )}
          {isPast && (
            <div className="mt-4 inline-flex items-center gap-2 bg-surface border border-border-subtle text-text-muted text-[13px] font-medium px-5 py-2.5 rounded-full">
              This event has already taken place
            </div>
          )}
        </header>

        <div className="w-full h-px bg-border-subtle mb-10" />

        {/* ── Two-column layout ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* Left column */}
          <div className="min-w-0 space-y-12">

            {/* Short description */}
            {event.description && (
              <div>
                <p className="text-[16px] text-text-secondary leading-[1.85] wrap-break-word overflow-wrap-anywhere whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>
            )}

            {/* Rich body */}
            {hasBody && (
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-text-muted shrink-0">About this Event</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <div className="wrap-break-word">
                  <PortableText value={event.body} components={ptComponents} />
                </div>
              </section>
            )}

            {/* Gallery */}
            {hasGallery && (
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <Images className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-text-muted shrink-0">Gallery</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <EventGallery images={event.gallery} />
              </section>
            )}

            {/* How to Apply / Process Steps */}
            {hasSteps && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-text-muted shrink-0">How to Register</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <ol className="space-y-6">
                  {event.howToApply.map((step: { title: string; description?: string }, i: number) => (
                    <li key={i} className="flex gap-4">
                      {/* Step number circle */}
                      <div className="shrink-0 w-9 h-9 rounded-full bg-amber-500 text-white text-[14px] font-black flex items-center justify-center shadow-sm shadow-amber-200">
                        {i + 1}
                      </div>
                      <div className="min-w-0 pt-1">
                        <p className="text-[15px] font-bold text-text mb-1 wrap-break-word">{step.title}</p>
                        {step.description && (
                          <p className="text-[14px] text-text-secondary leading-relaxed wrap-break-word">{step.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* FAQs */}
            {hasFaqs && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-text-muted shrink-0">FAQs</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <div className="space-y-4">
                  {event.faqs.map((faq: { question: string; answer?: string }, i: number) => (
                    <details key={i} className="group glass-panel px-6 py-5 cursor-pointer list-none open:border-amber-200">
                      <summary className="flex items-center justify-between gap-4 select-none list-none [&::-webkit-details-marker]:hidden">
                        <span className="text-[15px] font-semibold text-text wrap-break-word flex-1">{faq.question}</span>
                        <ChevronDown className="w-4 h-4 text-amber-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      {faq.answer && (
                        <p className="mt-4 text-[14px] text-text-secondary leading-relaxed wrap-break-word border-t border-border-subtle pt-4">
                          {faq.answer}
                        </p>
                      )}
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            {event.registrationLink && !isPast && (
              <div className="pt-4 pb-2">
                <div className="glass-panel p-8 text-center bg-linear-to-br from-amber-50 to-orange-50 border-amber-100">
                  <CheckCircle2 className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-xl font-display font-black text-text mb-2">Ready to join?</h3>
                  <p className="text-[14px] text-text-secondary mb-6">Secure your spot before seats run out.</p>
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white text-[14px] font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-amber-200"
                  >
                    Register Now
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────── */}
          <aside className="lg:sticky lg:top-28 space-y-4">
            <div className="glass-panel p-6 space-y-5">

              {/* Date & Time */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-1.5">Date & Time</p>
                <p className="text-[15px] font-semibold text-text">
                  {eventDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p className="text-[13px] text-text-secondary mt-0.5">
                  {eventDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {/* Location */}
              {event.location && (
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-1.5">Location</p>
                  <p className="text-[15px] font-semibold text-text flex items-center gap-2 wrap-break-word">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    {event.location}
                  </p>
                </div>
              )}

              {/* Tags */}
              {event.tags?.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-2">Tags</p>
                  <div className="flex flex-wrap gap-1.5">
                    {event.tags.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-semibold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-100 rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-border-subtle" />

              {/* CTA */}
              {event.registrationLink && !isPast ? (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white text-[14px] font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm shadow-amber-200"
                >
                  Register Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : isPast ? (
                <p className="text-[13px] text-text-muted font-medium text-center">This event has ended.</p>
              ) : (
                <p className="text-[13px] text-text-muted font-medium text-center">Registration link coming soon.</p>
              )}
            </div>

            {/* Share nudge */}
            <p className="text-center text-[12px] text-text-muted px-2">
              Know someone who&apos;d benefit?{' '}
              <CopyLinkButton />
            </p>
          </aside>
        </div>

        {/* ── Footer ─────────────────────────────────────────────────── */}
        <footer className="mt-20 pt-10 border-t border-border-subtle">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-text-muted hover:text-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all events
          </Link>
        </footer>
      </div>
    </article>
  )
}
