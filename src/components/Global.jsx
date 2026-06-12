import React, { useEffect, useRef, useState } from 'react'
import { useT, REGIONS } from '../i18n.js'

export default function Global() {
  const { t } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const r = (d=0) => ({ opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(22px)', transition:`all 0.85s ease ${d}s` })

  return (
    <section id="global" ref={ref} style={S.section}>
      <div style={S.mapBg} />
      <div style={S.mapOv} />

      <div style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center' }}>

        <div style={{ ...r(0), textAlign:'center', marginBottom:16 }}>
          <div className="section-tag center">{t('global.tag')}</div>
        </div>

        <div style={{ ...r(0.05), textAlign:'center', marginBottom:48 }}>
          <h2 className="section-title" style={{ textAlign:'center' }}>
            {t('global.title').split(' ').slice(0,1).join(' ')}{' '}
            <em>{t('global.title').split(' ').slice(1).join(' ')}</em>
          </h2>
        </div>

        <div style={{ ...r(0.1), ...S.quoteWrap }}>
          <blockquote style={S.quote}>{t('global.quote')}</blockquote>
        </div>

        <div style={{ ...S.regions, ...r(0.3) }}>
          {REGIONS.map((reg, i) => (
            <span key={i} style={S.tag}>{reg}</span>
          ))}
        </div>

      </div>
    </section>
  )
}

const S = {
  section:{
    padding:'80px 24px',
    position:'relative', overflow:'hidden',
    background:'transparent',
    minHeight:'500px',
  },
  mapBg:{
    position:'absolute', inset:0, zIndex:0,
    backgroundImage:"url('/mapadoradofondonegro.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
  },
  mapOv:{
    position:'absolute', inset:0, zIndex:1,
    background:'rgba(6,8,15,0.58)',
  },
  quoteWrap:{
    maxWidth:680, marginBottom:48, textAlign:'center', padding:'0 4px',
  },
  quote:{
    fontFamily:'Playfair Display,serif',
    fontSize:'clamp(14px,2vw,18px)', fontStyle:'italic', fontWeight:300,
    lineHeight:1.9, color:'#ffffff',
    borderLeft:'2px solid rgba(201,168,76,0.35)',
    paddingLeft:20, textAlign:'left',
  },
  regions:{
    display:'flex', justifyContent:'center',
    flexWrap:'wrap', gap:8,
    maxWidth:900,
  },
  tag:{
    padding:'6px 14px',
    border:'1px solid rgba(201,168,76,0.25)',
    fontFamily:'Barlow Condensed,sans-serif',
    fontSize:8.5, letterSpacing:'0.2em',
    textTransform:'uppercase', color:'#c8d4e8', fontWeight:500,
  },
}