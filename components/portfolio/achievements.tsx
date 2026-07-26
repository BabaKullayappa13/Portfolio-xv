import { Trophy } from 'lucide-react'
import { achievements } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & recognition"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="relative overflow-hidden glass glass-hover rounded-2xl p-7"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-purple/20 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                  <Trophy className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-brand-cyan">
                  {item.highlight}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
