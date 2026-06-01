export interface SkillGroup {
  label: string
  color: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    label: 'Frontend',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: ['React', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'React Aria', 'React Router', 'Next.js'],
  },
  {
    label: 'Backend',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Prisma'],
  },
  {
    label: 'Tools & Infra',
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    items: ['Git', 'pnpm', 'Cloudflare Pages', 'Render', 'Docker', 'GitHub Actions'],
  },
  {
    label: 'AI / DX',
    color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    items: ['MCP (Model Context Protocol)', 'Claude Code', 'Cursor', 'Storybook'],
  },
]
