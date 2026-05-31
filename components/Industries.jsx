'use client'
import { useEffect, useRef } from 'react'

// Section 8, Industries (Business Sectors We Serve)
const industries = [
  { name: 'Education',           icon: 'bi-mortarboard-fill',   color: '#2563eb' },
  { name: 'Construction',        icon: 'bi-buildings',          color: '#dc2626' },
  { name: 'Travel & Tourism',    icon: 'bi-airplane',           color: '#f59e0b' },
  { name: 'Marketing',           icon: 'bi-megaphone',          color: '#2563eb' },
  { name: 'Real Estate',         icon: 'bi-houses',             color: '#dc2626' },
  { name: 'Ecommerce',           icon: 'bi-cart3',              color: '#f59e0b' },
  { name: 'Healthcare',          icon: 'bi-heart-pulse',        color: '#2563eb' },
  { name: 'IT Firms',            icon: 'bi-laptop',             color: '#dc2626' },
  { name: 'Software & SaaS',     icon: 'bi-cloud',              color: '#f59e0b' },
  { name: 'Manufacturing',       icon: 'bi-gear-wide-connected', color: '#2563eb' },
  { name: 'Logistics',           icon: 'bi-truck',              color: '#dc2626' },
  { name: 'EdTech',              icon: 'bi-book',               color: '#f59e0b' },
  { name: 'FinTech',             icon: 'bi-bank',               color: '#2563eb' },
  { name: 'Staffing & Recruitment', icon: 'bi-person-badge',    color: '#dc2626' },
  { name: 'Property Development', icon: 'bi-building-fill',     color: '#f59e0b' },
  { name: 'And More',            icon: 'bi-plus-circle',        color: '#0b1220' },
]

export default function Industries() {
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
    <section id="industries" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -100, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.10), transparent 65%)', filter: 'blur(30px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: -100, left: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.10), transparent 65%)', filter: 'blur(30px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 860, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Industries</span>
          </div>
          <h2 className="section-title">
            Business Sectors We Serve as a Trusted <span className="grad-blue-red">Zoho Partner in Bangalore</span>
          </h2>
          <p className="section-sub mx-auto">
            Whether it's a SaaS startup, an IT company, a D2C brand, a manufacturer, or an EdTech company, Bangalore businesses move fast. Every sector is unique, and so is every Zoho setup we deliver.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`col-6 col-md-4 col-lg-3 fade-up ${i % 2 ? 'zx-sr' : 'zx-sl'}`} style={{ transitionDelay: `${i * 0.03}s` }}>
              <div className="ind-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 16,
                padding: '24px 18px', height: '100%', textAlign: 'center',
                transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-5px)'
                  el.style.borderColor = ind.color
                  el.style.boxShadow = `0 20px 44px ${ind.color}1f`
                  el.querySelector('.ind-icon').style.background = ind.color
                  el.querySelector('.ind-icon').style.color = '#fff'
                  el.querySelector('.ind-icon').style.transform = 'rotate(-5deg) scale(1.08)'
                  el.querySelector('.ind-glow').style.opacity = '1'
                  el.querySelector('.ind-name').style.color = ind.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.borderColor = '#e8e3dc'
                  el.style.boxShadow = ''
                  el.querySelector('.ind-icon').style.background = `${ind.color}15`
                  el.querySelector('.ind-icon').style.color = ind.color
                  el.querySelector('.ind-icon').style.transform = ''
                  el.querySelector('.ind-glow').style.opacity = '0'
                  el.querySelector('.ind-name').style.color = '#0b1220'
                }}
              >
                <div className="ind-glow" aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${ind.color}10, transparent 60%)`,
                  opacity: 0, transition: 'opacity 0.36s',
                }} />
                <div className="ind-icon" style={{
                  width: 56, height: 56, borderRadius: 14, margin: '0 auto 14px',
                  background: `${ind.color}15`, color: ind.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.45rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${ind.icon}`} />
                </div>
                <div className="ind-name" style={{
                  fontFamily: 'Inter,sans-serif', fontWeight: 700,
                  fontSize: '0.92rem', color: '#0b1220',
                  transition: 'color 0.3s', position: 'relative', zIndex: 1, lineHeight: 1.3,
                }}>{ind.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 48 }}>
          <a href="#contact" className="btn-primary-custom ahover">
            See How Zoho Works for Your Sector <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
