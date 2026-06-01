import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { POSTS } from '../data/posts'
import { Suspense, lazy } from 'react'

const POST_MODULES: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'building-pro-ui': () => import('../content/posts/building-pro-ui.mdx'),
  'mcp-for-component-libraries': () => import('../content/posts/mcp-for-component-libraries.mdx'),
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find(p => p.slug === slug)

  if (!post || !slug || !POST_MODULES[slug]) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-4xl mb-4">404</p>
        <p className="text-fg-muted mb-6">Post not found.</p>
        <Link to="/blog" className="text-primary hover:underline">← Back to blog</Link>
      </div>
    )
  }

  const Content = lazy(POST_MODULES[slug])

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Back */}
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors mb-10">
        <ArrowLeft size={14} /> Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
          <span className="text-xs text-fg-disabled">
            {new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-fg leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-fg-muted text-lg leading-relaxed">{post.description}</p>
      </header>

      <hr className="border-border mb-10" />

      {/* MDX Content */}
      <article className="prose prose-invert max-w-none
        prose-headings:text-fg prose-headings:font-bold
        prose-p:text-fg-muted prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-indigo-400 prose-code:bg-surface-subtle prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:rounded-xl
        prose-strong:text-fg
        prose-li:text-fg-muted
        prose-hr:border-border
      ">
        <Suspense fallback={<div className="text-fg-muted text-sm animate-pulse">Loading...</div>}>
          <Content />
        </Suspense>
      </article>
    </div>
  )
}
