export interface Project {
  name: string
  description: string
  tags: string[]
  href?: string
  github?: string
  npm?: string
  featured?: boolean
  color: string
}

export const PROJECTS: Project[] = [
  {
    name: '@dangbt/pro-ui',
    description: 'React component library built on React Aria + Tailwind v4. Accessible by default, dark mode, full TypeScript support. 50+ components.',
    tags: ['React', 'TypeScript', 'Tailwind v4', 'React Aria', 'Open Source'],
    href: 'https://pro-ui.pages.dev',
    github: 'https://github.com/dangbt/pro-ui',
    npm: 'https://www.npmjs.com/package/@dangbt/pro-ui',
    featured: true,
    color: 'from-indigo-500 to-violet-600',
  },
  {
    name: 'mcp-pro-ui',
    description: 'MCP server for @dangbt/pro-ui. Lets AI agents (Claude Code, Cursor) browse components, get API references, and scaffold pages.',
    tags: ['MCP', 'AI Tooling', 'Node.js', 'TypeScript'],
    github: 'https://github.com/dangbt/pro-ui/tree/main/tools/mcp-pro-ui',
    npm: 'https://www.npmjs.com/package/mcp-pro-ui',
    featured: true,
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'create-pro-ui-app',
    description: 'CLI scaffold for @dangbt/pro-ui projects. Spin up an admin dashboard in one command with templates: minimal, admin-dashboard, saas-app.',
    tags: ['CLI', 'Node.js', 'Developer Tools'],
    npm: 'https://www.npmjs.com/package/create-pro-ui-app',
    github: 'https://github.com/dangbt/pro-ui/tree/main/tools/create-pro-ui-app',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Shopify Order Queue',
    description: 'Admin dashboard for managing Shopify order fulfillment queues. Real-time order tracking, bulk actions, multi-store support.',
    tags: ['React', 'TypeScript', 'Shopify', 'Node.js'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Paradise',
    description: 'Full-stack backend service with multi-environment deployment on Render. Separate staging/production environments with isolated databases.',
    tags: ['Node.js', 'PostgreSQL', 'Render', 'REST API'],
    color: 'from-orange-500 to-amber-600',
  },
]

export const FEATURED = PROJECTS.filter(p => p.featured)
