import { Mail, Package } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border/50 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} Dâng Bùi Tấn. {t('footer.built_with')}{' '}
          <a href="https://pro-ui.pages.dev" target="_blank" rel="noreferrer"
            className="text-primary hover:underline">
            @dangbt/pro-ui
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/dangbt" target="_blank" rel="noreferrer"
            className="text-fg-muted hover:text-fg transition-colors" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.npmjs.com/~dangbt" target="_blank" rel="noreferrer"
            className="text-fg-muted hover:text-fg transition-colors" aria-label="npm">
            <Package size={18} />
          </a>
          <a href="mailto:buitandang96@gmail.com"
            className="text-fg-muted hover:text-fg transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
