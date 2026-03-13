import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/sanity/lib/data'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Sarwagyna Blog`,
    description: post.excerpt || `Read ${post.title} on the Sarwagyna blog.`,
    openGraph: {
      title: `${post.title} | Sarwagyna Blog`,
      description: post.excerpt || `Read ${post.title} on the Sarwagyna blog.`,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).width(1200).url() }] : [],
    },
  }
}

const ptComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-black font-display text-text mt-14 mb-4 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-black font-display text-text mt-12 mb-3 leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold font-display text-text mt-8 mb-2 leading-snug tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold font-display text-text mt-6 mb-2 leading-snug">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-base text-text-secondary leading-[1.8] mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-border-subtle pl-6 text-text-muted italic my-8 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-text">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-text-secondary">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-surface text-text px-1.5 py-0.5 rounded text-sm font-mono border border-border-subtle">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-primary border-b border-primary hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 text-text-secondary mb-5 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 text-text-secondary mb-5 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-text-secondary leading-[1.8]">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-text-secondary leading-[1.8]">{children}</li>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full aspect-video my-10 rounded-2xl overflow-hidden border border-border-subtle">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ''}
          fill
          className="object-cover"
        />
        {value.caption && (
          <p className="text-center text-sm text-text-muted mt-3">{value.caption}</p>
        )}
      </div>
    ),
  },
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-32 pb-20 bg-bg text-text">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Post Header */}
        <header className="mb-12">

          {/* Meta — author + date */}
          <div className="flex items-center gap-3 text-[13px] font-medium text-text-muted mb-6">
            {post.author?.image && (
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border-subtle flex-shrink-0">
                <Image
                  src={urlFor(post.author.image).width(56).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-text font-semibold">
              {post.author?.name || 'Sarwagyna Team'}
            </span>
            <span className="w-1 h-1 rounded-full bg-border-subtle flex-shrink-0" />
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-text leading-[1.1] tracking-[-0.04em] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="w-full h-px bg-border-subtle mb-12" />

        {/* Hero Image */}
        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden border border-border-subtle">
            <Image
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Body */}
        <div className="max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </div>

        {/* Footer / Author Info */}
        <footer className="mt-20 pt-12 border-t border-border-subtle">
          <div className="flex items-center gap-4">
            {post.author?.image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border-subtle flex-shrink-0">
                <Image
                  src={urlFor(post.author.image).width(100).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-[15px] font-bold text-text">
                {post.author?.name || 'Sarwagyna Team'}
              </p>
              <p className="text-[13px] text-text-muted mt-0.5">
                Author at Sarwagyna Pvt Ltd.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </article>
  )
}