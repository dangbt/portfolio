import { Link } from 'react-router-dom'
import { useTheme } from '@dangbt/pro-ui'
import { Sun, Moon, Menu as MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const LINKS = [
    { to: '/#about', label: t('nav.about') },
    { to: '/#projects', label: t('nav.projects') },
    { to: '/#skills', label: t('nav.skills') },
    { to: '/blog', label: t('nav.blog') },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-canvas/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg text-fg hover:text-primary transition-colors">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            dangbt
          </span>
          <span className="text-fg-muted">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {LINKS.map(l => (
            <a
              key={l.to}
              href={l.to}
              className="px-3 py-1.5 text-sm text-fg-muted hover:text-fg rounded-md hover:bg-surface-subtle transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-0.5 mr-1 border border-border rounded-md overflow-hidden">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-primary text-white'
                    : 'text-fg-muted hover:text-fg hover:bg-surface-subtle'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 flex items-center justify-center rounded-md text-fg-muted hover:text-fg hover:bg-surface-subtle transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="sm:hidden w-9 h-9 flex items-center justify-center rounded-md text-fg-muted hover:text-fg hover:bg-surface-subtle transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <MenuIcon size={16} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-border px-4 py-3 flex flex-col gap-1">
          {LINKS.map(l => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-fg-muted hover:text-fg rounded-md hover:bg-surface-subtle transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-1 mt-2 pt-2 border-t border-border">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setMobileOpen(false) }}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-primary text-white'
                    : 'text-fg-muted hover:bg-surface-subtle'
                }`}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
