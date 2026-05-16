'use client'
import { useEffect, useRef } from 'react'

// Section 11 — Built Around Your Business (short CTA banner)
export default function CustomBuild() {
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
    <section ref={ref} style={{
      background: '#fff', padding: '80px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="container">
        <div className="fade-up" style={{
          background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
          borderRadius: 28, padding: '56px 48px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.18 }} className="grid-pattern-light" />
          <div aria-hidden style={{
            position: 'absolute', top: '-50%', left: '-10%', width: 460, height: 460,
            background: 'radial-gradient(circle, rgba(37,99,235,0.30), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-50%', right: '-10%', width: 460, height: 460,
            background: 'radial-gradient(circle, rgba(245,158,11,0.24), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', top: '20%', right: '30%', width: 240, height: 240,
            background: 'radial-gradient(circle, rgba(220,38,38,0.20), transparent 65%)', filter: 'blur(30px)',
          }} />

          {/* Floating dots - decorative */}
          <div aria-hidden className="d-none d-md-block" style={{
            position: 'absolute', top: 28, right: 38,
            display: 'flex', gap: 6, animation: 'float-y-soft 4s ease-in-out infinite',
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 16px rgba(37,99,235,0.6)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 16px rgba(220,38,38,0.6)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 16px rgba(245,158,11,0.6)' }} />
          </div>

          <div className="row align-items-center position-relative g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2.4,
                textTransform: 'uppercase', color: '#fcd34d', marginBottom: 14,
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'Inter,sans-serif',
              }}>
                <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
                Built Around Your Business
              </div>
              <h2 style={{
                color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', marginBottom: 10,
                lineHeight: 1.2, letterSpacing: '-0.02em',
              }}>
                Got a Specific Requirement? <span style={{
                  background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>We Will Build It Around the Way You Work.</span>
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.74)', fontSize: '1rem', marginBottom: 0,
                fontFamily: 'Inter,sans-serif', lineHeight: 1.72, maxWidth: 620,
              }}>
                Custom modules, automations, integrations, or apps — if standard Zoho can't do it, we build it. Scoped, designed and delivered around your team's exact workflow.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-accent ahover">
                Build My Custom Zoho Solution <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
