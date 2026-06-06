'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    color: '#2563eb',
    quote: "We run a bike and car accessories shop and were looking for a better way to manage our billing and inventory. A friend suggested this team, and they walked us through Zoho Books and Zoho Inventory in a very simple way. They are one of the best Zoho partners we've come across. No technical terms, just practical solutions. Really happy with the support we received.",
    name: 'Shijith V R', role: 'CEO - Kumari PitShop', initial: 'VR', rating: 5,
  },
  {
    color: '#dc2626',
    quote: "Thanks a ton Mr. Arul & ZoFlowX team!! ZoFlowX sets a benchmark as one of the best Zoho partners in Chennai. Their expertise, strategic approach, and customer-first mindset make them a trusted Zoho consultant in Chennai. They go beyond implementation—offering insights, optimization, and scalable solutions tailored to business growth. For anyone seeking top-tier Zoho consultants in Chennai or a dependable Zoho partner in Chennai, ZoFlowX is an excellent choice.",
    name: 'Sankara Subramanian A', role: 'Founder-TN Spaces', initial: 'SS', rating: 5,
  },
  {
    color: '#f59e0b',
    quote: "We partnered with ZoFlowX at Cflow (Cavintek) for our Zoho CRM implementation, and the experience has been outstanding. The team at ZoFlowX listens, understands your exact requirement, and comes back with a better solution than what you asked for. The entire ZoFlowX team is proactive, reachable in real time, and genuinely invested in making things work. We went live within a week. Post-implementation support has been just as strong. Pricing is fair and transparent. If you're looking for a Zoho implementation partner who treats your business like their own, ZoFlowX is the one.",
    name: 'Kishore PA', role: 'Cflow · Cavintek', initial: 'KP', rating: 5,
  },
]

function TestimonialModal({ t, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(11,18,32,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeInOverlay 0.25s ease',
      }}
    >
      <style>{`
        @keyframes fadeInOverlay { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUpModal { from { opacity: 0; transform: translateY(24px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
      `}</style>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 24,
          padding: '40px 36px 32px',
          maxWidth: 560,
          width: '100%',
          position: 'relative',
          boxShadow: `0 40px 100px ${t.color}30, 0 8px 32px rgba(0,0,0,0.18)`,
          border: `1.5px solid ${t.color}40`,
          animation: 'slideUpModal 0.3s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: t.color, borderRadius: '24px 24px 0 0',
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: '50%',
            border: '1px solid #e8e3dc',
            background: '#f8f7f5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1rem', color: '#64748b',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = t.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = t.color }}
          onMouseLeave={e => { e.currentTarget.style.background = '#f8f7f5'; e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = '#e8e3dc' }}
        >
          <i className="bi bi-x" />
        </button>

        {/* Big quote icon */}
        <i className="bi bi-quote" style={{
          position: 'absolute', top: 18, right: 56,
          fontSize: '3.5rem', color: t.color, opacity: 0.13, lineHeight: 1,
        }} />

        {/* Stars */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
          {[...Array(t.rating)].map((_, si) => (
            <i key={si} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: '0.92rem' }} />
          ))}
        </div>

        {/* Full quote */}
        <p style={{
          fontSize: '0.97rem', color: '#0b1220', lineHeight: 1.78,
          fontFamily: 'Inter,sans-serif', fontStyle: 'italic',
          marginBottom: 28,
        }}>"{t.quote}"</p>

        {/* Author */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          paddingTop: 20, borderTop: '1px solid #f0ece6',
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: t.color, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: '0.9rem', flexShrink: 0,
            boxShadow: `0 6px 16px ${t.color}40`,
          }}>{t.initial}</div>
          <div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '0.94rem', color: '#0b1220' }}>{t.name}</div>
            <div style={{ fontSize: '0.79rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

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
      <style>{`
        .t-card-quote {
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .t-read-more {
          background: none;
          border: none;
          padding: 0;
          font-family: Inter, sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          transition: gap 0.2s;
        }
        .t-read-more:hover { gap: 7px; }
        .t-card {
          background: #fff;
          border: 1px solid #e8e3dc;
          border-radius: 22px;
          padding: 30px 26px 24px;
          height: 100%;
          transition: all 0.4s cubic-bezier(.2,.7,.2,1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
      `}</style>

      <div aria-hidden style={{
        position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: '20rem', fontFamily: 'Inter,sans-serif',
        fontWeight: 900, color: 'rgba(11,18,32,0.025)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 800, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Testimonials</span>
          </div>
          <h2 className="section-title">
            Voices of Our <span className="grad-blue-red">Happy Customers</span>
          </h2>
          <p className="section-sub mx-auto">
            Genuine results shared by real businesses, discover why companies across India consistently choose ZoFlowX as their authorized Zoho Partner.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`col-md-6 col-lg-4 fade-up ${['zx-sl','zx-su','zx-sr'][i % 3]}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div
                className="t-card"
                onClick={() => setActive(t)}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${t.color}24`
                  el.style.borderColor = t.color
                  el.querySelector('.t-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.t-quote-icon').style.opacity = '1'
                  el.querySelector('.t-avatar').style.transform = 'scale(1.04)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.t-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.t-quote-icon').style.opacity = '0.18'
                  el.querySelector('.t-avatar').style.transform = ''
                }}
              >
                <div className="t-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: t.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />

                <i className="bi bi-quote t-quote-icon" style={{
                  position: 'absolute', top: 14, right: 18, fontSize: '4rem',
                  color: t.color, opacity: 0.18, lineHeight: 1,
                  transition: 'opacity 0.4s',
                }} />

                {/* Stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 14, position: 'relative', zIndex: 1 }}>
                  {[...Array(t.rating)].map((_, si) => (
                    <i key={si} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: '0.92rem' }} />
                  ))}
                </div>

                {/* Truncated quote */}
                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                  <p className="t-card-quote" style={{
                    fontSize: '0.95rem', color: '#0b1220', lineHeight: 1.72,
                    fontFamily: 'Inter,sans-serif', fontStyle: 'italic',
                    marginBottom: 0,
                  }}>"{t.quote}"</p>

                  {/* Fade-out gradient over text */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 40,
                    background: 'linear-gradient(to bottom, transparent, #fff)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Read more */}
                <button
                  className="t-read-more"
                  style={{ color: t.color, marginTop: 12, position: 'relative', zIndex: 1 }}
                  onClick={e => { e.stopPropagation(); setActive(t) }}
                >
                  Read full review <i className="bi bi-arrow-right" style={{ fontSize: '0.78rem' }} />
                </button>

                {/* Author */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  paddingTop: 16, marginTop: 8, borderTop: '1px solid #f0ece6',
                }}>
                  <div className="t-avatar" style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: t.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Inter,sans-serif', fontWeight: 800,
                    fontSize: '0.88rem', flexShrink: 0,
                    boxShadow: `0 6px 16px ${t.color}40`,
                    transition: 'transform 0.4s cubic-bezier(.2,.7,.2,1)',
                  }}>{t.initial}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#0b1220' }}>{t.name}</div>
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
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="btn-primary-custom ahover">
            Tell Us About Your Project <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {active && <TestimonialModal t={active} onClose={() => setActive(null)} />}
    </section>
  )
}