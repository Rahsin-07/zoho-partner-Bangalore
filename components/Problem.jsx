'use client'
import { useEffect, useRef } from 'react'

// Section 4, Common Problems (6 problems from brief)
const problems = [
  {
    icon: 'bi-person-rolodex',
    color: '#dc2626',
    title: 'Your CRM is just a contact list',
    desc: "Your team is losing leads because there's no proper pipeline, no follow up automation, and no lead scoring.",
  },
  {
    icon: 'bi-whatsapp',
    color: '#2563eb',
    title: 'Your team works around Zoho, not inside it',
    desc: "Zoho wasn't designed to fit your workflow, so WhatsApp groups, Excel sheets and manual notes are still running your business.",
  },
  {
    icon: 'bi-file-earmark-bar-graph',
    color: '#f59e0b',
    title: 'Every report takes hours to pull',
    desc: 'You are still creating reports manually at the end of each week since Zoho dashboards were never set up for your business metrics.',
  },
  {
    icon: 'bi-diagram-3',
    color: '#dc2626',
    title: 'Your apps do not talk to each other',
    desc: "Your website, payment tools, WhatsApp and ERP are all independent. Your team manually enters data into Zoho, it doesn't flow there automatically.",
  },
  {
    icon: 'bi-arrow-repeat',
    color: '#2563eb',
    title: 'You moved to Zoho but nothing really changed',
    desc: 'You paid for the subscription, maybe even got a basic setup done, but day to day operations still feel exactly the same as before.',
  },
  {
    icon: 'bi-shield-exclamation',
    color: '#f59e0b',
    title: 'You cannot trust your own data',
    desc: 'Duplicate contacts, missing fields and outdated records. Decisions are being made based on data that no one fully trusts.',
  },
]

export default function Problem() {
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
    <section id="problem" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: 60, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(20px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 860, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Common problems</span>
          </div>
          <h2 className="section-title">
            What Happens When Zoho <span className="grad-blue-red">Setup Goes Wrong</span>
          </h2>
       <p className="section-sub mx-auto" style={{ maxWidth: "1000px", textAlign:"center" }}>
            The majority of Zoho implementations are unsuccessful not because of the platform itself, but because of the way it is configured. The truth is that businesses don't see results because of poor configuration, lack of automation, and lack of training.
          </p>
        </div>

        <div className="row g-4">
          {problems.map((p, i) => (
            <div key={p.title} className={`col-md-6 col-lg-4 fade-up ${i % 2 ? 'zx-sr' : 'zx-sl'}`} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="prob-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
                padding: '30px 28px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 24px 60px ${p.color}1f`
                  el.style.borderColor = p.color
                  el.querySelector('.pr-glow').style.opacity = '1'
                  el.querySelector('.pr-icon').style.background = p.color
                  el.querySelector('.pr-icon').style.color = '#fff'
                  el.querySelector('.pr-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.pr-bar').style.transform = 'scaleX(1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.pr-glow').style.opacity = '0'
                  el.querySelector('.pr-icon').style.background = `${p.color}15`
                  el.querySelector('.pr-icon').style.color = p.color
                  el.querySelector('.pr-icon').style.transform = ''
                  el.querySelector('.pr-bar').style.transform = 'scaleX(0)'
                }}
              >
                <div className="pr-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />
                <div className="pr-glow" aria-hidden style={{
                  position: 'absolute', top: -80, right: -80, width: 240, height: 240,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${p.color}28, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18, position: 'relative' }}>
                  <div className="pr-icon" style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${p.color}15`, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', flexShrink: 0,
                  }}>
                    <i className="bi bi-exclamation-triangle-fill" />
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.08rem', fontWeight: 800, marginBottom: 10,
                  color: '#0b1220', fontFamily: 'Inter,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em', position: 'relative',
                }}>{p.title}</h3>

                <p style={{
                  fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif', position: 'relative',
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up" style={{ marginTop: 56 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
            padding: '32px 36px', background: 'linear-gradient(135deg, #f6f1ea 0%, #fef3c7 100%)',
            border: '1px solid #e8e3dc', borderRadius: 22,
            maxWidth: 920, margin: '0 auto', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)',
            }} />
            <div style={{ maxWidth: 520 }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                textTransform: 'uppercase', color: '#dc2626', marginBottom: 8,
                fontFamily: 'Inter,sans-serif',
              }}>Sound familiar? You're not alone.</div>
              <div style={{
                fontSize: '1rem', color: '#334155',
                fontFamily: 'Inter,sans-serif', lineHeight: 1.7,
              }}>
                Most businesses come to us after months of struggle with a Zoho setup that wasn't built for them. <strong style={{ color: '#0b1220' }}>We fix that.</strong> Book a free 30 minute audit and we'll show you exactly what's wrong and how to fix it.
              </div>
            </div>
            <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="btn-gradient ahover">
              Book My Free 30 Min Audit <i className="bi bi-arrow-right" />
            </a>
          </div>
          <p style={{
            textAlign: 'center', marginTop: 18, fontSize: '0.84rem', color: '#64748b',
            fontFamily: 'Inter,sans-serif',
          }}>
            No sales pitch. No commitment. Just a clear answer on what's broken and how to fix it.
          </p>
        </div>
      </div>
    </section>
  )
}
