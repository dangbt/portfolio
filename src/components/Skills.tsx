import { SKILLS } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-fg mb-3">Skills</h2>
          <p className="text-fg-muted">Tech stack tôi làm việc hàng ngày.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map(group => (
            <div key={group.label} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-sm rounded-lg border font-medium ${group.color}`}
                  >
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
