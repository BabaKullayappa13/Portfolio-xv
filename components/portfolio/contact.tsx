'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have an opportunity, project, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass rounded-2xl p-7">
            <h3 className="font-heading text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I&apos;m open to internships, freelance work, and collaboration on
              interesting problems.
            </p>

            <ul className="mt-6 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-3">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-7 flex gap-3">
              {[
                { icon: GithubIcon, href: profile.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl glass glass-hover text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="glass rounded-2xl p-7">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <Field label="Subject" name="subject" type="text" placeholder="Subject" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-blue/50"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.01]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-sm text-brand-cyan">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-blue/50"
      />
    </div>
  )
}
