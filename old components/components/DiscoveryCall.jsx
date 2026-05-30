'use client'
import { useEffect, useRef } from 'react'

// Section 14 — Book a Discovery Call with Arul Raj
const valueProps = [
  { icon: 'bi-check-circle-fill', color: '#fcd34d', text: '30 Minutes Free Consultation' },
  { icon: 'bi-check-circle-fill', color: '#fcd34d', text: '1 Call, Endless Solutions' },
  { icon: 'bi-check-circle-fill', color: '#fcd34d', text: 'Save Up to 40% on Business Operations' },
  { icon: 'bi-check-circle-fill', color: '#fcd34d', text: "3X Your Team's Productivity in 90 Days" },
]

const credentials = [
  { v: '14+', l: 'Years Experience', c: '#93c5fd' },
  { v: '50+', l: 'Implementations',  c: '#fca5a5' },
  { v: '20+', l: 'Industries',       c: '#fcd34d' },
]

export default function DiscoveryCall() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="discovery-call" ref={ref} style={{
      background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 22% 28%, rgba(99,179,237,0.20) 0%, transparent 55%), radial-gradient(ellipse at 82% 78%, rgba(245,158,11,0.16) 0%, transparent 50%), radial-gradient(ellipse at 78% 18%, rgba(220,38,38,0.14) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* LEFT — copy + values */}
          <div className="col-lg-6 fade-up">
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.8px',
              textTransform: 'uppercase', color: '#f59e0b', marginBottom: 16,
            }}>
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              Discovery Call
            </span>

            <h2 style={{
              fontFamily: 'inter Sans,sans-serif',
              fontSize: 'clamp(2rem, 4.2vw, 3.1rem)', fontWeight: 800,
              color: '#fff', marginBottom: 20, letterSpacing: '-0.022em', lineHeight: 1.1,
            }}>
              Book a Discovery Call with{' '}
              <span style={{
                background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Arul Raj</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.74)', fontSize: '1.04rem',
              marginBottom: 28, lineHeight: 1.75, maxWidth: 540,
              fontFamily: 'Inter,sans-serif',
            }}>
              <strong style={{ color: '#fff' }}>Marketing Automation & CRM Specialist</strong> · 14+ Years Experience · Ex-Oracle, Ex-Infosys. Personally handles every first call.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {valueProps.map(v => (
                <div key={v.text} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 12, backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <i className={`bi ${v.icon}`} style={{ color: v.color, fontSize: '1.1rem', flexShrink: 0 }} />
                  <span style={{ color: '#fff', fontSize: '0.94rem', fontWeight: 600, fontFamily: 'Inter,sans-serif' }}>{v.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" className="btn-accent ahover">
                Book My Free Call <i className="bi bi-arrow-right" />
              </a>
              <a href="https://www.linkedin.com/in/arulraj-inboxist/" target="_blank" rel="noreferrer"
                className="btn-outline-white"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="bi bi-linkedin" /> View LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Founder card */}
          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: '#f6f1ea', borderRadius: 28, padding: '42px 38px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'var(--grad-tri)' }} />
              <div aria-hidden style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.18), transparent 70%)', pointerEvents: 'none' }} />
              <div aria-hidden style={{ position: 'absolute', bottom: -60, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.16), transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', textAlign: 'center', marginBottom: 28 }}>
                <div style={{
                  width: 110, height: 110, borderRadius: '50%',
                  background: 'var(--grad-tri)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: 'inter Sans,sans-serif',
                  fontSize: '2.4rem', fontWeight: 800,
                  boxShadow: '0 18px 40px rgba(37,99,235,0.30)',
                  marginBottom: 16,
                  position: 'relative',
                }}>
                  AR
                  <div aria-hidden style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(11,18,32,0.20)',
                  }}>
                    <i className="bi bi-patch-check-fill" style={{ color: '#2563eb', fontSize: '1.4rem' }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: 'inter Sans,sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0b1220', marginBottom: 4, letterSpacing: '-0.014em' }}>
                  Arul Raj
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginBottom: 10 }}>
                  Founder · Marketing Automation & CRM Specialist
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: '#fff', borderRadius: 50, border: '1px solid #e8e3dc' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', animation: 'pulse-soft 2s infinite' }} />
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif' }}>Available for new consultations</span>
                </div>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
                padding: '20px 0', background: '#fff',
                border: '1px solid #e8e3dc', borderRadius: 16,
                marginBottom: 24, position: 'relative',
              }}>
                {credentials.map((cr, i, arr) => (
                  <div key={cr.l} style={{
                    textAlign: 'center', padding: '4px 10px',
                    borderRight: i < arr.length - 1 ? '1px solid #e8e3dc' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'inter Sans,sans-serif', fontWeight: 800,
                      fontSize: '1.5rem', color: '#0b1220', lineHeight: 1,
                    }}>{cr.v}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 6 }}>{cr.l}</div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '18px 22px', background: '#fff',
                border: '1px solid #e8e3dc', borderRadius: 14,
                fontStyle: 'italic', fontSize: '0.92rem', color: '#334155',
                fontFamily: 'Inter,sans-serif', lineHeight: 1.65,
                position: 'relative',
              }}>
                <i className="bi bi-quote" style={{ color: '#dc2626', fontSize: '1.8rem', position: 'absolute', top: -10, left: 14, background: '#fff', padding: '0 4px' }} />
                "I personally take every first call. No SDRs, no scripts. Just a clear conversation about what your business actually needs."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
