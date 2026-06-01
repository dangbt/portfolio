import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { POSTS } from '../data/posts'

export function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-fg mb-3">Blog</h1>
        <p className="text-fg-muted">Thoughts on React, TypeScript, and developer tooling.</p>
      </div>

      <div className="flex flex-col gap-6">
        {POSTS.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
            <article className="rounded-2xl border border-border bg-surface p-6 hover:border-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-fg-disabled">
                      {new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-fg group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-fg-muted leading-relaxed">{post.description}</p>
                </div>
                <ArrowRight size={18} className="text-fg-disabled group-hover:text-primary shrink-0 mt-1 transition-colors group-hover:translate-x-1 duration-200" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
