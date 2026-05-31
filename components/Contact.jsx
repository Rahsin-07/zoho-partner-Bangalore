'use client'
import { useEffect, useRef } from 'react'

// Section 10, Hire a Zoho Developer in Bangalore
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
          {/* LEFT, copy */}
          <div className="col-lg-6 fade-up zx-sl">
            <div className="section-label">Hire a Developer</div>
            <h2 className="section-title">
              Hire a Zoho Developer in Bangalore <span className="grad-blue-red">Who Gets Real Work Done</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.75, fontFamily: 'Inter,sans-serif', marginBottom: 18 }}>
              In Bangalore, most of the Zoho projects fail not due to budget but because the wrong person is handling them. We place developers who have already solved problems like yours in retail, manufacturing, services and more.
            </p>
            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.72, fontFamily: 'Inter,sans-serif', marginBottom: 18 }}>
              Each business is unique and a developer who does not learn how to operate the business will always have issues later. At ZoFlowX, <a href="/hire-zoho-developer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>hire a Zoho developer in Bangalore</a> who works in your workflow first and only begins to build when the whole picture is clear.
            </p>
            <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.72, fontFamily: 'Inter,sans-serif', marginBottom: 28 }}>
              Every <a href="/zoho-customization-services" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>customized Zoho app</a> we build starts with a clear scope, moves through structured development, and ends with thorough testing. No surprises mid-build. No rework after handover. A simple solution that your team can use from the start.
            </p>

            <a href ="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="btn-gradient ahover">
              Hire a Zoho Developer in Bangalore Now <i className="bi bi-arrow-right" />
            </a>
          </div>

          {/* RIGHT, branded illustration */}
          <div className="col-lg-6 fade-up zx-sr" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              borderRadius: 26, overflow: 'hidden',
              border: '1px solid #e8e3dc',
              boxShadow: '0 30px 80px rgba(11,18,32,0.10)',
              background: 'linear-gradient(160deg, #f5f8ff 0%, #fef6f0 100%)',
            }}>
              <svg viewBox="0 0 560 460" role="img"
                aria-label="Zoho developers in Bangalore at ZoFlowX building customized Zoho solutions"
                style={{ width: '100%', height: 'auto', display: 'block' }}>
                <defs>
                  <linearGradient id="hg-screen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1e3a8a" /><stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="hg-bar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#2563eb" /><stop offset="0.55" stopColor="#dc2626" /><stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                {/* desk */}
                <rect x="40" y="372" width="480" height="14" rx="7" fill="#e8e3dc" />

                {/* monitor */}
                <rect x="92" y="96" width="300" height="196" rx="16" fill="url(#hg-screen)" />
                <rect x="92" y="96" width="300" height="196" rx="16" fill="none" stroke="#0b1220" strokeOpacity="0.15" />
                <rect x="92" y="96" width="300" height="30" rx="14" fill="#0b1220" fillOpacity="0.18" />
                <circle cx="112" cy="111" r="4" fill="#f59e0b" /><circle cx="128" cy="111" r="4" fill="#dc2626" /><circle cx="144" cy="111" r="4" fill="#34d399" />
                {/* code lines */}
                <rect x="116" y="146" width="60" height="9" rx="4.5" fill="#fcd34d" />
                <rect x="184" y="146" width="120" height="9" rx="4.5" fill="#93c5fd" />
                <rect x="132" y="168" width="150" height="9" rx="4.5" fill="#fca5a5" />
                <rect x="132" y="190" width="90" height="9" rx="4.5" fill="#93c5fd" />
                <rect x="230" y="190" width="70" height="9" rx="4.5" fill="#fcd34d" />
                <rect x="116" y="212" width="110" height="9" rx="4.5" fill="#ffffff" fillOpacity="0.7" />
                <rect x="116" y="234" width="180" height="9" rx="4.5" fill="#93c5fd" />
                {/* stand */}
                <rect x="232" y="292" width="20" height="44" fill="#cbd5e1" />
                <rect x="200" y="334" width="84" height="12" rx="6" fill="#cbd5e1" />

                {/* floating Zoho module cards */}
                <g>
                  <rect x="392" y="120" width="128" height="58" rx="12" fill="#fff" stroke="#e8e3dc" />
                  <rect x="392" y="120" width="6" height="58" rx="3" fill="#2563eb" />
                  <circle cx="420" cy="149" r="13" fill="#2563eb" fillOpacity="0.14" />
                  <rect x="442" y="140" width="62" height="8" rx="4" fill="#0b1220" fillOpacity="0.8" />
                  <rect x="442" y="155" width="44" height="7" rx="3.5" fill="#94a3b8" />
                </g>
                <g>
                  <rect x="408" y="196" width="128" height="58" rx="12" fill="#fff" stroke="#e8e3dc" />
                  <rect x="408" y="196" width="6" height="58" rx="3" fill="#dc2626" />
                  <circle cx="436" cy="225" r="13" fill="#dc2626" fillOpacity="0.14" />
                  <rect x="458" y="216" width="62" height="8" rx="4" fill="#0b1220" fillOpacity="0.8" />
                  <rect x="458" y="231" width="44" height="7" rx="3.5" fill="#94a3b8" />
                </g>
                <g>
                  <rect x="392" y="272" width="128" height="58" rx="12" fill="#fff" stroke="#e8e3dc" />
                  <rect x="392" y="272" width="6" height="58" rx="3" fill="#f59e0b" />
                  <circle cx="420" cy="301" r="13" fill="#f59e0b" fillOpacity="0.16" />
                  <rect x="442" y="292" width="62" height="8" rx="4" fill="#0b1220" fillOpacity="0.8" />
                  <rect x="442" y="307" width="44" height="7" rx="3.5" fill="#94a3b8" />
                </g>

                {/* developer */}
                <circle cx="172" cy="316" r="22" fill="#fcd34d" />
                <path d="M150 372 q22 -34 44 0 z" fill="#2563eb" />
                <rect x="158" y="318" width="28" height="40" rx="13" fill="#2563eb" />

                {/* gear accent */}
                <g transform="translate(330 86)" fill="#f59e0b">
                  <circle r="11" fill="#fff" stroke="#f59e0b" strokeWidth="5" />
                  <g>
                    <rect x="-3" y="-20" width="6" height="8" rx="2" />
                    <rect x="-3" y="12" width="6" height="8" rx="2" />
                    <rect x="-20" y="-3" width="8" height="6" rx="2" />
                    <rect x="12" y="-3" width="8" height="6" rx="2" />
                  </g>
                </g>

                {/* top accent bar */}
                <rect x="92" y="60" width="160" height="6" rx="3" fill="url(#hg-bar)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}