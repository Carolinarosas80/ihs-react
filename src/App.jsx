import React, { useState, createContext, useContext } from 'react'
import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import About    from './components/About.jsx'
import Markets  from './components/Markets.jsx'
import Services from './components/Services.jsx'
import Gallery  from './components/Gallery.jsx'
import Global   from './components/Global.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

export const LangCtx = createContext({ lang:'es', toggle:()=>{} })
export const useLang = () => useContext(LangCtx)

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('ihs-lang') || 'es')
  const toggle = (l) => { setLang(l); localStorage.setItem('ihs-lang', l) }
  return (
    <LangCtx.Provider value={{ lang, toggle }}>
      <Navbar /><Hero /><About /><Markets /><Services /><Gallery /><Global /><Contact /><Footer />
    </LangCtx.Provider>
  )
}
