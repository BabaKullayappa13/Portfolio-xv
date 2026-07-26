'use client'

import { Sparkles } from 'lucide-react'
import { aiTools, skillCategories } from '@/lib/portfolio-data'
import { useReveal } from '@/hooks/use-reveal'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple transition-[width] duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A blend of programming languages, frameworks, cloud platforms, and modern AI-assisted tooling."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 80}
              className="glass glass-hover rounded-2xl p-7"
            >
              <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 glass rounded-2xl p-7">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-purple" />
            <h3 className="font-heading text-lg font-semibold">AI Productivity Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {aiTools.map((tool, i) => (
              <span
                key={tool}
                className={cn(
                  'rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand-purple/50 hover:text-foreground',
                  i % 2 === 0 ? 'bg-secondary/60' : 'bg-secondary/30',
                )}
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
