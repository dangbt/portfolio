import { useTranslation } from 'react-i18next'

export function Skills() {
  const { t } = useTranslation()

  const SKILL_GROUPS = [
    { key: 'frontend', labelKey: 'skills.frontend', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
    { key: 'backend', labelKey: 'skills.backend', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { key: 'tools', labelKey: 'skills.tools', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
    { key: 'ai', labelKey: 'skills.ai', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  ]

  const SKILL_ITEMS: Record<string, string[]> = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'React Aria', 'React Router', 'Next.js'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Prisma'],
    tools: ['Git', 'pnpm', 'Cloudflare Pages', 'Render', 'Docker', 'GitHub Actions'],
    ai: ['MCP (Model Context Protocol)', 'Claude Code', 'Cursor', 'Storybook'],
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-fg mb-3">{t('skills.title')}</h2>
          <p className="text-fg-muted">{t('skills.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map(group => (
            <div key={group.key} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">
                {t(group.labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILL_ITEMS[group.key].map(skill => (
                  <span key={skill}
                    className={`px-2.5 py-1 text-sm rounded-lg border font-medium ${group.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
