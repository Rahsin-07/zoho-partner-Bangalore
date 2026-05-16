'use client'
import { useEffect, useRef } from 'react'

// Section 15 — Zoho Tips, Guides and Expert Resources
const articles = [
  {
    color: '#2563eb', category: 'Implementation', readTime: '8 min read',
    title: 'How we structure a 30-minute Zoho audit (and why it works)',
    excerpt: 'The questions we ask, the screens we open, and the four red flags we look for before quoting a number.',
    icon: 'bi-clipboard2-check',
  },
  {
    color: '#dc2626', category: 'Automation', readTime: '11 min read',
    title: '5 Deluge patterns that quietly fail at scale (and our fixes)',
    excerpt: 'Throttling, retry logic, idempotent updates, partial saves and audit logging — what most freelance scripts skip.',
    icon: 'bi-code-slash',
  },
  {
    color: '#f59e0b', category: 'Migration', readTime: '14 min read',
    title: 'Tally to Zoho Books: a checklist from 1,500+ records of pain',
    excerpt: 'PIN codes, MobilePhone formats, custom numbering, GST templates — lessons from the Image Star migration.',
    icon: 'bi-arrow-left-right',
  },
]

export default function Resources() {
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
    <section id="resources" ref={ref} style={{ background: '#fafaf7', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Resources</div>
            <h2 className="section-title">
              Zoho Tips, Guides and <span className="grad-blue-yellow">Expert Resources</span>
            </h2>
            <p className="section-sub">
              Keep your Zoho knowledge sharp with tutorials, best practices and actionable insights from India's trusted Zoho Partner — no SEO fluff, no chatbot ghost-writing.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#" className="link-reveal">
              View All Articles <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((a, i) => (
            <div key={a.title} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <a href="#" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <article className="art-card" style={{
                  background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                  padding: '0', height: '100%', overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                  display: 'flex', flexDirection: 'column', position: 'relative',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(-6px)'
                    el.style.boxShadow = `0 28px 60px ${a.color}24`
                    el.style.borderColor = a.color
                    el.querySelector('.art-cover').style.transform = 'scale(1.04)'
                    el.querySelector('.art-arrow').style.transform = 'translateX(6px) rotate(-8deg)'
                    el.querySelector('.art-arrow').style.background = a.color
                    el.querySelector('.art-arrow').style.color = '#fff'
                    el.querySelector('.art-title').style.color = a.color
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = ''
                    el.style.boxShadow = ''
                    el.style.borderColor = '#e8e3dc'
                    el.querySelector('.art-cover').style.transform = ''
                    el.querySelector('.art-arrow').style.transform = ''
                    el.querySelector('.art-arrow').style.background = `${a.color}15`
                    el.querySelector('.art-arrow').style.color = a.color
                    el.querySelector('.art-title').style.color = '#0b1220'
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', background: `linear-gradient(135deg, ${a.color}18, ${a.color}05)` }}>
                    <div className="art-cover" aria-hidden style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1)',
                    }}>
                      <div style={{
                        width: 86, height: 86, borderRadius: 22, background: '#fff',
                        boxShadow: `0 16px 40px ${a.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: a.color, fontSize: '2.4rem',
                      }}>
                        <i className={`bi ${a.icon}`} />
                      </div>
                    </div>
                    <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.4 }} className="dot-grid" />
                  </div>

                  <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <span style={{
                        background: `${a.color}15`, color: a.color,
                        padding: '4px 12px', borderRadius: 50,
                        fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.2,
                        textTransform: 'uppercase', fontFamily: 'Inter,sans-serif',
                      }}>{a.category}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>{a.readTime}</span>
                    </div>

                    <h3 className="art-title" style={{
                      fontSize: '1.1rem', fontWeight: 800,
                      color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                      lineHeight: 1.32, marginBottom: 10, letterSpacing: '-0.012em',
                      transition: 'color 0.3s', flex: 1,
                    }}>{a.title}</h3>

                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.68, fontFamily: 'Inter,sans-serif', marginBottom: 18 }}>{a.excerpt}</p>

                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', paddingTop: 14, borderTop: '1px solid #f0ece6',
                    }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', fontFamily: 'Plus Jakarta Sans,sans-serif' }}>Read article</span>
                      <span className="art-arrow" style={{
                        width: 32, height: 32, borderRadius: 10,
                        background: `${a.color}15`, color: a.color,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.9rem', transition: 'all 0.3s cubic-bezier(.2,.7,.2,1)',
                      }}>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
