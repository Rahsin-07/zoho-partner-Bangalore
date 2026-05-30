'use client'
import { useEffect, useRef } from 'react'

// Section 13 — Voices of Our Happy Customers
const testimonials = [
  {
    color: '#2563eb',
    quote: "We had three different freelancers running our Zoho before. None of them documented anything. ZoFlowX rebuilt the whole stack, handed us a playbook, and now my team actually knows where each report lives.",
    name: 'Priya R.', role: 'Head of Ops · D2C brand, Bangalore', initial: 'PR', rating: 5,
  },
  {
    color: '#dc2626',
    quote: "I was sceptical about a managed service after our last partner ghosted us. ZoFlowX is the opposite — they reply same day, every change is logged, and our CFO can finally pull a clean P&L without IT in the loop.",
    name: 'Daniel A.', role: 'CFO · Manufacturing exporter, Chennai', initial: 'DA', rating: 5,
  },
  {
    color: '#f59e0b',
    quote: "The audit alone was worth the call. They found four broken workflows we didn't even know existed and showed us exactly how much time the team was losing every week. We signed the contract the same day.",
    name: 'Anjali M.', role: 'Founder · SaaS startup, Bangalore', initial: 'AM', rating: 5,
  },
]

export default function Testimonials() {
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
    <section id="testimonials" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: '20rem', fontFamily: 'inter Sans,sans-serif',
        fontWeight: 900, color: 'rgba(11,18,32,0.025)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 800, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Testimonials</span>
          </div>
          <h2 className="section-title">
            Voices of Our <span className="grad-red-yellow">Happy Customers</span>
          </h2>
          <p className="section-sub mx-auto">
            Genuine results shared by real businesses — discover why companies across India consistently choose ZoFlowX as their authorized Zoho Partner.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={t.name} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                padding: '34px 28px 28px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${t.color}24`
                  el.style.borderColor = t.color
                  el.querySelector('.t-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.t-quote').style.opacity = '1'
                  el.querySelector('.t-avatar').style.transform = 'scale(1.04)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.t-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.t-quote').style.opacity = '0.18'
                  el.querySelector('.t-avatar').style.transform = ''
                }}
              >
                <div className="t-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: t.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />

                <i className="bi bi-quote t-quote" style={{
                  position: 'absolute', top: 14, right: 18, fontSize: '4rem',
                  color: t.color, opacity: 0.18, lineHeight: 1,
                  transition: 'opacity 0.4s',
                }} />

                <div style={{ display: 'flex', gap: 4, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                  {[...Array(t.rating)].map((_, si) => (
                    <i key={si} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: '0.92rem' }} />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.95rem', color: '#0b1220', lineHeight: 1.72,
                  fontFamily: 'Inter,sans-serif', fontStyle: 'italic',
                  marginBottom: 24, position: 'relative', zIndex: 1, flex: 1,
                }}>"{t.quote}"</p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  paddingTop: 18, borderTop: '1px solid #f0ece6',
                }}>
                  <div className="t-avatar" style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: t.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'inter Sans,sans-serif', fontWeight: 800,
                    fontSize: '0.88rem', flexShrink: 0,
                    boxShadow: `0 6px 16px ${t.color}40`,
                    transition: 'transform 0.4s cubic-bezier(.2,.7,.2,1)',
                  }}>{t.initial}</div>
                  <div>
                    <div style={{ fontFamily: 'inter Sans,sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#0b1220' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 1 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 56 }}>
          <p style={{ color: '#475569', fontFamily: 'Inter,sans-serif', fontSize: '0.96rem', marginBottom: 18 }}>
            Want to be our next success story?
          </p>
          <a href="#contact" className="btn-primary-custom ahover">
            Tell Us About Your Project <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
