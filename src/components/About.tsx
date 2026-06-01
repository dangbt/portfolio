import { MapPin, Code2, Cpu } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center sm:justify-end order-first sm:order-last">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center text-6xl">
                  🧑‍💻
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-fg-muted font-mono shadow-lg">
                {'<dangbt />'}
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-fg mb-4">
              About me
            </h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Hi, tôi là <span className="text-fg font-medium">Dâng</span> — một full-stack developer
              đam mê xây dựng developer tools và component libraries. Tôi tin rằng
              great DX = great product.
            </p>
            <p className="text-fg-muted leading-relaxed mb-6">
              Tôi tạo ra <span className="text-indigo-400 font-medium">@dangbt/pro-ui</span> để
              giúp developers xây dựng admin dashboards nhanh hơn với accessibility
              và type safety out-of-the-box.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: 'Vietnam 🇻🇳' },
                { icon: Code2, text: 'React · TypeScript · Node.js' },
                { icon: Cpu, text: 'AI tools enthusiast — Claude Code, Cursor' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-fg-muted">
                  <Icon size={14} className="text-indigo-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
