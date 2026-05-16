'use client'
import { useEffect, useRef, useState } from 'react'

// Section 16 — Let's build your Zoho system (Contact form)
const benefits = [
  { icon: 'bi-lightning-charge-fill', color: '#fcd34d', title: 'Same-day reply',     desc: 'A senior consultant replies to every form, every day.' },
  { icon: 'bi-shield-check',          color: '#93c5fd', title: 'Zero obligation',    desc: 'No credit card. No spam. Just a clear conversation.' },
  { icon: 'bi-person-badge',          color: '#fca5a5', title: 'No SDRs',            desc: 'You talk to someone who can actually fix things.' },
]

const channels = [
  { icon: 'bi-envelope-fill',   label: 'Email',    value: 'info@zoflowx.com', href: 'mailto:info@zoflowx.com',   color: '#2563eb' },
  { icon: 'bi-telephone-fill',  label: 'Call us',  value: '+91 8190 009 222', href: 'tel:+918190009222',         color: '#dc2626' },
  { icon: 'bi-whatsapp',        label: 'WhatsApp', value: 'Message us anytime', href: 'https://wa.me/918190009222', color: '#25d366' },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', requirement: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo handling — wire to your backend / Zoho Forms / mailto.
    const subject = encodeURIComponent(`New requirement from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nRequirement:\n${form.requirement}`
    )
    window.location.href = `mailto:info@zoflowx.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} style={{
      background: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row g-5 align-items-stretch">
          {/* LEFT — copy & channels */}
          <div className="col-lg-5 fade-up">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">
              Let's build your <span className="grad-blue-red">Zoho system</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.75, fontFamily: 'Inter,sans-serif', marginBottom: 28 }}>
              Tell us your requirements, and our team will connect with you shortly. We reply same-day — usually in under 4 hours during business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {benefits.map(b => (
                <div key={b.title} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '14px 16px',
                  background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 14,
                  transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(4px)'
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.borderColor = '#0b1220'
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(11,18,32,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.background = '#fafaf7'
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: `linear-gradient(135deg, ${b.color}, ${b.color})`,
                    color: '#0b1220', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.05rem', flexShrink: 0,
                  }}>
                    <i className={`bi ${b.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '0.94rem', color: '#0b1220', marginBottom: 2 }}>{b.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              fontSize: '0.72rem', fontWeight: 800, letterSpacing: 1.8,
              textTransform: 'uppercase', color: '#94a3b8', marginBottom: 14,
              fontFamily: 'Inter,sans-serif',
            }}>Or reach us directly</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {channels.map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '12px 16px',
                    background: '#fff', border: '1px solid #e8e3dc', borderRadius: 12,
                    textDecoration: 'none', transition: 'all 0.3s var(--ease-out)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = c.color
                    e.currentTarget.style.boxShadow = `0 10px 24px ${c.color}1f`
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.querySelector('.ch-icon').style.background = c.color
                    e.currentTarget.querySelector('.ch-icon').style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.transform = ''
                    e.currentTarget.querySelector('.ch-icon').style.background = `${c.color}15`
                    e.currentTarget.querySelector('.ch-icon').style.color = c.color
                  }}
                >
                  <div className="ch-icon" style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${c.color}15`, color: c.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.05rem', flexShrink: 0, transition: 'all 0.3s',
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Inter,sans-serif' }}>{c.label}</div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#0b1220' }}>{c.value}</div>
                  </div>
                  <i className="bi bi-arrow-up-right" style={{ color: '#94a3b8', fontSize: '0.92rem' }} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="col-lg-7 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: '#fff', borderRadius: 26, padding: '40px 36px',
              border: '1px solid #e8e3dc', position: 'relative', overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(11,18,32,0.10)',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: 'var(--grad-tri)' }} />
              <div aria-hidden style={{ position: 'absolute', top: -100, right: -100, width: 280, height: 280, background: 'radial-gradient(circle, rgba(220,38,38,0.10), transparent 70%)', pointerEvents: 'none' }} />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0', position: 'relative' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'var(--grad-tri)', color: '#fff',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.4rem', marginBottom: 20,
                    boxShadow: '0 20px 44px rgba(37,99,235,0.30)',
                  }}>
                    <i className="bi bi-check-lg" />
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0b1220', marginBottom: 8 }}>
                    Thanks — we've got it.
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#64748b', fontFamily: 'Inter,sans-serif', maxWidth: 380, margin: '0 auto' }}>
                    Your email client just opened with the message pre-filled. Once you hit send, our team will reply same day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                    fontSize: '1.5rem', color: '#0b1220', marginBottom: 6,
                    letterSpacing: '-0.014em',
                  }}>
                    Send My Requirement
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginBottom: 26 }}>
                    Quick form — 60 seconds. We'll reply within the business day.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>
                        Full Name *
                      </label>
                      <input type="text" required value={form.name} onChange={handleChange('name')} className="zfx-input" placeholder="Your name" />
                    </div>
                    <div className="col-md-6">
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>
                        Email Address *
                      </label>
                      <input type="email" required value={form.email} onChange={handleChange('email')} className="zfx-input" placeholder="you@company.com" />
                    </div>
                    <div className="col-12">
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>
                        Phone Number
                      </label>
                      <input type="tel" value={form.phone} onChange={handleChange('phone')} className="zfx-input" placeholder="+91 ..." />
                    </div>
                    <div className="col-12">
                      <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>
                        Your Requirement *
                      </label>
                      <textarea required value={form.requirement} onChange={handleChange('requirement')} className="zfx-input" rows={5}
                        placeholder="Briefly describe what you need help with — implementation, migration, customization, app development, support..."
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>
                      <i className="bi bi-shield-lock-fill" style={{ color: '#10b981' }} />
                      Your details are kept confidential.
                    </div>
                    <button type="submit" className="btn-gradient ahover">
                      Send My Requirement <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
