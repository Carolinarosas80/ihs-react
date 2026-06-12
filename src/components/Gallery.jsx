import React, { useEffect, useRef, useState } from 'react'
import { useT, GALLERY_DATA } from '../i18n.js'

export default function Gallery() {
  const { t, lang } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="gallery" ref={ref} style={S.section}>
      <div style={{ textAlign:'center', maxWidth:520, margin:'0 auto 52px', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(20px)', transition:'all 0.85s' }}>
        <div className="section-tag center">{t('gallery.tag')}</div>
        <h2 className="section-title" style={{ textAlign:'center' }}>
          {t('gallery.title').split(' ')[0]} <em>{t('gallery.title').split(' ').slice(1).join(' ')}</em>
        </h2>
      </div>
      <div className="gallery-grid">
        {GALLERY_DATA.map((item, i) => <GItem key={i} item={item} lang={lang} vis={vis} delay={i*0.08} />)}
      </div>
    </section>
  )
}

function GItem({ item, lang, vis, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="gallery-item"
      style={{ ...item.style, opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(18px)', transition:`opacity 0.85s ease ${delay+0.1}s, transform 0.85s ease ${delay+0.1}s` }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <img src={item.src} alt={item.cap[lang]}
        style={{ width:'100%', height:'100%', objectFit:'cover', transition:'filter 0.55s, transform 0.6s', filter:`brightness(${hov?0.55:0.38}) saturate(${hov?0.45:0.28})`, transform:hov?'scale(1.05)':'scale(1)' }}
      />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent 40%,rgba(7,9,15,0.88) 100%)', display:'flex', alignItems:'flex-end', padding:'14px 16px', transition:'opacity 0.4s', opacity:hov?1:0 }}>
        <span style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:8.5, letterSpacing:'0.18em', textTransform:'uppercase', color:'#c9a84c', fontWeight:600 }}>{item.cap[lang]}</span>
      </div>
    </div>
  )
}

const S = {
  section:{ padding:'110px 24px', background:'#080b14' },
}