import { client } from '@/sanity/lib/client'
import { POSTS_QUERY, POST_QUERY, EVENTS_QUERY, UPCOMING_EVENTS_QUERY, EVENT_QUERY, EVENT_SLUGS_QUERY } from './queries'

export async function getAllPosts() {
  return await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 30 } })
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 30 } })
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function getAllEvents() {
  return await client.fetch(EVENTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getUpcomingEvents() {
  return await client.fetch(UPCOMING_EVENTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getEventBySlug(slug: string) {
  return await client.fetch(EVENT_QUERY, { slug }, { next: { revalidate: 60 } })
}

export async function getAllEventSlugs() {
  return await client.fetch(EVENT_SLUGS_QUERY, {}, { next: { revalidate: 3600 } })
}
