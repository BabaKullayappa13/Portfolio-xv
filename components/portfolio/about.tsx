import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react'
import { education, profile, quickStats } from '@/lib/portfolio-data'
import { AnimatedCounter } from './animated-counter'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building for the cloud, one project at a time"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-2xl p-7">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-cyan" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-brand-cyan" />
                {profile.email}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-brand-cyan" />
                {profile.phone}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-brand-cyan" />
                B.Tech CSE — Expected 2027
              </li>
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-secondary/60 p-4 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="glass rounded-2xl p-7">
            <h3 className="font-heading text-lg font-semibold">Education</h3>
            <ol className="mt-6 space-y-6">
              {education.map((edu, i) => (
                <li key={edu.degree} className="relative pl-7">
                  <span className="absolute left-0 top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  </span>
                  {i < education.length - 1 && (
                    <span className="absolute left-[7px] top-5 h-[calc(100%+0.5rem)] w-px bg-border" />
                  )}
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.org}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="rounded-full bg-brand-blue/15 px-2.5 py-1 font-mono text-brand-cyan">
                      {edu.score}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
