import React, { useState, useEffect, useContext } from 'react'
import { useT } from '../i18n.js'
import { LangCtx } from '../App.jsx'

export default function Navbar() {
  const { t, lang } = useT()
  const { toggle } = useContext(LangCtx)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setOpen(false) }

  const links = [
    { id:'about',    label:t('nav.about')    },
    { id:'markets',  label:t('nav.markets')  },
    { id:'services', label:t('nav.services') },
    { id:'gallery',  label:t('nav.gallery')  },
  ]

  return (
    <>
      {open && (
        <div style={S.overlay}>
          <button style={S.closeBtn} onClick={() => setOpen(false)}>✕</button>
          {links.map(l => <button key={l.id} style={S.mLink} onClick={() => go(l.id)}>{l.label}</button>)}
          <button style={{ ...S.mLink, color:'#c9a84c', marginTop:8 }} onClick={() => go('contact')}>{t('nav.contact')}</button>
          <div style={{ display:'flex', gap:8, marginTop:24 }}>
            <LB active={lang==='es'} onClick={() => toggle('es')}>ES</LB>
            <LB active={lang==='en'} onClick={() => toggle('en')}>EN</LB>
          </div>
        </div>
      )}

      <div style={S.langBar}>
        <LB active={lang==='es'} onClick={() => toggle('es')}>ES</LB>
        <span style={{ color:'#1a2030', fontSize:10 }}>|</span>
        <LB active={lang==='en'} onClick={() => toggle('en')}>EN</LB>
      </div>

      <nav style={{ ...S.nav, ...(scrolled ? S.navSc : {}) }}>
        <button style={S.logoWrap} onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>
          <img
            src="/logoredondoazul.jpg"
            alt="Inter High Supply"
            style={S.logoImg}
            onError={e => { e.target.style.display='none' }}
          />
          <div>
            <div style={S.brandName}>INTER HIGH SUPPLY</div>
            <small style={S.brandSub}>Beauty Travel Distribution</small>
          </div>
        </button>

        <ul style={S.links} className="nav-desk">
          {links.map(l => (
            <li key={l.id} style={{ listStyle:'none' }}>
              <button style={S.link} onClick={() => go(l.id)}
                onMouseEnter={e => e.currentTarget.style.color='#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color='#ffffff'}
              >{l.label}</button>
            </li>
          ))}
          <li style={{ listStyle:'none' }}>
            <button style={S.ctaBtn} onClick={() => go('contact')}
              onMouseEnter={e => { e.currentTarget.style.background='#c9a84c'; e.currentTarget.style.color='#06080f' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#c9a84c' }}
            >{t('nav.contact')}</button>
          </li>
        </ul>

        <button className="nav-ham" style={S.ham} onClick={() => setOpen(true)}>
          <span style={S.hamL}/><span style={S.hamL}/><span style={S.hamL}/>
        </button>
      </nav>
    </>
  )
}

const LB = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    background:'none', border: active ? '1px solid #c9a84c' : '1px solid transparent',
    color: active ? '#c9a84c' : '#f4f6f9',
    fontFamily:'Barlow Condensed,sans-serif', fontSize:9, letterSpacing:'0.2em',
    textTransform:'uppercase', padding:'3px 10px', cursor:'pointer', fontWeight:500,
  }}>{children}</button>
)

const S = {
  langBar:{
    position:'fixed', top:0, left:0, right:0, zIndex:300,
    height:30, background:'rgba(6,8,15,0.98)',
    borderBottom:'1px solid rgba(201,168,76,0.06)',
    display:'flex', alignItems:'center', justifyContent:'flex-end',
    padding:'0 56px', gap:6,
  },
  nav:{
    position:'fixed', top:30, left:0, right:0, zIndex:200,
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'16px 56px',
    background:'linear-gradient(180deg,rgba(6,8,15,0.97) 0%,transparent 100%)',
    backdropFilter:'blur(10px)',
    borderBottom:'1px solid transparent',
    transition:'all 0.4s',
  },
  navSc:{
    background:'rgba(5,7,12,0.98)',
    borderBottom:'1px solid rgba(201,168,76,0.07)',
  },
  logoWrap:{ display:'flex', alignItems:'center', gap:12, background:'none', border:'none', cursor:'pointer', padding:0 },
  logoImg:{ width:40, height:40, objectFit:'contain', borderRadius:'50%' },
  brandName:{
    fontFamily:'Barlow Condensed,sans-serif',
    fontSize:11, fontWeight:700, letterSpacing:'0.24em',
    color:'#f0f4fc', textTransform:'uppercase', lineHeight:1.5, textAlign:'left',
  },
  brandSub:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7.5, letterSpacing:'0.2em', color:'#c9a84c', fontWeight:400, display:'block', textAlign:'left' },
  links:{ display:'flex', gap:30, listStyle:'none', alignItems:'center' },
  link:{ color:'#ffffff', fontSize:9.5, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, cursor:'pointer', transition:'color 0.3s', fontFamily:'Barlow Condensed,sans-serif', background:'none', border:'none' },
  ctaBtn:{ padding:'7px 20px', border:'1px solid #c9a84c', color:'#c9a84c', fontFamily:'Barlow Condensed,sans-serif', fontSize:9.5, letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:600, cursor:'pointer', background:'transparent', transition:'all 0.3s' },
  ham:{ display:'flex', flexDirection:'column', gap:5, background:'none', border:'none', padding:4 },
  hamL:{ display:'block', width:22, height:1, background:'#ffffff' },
  overlay:{ position:'fixed', inset:0, zIndex:400, background:'rgba(5,7,12,0.99)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:28 },
  closeBtn:{ position:'absolute', top:56, right:24, background:'none', border:'none', color:'#ffffff', fontSize:22, cursor:'pointer' },
  mLink:{ color:'#ffffff', fontSize:15, letterSpacing:'0.25em', textTransform:'uppercase', fontWeight:500, fontFamily:'Barlow Condensed,sans-serif', background:'none', border:'none', cursor:'pointer' },
}