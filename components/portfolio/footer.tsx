'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <a href="#home" className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-purple font-mono text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span className="font-heading text-lg font-bold">Baba Kullayappa</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full Stack Developer &amp; AWS Cloud Enthusiast building for the web.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              { icon: GithubIcon, href: profile.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl glass glass-hover text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Moyeellacheruvu Baba Kullayappa. Built with Next.js
          &amp; Tailwind CSS.
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  )
}
