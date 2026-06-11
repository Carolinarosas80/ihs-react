import React, { useEffect, useRef, useState } from 'react'
import { useT, CONTACT_TYPES } from '../i18n.js'

export default function Contact() {
  const { t, lang } = useT()
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [form, setForm] = useState({ name:'',company:'',email:'',phone:'',type:'',message:'',consent:false })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold:0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const r = (d=0) => ({ opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(20px)', transition:`all 0.85s ease ${d}s` })
  const set = (e) => { const { name, value, type, checked } = e.target; setForm(f => ({ ...f, [name]: type==='checkbox'?checked:value })) }
  const submit = (e) => { e.preventDefault(); setSending(true); setTimeout(() => { setSending(false); setSent(true) }, 1400) }

  const inp = {
    background:'rgba(12,16,32,0.7)', border:'1px solid rgba(201,168,76,0.1)',
    color:'#f0f4fc', fontFamily:'Barlow,sans-serif',
    fontSize:12.5, fontWeight:300, padding:'12px 15px',
    outline:'none', width:'100%', transition:'border-color 0.3s',
  }
  const focus = e => e.target.style.borderColor='rgba(201,168,76,0.35)'
  const blur  = e => e.target.style.borderColor='rgba(201,168,76,0.1)'

  return (
    <section id="contact" ref={ref} style={S.section}>
      <div style={S.bgOv} />
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={S.grid}>
          <div style={r(0)}>
            <div className="section-tag">{t('contact.tag')}</div>
            <h2 className="section-title">
              <em>{t('contact.title').split(' ').slice(0,2).join(' ')}</em>{' '}
              {t('contact.title').split(' ').slice(2).join(' ')}
            </h2>
            <p style={S.lead}>{t('contact.lead')}</p>
            <div style={S.details}>
              {[
                { ico:'✉', label:'Email', val:'info@interhighsupply.com', href:'mailto:info@interhighsupply.com' },
                { ico:'◎', label:t('contact.loc'), val: 'Montevideo, Uruguay' },
                { ico:'◎', label:t('contact.loc'), val: 'Buenos Aires , Argentina' },
                { ico:'◉', label:t('contact.cov'), val:'Latinoamérica / South America' },
              ].map((item,i) => (
                <div key={i} style={S.dItem}>
                  <div style={S.dIco}>{item.ico}</div>
                  <div>
                    <strong style={S.dLabel}>{item.label}</strong>
                    {item.href ? <a href={item.href} style={S.dVal}>{item.val}</a> : <span style={S.dVal}>{item.val}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width:48, height:1, background:'linear-gradient(90deg,#c9a84c,transparent)', marginTop:36, opacity:0.5 }} />
          </div>

          <div style={r(0.15)}>
            {sent ? (
              <div style={S.ok}>{t('contact.fok')}</div>
            ) : (
              <form onSubmit={submit} style={S.form}>
                <div style={S.row}>
                  <div style={S.grp}><label style={S.lbl}>{t('contact.fname')}</label><input name="name" required value={form.name} onChange={set} placeholder="John Smith" style={inp} onFocus={focus} onBlur={blur}/></div>
                  <div style={S.grp}><label style={S.lbl}>{t('contact.fcomp')}</label><input name="company" required value={form.company} onChange={set} placeholder="Company Name" style={inp} onFocus={focus} onBlur={blur}/></div>
                </div>
                <div style={S.grp}><label style={S.lbl}>{t('contact.femail')}</label><input name="email" type="email" required value={form.email} onChange={set} placeholder="email@company.com" style={inp} onFocus={focus} onBlur={blur}/></div>
                <div style={S.grp}><label style={S.lbl}>{t('contact.fphone')}</label><input name="phone" type="tel" value={form.phone} onChange={set} placeholder="+54 9 11 0000 0000" style={inp} onFocus={focus} onBlur={blur}/></div>
                <div style={S.grp}>
                  <label style={S.lbl}>{t('contact.ftype')}</label>
                  <select name="type" required value={form.type} onChange={set} style={{ ...inp,cursor:'pointer',appearance:'none' }} onFocus={focus} onBlur={blur}>
                    <option value="">{t('contact.fsel')}</option>
                    {CONTACT_TYPES[lang].map((o,i) => <option key={i} value={o} style={{ background:'#0c1020' }}>{o}</option>)}
                  </select>
                </div>
                <div style={S.grp}><label style={S.lbl}>{t('contact.fmsg')}</label><textarea name="message" value={form.message} onChange={set} rows={4} placeholder="…" style={{ ...inp,resize:'vertical',minHeight:110 }} onFocus={focus} onBlur={blur}/></div>
                <div style={S.consent}>
                  <input type="checkbox" name="consent" id="con" required checked={form.consent} onChange={set} style={{ accentColor:'#c9a84c',flexShrink:0,marginTop:3 }}/>
                  <label htmlFor="con" style={S.conLabel}>{t('contact.fcon')}</label>
                </div>
                <button type="submit" className="btn-gold" style={{ alignSelf:'flex-start',marginTop:4 }} disabled={sending}>
                  {sending ? '…' : `${t('contact.fsend')} →`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const S = {
  section:{ padding:'110px 80px', position:'relative', overflow:'hidden', background:'#07090f' },
  bgOv:{ position:'absolute', inset:0, background:'rgba(6,8,15,0.6)' },
  grid:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, maxWidth:1240, margin:'0 auto', alignItems:'start' },
  lead:{ fontSize:12.5, lineHeight:2.1, color:'#2e3d58', margin:'14px 0 34px', fontFamily:'Barlow,sans-serif' },
  details:{ display:'flex', flexDirection:'column', gap:16 },
  dItem:{ display:'flex', alignItems:'flex-start', gap:12 },
  dIco:{ width:32, height:32, border:'1px solid rgba(201,168,76,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, flexShrink:0, color:'#7a6430' },
  dLabel:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7.5, letterSpacing:'0.22em', textTransform:'uppercase', color:'#7a6430', fontWeight:700, display:'block', marginBottom:2 },
  dVal:{ fontSize:12, color:'#2e3d58', display:'block', fontFamily:'Barlow,sans-serif' },
  form:{ display:'flex', flexDirection:'column', gap:13 },
  row:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 },
  grp:{ display:'flex', flexDirection:'column', gap:6 },
  lbl:{ fontFamily:'Barlow Condensed,sans-serif', fontSize:7.5, letterSpacing:'0.25em', textTransform:'uppercase', color:'#7a6430', fontWeight:700 },
  consent:{ display:'flex', alignItems:'flex-start', gap:10 },
  conLabel:{ fontSize:11, color:'#2e3d58', lineHeight:1.7, cursor:'pointer', fontFamily:'Barlow,sans-serif' },
  ok:{ padding:'22px 26px', background:'rgba(201,168,76,0.07)', border:'1px solid rgba(201,168,76,0.2)', color:'#c9a84c', fontSize:13, letterSpacing:'0.04em', lineHeight:1.8, fontFamily:'Barlow Condensed,sans-serif' },
}
