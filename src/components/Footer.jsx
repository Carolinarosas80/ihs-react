import React from 'react'
import { useT } from '../i18n.js'

export default function Footer() {
  const { t } = useT()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  const nav = [
    { id:'about', k:'nav.about' },{ id:'markets', k:'nav.markets' },
    { id:'services', k:'nav.services' },{ id:'gallery', k:'nav.gallery' },
    { id:'contact', k:'nav.contact' },
  ]
  const svcs = ['Point of Purchase','Logística / Logistics','Business Development','Brand Administration','Import & Export']
  const mkts = ['Duty Free','Cruceros / Cruise','Tiendas Fronterizas','Ferias / Exhibitions']

  return (
    <footer style={S.footer}>
      <div style={S.inner}>
        <div style={S.grid}>
          <div>
            <img src="/logodoradoihs.jpg" alt="IHS"
              style={{ width:36, height:36, objectFit:'contain', borderRadius:'50%', marginBottom:12 }}
              onError={e => e.target.style.display='none'}
            />
            <div style={S.bName}>INTER HIGH SUPPLY</div>
            <div style={S.bTag}>Beauty Travel Distribution</div>
            <p style={S.desc}>{t('footer.desc')}</p>
          </div>
          <div>
            <div style={S.colT}>{t('footer.company')}</div>
            <ul style={S.list}>
              {nav.map(n => <li key={n.id}><button style={S.lItem} onClick={() => go(n.id)}
                onMouseEnter={e => e.currentTarget.style.color='#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color='#2e3d58'}
              >{t(n.k)}</button></li>)}
            </ul>
          </div>
          <div>
            <div style={S.colT}>{t('footer.services')}</div>
            <ul style={S.list}>{svcs.map(s => <li key={s}><span style={S.lTxt}>{s}</span></li>)}</ul>
          </div>
          <div>
            <div style={S.colT}>{t('footer.markets')}</div>
            <ul style={S.list}>{mkts.map(m => <li key={m}><span style={S.lTxt}>{m}</span></li>)}</ul>
          </div>
        </div>
        <div style={S.bottom}>
          <span style={S.copy}>© {new Date().getFullYear()} Inter High Supply SRL. {t('footer.rights')}</span>
          <span style={S.credit}>{t('footer.by')} <a href="https://codigosur.com.ar" target="_blank" rel="noreferrer" style={{ color:'#7a6430' }}>Código Sur</a></span>
        </div>
      </div>
    </footer>
  )
}

const S = {
  /* Footer mismo azul casi negro — sin diferencia visual con el resto */
  footer:{ background:'#05070c', borderTop:'1px solid rgba(201,168,76,0.06)', padding:'60px 80px 36px' },
  inner:{ maxWidth:1240, margin:'0 auto' },
  grid:{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:52, marginBottom:52 },
  bName:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:10.5, fontWeight:700, letterSpacing:'0.22em', color:'#8a9ab8', textTransform:'uppercase' },
  bTag:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7, letterSpacing:'0.26em', color:'#2e3d58', textTransform:'uppercase', fontWeight:400, marginBottom:14 },
  desc:{ fontSize:11, lineHeight:2, color:'#2e3d58', maxWidth:270, fontFamily:'Barlow,sans-serif' },
  colT:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7.5, letterSpacing:'0.3em', textTransform:'uppercase', color:'#7a6430', marginBottom:16, fontWeight:700 },
  list:{ listStyle:'none', display:'flex', flexDirection:'column', gap:8 },
  lItem:{ fontSize:11, color:'#2e3d58', background:'none', border:'none', cursor:'pointer', padding:0, textAlign:'left', fontFamily:'Barlow,sans-serif', transition:'color 0.3s' },
  lTxt:{ fontSize:11, color:'#2e3d58', fontFamily:'Barlow,sans-serif' },
  bottom:{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:28, borderTop:'1px solid rgba(255,255,255,0.03)', flexWrap:'wrap', gap:10 },
  copy:{ fontSize:9.5, color:'#1a2030', letterSpacing:'0.06em', fontFamily:'Barlow,sans-serif' },
  credit:{ fontSize:9.5, color:'#1a2030', fontFamily:'Barlow,sans-serif' },
}
