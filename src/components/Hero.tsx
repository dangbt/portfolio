import { Mail, ArrowRight } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { Button } from '@dangbt/pro-ui'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/8 blur-[80px]" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-500/8 blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Handle */}
        <h1 className="animate-fade-up text-5xl sm:text-7xl font-bold tracking-tight mb-4 font-mono">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            dangbt
          </span>
        </h1>

        {/* Role */}
        <p className="animate-fade-up-2 text-xl sm:text-2xl text-fg-muted mb-6 font-medium">
          {t('hero.role')}
          <span className="text-fg-disabled mx-2">·</span>
          <span className="text-indigo-400">React</span>
          <span className="text-fg-disabled mx-2">·</span>
          <span className="text-violet-400">TypeScript</span>
          <span className="text-fg-disabled mx-2">·</span>
          <span className="text-pink-400">Node.js</span>
        </p>

        {/* Bio */}
        <p className="animate-fade-up-2 text-fg-muted max-w-lg mx-auto mb-10 leading-relaxed">
          {t('hero.bio')}{' '}
          <a
            href="https://pro-ui.pages.dev"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:opacity-80 transition-colors"
          >
            @dangbt/pro-ui
          </a>
          .
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-3 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onPress={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_projects')} <ArrowRight size={16} />
          </Button>
          <a href="https://github.com/dangbt" target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg">
              <GithubIcon size={16} /> {t('hero.cta_github')}
            </Button>
          </a>
          <a href="mailto:buitandang96@gmail.com">
            <Button variant="ghost" size="lg">
              <Mail size={16} /> {t('hero.cta_contact')}
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-3 mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { value: '50+', key: 'hero.stat_components' },
            { value: '3+', key: 'hero.stat_packages' },
            { value: '∞', key: 'hero.stat_coffee' },
          ].map(s => (
            <div key={s.key} className="text-center">
              <div className="text-2xl font-bold text-primary">
                {s.value}
              </div>
              <div className="text-xs text-fg-muted mt-1">{t(s.key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
