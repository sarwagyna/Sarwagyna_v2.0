import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "author": author->name,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  ...,
  "author": author->{name, image}
}`)

// ─── Events ───────────────────────────────────────────────────────────────────

const EVENT_FIELDS = `
  _id,
  title,
  slug,
  description,
  date,
  location,
  registrationLink,
  isFeatured,
  "bannerUrl": banner.asset->url,
  tags
`

export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(date asc) {
  ${EVENT_FIELDS}
}`)

export const UPCOMING_EVENTS_QUERY = defineQuery(`*[_type == "event" && date >= now()] | order(date asc) {
  ${EVENT_FIELDS}
}`)

export const EVENT_QUERY = defineQuery(`*[_type == "event" && slug.current == $slug][0] {
  ${EVENT_FIELDS},
  body,
  "gallery": gallery[]{
    "url": asset->url,
    "alt": alt
  },
  faqs[]{
    question,
    answer
  },
  howToApply[]{
    title,
    description
  }
}`)

export const EVENT_SLUGS_QUERY = defineQuery(`*[_type == "event"] { "slug": slug.current }`)
