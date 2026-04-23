import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/sanity/lib/data'
import { urlFor } from '@/sanity/lib/image'

export const metadata = {
  title: 'Sarwagyna Blog — AI, Tech & Enterprise Insights',
  description: 'Explore the Sarwagyna blog for expert insights on AI, enterprise technology, and SaaS. Written by the team building the future of Indian enterprise.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen pt-32 pb-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 bg-bg text-text">

      {/* Header */}
      <div className="mb-20">
        <div className="section-label mb-4">Sarwagyna Journal</div>
        <h1 className="text-[46px] sm:text-[56px] lg:text-[56px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
          Ideas & <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-[15px] text-text-secondary font-normal max-w-[600px] leading-[1.75]">
          Thoughts on AI, technology, and building the future of Indian enterprise.
        </p>
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-32 glass-panel">
          <p className="text-2xl font-display font-bold text-text">No posts yet.</p>
          <p className="text-text-muted mt-2">Check back soon for our latest updates.</p>
        </div>
      )}

      {/* Featured Post (first post) */}
      {posts.length > 0 && (
        <Link href={`/blog/${posts[0].slug.current}`} className="group block mb-20">
          <div className="grid md:grid-cols-2 gap-8 glass-panel overflow-hidden group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-300">
            {posts[0].mainImage && (
              <div className="relative w-full h-[300px] md:h-full min-h-[300px] overflow-hidden">
                <Image
                  src={urlFor(posts[0].mainImage).width(900).url()}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            )}
            <div className="p-10 flex flex-col justify-center">
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-muted mb-4 flex items-center">
                <span className="w-8 h-px bg-amber-500 mr-3"></span>
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black leading-tight mb-6 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              {posts[0].excerpt && (
                <p className="text-[15px] text-text-secondary leading-relaxed line-clamp-3 mb-8">
                  {posts[0].excerpt}
                </p>
              )}
              <div className="mt-auto flex items-center gap-4 text-[13px] font-medium text-text-muted">
                {posts[0].author && <span className="text-text">{posts[0].author}</span>}
                <span className="w-1 h-1 rounded-full bg-border-subtle"></span>
                {posts[0].publishedAt && (
                  <span>
                    {new Date(posts[0].publishedAt).toLocaleDateString('en-IN', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Rest of Posts Grid */}
      {posts.length > 1 && (
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-text-muted shrink-0">
              All Articles
            </span>
            <div className="flex-1 h-px bg-border-subtle" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group flex flex-col glass-panel overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
              >
                {/* Cover */}
                {post.mainImage ? (
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ) : (
                  <div className="w-full h-56 bg-surface flex items-center justify-center border-b border-border-subtle">
                    <span className="text-5xl text-black/5 font-display font-black uppercase">S</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-[20px] font-display font-bold leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-3 flex-1 mb-6">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-[12px] font-medium text-black mt-auto pt-6 border-t border-border-subtle">
                    <span className="text-black">{post.author || 'Sarwagyna'}</span>
                    <span>
                      {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('en-IN', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </span>
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
