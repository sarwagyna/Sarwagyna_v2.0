import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/sanity/lib/data'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Sarwagyna Blog`,
    description: post.excerpt || `Read ${post.title} on the Sarwagyna blog.`,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-32 pb-20 bg-bg text-text">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-[13px] font-medium text-text-muted mb-6">
            <span className="text-text">{post.author?.name || 'Sarwagyna Team'}</span>
            <span className="w-1 h-1 rounded-full bg-border-subtle"></span>
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-[-0.04em] mb-8">
            {post.title}
          </h1>
        </header>

        {/* Hero Image */}
        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden glass-panel">
            <Image
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert prose-amber max-w-none prose-headings:font-display prose-headings:font-black prose-p:text-text-secondary prose-p:leading-[1.8] prose-a:text-primary">
          <PortableText value={post.body} />
        </div>

        {/* Footer / Author Info */}
        <footer className="mt-20 pt-12 border-t border-border-subtle">
           <div className="flex items-center gap-4">
              {post.author?.image && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border-subtle">
                  <Image
                    src={urlFor(post.author.image).width(100).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-[15px] font-bold text-text">{post.author?.name || 'Sarwagyna'}</p>
                <p className="text-[13px] text-text-muted">Author at Sarwagyna Pvt Ltd.</p>
              </div>
           </div>
        </footer>
      </div>
    </article>
  )
}
