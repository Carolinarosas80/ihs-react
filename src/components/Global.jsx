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

      {/* Mapa dorado de fondo */}
      <div style={S.mapBg} />
      <div style={S.mapOv} />

      <div style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center' }}>

        {/* Tag arriba */}
        <div style={{ ...r(0), textAlign:'center', marginBottom:16 }}>
          <div className="section-tag center">{t('global.tag')}</div>
        </div>

        {/* Título arriba */}
        <div style={{ ...r(0.05), textAlign:'center', marginBottom:60 }}>
          <h2 className="section-title" style={{ textAlign:'center' }}>
            {t('global.title').split(' ').slice(0,1).join(' ')}{' '}
            <em>{t('global.title').split(' ').slice(1).join(' ')}</em>
          </h2>
        </div>

        {/* Cita — centro del mapa */}
        <div style={{ ...r(0.1), ...S.quoteWrap }}>
          <blockquote style={S.quote}>{t('global.quote')}</blockquote>
        </div>

        {/* Países — todos abajo */}
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
    padding:'120px 80px 100px',
    position:'relative', overflow:'hidden',
    background:'transparent',
    minHeight:'600px',
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
    maxWidth:680, marginBottom:56, textAlign:'center',
  },
  quote:{
    fontFamily:'Playfair Display,serif',
    fontSize:18, fontStyle:'italic', fontWeight:300,
    lineHeight:1.9, color:'#ffffff',
    borderLeft:'2px solid rgba(201,168,76,0.35)',
    paddingLeft:24, textAlign:'left',
  },
  /* Países todos abajo centrados */
  regions:{
    display:'flex', justifyContent:'center',
    flexWrap:'wrap', gap:10,
    maxWidth:900,
  },
  tag:{
    padding:'7px 16px',
    border:'1px solid rgba(201,168,76,0.25)',
    fontFamily:'Barlow Condensed,sans-serif',
    fontSize:8.5, letterSpacing:'0.2em',
    textTransform:'uppercase', color:'#c8d4e8', fontWeight:500,
  },
}