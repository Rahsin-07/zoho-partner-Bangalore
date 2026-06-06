'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import MotionStyles from './MotionStyles'

// Section 1 — Hero.
// Persistent brand headline pinned at the top. A 6-slide slider rotates through
// the service intros — each shown as a two-column slide (copy left, visual right).
// To use a real photo/GIF for a slide, set its `img` field to an asset path
// (e.g. img: '/hero/slide-1.png'); the SVG illustration is the fallback.

const BOOKING = 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation'

const services = [
  {
    tag: 'Zoho Consulting',
    h: 'Subscribed to <span class="grad-blue-red">Zoho</span> but not seeing growth?',
    p: "The platform isn't the problem, the implementation is. As a Zoho Authorized Partner based in Bangalore, we help Bangalore businesses configure Zoho the right way so every rupee delivers real results.",
    cta: 'Connect with a Zoho Specialist',
    icon: 'bi-rocket-takeoff',
    color: '#2563eb',
    img: null,
  },
  {
    tag: 'Custom Zoho Solutions',
    h: 'Looking for a <span class="grad-blue-red">Custom Zoho</span> Solution Built for Your Bangalore Business?',
    p: 'As a certified Zoho customization partner in Bangalore, we build solutions that fit your exact process, from custom modules and automations to third party integrations. Nothing generic, everything yours.',
    cta: 'Design Your Custom Solution',
    icon: 'bi-sliders',
    color: '#dc2626',
    img: null,
  },
  {
    tag: 'Zoho Migration & Integration',
    h: 'Planning a <span class="grad-blue-red">Zoho Migration</span> or Integration?',
    p: 'Switching to Zoho or need it synced with your website, ERP, or other platforms? We manage end to end Zoho migration and integration for Bangalore businesses, ensuring full data integrity and zero disruption.',
    cta: 'Begin Your Migration',
    icon: 'bi-arrow-left-right',
    color: '#f59e0b',
    img: null,
  },
  {
    tag: 'Dedicated Zoho Analytics Expert',
    h: 'Can\'t get a <span class="grad-blue-red">clear picture</span> of your business performance in one place?',
    p: 'Work with a dedicated Zoho Analytics expert in Bangalore to build custom dashboards and tailored reports for your business, giving you live visibility into performance, sharper insights, and the confidence to act faster.',
    cta: 'Build My Custom Dashboard',
    icon: 'bi-bar-chart-line',
    color: '#2563eb',
    img: null,
  },
  {
    tag: 'Zoho CRM Implementation',
    h: 'Want to see exactly how <span class="grad-blue-red">Zoho CRM</span> can transform your Bangalore sales process?',
    p: 'Most Bangalore businesses use Zoho CRM only to store contacts. As a Zoho CRM partner in Bangalore, we build intelligent pipelines, lead scoring systems, and sales automation that actively drive conversions, not just store data.',
    cta: 'Schedule a Live Demo',
    icon: 'bi-people-fill',
    color: '#dc2626',
    img: null,
  },
  {
    tag: 'Dedicated Zoho Developer',
    h: 'Need a <span class="grad-blue-red">Dedicated Zoho</span> Developer Focused Entirely on Your Business?',
    p: 'New Zoho requirements coming in every week? Rather than outsourcing each task separately, hire a dedicated Zoho developer in Bangalore who works exclusively for your business, on demand, consistent, and fully committed.',
    cta: 'Hire a Zoho Developer',
    icon: 'bi-code-square',
    color: '#f59e0b',
    img: null,
  },
]

const TOTAL = services.length
const AUTOPLAY_MS = 4500

// Branded SVG illustration per slide. Shared frame keeps all 6 cohesive.
function SlideArt({ index, color }) {
  const frame = (children) => (
    <svg viewBox="0 0 460 360" role="img" aria-hidden
      style={{ width: '100%', height: 'auto', display: 'block', maxWidth: 460, margin: '0 auto' }}>
      <defs>
        <linearGradient id={`hbar-${index}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2563eb" /><stop offset="0.55" stopColor="#dc2626" /><stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="432" height="332" rx="24" fill="#f5f0e8" stroke="#e0d9ce" />
      <rect x="40" y="40" width="120" height="6" rx="3" fill={`url(#hbar-${index})`} />
      {children}
    </svg>
  )

  switch (index) {
    case 0: // Consulting — growth dashboard + rocket
      return frame(<g>
        <rect x="40" y="86" width="240" height="220" rx="16" fill="#f5f8ff" stroke="#dbeafe" />
        {[{x:70,h:70},{x:118,h:110},{x:166,h:90},{x:214,h:150}].map((b,i)=>(
          <rect key={i} x={b.x} y={286-b.h} width="30" height={b.h} rx="6" fill={['#93c5fd','#2563eb','#fca5a5','#f59e0b'][i]} />
        ))}
        <polyline points="85,250 133,200 181,224 229,150" fill="none" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 6" opacity="0.4" />
        <g transform="translate(330 130)">
          <path d="M0 80 C-6 30 26 -6 40 -36 C70 -6 78 38 56 80 L28 64 Z" fill="#2563eb" />
          <circle cx="36" cy="20" r="11" fill="#fff" />
          <path d="M8 80 l-14 26 l24 -10 Z" fill="#f59e0b" />
        </g>
      </g>)
    case 1: // Custom solutions — modular blocks + sliders
      return frame(<g>
        {[[60,90,'#2563eb'],[170,90,'#dc2626'],[280,90,'#f59e0b'],[60,190,'#f59e0b'],[170,190,'#2563eb']].map((b,i)=>(
          <rect key={i} x={b[0]} y={b[1]} width="90" height="80" rx="14" fill={`${b[2]}14`} stroke={b[2]} />
        ))}
        <rect x="280" y="190" width="90" height="80" rx="14" fill="#fff" stroke="#cbd5e1" strokeDasharray="6 6" />
        <text x="325" y="237" textAnchor="middle" fontSize="34" fill="#94a3b8" fontFamily="Inter,sans-serif">+</text>
        <g transform="translate(0 0)">
          <line x1="60" y1="306" x2="370" y2="306" stroke="#e8e3dc" strokeWidth="4" strokeLinecap="round" />
          <circle cx="150" cy="306" r="9" fill="#2563eb" />
          <circle cx="260" cy="306" r="9" fill="#dc2626" />
        </g>
      </g>)
    case 2: // Migration & integration — two systems syncing
      return frame(<g>
        <rect x="46" y="120" width="120" height="150" rx="16" fill="#f5f8ff" stroke="#dbeafe" />
        <rect x="294" y="120" width="120" height="150" rx="16" fill="#fef6f0" stroke="#fed7aa" />
        {[140,170,200,230].map((y,i)=>(<rect key={i} x="66" y={y} width="80" height="10" rx="5" fill="#93c5fd" />))}
        {[140,170,200,230].map((y,i)=>(<rect key={'b'+i} x="314" y={y} width="80" height="10" rx="5" fill="#fca5a5" />))}
        <path d="M176 165 h100" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#arr2a)" />
        <path d="M284 215 h-100" fill="none" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arr2b)" />
        <defs>
          <marker id="arr2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#2563eb" /></marker>
          <marker id="arr2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#f59e0b" /></marker>
        </defs>
        <circle cx="230" cy="190" r="22" fill="#fff" stroke="#dc2626" strokeWidth="3" />
        <path d="M230 178 a12 12 0 1 1 -10 6" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
        <path d="M220 184 l-2 8 l8 -2 Z" fill="#dc2626" />
      </g>)
    case 3: // Analytics — dashboard with gauge + charts
      return frame(<g>
        <rect x="40" y="86" width="180" height="120" rx="14" fill="#f5f8ff" stroke="#dbeafe" />
        <path d="M70 176 a40 40 0 0 1 80 0" fill="none" stroke="#e2e8f0" strokeWidth="12" />
        <path d="M70 176 a40 40 0 0 1 64 -31" fill="none" stroke="#2563eb" strokeWidth="12" strokeLinecap="round" />
        <line x1="110" y1="176" x2="132" y2="150" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
        <circle cx="110" cy="176" r="6" fill="#0b1220" />
        <rect x="240" y="86" width="180" height="120" rx="14" fill="#fff" stroke="#e8e3dc" />
        <polyline points="258,180 290,150 322,166 354,120 400,134" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {[258,290,322,354,400].map((x,i)=>(<circle key={i} cx={x} cy={[180,150,166,120,134][i]} r="4" fill="#f59e0b" />))}
        <rect x="40" y="226" width="380" height="80" rx="14" fill="#fff" stroke="#e8e3dc" />
        {[[60,'#2563eb','56%'],[180,'#dc2626','82%'],[300,'#f59e0b','40%']].map((c,i)=>(
          <g key={i}>
            <rect x={c[0]} y="246" width="100" height="12" rx="6" fill="#eef2f7" />
            <rect x={c[0]} y="246" width={[56,82,40][i]} height="12" rx="6" fill={c[1]} />
            <text x={c[0]} y="284" fontSize="13" fill="#64748b" fontFamily="Inter,sans-serif">{c[2]}</text>
          </g>
        ))}
      </g>)
    case 4: // CRM — sales pipeline / funnel
      return frame(<g>
        {[[70,'#2563eb',300],[110,'#dc2626',230],[150,'#f59e0b',160],[190,'#1e3a8a',90]].map((s,i)=>(
          <g key={i}>
            <rect x={(460-s[2])/2} y={s[0]} width={s[2]} height="30" rx="8" fill={`${s[1]}1a`} stroke={s[1]} />
          </g>
        ))}
        <text x="230" y="91" textAnchor="middle" fontSize="13" fill="#2563eb" fontFamily="Inter,sans-serif" fontWeight="700">Leads</text>
        <text x="230" y="131" textAnchor="middle" fontSize="13" fill="#dc2626" fontFamily="Inter,sans-serif" fontWeight="700">Qualified</text>
        <text x="230" y="171" textAnchor="middle" fontSize="13" fill="#d97706" fontFamily="Inter,sans-serif" fontWeight="700">Proposal</text>
        <text x="230" y="211" textAnchor="middle" fontSize="13" fill="#1e3a8a" fontFamily="Inter,sans-serif" fontWeight="700">Won</text>
        {[[120,'#2563eb'],[180,'#dc2626'],[240,'#f59e0b'],[300,'#1e3a8a']].map((c,i)=>(
          <g key={'av'+i} transform={`translate(${c[0]} 270)`}>
            <circle r="20" fill={`${c[1]}1a`} stroke={c[1]} />
            <circle cy="-4" r="6" fill={c[1]} />
            <path d="M-10 12 a10 10 0 0 1 20 0 Z" fill={c[1]} />
          </g>
        ))}
      </g>)
    default: // Developer — code window + gear
      return frame(<g>
        <rect x="46" y="80" width="300" height="200" rx="14" fill="#0b1220" />
        <rect x="46" y="80" width="300" height="28" rx="14" fill="#1a2236" />
        <circle cx="68" cy="94" r="4" fill="#f59e0b" /><circle cx="84" cy="94" r="4" fill="#dc2626" /><circle cx="100" cy="94" r="4" fill="#34d399" />
        <rect x="68" y="128" width="60" height="9" rx="4" fill="#fcd34d" />
        <rect x="136" y="128" width="120" height="9" rx="4" fill="#93c5fd" />
        <rect x="84" y="150" width="150" height="9" rx="4" fill="#fca5a5" />
        <rect x="84" y="172" width="90" height="9" rx="4" fill="#93c5fd" />
        <rect x="182" y="172" width="64" height="9" rx="4" fill="#fcd34d" />
        <rect x="68" y="194" width="120" height="9" rx="4" fill="#ffffff" opacity="0.7" />
        <rect x="68" y="216" width="180" height="9" rx="4" fill="#93c5fd" />
        <g transform="translate(360 210)" fill="#f59e0b">
          <circle r="26" fill="#fff" stroke="#f59e0b" strokeWidth="9" />
          <rect x="-6" y="-46" width="12" height="16" rx="3" /><rect x="-6" y="30" width="12" height="16" rx="3" />
          <rect x="-46" y="-6" width="16" height="12" rx="3" /><rect x="30" y="-6" width="16" height="12" rx="3" />
        </g>
      </g>)
  }
}

export default function Hero() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % TOTAL), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const go = useCallback((i) => setActive((i + TOTAL) % TOTAL), [])

  const service = services[active]
  const accent = service.color
  const num = String(active + 1).padStart(2, '0')

  const arrowBtn = {
    width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
    background: '#fff', border: '1px solid #e8e3dc', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#0b1220', transition: 'all 0.25s', zIndex: 3,
    boxShadow: '0 8px 22px rgba(11,18,32,0.08)',
  }

  return (
    <section id="hero" ref={ref} style={{
      background: 'linear-gradient(160deg, #fffcf0 0%, #fff4d6 100%)',
      padding: '48px 0 48px', position: 'relative', overflow: 'hidden',
    }}>
      <MotionStyles />
      <style>{`
        @keyframes zx-slide-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.22), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '28%', right: '22%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

      <div className="container position-relative" style={{ zIndex: 2 }}>

        {/* Persistent certified pill */}
        <div className="fade-up zx-su" style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
          <div className="pill">
            <span className="pill-dot" />
            <span>Zoho Authorized Partner · Bangalore, India</span>
            <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
            <span style={{ color: '#2563eb', fontWeight: 700 }}>
              <i className="bi bi-patch-check-fill" /> 15+ Years
            </span>
          </div>
        </div>

        {/* Persistent brand headline */}
        <h1 className="fade-up" style={{
          fontFamily: 'Inter,sans-serif',
          fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
          fontWeight: 800, color: '#0b1220', textAlign: 'center',
          marginBottom: 24, letterSpacing: '-0.028em', lineHeight: 1.05,
        }}>
          <span className="grad-blue-red">Zoho Partner </span>
           in <span className="grad-blue-red">Bangalore, India</span>
        </h1>

        {/* ── Unified wrapper: slider + trust row + buttons all share the same left edge ── */}
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>

          {/* SLIDER */}
          <div style={{ position: 'relative' }}>
            <div key={active} className="row align-items-center g-4 g-lg-5" style={{ minHeight: 240, animation: 'zx-slide-in 0.55s var(--ease-out)' }}>
              {/* LEFT — copy */}
              <div className="col-lg-6">
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: `${service.color}15`, color: service.color,
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50,
                  marginBottom: 18, fontFamily: 'Inter,sans-serif',
                }}>
                  <span style={{ opacity: 0.65 }}>{num}</span>
                  <span style={{ width: 1, height: 11, background: 'currentColor', opacity: 0.35 }} />
                  <i className={`bi ${service.icon}`} /> {service.tag}
                </span>

                <h2
                  style={{
                    fontFamily: 'Inter,sans-serif',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#0b1220',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                  }}
                  dangerouslySetInnerHTML={{ __html: service.h }}
                />

                <p style={{
                  fontSize: '1.02rem', color: '#475569', lineHeight: 1.72,
                  marginBottom: 26, fontFamily: 'Inter,sans-serif',
                }}>{service.p}</p>

                <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-gradient ahover"
                  style={{ padding: '0.9rem 1.95rem', fontSize: '0.95rem' }}>
                  {service.cta} <i className="bi bi-arrow-right" />
                </a>
              </div>

              {/* RIGHT — visual (image if provided, else SVG illustration) */}
              <div className="col-lg-6">
                {service.img ? (
                  <img src={service.img} alt={service.h}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 24, border: '1px solid #e8e3dc', boxShadow: '0 30px 80px rgba(11,18,32,0.10)' }} />
                ) : (
                  <div style={{ filter: 'drop-shadow(0 30px 60px rgba(11,18,32,0.07))', opacity: 0.96 }}>
                    <SlideArt index={active} color={accent} />
                  </div>
                )}
              </div>
            </div>

            {/* Controls — dots (left) + arrows (right) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                {Array.from({ length: TOTAL }).map((_, i) => {
                  const isActive = i === active
                  return (
                    <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                      style={{
                        height: 9, width: isActive ? 34 : 9, borderRadius: 50,
                        border: 'none', padding: 0, cursor: 'pointer',
                        background: isActive ? services[i].color : '#d9d3ca',
                        transition: 'width 0.4s cubic-bezier(.2,.7,.2,1), background 0.3s',
                      }} />
                  )
                })}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => go(active - 1)} aria-label="Previous slide" style={arrowBtn}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.color = '#0b1220' }}>
                  <i className="bi bi-chevron-left" />
                </button>
                <button onClick={() => go(active + 1)} aria-label="Next slide" style={arrowBtn}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.color = '#0b1220' }}>
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          {/* END SLIDER */}

          {/* Trust / rating row — now inside unified wrapper, aligns with slide copy */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
            <div style={{ display: 'flex' }}>
              {[{ i: 'SV', c: '#2563eb' }, { i: 'SS', c: '#dc2626' }, { i: 'KP', c: '#f59e0b' }].map((av, i) => (
                <span key={av.i} style={{
                  width: 36, height: 36, borderRadius: '50%', background: av.c,
                  color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                  fontFamily: 'Inter,sans-serif', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #fff', marginLeft: i === 0 ? 0 : -10,
                  boxShadow: '0 4px 12px rgba(11,18,32,0.12)',
                }}>{av.i}</span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-flex', gap: 2, color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: '0.92rem' }} />)}
              </span>
              <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, color: '#0b1220', fontSize: '0.95rem' }}>5/5</span>
            </div>
          </div>

          {/* Persistent contact quick actions — now inside unified wrapper, aligns with slide copy */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
            {[
              { label: 'Call',      icon: 'bi-telephone',      href: 'tel:+918190009222' },
              { label: 'WhatsApp',  icon: 'bi-whatsapp',       href: 'https://wa.me/918190009222', accent: '#16a34a' },
              { label: 'Email',     icon: 'bi-envelope',       href: 'mailto:info@zoflowx.com' },
              { label: 'Schedule',  icon: 'bi-calendar-check', href: BOOKING },
              { label: 'Live Chat', icon: 'bi-chat-dots-fill',  href: '#chat', accent: '#7c3aed' }
            ].map(a => (
              <a key={a.label} href={a.href}
                target={a.href.startsWith('http') ? '_blank' : undefined}
                rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', border: '1px solid #e8e3dc', borderRadius: 50,
                  padding: '6px 14px', fontSize: '0.86rem', fontWeight: 600,
                  fontFamily: 'Inter,sans-serif', color: '#334155', textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(.2,.7,.2,1)', cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const col = a.accent || '#2563eb'
                  e.currentTarget.style.borderColor = col
                  e.currentTarget.style.color = col
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(11,18,32,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8e3dc'
                  e.currentTarget.style.color = '#334155'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                <i className={`bi ${a.icon}`} style={{ color: a.accent || '#2563eb', fontSize: '0.98rem' }} />
                {a.label}
              </a>
            ))}
          </div>

        </div>
        {/* END unified wrapper */}

      </div>
    </section>
  )
}