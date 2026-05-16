'use client'
import { useEffect, useRef } from 'react'

// Section 12 — Case Studies
const cases = [
  {
    industry: 'Construction',
    color: '#2563eb',
    icon: 'bi-buildings',
    company: 'Brite Decking · Australia',
    headline: 'From scattered leads to a 5-stage pipeline that closed itself',
    summary:
      'Re-architected their Zoho CRM around lead source attribution, automated UTM capture from Avanser call tracking, and rebuilt the Lead → Opportunity → Estimate → Sales Order → Invoice flow inside Zoho Books.',
    metrics: [
      { label: 'Manual entry eliminated', value: '92%' },
      { label: 'Lead-to-quote time',     value: '3d → 6h' },
      { label: 'Source attribution',     value: '100%' },
    ],
    stack: ['Zoho CRM', 'Zoho Books', 'Deluge', 'Avanser', 'UTM cascade'],
  },
  {
    industry: 'Distribution',
    color: '#dc2626',
    icon: 'bi-box-seam',
    company: 'Image Star · Chennai',
    headline: 'Tally → Zoho Books migration with zero broken history',
    summary:
      'Moved 1,500+ customers, 500+ vendors, custom-numbered records, and a full GST invoice template into Zoho Books. Set up rules for de-duplicated phones, PIN code fields, and a Tally-style branded invoice format.',
    metrics: [
      { label: 'Customer records', value: '1,522' },
      { label: 'Vendor records',   value: '506' },
      { label: 'Manual reconciliation', value: '0 hrs' },
    ],
    stack: ['Zoho Books', 'Custom templates', 'GST', 'Tally export', 'Data fidelity'],
  },
  {
    industry: 'Coworking SaaS',
    color: '#f59e0b',
    icon: 'bi-laptop',
    company: 'CoWorkFlowX',
    headline: 'A new multi-tenant SaaS, architected and shipped in six weeks',
    summary:
      'Drafted the full PRD, designed an 18-table Mongoose schema, set up a permission matrix for four roles, integrated Razorpay, and produced an AI build prompt strategy — ready for the dev team to ship sprint by sprint.',
    metrics: [
      { label: 'PRD sections',     value: '14' },
      { label: 'Schemas designed', value: '18' },
      { label: 'Sprint plan',      value: '6 wks' },
    ],
    stack: ['MERN', 'Razorpay', 'Multi-tenant', 'RBAC', 'Architecture'],
  },
]

export default function CaseStudies() {
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
    <section id="case-studies" ref={ref} style={{ background: '#fafaf7', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Case Studies</div>
            <h2 className="section-title">
              How Businesses <span className="grad-blue-red">Transformed With Zoho</span>
            </h2>
            <p className="section-sub">
              Explore real stories of businesses across India that tackled their biggest operational challenges with Zoho — delivered by the ZoFlowX team.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#contact" className="link-reveal">
              Explore More Case Studies <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {cases.map((c, i) => (
            <div key={c.company} className="col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="case-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                padding: '32px 28px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-7px)'
                  el.style.boxShadow = `0 30px 70px ${c.color}26`
                  el.style.borderColor = c.color
                  el.querySelector('.case-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.case-glow').style.opacity = '1'
                  el.querySelector('.case-icon').style.transform = 'scale(1.06) rotate(-4deg)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.case-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.case-glow').style.opacity = '0'
                  el.querySelector('.case-icon').style.transform = ''
                }}
              >
                <div className="case-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: c.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />
                <div className="case-glow" aria-hidden style={{
                  position: 'absolute', top: -100, right: -100, width: 280, height: 280,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${c.color}20, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div className="case-icon" style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: c.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.45rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                    boxShadow: `0 10px 22px ${c.color}40`,
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.6, color: c.color, textTransform: 'uppercase', fontFamily: 'Inter,sans-serif' }}>{c.industry}</div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#0b1220', marginTop: 1 }}>{c.company}</div>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.14rem', fontWeight: 800, color: '#0b1220',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.32,
                  marginBottom: 12, letterSpacing: '-0.012em',
                }}>{c.headline}</h3>

                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.72, marginBottom: 20, fontFamily: 'Inter,sans-serif' }}>{c.summary}</p>

                <div style={{
                  background: '#fafaf7', border: '1px solid #f0ece6', borderRadius: 14,
                  padding: '16px 18px', marginBottom: 18,
                }}>
                  {c.metrics.map((m, mi) => (
                    <div key={m.label} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '6px 0',
                      borderBottom: mi < c.metrics.length - 1 ? '1px dashed #e8e3dc' : 'none',
                    }}>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>{m.label}</div>
                      <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '0.92rem', color: c.color }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.stack.map(t => (
                    <span key={t} style={{
                      background: '#f6f1ea', border: '1px solid #e8e3dc',
                      borderRadius: 50, padding: '4px 10px',
                      fontSize: '0.7rem', fontWeight: 600,
                      color: '#475569', fontFamily: 'Inter,sans-serif',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
