'use client'
import { useEffect, useRef, useState } from 'react'

// Section 16 — Get In Touch (contact cards + requirement form)
const channels = [
  { icon: 'bi-whatsapp',   color: '#16a34a', label: 'WhatsApp', value: '+91 81900 09222', href: 'https://wa.me/918190009222', sub: 'Chat with our team' },
  { icon: 'bi-envelope',   color: '#2563eb', label: 'Email',    value: 'info@zoflowx.com', href: 'mailto:info@zoflowx.com',     sub: 'We reply within a day' },
  { icon: 'bi-telephone',  color: '#dc2626', label: 'Call',     value: '+91 81900 09222', href: 'tel:+918190009222',           sub: 'Mon–Sat, 9am–11pm IST' },
]

export default function GetInTouch() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', requirement: '' })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = () => {
    const subject = encodeURIComponent(`New Zoho requirement from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nRequirement:\n${form.requirement}`
    )
    window.location.href = `mailto:info@zoflowx.com?subject=${subject}&body=${body}`
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: 12,
    border: '1px solid #e8e3dc', background: '#fafaf7', outline: 'none',
    fontSize: '0.95rem', fontFamily: 'Inter,sans-serif', color: '#0b1220',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  const focus = (e) => { e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.12)' }
  const blur = (e) => { e.target.style.borderColor = '#e8e3dc'; e.target.style.boxShadow = 'none' }

  return (
    <section id="get-in-touch" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-6%', width: 440, height: 440, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 720, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Get in touch</span>
          </div>
          <h2 className="section-title">
            Let's build your <span className="grad-blue-red">Zoho system</span>
          </h2>
          <p className="section-sub mx-auto">
            Tell us your requirements, and our team will connect with you shortly.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* LEFT — contact channels */}
          <div className="col-lg-5 fade-up zx-sl">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
              {channels.map(c => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none',
                    background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 18,
                    padding: '22px 24px', flex: 1, transition: 'all 0.3s var(--ease-out)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = c.color
                    e.currentTarget.style.boxShadow = `0 16px 36px ${c.color}1f`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `${c.color}15`, color: c.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: 1.4, textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginBottom: 4 }}>{c.label}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '1.02rem', color: '#0b1220' }}>{c.value}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — requirement form */}
          <div className="col-lg-7 fade-up zx-sr" style={{ transitionDelay: '0.1s' }}>
            <div style={{
              background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
              padding: '34px 32px', boxShadow: '0 24px 60px rgba(11,18,32,0.08)', position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--grad-tri)' }} />
              <div className="row g-3">
                <div className="col-sm-6">
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 7, fontFamily: 'Inter,sans-serif' }}>Full Name</label>
                  <input type="text" value={form.name} onChange={set('name')} onFocus={focus} onBlur={blur} placeholder="Your name" style={inputStyle} />
                </div>
                <div className="col-sm-6">
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 7, fontFamily: 'Inter,sans-serif' }}>Email Address</label>
                  <input type="email" value={form.email} onChange={set('email')} onFocus={focus} onBlur={blur} placeholder="you@company.com" style={inputStyle} />
                </div>
                <div className="col-12">
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 7, fontFamily: 'Inter,sans-serif' }}>Phone Number</label>
                  <input type="tel" value={form.phone} onChange={set('phone')} onFocus={focus} onBlur={blur} placeholder="+91 ..." style={inputStyle} />
                </div>
                <div className="col-12">
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 7, fontFamily: 'Inter,sans-serif' }}>Your Requirement</label>
                  <textarea value={form.requirement} onChange={set('requirement')} onFocus={focus} onBlur={blur} rows={4} placeholder="Tell us what you need help with…" style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <div className="col-12">
                  <button type="button" onClick={handleSubmit} className="btn-gradient ahover" style={{ width: '100%', justifyContent: 'center', padding: '0.95rem 1.5rem' }}>
                    Send My Requirement <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
