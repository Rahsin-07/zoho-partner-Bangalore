'use client'
import { useEffect, useRef } from 'react'

// Section 6 — Our Process (4-step single row, per reference design)
const BOOKING = 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation'

const steps = [
  { num: '01', icon: 'bi-chat-dots',       title: 'Free discovery',  desc: '30-min call to understand your business & objectives.',      color: '#2563eb' },
  { num: '02', icon: 'bi-map',              title: 'Custom roadmap',  desc: 'A clear plan including tools, timeline, and your sign-off.',  color: '#dc2626' },
  { num: '03', icon: 'bi-gear-wide-connected', title: 'Implementation', desc: 'We build, configure, and arrange your system.',            color: '#f59e0b' },
  { num: '04', icon: 'bi-rocket-takeoff',   title: 'Go-live & support', desc: 'We train your team and remain for ongoing support.',       color: '#1e3a8a' },
]

export default function Process() {
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
    <section id="process" ref={ref} style={{
      background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{ position: 'absolute', top: '-8%', left: '-6%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-8%', right: '-6%', width: 440, height: 440, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Our Process</span>
          </div>
          <h2 className="section-title">
            Our Step by Step Zoho <span className="grad-blue-red">Implementation Process</span>
          </h2>
          {/* Content BEFORE the 4 steps */}
          <p className="section-sub mx-auto">
            A simple, transparent approach so you always know where things stand, what comes next, and what to expect.
          </p>
        </div>

        {/* 4 steps — single row with arrows */}
        <div className="fade-up zx-su" style={{
          display: 'flex', alignItems: 'stretch', justifyContent: 'center',
          flexWrap: 'wrap', gap: 8, marginTop: 44,
        }}>
          {steps.map((s, i) => (
            <div key={s.num} className="proc-row-item" style={{
              display: 'flex', alignItems: 'stretch', flex: '1 1 240px', minWidth: 240, gap: 8,
            }}>
              <div className="proc-card" style={{
                flex: 1, background: '#fff', border: '1px solid #e8e3dc',
                borderTop: `4px solid ${s.color}`, borderRadius: 18,
                padding: '28px 24px', textAlign: 'center',
                transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 24px 56px ${s.color}22`
                  e.currentTarget.style.borderColor = s.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dc'
                  e.currentTarget.style.borderTopColor = s.color
                }}
              >
                <div style={{
                  width: 56, height: 56, margin: '0 auto 16px', borderRadius: 14,
                  background: `${s.color}15`, color: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: s.color, marginBottom: 8 }}>
                  Step {s.num}
                </div>
                <h3 style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.12rem', fontWeight: 800, color: '#0b1220', marginBottom: 10, lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, fontFamily: 'Inter,sans-serif', marginBottom: 0 }}>
                  {s.desc}
                </p>
              </div>

              {/* connector arrow (hidden after last + on narrow) */}
              {i < steps.length - 1 && (
                <div className="proc-arrow" aria-hidden style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#cbd5e1', fontSize: '1.4rem', flexShrink: 0, width: 24,
                }}>
                  <i className="bi bi-chevron-right" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content AFTER the 4 steps */}
        <p className="fade-up text-center" style={{
          marginTop: 36, fontSize: '1.02rem', color: '#334155',
          fontFamily: 'Inter,sans-serif', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto',
        }}>
          From the very first call to ongoing success, we are by your side at every stage.
        </p>

        <div className="fade-up text-center" style={{ marginTop: 30 }}>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-accent ahover">
            Begin With a Free Audit <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .proc-arrow { display: none !important; }
          .proc-row-item { flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  )
}
