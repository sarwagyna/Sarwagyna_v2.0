import { client } from '@/sanity/lib/client'
import { POSTS_QUERY, POST_QUERY } from './queries'

export async function getAllPosts() {
  return await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })
}
