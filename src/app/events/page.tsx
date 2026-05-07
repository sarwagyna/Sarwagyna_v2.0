import Image from 'next/image'
import Link from 'next/link'
import { getUpcomingEvents } from '@/sanity/lib/data'
import { MapPin, Calendar } from 'lucide-react'
import RegisterButton from '@/components/events/RegisterButton'

export const metadata = {
  title: 'Events — Sarwagyna',
  description: 'Join Sarwagyna at upcoming events, workshops, and conferences across India and online.',
}

export default async function EventsPage() {
  const events = await getUpcomingEvents()

  return (
    <main className="min-h-screen pt-32 pb-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 bg-bg text-text">

      {/* Page Header */}
      <div className="mb-20">
        <div className="section-label mb-4">Sarwagyna Events</div>
        <h1 className="text-[46px] sm:text-[56px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
          Upcoming <span className="text-gradient">Events</span>
        </h1>
        <p className="text-[15px] text-text-secondary font-normal max-w-[600px] leading-[1.75]">
          Meet us at workshops, conferences, and community events. Register early to secure your spot.
        </p>
      </div>

      {/* Empty state */}
      {events.length === 0 && (
        <div className="text-center py-32 glass-panel">
          <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-6 h-6 text-amber-500" />
          </div>
          <p className="text-xl font-display font-bold text-text mb-2">No upcoming events</p>
          <p className="text-text-muted text-[14px]">Check back soon — we&apos;re always planning something new.</p>
        </div>
      )}

      {/* Featured event */}
      {(() => {
        const featured = events.find((e: any) => e.isFeatured)
        if (!featured) return null
        return (
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-text-muted shrink-0">
                Featured Event
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <Link href={`/events/${featured.slug.current}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0 glass-panel overflow-hidden group-hover:border-amber-200 transition-all duration-300">
                {/* Banner */}
                <div className="relative w-full h-[280px] md:h-full min-h-[280px] overflow-hidden rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none">
                  {featured.bannerUrl ? (
                    <Image
                      src={featured.bannerUrl}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-amber-300" />
                    </div>
                  )}
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-amber-600">
                      {new Date(featured.date).toLocaleDateString('en-IN', { month: 'short', timeZone: 'Asia/Kolkata' })}
                    </p>
                    <p className="text-[22px] font-display font-black text-text leading-none">
                      {new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', timeZone: 'Asia/Kolkata' })}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-600 mb-4">
                      <span className="w-8 h-px bg-amber-500 mr-3" />
                      Featured
                    </span>
                    <h2 className="text-3xl font-display font-black leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                      {featured.title}
                    </h2>
                    {featured.description && (
                      <p className="text-[15px] text-text-secondary leading-relaxed line-clamp-3 mb-6">
                        {featured.description}
                      </p>
                    )}
                    {featured.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-[13px] text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {new Date(featured.date).toLocaleDateString('en-IN', {
                          weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata',
                        })}
                      </span>
                      {featured.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-500" />
                          {featured.location}
                        </span>
                      )}
                    </div>
                    {featured.registrationLink && (
                      <RegisterButton href={featured.registrationLink} size="md" />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })()}

      {/* All Events Grid */}
      {events.length > 0 && (
        <div className="space-y-10">
          {events.some((e: any) => e.isFeatured) && (
            <div className="flex items-center gap-6">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-text-muted shrink-0">
                All Events
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events
              .filter((e: any) => !e.isFeatured || events.filter((x: any) => x.isFeatured).length === 0)
              .map((event: any) => (
                <Link
                  key={event._id}
                  href={`/events/${event.slug.current}`}
                  className="group flex flex-col glass-panel overflow-hidden hover:border-amber-200 transition-all duration-300"
                >
                  {/* Banner */}
                  <div className="relative w-full h-52 overflow-hidden rounded-t-[16px]">
                    {event.bannerUrl ? (
                      <Image
                        src={event.bannerUrl}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                        <Calendar className="w-10 h-10 text-amber-200" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-amber-600 leading-none mb-0.5">
                        {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', timeZone: 'Asia/Kolkata' })}
                      </p>
                      <p className="text-[18px] font-display font-black text-text leading-none">
                        {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', timeZone: 'Asia/Kolkata' })}
                      </p>
                    </div>
                    {event.isFeatured && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="text-[19px] font-display font-bold leading-snug mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {event.title}
                    </h2>
                    {event.description && (
                      <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-2 flex-1 mb-4">
                        {event.description}
                      </p>
                    )}
                    {event.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {event.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-100 rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer row */}
                    <div className="mt-auto pt-5 border-t border-border-subtle flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="flex items-center gap-1.5 text-[12px] text-text-muted">
                          <Calendar className="w-3 h-3 text-amber-500 shrink-0" />
                          {new Date(event.date).toLocaleDateString('en-IN', {
                            year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata',
                          })}
                          {' · '}
                          {new Date(event.date).toLocaleTimeString('en-IN', {
                            hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata',
                          })}
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-1.5 text-[12px] text-text-muted">
                            <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                            {event.location}
                          </span>
                        )}
                      </div>
                      {event.registrationLink && (
                        <RegisterButton href={event.registrationLink} size="sm" />
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </main>
  )
}
