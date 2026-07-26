import { Award, ExternalLink, ShieldCheck } from 'lucide-react'
import { certifications } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Certifications() {
  return (
    <section id="certificates" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials"
          description="Industry-recognized certifications that validate my skills across cloud, security, and full-stack development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 80}
              className="group glass glass-hover flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-cyan">
                  <Award className="h-5 w-5" />
                </span>
                <ShieldCheck className="h-4 w-4 text-brand-cyan" />
              </div>
              <h3 className="text-balance font-heading text-base font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-colors group-hover:text-foreground"
              >
                View Certificate
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
