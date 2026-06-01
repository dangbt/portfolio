import { useState, useEffect } from 'react'
import { Settings2, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@dangbt/pro-ui'

const COLORS = [
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Sky', value: '#0ea5e9' },
]

const RADII = [
  { label: '0', value: '0px' },
  { label: '4', value: '4px' },
  { label: '8', value: '8px' },
  { label: '12', value: '12px' },
]

const STORAGE_KEY = 'portfolio-appearance'

function loadAppearance() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch { return {} }
}

function applyAppearance(color: string, radius: string) {
  document.documentElement.style.setProperty('--primary', color)
  document.documentElement.style.setProperty('--base-radius', radius)
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ color, radius }))
}

export function AppearancePanel() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const saved = loadAppearance()
  const [color, setColor] = useState<string>(saved.color ?? '#6366f1')
  const [radius, setRadius] = useState<string>(saved.radius ?? '0px')

  // Apply on mount (restore saved)
  useEffect(() => {
    applyAppearance(color, radius)
  }, [])

  const handleColor = (val: string) => {
    setColor(val)
    applyAppearance(val, radius)
  }

  const handleRadius = (val: string) => {
    setRadius(val)
    applyAppearance(color, val)
  }

  const THEMES = [
    { key: 'light' as const, icon: <Sun size={14} />, label: 'Light' },
    { key: 'dark' as const, icon: <Moon size={14} />, label: 'Dark' },
    { key: 'system' as const, icon: <Monitor size={14} />, label: 'System' },
  ]

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95"
        aria-label="Appearance settings"
      >
        <Settings2 size={18} className={open ? 'rotate-90' : ''} style={{ transition: 'transform 0.3s' }} />
      </button>

      {/* Panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="fixed bottom-20 right-6 z-50 w-72 bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <Settings2 size={15} className="text-primary" />
                <span className="text-sm font-semibold text-fg">Appearance</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md text-fg-muted hover:text-fg hover:bg-surface-subtle transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-5">
              {/* Theme */}
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2.5">Theme</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {THEMES.map(t => (
                    <button
                      key={t.key}
                      onClick={() => setTheme(t.key)}
                      className={`flex items-center justify-center gap-1.5 py-2 text-xs rounded-lg border transition-colors ${
                        theme === t.key
                          ? 'bg-primary/10 border-primary/40 text-primary font-medium'
                          : 'border-border text-fg-muted hover:bg-surface-subtle hover:text-fg'
                      }`}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2.5">Color</p>
                <div className="grid grid-cols-9 gap-1.5">
                  {COLORS.map(c => (
                    <button
                      key={c.value}
                      onClick={() => handleColor(c.value)}
                      title={c.name}
                      className="w-full aspect-square rounded-full border-2 transition-transform hover:scale-110"
                      style={{
                        backgroundColor: c.value,
                        borderColor: color === c.value ? 'white' : 'transparent',
                        boxShadow: color === c.value ? `0 0 0 2px ${c.value}` : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Radius */}
              <div>
                <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2.5">Radius</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {RADII.map(r => (
                    <button
                      key={r.value}
                      onClick={() => handleRadius(r.value)}
                      className={`py-2 text-xs font-mono rounded-lg border transition-colors ${
                        radius === r.value
                          ? 'bg-primary/10 border-primary/40 text-primary font-semibold'
                          : 'border-border text-fg-muted hover:bg-surface-subtle hover:text-fg'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                {/* Preview */}
                <div className="mt-2.5 flex gap-2">
                  {RADII.map(r => (
                    <div
                      key={r.value}
                      className="flex-1 h-6 bg-primary/20 border border-primary/30 transition-all"
                      style={{ borderRadius: r.value }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
