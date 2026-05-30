'use client'
import { useEffect, useRef } from 'react'

// Section 10 — Hire a Zoho Developer in Bangalore
const benefits = [
  { icon: 'bi-eye-fill',     color: '#2563eb', title: 'Workflow First, Build Second',     desc: "Developers learn how your business actually runs before they write a single line of Deluge." },
  { icon: 'bi-shield-check', color: '#dc2626', title: 'No Surprises Mid-Build',           desc: 'Clear scope, structured development, thorough testing — no rework after handover.' },
  { icon: 'bi-stars',        color: '#f59e0b', title: 'Industry-Tested Talent',           desc: "Developers who've already solved problems like yours in retail, manufacturing and services." },
  { icon: 'bi-clock-history', color: '#2563eb', title: 'On-Demand, Consistent',            desc: 'Dedicated to your business — not juggling 10 other clients. Same developer every week.' },
]

const skillTags = [
  { t: 'Deluge', c: '#2563eb' }, { t: 'Zoho CRM', c: '#dc2626' }, { t: 'Zoho Creator', c: '#f59e0b' },
  { t: 'Zoho Books', c: '#2563eb' }, { t: 'Zoho Flow', c: '#dc2626' }, { t: 'REST APIs', c: '#f59e0b' },
  { t: 'Webhooks', c: '#2563eb' }, { t: 'JavaScript', c: '#dc2626' }, { t: 'SQL', c: '#f59e0b' },
]

export default function DeveloperHire() {
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
    <section id="developer" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* LEFT — copy */}
          <div className="col-lg-6 fade-up">
            <div className="section-label">Hire a Developer</div>
            <h2 className="section-title">
              Hire a Zoho Developer in Bangalore <span className="grad-blue-red">Who Gets Real Work Done</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.75, fontFamily: 'Inter,sans-serif', marginBottom: 18 }}>
              In Bangalore, most Zoho projects fail not due to budget but because the wrong person is handling them. We place developers who've already solved problems like yours in retail, manufacturing, services and more.
            </p>
            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.72, fontFamily: 'Inter,sans-serif', marginBottom: 28 }}>
              At ZoFlowX, hire a Zoho developer who works in your workflow first and only begins to build when the whole picture is clear. Every customized Zoho app starts with a clear scope, moves through structured development, and ends with thorough testing.
            </p>

            <div className="row g-3 mb-4">
              {benefits.map(b => (
                <div key={b.title} className="col-sm-6">
                  <div style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    padding: '14px 16px', background: '#fff', border: '1px solid #e8e3dc',
                    borderRadius: 14, transition: 'all 0.3s var(--ease-out)',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = b.color
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = `0 14px 30px ${b.color}1f`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#e8e3dc'
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: `${b.color}15`, color: b.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.05rem', flexShrink: 0,
                    }}>
                      <i className={`bi ${b.icon}`} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'inter Sans,sans-serif', fontWeight: 800, fontSize: '0.88rem', color: '#0b1220', marginBottom: 2 }}>{b.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>{b.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gradient ahover">
              Hire a Zoho Developer Now <i className="bi bi-arrow-right" />
            </a>
          </div>

          {/* RIGHT — developer profile mockup */}
          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: '#fff', borderRadius: 26, padding: '36px 32px',
              border: '1px solid #e8e3dc', position: 'relative', overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(11,18,32,0.10)',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: 'var(--grad-tri)' }} />
              <div aria-hidden style={{ position: 'absolute', top: -100, right: -100, width: 280, height: 280, background: 'radial-gradient(circle, rgba(37,99,235,0.10), transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, position: 'relative' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: 'var(--grad-tri)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.65rem', boxShadow: '0 12px 28px rgba(37,99,235,0.30)',
                }}>
                  <i className="bi bi-code-square" />
                </div>
                <div>
                  <div style={{ fontFamily: 'inter Sans,sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#0b1220' }}>Dedicated Zoho Developer</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 2, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse-soft 2s infinite' }} />
                    Available · From 1 week
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 20, position: 'relative' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.6, textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginBottom: 10 }}>Core Skills</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {skillTags.map(s => (
                    <span key={s.t} style={{
                      background: `${s.c}10`, color: s.c, border: `1px solid ${s.c}30`,
                      padding: '5px 12px', borderRadius: 50,
                      fontSize: '0.74rem', fontWeight: 700, fontFamily: 'Inter,sans-serif',
                    }}>{s.t}</span>
                  ))}
                </div>
              </div>

              <div style={{
                background: '#fafaf7', border: '1px solid #f0ece6', borderRadius: 14,
                padding: '16px 18px', marginBottom: 18, position: 'relative',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.6, textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginBottom: 12 }}>Engagement</div>
                {[
                  { l: 'Working hours', v: 'Flexible · 20–160 hrs/mo' },
                  { l: 'Communication', v: 'Daily standups + Slack' },
                  { l: 'Time zone',     v: 'IST · same as your team' },
                  { l: 'Handover',      v: 'Docs + walkthrough video' },
                ].map((r, i, arr) => (
                  <div key={r.l} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '7px 0',
                    borderBottom: i < arr.length - 1 ? '1px dashed #e8e3dc' : 'none',
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>{r.l}</span>
                    <span style={{ fontFamily: 'inter Sans,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#0b1220' }}>{r.v}</span>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 14px',
                background: 'linear-gradient(95deg, rgba(37,99,235,0.06), rgba(220,38,38,0.06), rgba(245,158,11,0.06))',
                borderRadius: 12, position: 'relative',
              }}>
                <i className="bi bi-shield-check" style={{ color: '#2563eb', fontSize: '1.05rem' }} />
                <div style={{ fontSize: '0.78rem', color: '#475569', fontFamily: 'Inter,sans-serif' }}>
                  <strong style={{ color: '#0b1220' }}>NDA on request.</strong> Code, docs and IP belong to you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
