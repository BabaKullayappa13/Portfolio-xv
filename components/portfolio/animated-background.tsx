export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* moving grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'grid-pan 18s linear infinite',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 78%)',
        }}
      />

      {/* gradient blobs */}
      <div
        className="absolute -left-32 -top-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(59,130,246,0.28), transparent 70%)',
          animation: 'float-blob 16s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(139,92,246,0.24), transparent 70%)',
          animation: 'float-blob 20s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(6,182,212,0.2), transparent 70%)',
          animation: 'float-blob 22s ease-in-out infinite',
        }}
      />
    </div>
  )
}
