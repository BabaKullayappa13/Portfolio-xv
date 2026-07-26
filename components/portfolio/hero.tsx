'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const speed = deleting ? 45 : 90

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1300)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setWordIndex((i) => i + 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            Available for internships & collaboration
          </span>

          <p className="mt-6 font-mono text-brand-cyan">Hello, I&apos;m 👋</p>
          <h1 className="mt-2 text-balance font-heading text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Moyeellacheruvu <span className="text-gradient">Baba Kullayappa</span>
          </h1>

          <div className="mt-4 flex min-h-8 items-center font-mono text-lg text-muted-foreground sm:text-xl">
            <span className="text-foreground">{typed}</span>
            <span className="caret h-6" />
          </div>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Final-year Computer Science &amp; Engineering student crafting scalable
            full-stack applications and exploring AWS Cloud &amp; AI. Passionate about
            turning real-world problems into elegant software.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-3 text-sm font-semibold text-foreground"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
                className="grid h-11 w-11 place-items-center rounded-xl glass glass-hover text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Visual - Circular Profile Photo */}
        <div className="relative mx-auto flex justify-center lg:justify-end">
          {/* Glow effect background */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-blue/40 via-brand-cyan/30 to-brand-purple/40 blur-3xl" />
          
          {/* Circular profile container */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            {/* Blue glow border */}
            <div className="absolute inset-0 animate-pulse rounded-full border-2 border-brand-blue/50 shadow-2xl shadow-brand-blue/30" />
            
            {/* Floating animation wrapper */}
            <div className="absolute inset-0 rounded-full border border-brand-cyan/30" style={{
              animation: 'float 6s ease-in-out infinite'
            }} />
            
            {/* Profile image */}
            <div className="h-full w-full overflow-hidden rounded-full shadow-2xl shadow-brand-blue/40">
              <Image
                src="/profile.jpg"
                alt="Moyeellacheruvu Baba Kullayappa - Professional Profile Photo"
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Floating stat badges */}
            <div className="absolute -bottom-4 -left-6 animate-bounce rounded-2xl glass px-3 py-2 text-center shadow-xl" style={{ animationDelay: '0.2s' }}>
              <p className="font-heading text-lg font-bold text-gradient">289</p>
              <p className="text-[10px] text-muted-foreground">GATE 2026</p>
            </div>
            <div className="absolute -right-6 top-12 animate-bounce rounded-2xl glass px-3 py-2 text-center shadow-xl" style={{ animationDelay: '0.4s' }}>
              <p className="font-heading text-lg font-bold text-gradient">AWS</p>
              <p className="text-[10px] text-muted-foreground">Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
