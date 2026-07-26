'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-50 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          'radial-gradient(circle, rgba(59,130,246,0.12), rgba(6,182,212,0.06) 45%, transparent 70%)',
      }}
    />
  )
}
