import { Download, FileText, Eye } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  'Full-stack developer (React, Python, Java, MongoDB)',
  'AWS Certified Cloud Practitioner',
  'GATE 2026 Qualified — Score 289',
  'Student Coordinator, RGM Code Rewind (Ripple 2026)',
]

export function ResumeSection() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Resume"
          title="My resume, at a glance"
          description="Preview the document below or download a copy — recruiter-ready and ATS-friendly."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold">Resume Highlights</h3>
                <p className="text-sm text-muted-foreground">PDF · Updated 2026</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.resume}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl glass glass-hover px-5 py-3 text-sm font-semibold text-foreground"
              >
                <Eye className="h-4 w-4" />
                Open Full
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="glass overflow-hidden rounded-2xl p-3">
            <object
              data={`${profile.resume}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="h-[560px] w-full rounded-xl"
              aria-label="Resume PDF preview"
            >
              <div className="grid h-[560px] place-items-center rounded-xl bg-secondary/50 text-center">
                <div>
                  <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Preview unavailable in this browser.
                  </p>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-brand-cyan"
                  >
                    Open the resume in a new tab
                  </a>
                </div>
              </div>
            </object>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
