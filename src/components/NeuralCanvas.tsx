'use client'
import { useEffect, useRef } from 'react'

class NeuralNode {
  x: number; y: number; vx: number; vy: number
  r: number; pulse: number; w: number; h: number
  constructor(w: number, h: number) {
    this.x = Math.random() * w; this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.35; this.vy = (Math.random() - 0.5) * 0.35
    this.r = Math.random() * 2.2 + 0.8
    this.pulse = Math.random() * Math.PI * 2
    this.w = w; this.h = h
  }
  update(mx: number, my: number) {
    this.pulse += 0.018
    const dx = this.x - mx, dy = this.y - my, d = Math.sqrt(dx*dx + dy*dy)
    if (d < 130) { const f = (130-d)/130*0.9; this.vx += (dx/d)*f; this.vy += (dy/d)*f }
    this.vx *= 0.978; this.vy *= 0.978
    this.x += this.vx; this.y += this.vy
    if (this.x < 0 || this.x > this.w) this.vx *= -1
    if (this.y < 0 || this.y > this.h) this.vy *= -1
    this.x = Math.max(0, Math.min(this.w, this.x))
    this.y = Math.max(0, Math.min(this.h, this.y))
  }
  draw(ctx: CanvasRenderingContext2D, alpha: number) {
    const a = (0.28 + Math.sin(this.pulse) * 0.2) * alpha
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(245,158,11,${a})`; ctx.fill()
  }
}

export default function NeuralCanvas({ alpha }: { alpha: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const nodes = useRef<NeuralNode[]>([])
  const mouse = useRef({ x: -999, y: -999 })
  const raf = useRef<number>(0)
  const alphaRef = useRef(alpha)

  useEffect(() => { alphaRef.current = alpha }, [alpha])

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    const resize = () => {
      c.width = window.innerWidth; c.height = window.innerHeight
      nodes.current = Array.from({ length: 85 }, () => new NeuralNode(c.width, c.height))
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouse.current = { x: e.clientX, y: e.clientY } })
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      const ns = nodes.current, { x: mx, y: my } = mouse.current, al = alphaRef.current
      ns.forEach(n => n.update(mx, my))
      for (let i = 0; i < ns.length; i++) for (let j = i+1; j < ns.length; j++) {
        const dx = ns[i].x - ns[j].x, dy = ns[i].y - ns[j].y
        const d = Math.sqrt(dx*dx + dy*dy)
        if (d < 175) {
          const a = (1 - d/175) * 0.26 * al
          ctx.beginPath(); ctx.moveTo(ns[i].x, ns[i].y)
          const cx = (ns[i].x+ns[j].x)/2 + (Math.random()-0.5)*25
          const cy = (ns[i].y+ns[j].y)/2 + (Math.random()-0.5)*25
          ctx.quadraticCurveTo(cx, cy, ns[j].x, ns[j].y)
          ctx.strokeStyle = `rgba(245,158,11,${a})`; ctx.lineWidth = 0.5; ctx.stroke()
        }
      }
      ns.forEach(n => n.draw(ctx, al))
      raf.current = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas ref={ref} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
  )
}
