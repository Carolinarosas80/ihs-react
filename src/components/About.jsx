import React, { useEffect, useRef, useState } from 'react'
import { useT } from '../i18n.js'

export default function About() {
  const { t } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const r = (d=0) => ({ opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(22px)', transition:`opacity 0.85s ease ${d}s, transform 0.85s ease ${d}s` })

  return (
    <section id="about" ref={ref} style={S.section}>
      <div style={S.wm}>IHS</div>
      <div style={S.grid}>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={r(0)}>
            <div className="section-tag">{t('about.tag')}</div>
            <h2 className="section-title">
              {t('about.title').split(' ').slice(0,4).join(' ')}{' '}
              <em>{t('about.title').split(' ').slice(4).join(' ')}</em>
            </h2>
          </div>
          <div style={r(0.15)}>
            <p style={S.p}>{t('about.p1')}</p>
            <p style={S.p}>{t('about.p2')}</p>
            <p style={S.p}>{t('about.p3')}</p>
          </div>
          <div style={{ ...S.line, ...r(0.3) }} />
        </div>
        <div style={{ ...S.imgWrap, ...r(0.2) }}>
          <div style={S.imgFrame} />
          <img
            src="/reunioncorpo.jpg"
            alt="Equipo IHS"
            style={S.img}
            onError={e => { e.target.src='https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&auto=format&fit=crop&q=80' }}
          />
          <div style={S.imgOv} />
        </div>
      </div>
    </section>
  )
}

const S = {
  section:{ padding:'80px 24px', background:'#06080f', position:'relative', overflow:'hidden' },
  wm:{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', fontFamily:'Playfair Display,serif', fontSize:'clamp(80px,15vw,200px)', fontWeight:300, color:'rgba(201,168,76,0.02)', lineHeight:1, userSelect:'none', pointerEvents:'none' },
  grid:{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
    gap:48,
    alignItems:'center',
    maxWidth:1240,
    margin:'0 auto',
  },
  p:{ fontSize:13.5, lineHeight:2.2, color:'#ffffff', marginBottom:16, fontFamily:'Barlow,sans-serif' },
  line:{ width:56, height:1, background:'linear-gradient(90deg,#c9a84c,transparent)', marginTop:28 },
  imgWrap:{ position:'relative' },
  imgFrame:{ position:'absolute', inset:'-10px 10px 10px -10px', border:'1px solid rgba(201,168,76,0.1)', zIndex:0 },
  img:{ width:'100%', height:300, objectFit:'cover', objectPosition:'center top', filter:'brightness(0.45) saturate(0.35)', position:'relative', zIndex:1 },
  imgOv:{ position:'absolute', inset:0, zIndex:2, background:'linear-gradient(180deg,rgba(6,8,15,0.15) 0%,rgba(6,8,15,0.55) 100%)' },
}