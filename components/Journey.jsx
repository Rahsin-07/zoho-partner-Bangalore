'use client'
import { useEffect, useRef } from 'react'

// Section 3, Your Zoho Journey (two card "where you are")
const journeyCards = [
  {
    badge: 'Just Starting Out',
    color: '#2563eb',
    icon: 'bi-rocket-takeoff',
    title: 'Ready to Build on Zoho the Right Way?',
    desc: 'When you get Zoho right from the beginning, selecting the right tools, configuring them appropriately, and making sure your team uses them, every dollar of your subscription is worth it.',
    cta: 'Guide me through a proper Zoho setup',
    points: [
      'Apps & licensing scoped to your real needs',
      'Workflow setup before module setup',
      'Team training built into rollout',
    ],
  },
  {
    badge: 'Already On Zoho',
    color: '#dc2626',
    icon: 'bi-wrench-adjustable',
    title: 'Already Using Zoho but Not Getting Results?',
    desc: "You're paying for Zoho every month, but your team isn't using it properly, something feels broken, or you're just not getting what you paid for.",
    cta: 'Help me fix my Zoho',
    points: [
      'Free audit of your current setup',
      'Identify gaps, fixes & quick wins',
      'Re architect what isn\'t working',
    ],
  },
]

export default function Journey() {
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
    <section id="journey" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.07), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Your Zoho Journey</span>
          </div>
          <h2 className="section-title">
            No Matter Where You Stand with Zoho <span className="grad-blue-red">We Have the Right Solution</span>
          </h2>
          <p className="section-sub mx-auto">
            Every business is at a different stage in its Zoho journey. We meet you where you are and guide you to the next level.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {journeyCards.map((c, i) => (
            <div key={c.badge} className={`col-md-6 fade-up ${i % 2 ? 'zx-sr' : 'zx-sl'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 24,
                padding: '36px 32px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${c.color}22`
                  el.style.borderColor = c.color
                  el.querySelector('.j-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.j-glow').style.opacity = '1'
                  el.querySelector('.j-icon').style.background = c.color
                  el.querySelector('.j-icon').style.color = '#fff'
                  el.querySelector('.j-icon').style.transform = 'rotate(-5deg) scale(1.06)'
                  el.querySelector('.j-cta').style.background = c.color
                  el.querySelector('.j-cta').style.color = '#fff'
                  el.querySelector('.j-cta').style.borderColor = c.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.j-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.j-glow').style.opacity = '0'
                  el.querySelector('.j-icon').style.background = `${c.color}15`
                  el.querySelector('.j-icon').style.color = c.color
                  el.querySelector('.j-icon').style.transform = ''
                  el.querySelector('.j-cta').style.background = 'transparent'
                  el.querySelector('.j-cta').style.color = c.color
                  el.querySelector('.j-cta').style.borderColor = c.color
                }}
              >
                <div className="j-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: c.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />
                <div className="j-glow" aria-hidden style={{
                  position: 'absolute', top: -100, right: -100, width: 280, height: 280,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${c.color}20, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                  <div className="j-icon" style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: `${c.color}15`, color: c.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.65rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <span style={{
                    background: `${c.color}10`,
                    color: c.color,
                    border: `1px solid ${c.color}30`,
                    padding: '6px 14px', borderRadius: 50,
                    fontSize: '0.72rem', fontWeight: 800, letterSpacing: 1.5,
                    textTransform: 'uppercase', fontFamily: 'Inter,sans-serif',
                  }}>{c.badge}</span>
                </div>

                <h3 style={{
                  fontSize: '1.45rem', fontWeight: 800, marginBottom: 12,
                  color: '#0b1220', fontFamily: 'Inter,sans-serif',
                  lineHeight: 1.25, letterSpacing: '-0.014em', position: 'relative',
                }}>{c.title}</h3>

                <p style={{
                  fontSize: '0.96rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 30, fontFamily: 'Inter,sans-serif', position: 'relative',
                }}>{c.desc}</p>

                <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="j-cta ahover" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'transparent', color: c.color,
                  border: `2px solid ${c.color}`,
                  borderRadius: 12, padding: '0.78rem 1.5rem',
                  fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.88rem',
                  textDecoration: 'none', transition: 'all 0.3s', position: 'relative',
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
