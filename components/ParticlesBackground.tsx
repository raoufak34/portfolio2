"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    let width = window.innerWidth
    let height = window.innerHeight

    if (canvas) {
      canvas.width = width
      canvas.height = height
    }

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
    }[] = []

    const numParticles = 80
    const maxDistance = 120

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      })
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, width, height)

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Draw circle
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffffaa"
        ctx.fill()

        // Draw lines
        for (let j = i + 1; j < numParticles; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      if (canvas) {
        canvas.width = width
        canvas.height = height
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  )
}
