'use client'

import { useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="h-full transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  )
}

export function Projects() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    return matchesFilter && matchesQuery
  })

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of applications spanning web development, AI, and cloud security."
        />

        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  filter === cat
                    ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white'
                    : 'glass text-muted-foreground hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl glass py-2.5 pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-brand-blue/50"
            />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <TiltCard>
                <article className="glass flex h-full flex-col rounded-2xl p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-brand-purple/15 px-3 py-1 font-mono text-xs text-brand-purple">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        aria-label={`${project.title} on GitHub`}
                        className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${project.title} live demo`}
                        className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="mt-4 text-balance font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-brand-cyan"
                      >
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No projects match your search.
          </p>
        )}
      </div>
    </section>
  )
}
