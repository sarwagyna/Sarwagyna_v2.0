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
