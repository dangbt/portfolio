import { ExternalLink, Package } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { PROJECTS } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-fg mb-3">Projects</h2>
          <p className="text-fg-muted">Things I've built and shipped.</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} featured={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }: { project: typeof PROJECTS[0]; featured?: boolean }) {
  return (
    <div className={`group relative flex flex-col rounded-2xl border border-border bg-surface hover:border-border-subtle transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 overflow-hidden ${featured ? 'sm:col-span-1' : ''}`}>
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Name */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-fg text-lg font-mono leading-tight">
            {project.name}
          </h3>
          {/* Links */}
          <div className="flex items-center gap-2 ml-4 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-fg-disabled hover:text-fg-2 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.npm && (
              <a
                href={project.npm}
                target="_blank"
                rel="noreferrer"
                className="text-fg-disabled hover:text-fg-2 transition-colors"
                aria-label="npm"
              >
                <Package size={16} />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-fg-disabled hover:text-fg-2 transition-colors"
                aria-label="Live site"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-fg-muted leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full border border-border bg-surface-subtle text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
