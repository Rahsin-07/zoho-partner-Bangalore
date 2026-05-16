'use client'
import { useEffect, useRef } from 'react'

// Section 2 — Trusted Across India (brand logos)
const brands = [
  'Rank Me Now',
  'Innoval Digital Solutions',
  'Banana Life',
  'MB Logistics',
  'Cflow',
  'Camp Monk',
  'Shiv Tours & Travels',
  'TN Spaces · True North Co',
]

export default function TrustedBrands() {
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

  // Duplicate for seamless marquee
  const marqueeBrands = [...brands, ...brands]

  return (
    <section ref={ref} id="brands" style={{
      background: '#fff', padding: '74px 0', position: 'relative',
      borderTop: '1px solid #f0ece6', borderBottom: '1px solid #f0ece6',
    }}>
      <div className="container">
        <div className="text-center fade-up" style={{ marginBottom: 36 }}>
          <span className="section-label section-label-blue" style={{ justifyContent: 'center' }}>
            Trusted across India
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800,
            color: '#0b1220', letterSpacing: '-0.018em', marginBottom: 10,
          }}>
            Brands That <span className="grad-blue-red">Trust Us</span>
          </h2>
          <p style={{
            color: '#64748b', fontSize: '0.98rem', maxWidth: 620,
            margin: '0 auto', fontFamily: 'Inter,sans-serif', lineHeight: 1.7,
          }}>
            ZoFlowX is a certified Authorized Zoho Partner in Bangalore, helping businesses across India get the best results from Zoho.
          </p>
        </div>

        <div className="fade-up marquee">
          <div className="marquee-track" style={{ animation: 'marquee-x 32s linear infinite' }}>
            {marqueeBrands.map((b, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 12, padding: '18px 32px', flexShrink: 0,
                background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 16,
                minWidth: 220, transition: 'all 0.3s var(--ease-out)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = '#2563eb'
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(37,99,235,0.10)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.borderColor = '#e8e3dc'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'var(--grad-tri)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '0.95rem', flexShrink: 0,
                }}>
                  {b.charAt(0)}
                </div>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                  fontSize: '0.95rem', color: '#0b1220', whiteSpace: 'nowrap',
                }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="fade-up" style={{
          marginTop: 44, display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 0,
          padding: '24px 16px', background: '#fafaf7',
          border: '1px solid #e8e3dc', borderRadius: 18,
        }}>
          {[
            { v: '50+', l: 'Zoho Implementations', c: '#2563eb' },
            { v: '15+', l: 'Years of Experience', c: '#dc2626' },
            { v: '15+', l: 'Certified Specialists', c: '#f59e0b' },
            { v: '20+', l: 'Industries Served', c: '#0b1220' },
          ].map((s, i, arr) => (
            <div key={s.l} style={{
              textAlign: 'center', padding: '10px 14px',
              borderRight: i < arr.length - 1 ? '1px solid #e8e3dc' : 'none',
            }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                fontWeight: 800, color: s.c, lineHeight: 1, marginBottom: 6,
              }}>{s.v}</div>
              <div style={{
                fontSize: '0.8rem', color: '#64748b',
                fontFamily: 'Inter,sans-serif', lineHeight: 1.4,
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
