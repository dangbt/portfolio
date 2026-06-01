export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export const POSTS: Post[] = [
  {
    slug: 'building-pro-ui',
    title: 'Building @dangbt/pro-ui — React component library từ đầu',
    date: '2026-06-01',
    description: 'Hành trình xây dựng một React component library với React Aria, Tailwind v4, và full TypeScript support.',
    tags: ['React', 'Open Source', 'DX'],
  },
  {
    slug: 'mcp-for-component-libraries',
    title: 'MCP server cho component library — AI vibe coding đúng nghĩa',
    date: '2026-06-01',
    description: 'Cách tôi build MCP server để AI agents như Claude Code có thể hiểu và dùng pro-ui mà không hallucinate API.',
    tags: ['MCP', 'AI', 'Developer Tools'],
  },
]
