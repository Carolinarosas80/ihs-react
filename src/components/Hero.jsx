import React, { useEffect, useRef } from 'react'
import { useT } from '../i18n.js'

export default function Hero() {
  const { t } = useT()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -Math.random() * 0.15 - 0.02,
      o: Math.random() * 0.3 + 0.05,
    }))
    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.o})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W }
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const stats = [
    { n:t('hero.s1n'), l:t('hero.s1l') }, { n:t('hero.s2n'), l:t('hero.s2l') },
    { n:t('hero.s3n'), l:t('hero.s3l') }, { n:t('hero.s4n'), l:t('hero.s4l') },
  ]

  return (
    <section id="home" style={S.section}>
      {/* Fondo base azul casi negro */}
      <div style={S.base} />

      {/* Imagen avión de carga — tenue, concepto transparente */}
      <div style={S.planeImg} />

      {/* Partículas doradas sutiles */}
      <canvas ref={canvasRef} style={S.canvas} />

      {/* Degradado izquierdo para legibilidad */}
      <div style={S.fade} />

      <div style={S.content}>
        <div style={S.eyebrow}>
          <span style={S.eyeLine} />
          {t('hero.eye')}
        </div>

        <h1 style={S.h1}>
          <span style={S.l1}>{t('hero.l1')}</span>
          <span style={S.l2}>{t('hero.l2')}</span>
          <em style={S.l3}>{t('hero.l3')}</em>
        </h1>

        <p style={S.sub}>{t('hero.sub')}</p>

        <div style={S.actions}>
          <button className="btn-gold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}>
            {t('hero.cta')} →
          </button>
          <button style={S.secBtn} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}>
            {t('hero.explore')} ↓
          </button>
        </div>
      </div>

      <div style={S.strip}>
        {stats.map((s, i) => (
          <div key={i} style={{ ...S.statItem, borderRight: i < 3 ? '1px solid rgba(201,168,76,0.07)' : 'none' }}>
            <span style={S.statN}>{s.n}</span>
            <span style={S.statL}>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const S = {
  section:{ minHeight:'100vh', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'center', padding:'160px 80px 100px' },
  base:{ position:'absolute', inset:0, zIndex:0, background:'linear-gradient(160deg,#05070e 0%,#07090f 50%,#080b14 100%)' },
  /* Avión de carga — Unsplash. Reemplazar con /avionCarga.jpg cuando el cliente lo provea */
  planeImg:{
    position:'absolute', inset:0, zIndex:1,
    backgroundImage:"url('/avionCarga.jpg')",
    backgroundSize:'cover', backgroundPosition:'center',
    opacity:0.12,
    filter:'grayscale(0.6) brightness(0.7)',
  },
  canvas:{ position:'absolute', inset:0, zIndex:2, pointerEvents:'none' },
  fade:{ position:'absolute', inset:0, zIndex:3, background:'linear-gradient(90deg,rgba(6,8,15,0.95) 0%,rgba(6,8,15,0.7) 55%,rgba(6,8,15,0.1) 100%)' },
  content:{ position:'relative', zIndex:4, maxWidth:600 },
  eyebrow:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:8.5, letterSpacing:'0.42em', textTransform:'uppercase', color:'#7a6430', fontWeight:600, marginBottom:24, display:'flex', alignItems:'center', gap:14 },
  eyeLine:{ display:'block', width:28, height:1, background:'#7a6430', flexShrink:0 },
  h1:{ fontFamily:'Playfair Display,serif', lineHeight:1.05, marginBottom:24, display:'flex', flexDirection:'column' },
  /* 2 tamaños menos: clamp(34,4.5vw,66) */
  l1:{ fontSize:'clamp(34px,4.5vw,66px)', fontWeight:300, color:'#f0f4fc', letterSpacing:'-0.01em' },
  l2:{ fontSize:'clamp(34px,4.5vw,66px)', fontWeight:300, color:'#4a5a78', letterSpacing:'-0.01em' },
  l3:{ fontSize:'clamp(34px,4.5vw,66px)', fontStyle:'italic', fontWeight:300, color:'#8a9ab8', letterSpacing:'-0.01em' },
  sub:{ fontSize:12.5, lineHeight:2.1, color:'#2e3d58', maxWidth:460, marginBottom:42, fontFamily:'Barlow,sans-serif' },
  actions:{ display:'flex', gap:18, alignItems:'center', flexWrap:'wrap' },
  secBtn:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:9.5, letterSpacing:'0.2em', textTransform:'uppercase', color:'#2e3d58', background:'none', border:'none', cursor:'pointer', fontWeight:500 },
  strip:{ position:'absolute', bottom:0, left:0, right:0, zIndex:4, display:'flex', borderTop:'1px solid rgba(201,168,76,0.08)' },
  statItem:{ flex:1, padding:'20px 32px', background:'rgba(6,8,15,0.75)', display:'flex', flexDirection:'column', gap:4 },
  statN:{ fontFamily:'Playfair Display,serif', fontSize:24, fontWeight:300, color:'#c9a84c', lineHeight:1 },
  statL:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7.5, letterSpacing:'0.22em', textTransform:'uppercase', color:'#2e3d58', fontWeight:500 },
}
