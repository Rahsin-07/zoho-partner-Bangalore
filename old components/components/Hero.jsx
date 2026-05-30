'use client'
import { useEffect, useRef } from 'react'

// Section 1 — Hero with 6 service intro cards
const heroCards = [
  {
    tag: 'Zoho Consulting',
    h: 'Subscribed to Zoho but still not seeing business growth?',
    p: "The platform isn't the problem, the implementation is. As a Zoho Authorized Partner based in Bangalore, we help Bangalore businesses configure and scale Zoho the right way so every rupee you invest delivers measurable returns.",
    cta: 'Connect with a Zoho Specialist',
    icon: 'bi-rocket-takeoff',
    color: '#2563eb',
  },
  {
    tag: 'Custom Zoho Solutions',
    h: 'Looking for a Zoho Solution Custom to Your Bangalore Business?',
    p: 'A standard Zoho setup was not built for the way your Bangalore business actually runs. We create Zoho solutions that fit your exact process, from custom modules and automations to third party integrations.',
    cta: 'Design Your Custom Solution',
    icon: 'bi-sliders',
    color: '#dc2626',
  },
  {
    tag: 'Zoho Migration & Integration',
    h: 'Planning a Zoho Migration or Integration for Your Business?',
    p: 'Switching from your current software to Zoho? Or need Zoho synced with your website, ERP, or external platforms? We manage end-to-end Zoho migration and integration with full data integrity.',
    cta: 'Begin Your Migration',
    icon: 'bi-arrow-left-right',
    color: '#f59e0b',
  },
  {
    tag: 'Dedicated Zoho Analytics Expert',
    h: "Can't get a clear picture of your business performance in one place?",
    p: 'Work with a dedicated Zoho Analytics expert in Bangalore to build custom dashboards and tailored reports for your business, giving you live visibility into performance.',
    cta: 'Build My Custom Dashboard',
    icon: 'bi-bar-chart-line',
    color: '#2563eb',
  },
  {
    tag: 'Zoho CRM Implementation',
    h: 'Want to see how Zoho CRM can transform your Bangalore sales process?',
    p: 'Most Bangalore businesses use Zoho CRM only to store contacts. As a Zoho CRM partner, we build intelligent pipelines, lead scoring systems, and sales automation that actively drive conversions.',
    cta: 'Schedule a Live Demo',
    icon: 'bi-people-fill',
    color: '#dc2626',
  },
  {
    tag: 'Dedicated Zoho Developer',
    h: 'Need a Dedicated Zoho Developer Focused Entirely on Your Business?',
    p: 'New Zoho requirements coming in every week? Hire a dedicated Zoho developer in Bangalore who works exclusively for your business — on demand, consistent, and fully committed.',
    cta: 'Hire a Zoho Developer',
    icon: 'bi-code-square',
    color: '#f59e0b',
  },
]

// Floating Zoho module chips
const moduleChips = [
  { label: 'Zoho CRM',       icon: 'bi-people-fill',    x: '2%',  y: '14%', delay: 0,   color: '#2563eb' },
  { label: 'Zoho Books',     icon: 'bi-journal-text',   x: '88%', y: '12%', delay: 0.4, color: '#dc2626' },
  { label: 'Zoho Creator',   icon: 'bi-app-indicator',  x: '90%', y: '48%', delay: 0.2, color: '#2563eb' },
  { label: 'Zoho Analytics', icon: 'bi-bar-chart-line', x: '1%',  y: '52%', delay: 0.8, color: '#f59e0b' },
]

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" ref={ref} style={{
      background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
      padding: '100px 0 90px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Tri-color gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.22), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '30%', right: '20%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

      {/* Floating chips (desktop only) */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
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
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* HEADLINE block */}
        <div className="text-center fade-up" style={{ maxWidth: 980, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div className="pill">
              <span className="pill-dot" />
              <span>Zoho Authorized Partner · Bangalore, India</span>
              <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
              <span style={{ color: '#2563eb', fontWeight: 700 }}>
                <i className="bi bi-patch-check-fill" /> Certified
              </span>
            </div>
          </div>

          <h1 style={{
            fontFamily: 'inter Sans,sans-serif',
            fontSize: 'clamp(2.3rem, 5.6vw, 4.15rem)',
            fontWeight: 800, color: '#0b1220',
            marginBottom: 22, letterSpacing: '-0.028em', lineHeight: 1.05,
          }}>
            <span className="grad-blue-red">Zoho Authorized Partner</span><br />
            in <span className="grad-red-yellow">Bangalore, India</span>
          </h1>

          <p style={{
            fontSize: '1.13rem', color: '#475569', maxWidth: 760,
            margin: '0 auto 32px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
          }}>
            ZoFlowX is your trusted Zoho Consulting Partner — we configure, customize, migrate and manage Zoho the right way for Bangalore businesses. <strong style={{ color: '#0b1220' }}>Every rupee of your subscription, working for you.</strong>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-gradient ahover" style={{ padding: '0.94rem 2rem', fontSize: '0.95rem' }}>
              Book Free 30-Min Audit <i className="bi bi-arrow-right" />
            </a>
            <a href="#services" className="btn-white-soft ahover" style={{ padding: '0.86rem 1.9rem', fontSize: '0.95rem' }}>
              Explore Zoho Services <i className="bi bi-grid-3x3-gap" />
            </a>
          </div>
        </div>

        {/* SERVICE CARDS GRID */}
        <div className="row g-4">
          {heroCards.map((c, i) => (
            <div key={c.tag} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="hero-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                padding: '30px 26px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-7px)'
                  el.style.boxShadow = `0 30px 70px ${c.color}26`
                  el.style.borderColor = c.color
                  el.querySelector('.hc-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.hc-glow').style.opacity = '1'
                  el.querySelector('.hc-icon').style.background = c.color
                  el.querySelector('.hc-icon').style.color = '#fff'
                  el.querySelector('.hc-icon').style.transform = 'rotate(-5deg) scale(1.08)'
                  el.querySelector('.hc-cta').style.color = c.color
                  el.querySelector('.hc-cta').style.gap = '12px'
                  el.querySelector('.hc-tag').style.background = c.color
                  el.querySelector('.hc-tag').style.color = '#fff'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.hc-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.hc-glow').style.opacity = '0'
                  el.querySelector('.hc-icon').style.background = `${c.color}15`
                  el.querySelector('.hc-icon').style.color = c.color
                  el.querySelector('.hc-icon').style.transform = ''
                  el.querySelector('.hc-cta').style.color = '#0b1220'
                  el.querySelector('.hc-cta').style.gap = '8px'
                  el.querySelector('.hc-tag').style.background = `${c.color}15`
                  el.querySelector('.hc-tag').style.color = c.color
                }}
              >
                <div className="hc-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: c.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />
                <div className="hc-glow" aria-hidden style={{
                  position: 'absolute', top: -80, right: -80, width: 240, height: 240,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${c.color}22, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, position: 'relative' }}>
                  <div className="hc-icon" style={{
                    width: 54, height: 54, borderRadius: 14,
                    background: `${c.color}15`, color: c.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', transition: 'all 0.32s',
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                </div>

                <span className="hc-tag" style={{
                  display: 'inline-block', background: `${c.color}15`, color: c.color,
                  fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
                  marginBottom: 14, fontFamily: 'Inter,sans-serif', transition: 'all 0.32s',
                  alignSelf: 'flex-start',
                }}>{c.tag}</span>

                <h2 style={{
                  fontSize: '1.08rem', fontWeight: 800, marginBottom: 10,
                  color: '#0b1220', fontFamily: 'inter Sans,sans-serif', lineHeight: 1.3,
                  letterSpacing: '-0.012em',
                }}>{c.h}</h2>

                <p style={{
                  fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7,
                  marginBottom: 18, fontFamily: 'Inter,sans-serif', flex: 1,
                }}>{c.p}</p>

                <a href="#contact" className="hc-cta" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: '0.86rem', fontWeight: 700, color: '#0b1220',
                  textDecoration: 'none', fontFamily: 'inter Sans,sans-serif',
                  transition: 'all 0.28s',
                }}>
                  {c.cta} <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
