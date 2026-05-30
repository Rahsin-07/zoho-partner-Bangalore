'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import MotionStyles from './MotionStyles'

// Section 1 — Hero.
// The slider now owns the headline. Slide 0 is the full-size brand hero
// (big H1 + subtitle + CTA). Slides 1..N are the service intros, each with a
// SMALL headline line pinned to the top and the service content below it.
// Auto-advancing, no pause on hover, side arrows + dots.

const services = [
  {
    tag: 'Zoho Consulting',
    h: 'Subscribed to Zoho but still not seeing business growth?',
    p: "The platform isn't the problem, the implementation is. As a Zoho Authorized Partner based in Bangalore, we help Bangalore businesses configure and scale Zoho the right way so every rupee you invest in your subscription delivers measurable returns.",
    cta: 'Connect with a Zoho Specialist',
    icon: 'bi-rocket-takeoff',
    color: '#2563eb',
  },
  {
    tag: 'Custom Zoho Solutions',
    h: 'Looking for a Zoho Solution Custom Specifically to Your Bangalore Business?',
    p: 'A standard Zoho setup was not built for the way your Bangalore business actually runs. As a certified Zoho customization partner in Bangalore, we create Zoho solutions that fit your exact process, from custom modules and automations to third party integrations. Everything is set up for your business, nothing is generic.',
    cta: 'Design Your Custom Solution',
    icon: 'bi-sliders',
    color: '#dc2626',
  },
  {
    tag: 'Zoho Migration & Integration',
    h: 'Planning a Zoho Migration or Integration for Your Business?',
    p: 'Switching from your current software to Zoho? Or need Zoho synced with your website, ERP, or external platforms? We manage end to end Zoho migration and integration for Bangalore businesses, ensuring full data integrity and uninterrupted operations.',
    cta: 'Begin Your Migration',
    icon: 'bi-arrow-left-right',
    color: '#f59e0b',
  },
  {
    tag: 'Dedicated Zoho Analytics Expert',
    h: "Can't get a clear picture of your business performance in one place?",
    p: 'Work with a dedicated Zoho Analytics expert in Bangalore to build custom dashboards and tailored reports for your business, giving you live visibility into performance, sharper insights, and the confidence to act faster.',
    cta: 'Build My Custom Dashboard',
    icon: 'bi-bar-chart-line',
    color: '#2563eb',
  },
  {
    tag: 'Zoho CRM Implementation',
    h: 'Want to see exactly how Zoho CRM can transform your Bangalore sales process?',
    p: 'Most Bangalore businesses use Zoho CRM only to store contacts. As a Zoho CRM partner in Bangalore, we build intelligent pipelines, lead scoring systems, and sales automation that actively drive conversions, not just store data.',
    cta: 'Schedule a Live Demo',
    icon: 'bi-people-fill',
    color: '#dc2626',
  },
  {
    tag: 'Dedicated Zoho Developer',
    h: 'Need a Dedicated Zoho Developer Focused Entirely on Your Business?',
    p: 'New Zoho requirements coming in every week? Rather than outsourcing each task separately, hire a dedicated Zoho developer in Bangalore who works exclusively for your business, on demand, consistent, and fully committed.',
    cta: 'Hire a Zoho Developer',
    icon: 'bi-code-square',
    color: '#f59e0b',
  },
]

// total slides = 1 hero + services
const TOTAL = services.length + 1
const HERO_ACCENT = '#2563eb'

const moduleChips = [
  { label: 'Zoho CRM',       icon: 'bi-people-fill',    x: '2%',  y: '15%', delay: 0,   color: '#2563eb' },
  { label: 'Zoho Books',     icon: 'bi-journal-text',   x: '88%', y: '13%', delay: 0.4, color: '#dc2626' },
  { label: 'Zoho Creator',   icon: 'bi-app-indicator',  x: '90%', y: '64%', delay: 0.2, color: '#2563eb' },
  { label: 'Zoho Analytics', icon: 'bi-bar-chart-line', x: '1%',  y: '60%', delay: 0.8, color: '#f59e0b' },
]

const AUTOPLAY_MS = 4500

// Reusable small headline used on the service slides (reduced + pinned top)
function MiniHeadline() {
  return (
    <div style={{
      fontFamily: 'Inter,sans-serif',
      fontSize: 'clamp(2.25rem, 2.6vw, 1.65rem)',
      fontWeight: 800, letterSpacing: '-0.012em', lineHeight: 1.25,
      marginBottom: 26,
    }}>
      <span className="grad-blue-red">Zoho Authorized Partner</span>
      <span style={{ color: '#0b1220' }}> in </span>
      <span className="grad-red-yellow">Bangalore, India</span>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Auto-advance — single mount-time interval, functional update.
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % TOTAL), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const go = useCallback((i) => setActive((i + TOTAL) % TOTAL), [])

  const isHero = active === 0
  const service = isHero ? null : services[active - 1]
  const accent = isHero ? HERO_ACCENT : service.color

  const arrowBtn = (dir) => ({
    width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
    background: '#fff', border: '1px solid #e8e3dc', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#0b1220', transition: 'all 0.25s', zIndex: 3,
    boxShadow: '0 8px 22px rgba(11,18,32,0.08)',
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [dir]: 0,
  })

  return (
    <section id="hero" ref={ref} style={{
      background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
      padding: '96px 0 92px', position: 'relative', overflow: 'hidden',
    }}>
      <MotionStyles />
      <style>{`
        @keyframes zx-slide-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Tri color gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.22), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '28%', right: '22%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

      {/* Floating chips (desktop only) */}
      {/* <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {moduleChips.map((c, i) => (
          <div key={c.label} className="d-none d-xl-inline-flex"
            style={{
              position: 'absolute', left: c.x, top: c.y,
              background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(8px)',
              border: '1px solid #e8e3dc', borderRadius: 999, padding: '7px 14px',
              fontSize: '0.78rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
              color: '#334155', boxShadow: '0 10px 28px rgba(11,18,32,0.08)',
              alignItems: 'center', gap: 8,
              animation: `float-y ${5 + (i % 3) * 1.2}s ease-in-out ${c.delay}s infinite`,
              whiteSpace: 'nowrap',
            }}>
            <i className={`bi ${c.icon}`} style={{ color: c.color, fontSize: '0.95rem' }} />
            {c.label}
          </div>
        ))}
      </div> */}

      <div className="container position-relative" style={{ zIndex: 2 }}>

        {/* Persistent certified pill (kept above the slider) */}
        <div className="fade-up zx-su" style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <div className="pill">
            <span className="pill-dot" />
            <span>Zoho Authorized Partner · Bangalore, India</span>
            <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
            <span style={{ color: '#2563eb', fontWeight: 700 }}>
              <i className="bi bi-patch-check-fill" /> Certified
            </span>
          </div>
        </div>

        {/* SLIDER */}
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', padding: '0 56px' }}>

          {/* Prev arrow */}
          <button onClick={() => go(active - 1)} aria-label="Previous slide"
            style={arrowBtn('left')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.color = '#0b1220' }}>
            <i className="bi bi-chevron-left" />
          </button>

          {/* Slide content (crossfade on change) */}
          <div className="fade-up" style={{ minHeight: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {isHero ? (
              /* ---------- SLIDE 0: BRAND HERO ---------- */
              <div key="hero" style={{ textAlign: 'center', width: '100%', animation: 'zx-slide-in 0.55s var(--ease-out)' }}>
                <h1 style={{
                  fontFamily: 'Inter,sans-serif',
                  fontSize: 'clamp(2.2rem, 5.2vw, 3.9rem)',
                  fontWeight: 800, color: '#0b1220',
                  marginBottom: 20, letterSpacing: '-0.028em', lineHeight: 1.05,
                }}>
                  <span className="grad-blue-red">Zoho Authorized Partner</span><br />
                  in <span className="grad-red-yellow">Bangalore, India</span>
                </h1>

                <p style={{
                  fontSize: '1.1rem', color: '#475569', maxWidth: 720,
                  margin: '0 auto 28px', lineHeight: 1.7, fontFamily: 'Inter,sans-serif',
                }}>
                  ZoFlowX is your trusted Zoho Consulting Partner. We configure, customize, migrate and manage Zoho the right way for Bangalore businesses, so <strong style={{ color: '#0b1220' }}>every rupee of your subscription works for you.</strong>
                </p>

                <a href="#contact" className="btn-gradient ahover"
                  style={{ padding: '0.9rem 1.95rem', fontSize: '0.95rem' }}>
                  Book Your Free Zoho Audit <i className="bi bi-arrow-right" />
                </a>
              </div>
            ) : (
              /* ---------- SLIDES 1..N: SERVICE INTROS ---------- */
              <div key={active} style={{ textAlign: 'center', width: '100%', animation: 'zx-slide-in 0.55s var(--ease-out)' }}>

                {/* Reduced headline pinned to top */}
                <MiniHeadline />

                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: `${service.color}15`, color: service.color,
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50,
                  marginBottom: 18, fontFamily: 'Inter,sans-serif',
                }}>
                  <i className={`bi ${service.icon}`} /> {service.tag}
                </span>

                <h2 style={{
                  fontFamily: 'Inter,sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800,
                  color: '#0b1220', lineHeight: 1.2, letterSpacing: '-0.02em',
                  marginBottom: 16, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
                }}>{service.h}</h2>

                <p style={{
                  fontSize: '1.02rem', color: '#475569', lineHeight: 1.72,
                  marginBottom: 26, fontFamily: 'Inter,sans-serif',
                  maxWidth: 660, marginLeft: 'auto', marginRight: 'auto',
                }}>{service.p}</p>

                <a href="#contact" className="btn-gradient ahover"
                  style={{ padding: '0.9rem 1.95rem', fontSize: '0.95rem' }}>
                  {service.cta} <i className="bi bi-arrow-right" />
                </a>
              </div>
            )}
          </div>

          {/* Next arrow */}
          <button onClick={() => go(active + 1)} aria-label="Next slide"
            style={arrowBtn('right')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.color = '#0b1220' }}>
            <i className="bi bi-chevron-right" />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginTop: 30 }}>
            {Array.from({ length: TOTAL }).map((_, i) => {
              const isActive = i === active
              const dotColor = i === 0 ? HERO_ACCENT : services[i - 1].color
              return (
                <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
                  style={{
                    height: 9, width: isActive ? 34 : 9, borderRadius: 50,
                    border: 'none', padding: 0, cursor: 'pointer',
                    background: isActive ? dotColor : '#d9d3ca',
                    transition: 'width 0.4s cubic-bezier(.2,.7,.2,1), background 0.3s',
                  }} />
              )
            })}
          </div>
        </div>

        {/* Persistent contact quick actions */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 40 }}>
          {[
            { label: 'Call',      icon: 'bi-telephone',      href: 'tel:+918190009222' },
            { label: 'WhatsApp',  icon: 'bi-whatsapp',       href: 'https://wa.me/918190009222', accent: '#16a34a' },
            { label: 'Email',     icon: 'bi-envelope',       href: 'mailto:info@zoflowx.com' },
            { label: 'Schedule',  icon: 'bi-calendar-check', href: 'https://arul-zoflowx.zohobookings.in' },
            { label: 'Live Chat', icon: 'bi-chat-dots',      href: '#contact' },
          ].map(a => (
            <a key={a.label} href={a.href}
              target={a.href.startsWith('http') ? '_blank' : undefined}
              rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 50,
                padding: '8px 18px', fontSize: '0.86rem', fontWeight: 600,
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

        {/* Trust / rating row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginTop: 22 }}>
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
            {/* <span style={{ fontFamily: 'Inter,sans-serif', color: '#64748b', fontSize: '0.88rem' }}>
              Trusted by Bangalore businesses
            </span> */}
          </div>
        </div>
      </div>
    </section>
  )
}