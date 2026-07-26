'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6',
          scrolled ? 'glass py-2.5 shadow-lg' : 'py-3',
        )}
        style={{ marginInline: '1rem' }}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-heading text-lg font-bold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-purple font-mono text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">Baba K.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                  active === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
                {active === link.href && (
                  <span className="mx-auto mt-0.5 block h-0.5 w-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:scale-[1.03] sm:flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl glass p-3 lg:hidden">
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    active === link.href
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
