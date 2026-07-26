import { techStack } from '@/lib/portfolio-data'

export function TechMarquee() {
  const items = [...techStack, ...techStack]
  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full glass px-6 py-2.5 font-mono text-sm text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
