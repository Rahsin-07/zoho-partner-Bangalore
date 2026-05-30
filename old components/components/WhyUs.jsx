'use client'
import { useEffect, useRef } from 'react'

// Section 5 — Why ZoFlowX (3 reasons + intro per brief)
const reasons = [
  {
    icon: 'bi-search',
    color: '#2563eb',
    title: 'We Learn Your Business First',
    desc: 'Before we configure anything, we take time to understand how your team works. Every Zoho decision we make is shaped by your processes, not ours.',
  },
  {
    icon: 'bi-arrow-through-heart',
    color: '#dc2626',
    title: 'We See It Through, Start to Finish',
    desc: 'From the first consultation to post-launch support, our core team handles everything. No outsourcing. No ghosting after the project goes live.',
  },
  {
    icon: 'bi-geo-alt-fill',
    color: '#f59e0b',
    title: 'Built for How Bangalore Businesses Operate',
    desc: 'Local compliance, Bangalore-relevant integrations like Razorpay, IndiaMART, and Tally, same-timezone support, and a team that understands how local businesses actually run.',
  },
]

const bullets = [
  '15+ Zoho specialists on staff',
  '15+ years of hands-on experience',
  '50+ implementations across India',
  'Bangalore + Mumbai + Chennai + Hyderabad',
]

export default function WhyUs() {
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
    <section id="why-us" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 480, height: 480, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.07), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 880, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Why ZoFlowX</span>
          </div>
          <h2 className="section-title">
            Why Bangalore Businesses Choose <span className="grad-blue-red">ZoFlowX</span> as Their Zoho Partner
          </h2>
          <p className="section-sub mx-auto" style={{ maxWidth: 780 }}>
            We're not just familiar with Zoho — we know why most implementations fail and how yours can succeed. We don't just configure; we learn your business and build Zoho around it.
          </p>

          {/* Inline bullets */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap',
            marginTop: 28,
          }}>
            {bullets.map((b, i) => (
              <div key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 50,
                padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600,
                color: '#334155', fontFamily: 'Inter,sans-serif',
                boxShadow: '0 4px 12px rgba(11,18,32,0.04)',
              }}>
                <i className="bi bi-check-circle-fill" style={{ color: ['#2563eb', '#dc2626', '#f59e0b', '#2563eb'][i], fontSize: '0.9rem' }} />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                position: 'relative', padding: '36px 30px',
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                height: '100%', transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${r.color}1f`
                  el.style.borderColor = r.color
                  el.querySelector('.w-bg').style.opacity = '1'
                  el.querySelector('.w-icon').style.transform = 'scale(1.06) rotate(-4deg)'
                  el.querySelector('.w-icon').style.background = r.color
                  el.querySelector('.w-icon').style.color = '#fff'
                  el.querySelector('.w-num').style.opacity = '1'
                  el.querySelector('.w-num').style.color = r.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.w-bg').style.opacity = '0'
                  el.querySelector('.w-icon').style.transform = ''
                  el.querySelector('.w-icon').style.background = `${r.color}15`
                  el.querySelector('.w-icon').style.color = r.color
                  el.querySelector('.w-num').style.opacity = '0.18'
                  el.querySelector('.w-num').style.color = '#cbd5e1'
                }}
              >
                <div className="w-bg" aria-hidden style={{
                  position: 'absolute', inset: 0, opacity: 0,
                  background: `linear-gradient(135deg, ${r.color}06, transparent 55%)`,
                  transition: 'opacity 0.4s',
                }} />
                <div className="w-num" aria-hidden style={{
                  position: 'absolute', top: 20, right: 24, fontFamily: 'inter Sans,sans-serif',
                  fontSize: '3.2rem', fontWeight: 900, letterSpacing: -2,
                  color: '#cbd5e1', opacity: 0.18, lineHeight: 1, transition: 'all 0.4s',
                }}>0{i + 1}</div>

                <div className="w-icon" style={{
                  width: 60, height: 60, borderRadius: 16, marginBottom: 22,
                  background: `${r.color}15`, color: r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${r.icon}`} />
                </div>

                <h3 style={{
                  fontSize: '1.22rem', fontWeight: 800,
                  marginBottom: 12, color: '#0b1220',
                  fontFamily: 'inter Sans,sans-serif', lineHeight: 1.28,
                  letterSpacing: '-0.014em', position: 'relative', zIndex: 1,
                }}>{r.title}</h3>

                <p style={{
                  fontSize: '0.94rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif', position: 'relative', zIndex: 1,
                }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
