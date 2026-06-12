import React, { useEffect, useRef, useState } from 'react'
import { useT, MARKETS_DATA } from '../i18n.js'

export default function Markets() {
  const { t, lang } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="markets" ref={ref} style={S.section}>
      <div style={{ textAlign:'center', maxWidth:560, margin:'0 auto 48px', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(20px)', transition:'all 0.85s' }}>
        <div className="section-tag center">{t('markets.tag')}</div>
        <h2 className="section-title" style={{ textAlign:'center' }}>
          <em>{t('markets.title').split(' ').slice(0,2).join(' ')}</em>{' '}
          {t('markets.title').split(' ').slice(2).join(' ')}
        </h2>
        <p style={S.sub}>{t('markets.sub')}</p>
      </div>
      <div style={S.grid}>
        {MARKETS_DATA.map((m, i) => <Card key={i} m={m} lang={lang} vis={vis} delay={i*0.1} />)}
      </div>
    </section>
  )
}

function Card({ m, lang, vis, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{ ...S.card, ...(hov?S.cardH:{}), opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(22px)', transition:`opacity 0.85s ease ${delay+0.1}s, transform 0.85s ease ${delay+0.1}s, border-color 0.4s` }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={S.imgWrap}>
        <img src={m.img} alt={m.name[lang]}
          style={{ ...S.img, transform:hov?'scale(1.04)':'scale(1)', filter:hov?'brightness(0.55) saturate(0.45)':'brightness(0.4) saturate(0.3)' }}
          onError={e => { e.target.src = m.fallback }}
        />
        <div style={S.imgOv} />
      </div>
      <div style={S.body}>
        <div style={S.name}>{m.name[lang]}</div>
        <p style={S.desc}>{m.desc[lang]}</p>
      </div>
      <div style={{ ...S.botLine, width:hov?'100%':'0%' }} />
    </div>
  )
}

const S = {
  section:{ padding:'80px 24px', background:'#06080f' },
  sub:{ fontSize:12, lineHeight:2, color:'#c8d4e8', marginTop:12, fontFamily:'Barlow,sans-serif' },
  grid:{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
    gap:12,
    maxWidth:1240,
    margin:'0 auto',
  },
  card:{ background:'#0c1020', border:'1px solid rgba(255,255,255,0.04)', position:'relative', overflow:'hidden', transition:'border-color 0.4s', cursor:'default' },
  cardH:{ borderColor:'rgba(201,168,76,0.2)' },
  imgWrap:{ overflow:'hidden', height:185, position:'relative' },
  img:{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s, filter 0.5s' },
  imgOv:{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent 40%,rgba(6,8,15,0.96) 100%)' },
  body:{ padding:'20px 20px 24px' },
  name:{ fontFamily:'Playfair Display,serif', fontSize:18, fontWeight:300, color:'#ffffff', marginBottom:8 },
  desc:{ fontSize:11, lineHeight:1.9, color:'#c8d4e8', fontFamily:'Barlow,sans-serif' },
  botLine:{ position:'absolute', bottom:0, left:0, height:1, background:'linear-gradient(90deg,#c9a84c,transparent)', transition:'width 0.4s' },
}