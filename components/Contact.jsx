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

          {/* RIGHT, image (from SEO doc) */}
          <div className="col-lg-6 fade-up zx-sr" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              borderRadius: 26, overflow: 'hidden',
              border: '1px solid #e8e3dc',
              boxShadow: '0 30px 80px rgba(11,18,32,0.10)',
            }}>
              <img
                src="/hire.png"
                alt="Zoho developers in Bangalore at ZoFlowX work closely with business teams to deliver customized Zoho solutions that drive real results."
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}