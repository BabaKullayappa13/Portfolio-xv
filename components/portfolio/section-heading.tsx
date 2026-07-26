import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
