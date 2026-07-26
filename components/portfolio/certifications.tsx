'use client'

import { Award, ExternalLink, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { certifications } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Certifications() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleViewCertificate = (link: string | undefined) => {
    if (!link) return
    setLoading(link)
    window.open(link, '_blank')
    setTimeout(() => setLoading(null), 1000)
  }

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
              {cert.link && (
                <button
                  onClick={() => handleViewCertificate(cert.link)}
                  disabled={loading === cert.link}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-colors hover:text-foreground disabled:opacity-50"
                >
                  {loading === cert.link ? 'Opening...' : 'View Certificate'}
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
