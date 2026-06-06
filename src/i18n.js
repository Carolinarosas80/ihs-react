import { useContext } from 'react'
import { LangCtx } from './App.jsx'

const T = {
  'nav.about':    { es:'Quiénes Somos',  en:'About Us'    },
  'nav.markets':  { es:'Mercados',       en:'Markets'     },
  'nav.services': { es:'Servicios',      en:'Services'    },
  'nav.gallery':  { es:'Galería',        en:'Gallery'     },
  'nav.contact':  { es:'Contacto',       en:'Contact'     },

  'hero.eye':  { es:'Beauty Travel Distribution', en:'Beauty Travel Distribution' },
  'hero.l1':   { es:'Elevamos Marcas',             en:'Elevating Prestige'         },
  'hero.l2':   { es:'Premium en',                  en:'Brands Across'              },
  'hero.l3':   { es:'Latinoamérica',               en:'Latin America'              },
  'hero.sub':  {
    es:'Distribución premium de perfumes, fragancias y líneas de belleza a través de canales exclusivos en los mercados de Sudamérica.',
    en:'Premium distribution of perfumes, fragrances and beauty lines through exclusive channels across South American markets.',
  },
  'hero.cta':     { es:'Trabajemos Juntos', en:'Partner With Us' },
  'hero.explore': { es:'Conocer más',       en:'Learn More'      },
  'hero.s1n':{ es:'AAA',   en:'AAA'   }, 'hero.s1l':{ es:'Portfolio de Marcas',  en:'Brand Portfolio'   },
  'hero.s2n':{ es:'4+',    en:'4+'    }, 'hero.s2l':{ es:'Canales de Mercado',   en:'Market Channels'   },
  'hero.s3n':{ es:'LATAM', en:'LATAM' }, 'hero.s3l':{ es:'Cobertura Regional',   en:'Regional Coverage' },
  'hero.s4n':{ es:'360°',  en:'360°'  }, 'hero.s4l':{ es:'Gestión de Marca',     en:'Brand Management'  },

  'about.tag':   { es:'Quiénes Somos',                      en:'Who We Are'                    },
  'about.title': { es:'El arte de la Distribución Premium', en:'The Art of Luxury Distribution' },
  'about.p1':    { es:'Inter High Supply SRL es una empresa dedicada a la distribución de perfumes, fragancias, productos de belleza y líneas de cosmética, representando un amplio portfolio de marcas de alta gama y categoría AAA.', en:'Inter High Supply SRL is dedicated to the distribution of perfumes, fragrances, beauty products and cosmetics — representing a large portfolio of top-tier and AAA brands.' },
  'about.p2':    { es:'Nuestro objetivo es el desarrollo en los mercados minoristas de Sudamérica a través de diferentes canales gestionados por nuestros especialistas.', en:'Our goal is the development of South American retail markets through different channels managed by our specialists.' },
  'about.p3':    { es:'Nuestro amplio conocimiento en estos mercados brinda a nuestros clientes la confianza y respaldo necesarios para confiar en nuestra empresa la administración de sus marcas.', en:'Our extensive knowledge in these markets gives our customers the necessary confidence to trust our firm with the administration of their brands.' },

  'markets.tag':   { es:'Canales de Venta',           en:'Sales Channels'        },
  'markets.title': { es:'Acceso Exclusivo al Mercado', en:'Exclusive Market Access'},
  'markets.sub':   { es:'Operamos a través de canales altamente seleccionados que garantizan el posicionamiento premium de cada marca.', en:'We operate through highly curated channels that ensure premium brand placement and maximum prestige.' },

  'services.tag':   { es:'Qué Hacemos',              en:'What We Do'                  },
  'services.title': { es:'Gestión Integral de Marca', en:'Full-Spectrum Brand Management' },
  'services.sub':   { es:'Desde la estrategia en punto de venta hasta la logística de importación, nuestros especialistas brindan soluciones integrales.', en:'From point of purchase strategy to import logistics, our specialists deliver end-to-end solutions.' },

  'gallery.tag':   { es:'Galería Corporativa', en:'Corporate Gallery' },
  'gallery.title': { es:'Presencia Global',    en:'Global Presence'   },

  'global.tag':   { es:'Presencia Global',               en:'Global Reach'              },
  'global.title': { es:'Latinoamérica es Nuestro Hogar', en:'Latin America Is Our Home' },
  'global.quote': { es:'"Nuestro amplio conocimiento en estos mercados brinda a nuestros clientes la confianza y el respaldo necesarios para confiar en nuestra empresa la administración de sus marcas."', en:'"Our extensive knowledge in these markets gives our customers the necessary confidence and support to trust our firm in the administration of their brands."' },

  'contact.tag':    { es:'Contacto',             en:'Contact'                    },
  'contact.title':  { es:'Hablemos de tu Marca', en:"Let's Talk About Your Brand" },
  'contact.lead':   { es:'Exploremos juntos cómo Inter High Supply puede posicionar sus productos en los canales correctos, con los socios adecuados, en los mercados que importan.', en:"Let's explore how Inter High Supply can position your products in the right channels, with the right partners, in the markets that matter." },
  'contact.loc':    { es:'Ubicación',            en:'Location'        },
  'contact.cov':    { es:'Cobertura',            en:'Coverage'        },
  'contact.fname':  { es:'Nombre',               en:'Name'            },
  'contact.fcomp':  { es:'Empresa',              en:'Company'         },
  'contact.femail': { es:'Email Corporativo',    en:'Corporate Email' },
  'contact.fphone': { es:'Teléfono',             en:'Phone'           },
  'contact.ftype':  { es:'Tipo de Consulta',     en:'Inquiry Type'    },
  'contact.fmsg':   { es:'Mensaje',              en:'Message'         },
  'contact.fsel':   { es:'Seleccionar…',         en:'Select…'         },
  'contact.fcon':   { es:'Acepto la política de privacidad y el tratamiento de mis datos.', en:'I accept the privacy policy and the processing of my contact data.' },
  'contact.fsend':  { es:'Enviar Consulta',      en:'Send Inquiry'    },
  'contact.fok':    { es:'✓ ¡Mensaje enviado! Nos pondremos en contacto a la brevedad.', en:"✓ Message sent! We'll be in touch shortly." },

  'footer.desc':    { es:'Distribución premium de productos de belleza y fragancias en los mercados minoristas de Latinoamérica.', en:'Premium distribution of beauty and fragrance brands across Latin American retail markets.' },
  'footer.company':  { es:'Empresa',   en:'Company'  },
  'footer.services': { es:'Servicios', en:'Services' },
  'footer.markets':  { es:'Mercados',  en:'Markets'  },
  'footer.rights':   { es:'Todos los derechos reservados.', en:'All rights reserved.' },
  'footer.by':       { es:'Diseño y desarrollo por',        en:'Designed & developed by' },
}

export function useT() {
  const { lang, toggle } = useContext(LangCtx)
  const t = (key) => T[key]?.[lang] ?? T[key]?.es ?? key
  return { t, lang, toggle }
}

// ── MARKETS ──
export const MARKETS_DATA = [
  {
    key:'dutyfree',
    name:{ es:'Tiendas Duty Free',     en:'Duty Free Shops'     },
    desc:{ es:'Ambientes minoristas premium en los principales aeropuertos y pasos fronterizos internacionales de la región.', en:"Premium airport and border duty-free retail environments across the region's major international hubs." },
    img:'/duty1.jpg',
    fallback:'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?w=700&auto=format&fit=crop&q=80',
  },
  {
    key:'cruise',
    name:{ es:'Cruceros',              en:'Cruise Ships'         },
    desc:{ es:'Experiencias de venta a bordo en cruceros de lujo, llegando a viajeros internacionales de alto poder adquisitivo.', en:'On-board retail for luxury cruise lines, reaching affluent international travelers.' },
    img:'/cruceros.jpg',
    fallback:'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=700&auto=format&fit=crop&q=80',
  },
  {
    key:'border',
    name:{ es:'Tiendas Fronterizas',   en:'Border Shops'         },
    desc:{ es:'Puntos estratégicos de venta en pasos fronterizos con alto volumen y ventajas arancelarias.', en:'Strategic border crossing retail points offering high-volume, duty-advantaged environments.' },
    img:'/hallaeropuerto.jpg',
    fallback:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&auto=format&fit=crop&q=80',
  },
  {
    key:'expo',
    name:{ es:'Ferias y Exposiciones', en:'Exhibitions & Stands' },
    desc:{ es:'Presencia premium en ferias industriales, eventos comerciales y activaciones de marca en toda LATAM.', en:'Premium presence at industry events, trade shows and brand activations throughout LATAM.' },
    img:'/feria.jpg',
    fallback:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&auto=format&fit=crop&q=80',
  },
]

// ── SERVICES — iconos SVG azules (estilo ihs-blue) ──
export const SERVICES_DATA = [
  {
    num:'01',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
      <path d="M14 28 L24 18 L34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 18 L24 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="18" r="2.5" fill="currentColor"/>
    </svg>`,
    title:{ es:'Point of Purchase', en:'Point of Purchase' },
    body:{ es:'Desarrollamos estrategias para exhibir y posicionar sus productos en los POP que gestionamos, con visitas in situ. Un producto que no se ve, no se vende.', en:'We develop strategies to display and position your products across all POP channels, with on-site visits to guarantee stock and display quality.' },
  },
  {
    num:'02',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
      <path d="M8 26 L40 26" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="16" cy="38" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="32" cy="38" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 20 L18 10 L30 10 L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M22 10 L22 8 M26 10 L26 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
    title:{ es:'Logística', en:'Logistics' },
    body:{ es:'Nuestros especialistas asesoran cómo aumentar su rentabilidad logrando el esquema logístico correcto, mejorando tiempos de entrega y reduciendo fricciones en la cadena de suministro.', en:'Our specialists advise on how to increase profit by achieving the correct logistics scheme, improving delivery times and reducing supply chain friction.' },
  },
  {
    num:'03',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
      <path d="M24 8 L24 40M10 16 L38 16M10 32 L38 32" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 24 L23 27 L28 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>`,
    title:{ es:'Business Development', en:'Business Development' },
    body:{ es:'Nuestro conocimiento en desarrollo de mercados le brinda la solución perfecta para ganar los mercados que manejamos, asesorando qué productos desarrollar.', en:'Our market development knowledge gives you the perfect solution to gain the markets we handle, advising which products to develop.' },
  },
  {
    num:'04',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 10 L26 18 L34 18 L28 23 L30 31 L24 26 L18 31 L20 23 L14 18 L22 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <path d="M24 38 L24 42 M14 35 L11 38 M34 35 L37 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
    title:{ es:'Administración de Marca', en:'Brand Administration' },
    body:{ es:'Nuestra especialización en el desarrollo de productos de élite en diferentes mercados es nuestra marca registrada. Un especialista dedicado gestionará todas sus necesidades.', en:'Our specialization in developing elite products across markets is our hallmark. A dedicated specialist will handle all your needs.' },
  },
  {
    num:'05',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="16" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.35"/>
      <rect x="26" y="14" width="16" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.35"/>
      <path d="M22 24 L26 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M23.5 21.5 L26.5 24.5 L23.5 27.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 22 L10 26 M38 22 L38 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>`,
    title:{ es:'Importación y Exportación', en:'Import & Export' },
    body:{ es:'Nuestro departamento gestiona toda la logística para ingresar productos a diferentes países, para que su foco sea el crecimiento de su negocio.', en:'Our department handles all logistics for entering products into different countries, so your focus remains entirely on business growth.' },
  },
  {
    num:'06',
    svg:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
      <ellipse cx="24" cy="24" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <path d="M10 24 L38 24" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <path d="M12 17 Q24 20 36 17M12 31 Q24 28 36 31" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>`,
    title:{ es:'Estrategia de Mercado', en:'Market Strategy' },
    body:{ es:'Estrategias personalizadas de ingreso y expansión basadas en profundo conocimiento regional. Aportamos la inteligencia y relaciones necesarias para cada mercado.', en:'Tailored market entry and expansion strategies built on deep regional insight. We bring the intelligence and relationships needed for each market.' },
  },
]

// ── GALLERY ──
export const GALLERY_DATA = [
  { src:'/reunioncorpo.jpg', cap:{ es:'Liderazgo Ejecutivo', en:'Executive Leadership' }, style:{ gridColumn:'span 5', gridRow:'span 2' } },
  { src:'/pistadeavion.jpg', cap:{ es:'Aeropuertos Internacionales', en:'International Airports' }, style:{ gridColumn:'span 4' } },
  { src:'/deposito.jpg', cap:{ es:'Depósito Tecnológico', en:'Tech Warehouse' }, style:{ gridColumn:'span 3' } },
  { src:'/buquedecarga.jpg', cap:{ es:'Estrategia Comercial', en:'Commercial Strategy' }, style:{ gridColumn:'span 4' } },
]

export const REGIONS = ['Argentina','Brasil','Chile','Uruguay','Paraguay','Colombia','Perú','Bolivia','Ecuador','Venezuela']

export const CONTACT_TYPES = {
  es:['Representación de Marca','Distribución','Importación / Exportación','Business Development','Estrategia de Mercado','Otro'],
  en:['Brand Representation','Distribution','Import / Export','Business Development','Market Strategy','Other'],
}
