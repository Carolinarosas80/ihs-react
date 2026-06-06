import React, { useEffect, useRef, useState } from 'react'
import { useT, SERVICES_DATA } from '../i18n.js'

export default function Services() {
  const { t, lang } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const r = (d=0) => ({ opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(20px)', transition:`opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s` })

  return (
    <section id="services" ref={ref} style={S.section}>
      <div style={{ ...S.header, ...r(0) }}>
        <div>
          <div className="section-tag">{t('services.tag')}</div>
          <h2 className="section-title">
            {t('services.title').split(' ').slice(0,2).join(' ')}{' '}
            <em>{t('services.title').split(' ').slice(2).join(' ')}</em>
          </h2>
        </div>
        <p style={S.sub}>{t('services.sub')}</p>
      </div>
      <div style={S.grid}>
        {SERVICES_DATA.map((svc, i) => <SCard key={i} svc={svc} lang={lang} vis={vis} delay={i*0.07} />)}
      </div>
    </section>
  )
}

function SCard({ svc, lang, vis, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        ...S.card, ...(hov?S.cardH:{}),
        opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(20px)',
        transition:`opacity 0.8s ease ${delay+0.1}s, transform 0.8s ease ${delay+0.1}s, border-color 0.4s, background 0.4s`,
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={S.num}>{svc.num}</div>
      <div
        style={{ ...S.iconWrap, color: hov ? '#5b8de8' : '#2550b8' }}
        dangerouslySetInnerHTML={{ __html: svc.svg }}
      />
      <div style={S.title}>{svc.title[lang]}</div>
      <p style={S.body}>{svc.body[lang]}</p>
      <div style={{ ...S.accent, width: hov ? 40 : 14 }} />
    </div>
  )
}

const S = {
  section:{ padding:'110px 80px', background:'#06080f' },
  header:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'end', maxWidth:1240, margin:'0 auto 56px' },
  sub:{ fontSize:12.5, lineHeight:2.1, color:'#c8d4e8', fontFamily:'Barlow,sans-serif' },
  grid:{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, maxWidth:1240, margin:'0 auto' },
  card:{ border:'1px solid rgba(255,255,255,0.04)', padding:'38px 30px 34px', position:'relative', overflow:'hidden', cursor:'default', background:'transparent', transition:'border-color 0.4s, background 0.4s' },
  cardH:{ borderColor:'rgba(37,80,184,0.28)', background:'rgba(37,80,184,0.04)' },
  num:{ position:'absolute', right:14, top:10, fontFamily:'Playfair Display,serif', fontSize:52, fontWeight:300, color:'rgba(201,168,76,0.04)', lineHeight:1, userSelect:'none' },
  iconWrap:{ width:44, height:44, marginBottom:20, display:'flex', alignItems:'center', justifyContent:'center', transition:'color 0.3s' },
  title:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:700, color:'#ffffff', marginBottom:12 },
  body:{ fontSize:11.5, lineHeight:2, color:'#c8d4e8', fontFamily:'Barlow,sans-serif' },
  accent:{ height:1, background:'linear-gradient(90deg,#2550b8,transparent)', marginTop:22, transition:'width 0.4s' },
}