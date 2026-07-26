import { Cloud } from 'lucide-react'
import { experience, services } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internship & what I do"
          description="Hands-on cloud engineering experience paired with the services I love to build."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {experience.map((exp) => (
              <Reveal key={exp.role} className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                    <Cloud className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-brand-cyan">{exp.org}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 70}
                className="glass glass-hover rounded-2xl p-5"
              >
                <h4 className="font-heading text-base font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
