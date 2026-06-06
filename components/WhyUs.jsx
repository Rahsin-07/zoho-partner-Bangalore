'use client'
import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: 'bi-search',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    title: 'We Learn Your Business First',
    desc: 'Before we configure anything, we take time to understand how your team works. Every Zoho decision we make is shaped by your processes, not ours.',
  },
  {
    icon: 'bi-arrow-through-heart',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    title: 'We See It Through, Start to Finish',
    desc: 'From the first consultation to post-launch support, our core team handles everything. No outsourcing. No ghosting after the project goes live.',
  },
  {
    icon: 'bi-geo-alt-fill',
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    title: 'Built for How Bangalore Businesses Operate',
    desc: 'Local compliance, Bangalore-relevant integrations like Razorpay, IndiaMART, and Tally, same-timezone support, and a team that understands how local businesses actually run.',
  },
]

const INTERVAL = 3500

export default function WhyUs() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  // Intersection fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.fade-left, .fade-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  // Auto-slide
  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 320)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % reasons.length
        return next
      })
    }, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [])

  const r = reasons[active]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        #why-us * { box-sizing: border-box; font-family: 'Inter', sans-serif; }

        .fade-left, .fade-right {
          opacity: 0;
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-left  { transform: translateX(-28px); }
        .fade-right { transform: translateX(28px); }
        .fade-left.visible, .fade-right.visible { opacity: 1; transform: none; }

        .why-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px 5px 8px;
          border-radius: 999px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.07em;
          text-transform: uppercase; border: 1px solid;
          background: rgba(37,99,235,0.07);
          border-color: rgba(37,99,235,0.22);
          color: #2563eb;
          font-family: 'Inter', sans-serif;
        }

        .slide-card {
          position: relative;
          background: #fff;
          border-radius: 24px;
          padding: 44px 40px 40px;
          border: 1px solid #e8e3dc;
          overflow: hidden;
          transition: opacity 0.32s ease, transform 0.32s cubic-bezier(0.22,1,0.36,1);
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .slide-card.out {
          opacity: 0;
          transform: translateY(10px) scale(0.98);
        }
        .slide-card.in {
          opacity: 1;
          transform: none;
        }

        .dot-btn {
          width: 8px; height: 8px; border-radius: 999px;
          border: none; padding: 0; cursor: pointer;
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
          flex-shrink: 0;
        }

        .progress-bar {
          height: 3px;
          border-radius: 99px;
          background: #e8e3dc;
          overflow: hidden;
          margin-top: 4px;
        }
        .progress-fill {
          height: 100%;
          border-radius: 99px;
          animation: fillBar ${INTERVAL}ms linear infinite;
        }
        @keyframes fillBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <section
        id="why-us"
        ref={sectionRef}
        style={{
          background: '#fafaf7',
          position: 'relative',
          overflow: 'hidden',
          padding: '100px 0',
        }}
      >
        {/* Ambient blobs */}
        <div aria-hidden style={{ position: 'absolute', top: '-8%', left: '20%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-5%', right: '-3%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="container position-relative" style={{ maxWidth: 1200 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '72px',
              alignItems: 'center',
            }}
          >
            {/* ── LEFT ── */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="fade-left" style={{ transitionDelay: '0s', marginBottom: 20 }}>
                <span className="why-badge">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', display: 'inline-block' }} />
                  Why ZoFlowX
                </span>
              </div>

              <div className="fade-left" style={{ transitionDelay: '0.07s', marginBottom: 20 }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.9rem, 2.8vw, 2.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: '#0b1220',
                    margin: 0,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Why Bangalore Businesses Choose{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #dc2626 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    ZoFlowX
                  </span>
                </h2>
              </div>

             <div className="fade-left" style={{ transitionDelay: '0.14s' }}>
  <p
    style={{
      fontSize: '0.96rem',
      color: '#64748b',
      lineHeight: 1.8,
      margin: 0,
    }}
  >
    ZoFlowX is a certified Zoho Authorized Partner and Zoho Managed Service Provider
    headquartered in Tirunelveli, India, with a dedicated team of 15+ Zoho specialists.
    With over 15 years of experience and 50+ successful Zoho implementations delivered
    across India, we bring deep hands-on expertise across the complete Zoho product suite.
    We have worked with businesses of all sizes and industry segments throughout India 
    from startups to enterprises. Our Bangalore team serves businesses across Whitefield,
    Koramangala, Electronic City, Indiranagar and HSR Layout, as well as Mumbai, Chennai,
    Hyderabad, Delhi and Pune, and remotely across India. We're not just familiar with
    Zoho we know why most implementations fail and how yours can succeed. As your{' '}
    <strong style={{ color: '#0b1220', fontWeight: 600 }}>
      Authorized Zoho Partner in Bangalore
    </strong>
    , we do more than configure. We learn how your business operates, identify what's
    wrong, and build a Zoho environment tailored to your specific requirements  not a
    template.
  </p>
</div>

              {/* Cert badges */}
             
            </div>

            {/* ── RIGHT: auto-sliding single card ── */}
            <div className="fade-right" style={{ transitionDelay: '0.1s' }}>

              {/* Card */}
              <div
                className={`slide-card ${animating ? 'out' : 'in'}`}
                style={{
                  boxShadow: `0 32px 80px ${r.color}18`,
                  borderColor: `${r.color}30`,
                }}
              >
                {/* Top gradient strip */}
                <div
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                    background: r.gradient, borderRadius: '24px 24px 0 0',
                  }}
                />

                {/* Ghost number */}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute', top: 20, right: 28,
                    fontSize: '5rem', fontWeight: 900, lineHeight: 1,
                    color: `${r.color}10`, letterSpacing: '-0.04em',
                    userSelect: 'none', pointerEvents: 'none',
                  }}
                >
                  0{active + 1}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: 64, height: 64, borderRadius: 18,
                    background: `${r.color}12`, color: r.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.7rem', marginBottom: 28, position: 'relative', zIndex: 1,
                  }}
                >
                  <i className={`bi ${r.icon}`} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.45rem', fontWeight: 800,
                    color: '#0b1220', marginBottom: 14,
                    lineHeight: 1.22, letterSpacing: '-0.02em',
                    position: 'relative', zIndex: 1,
                  }}
                >
                  {r.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontSize: '1rem', color: '#64748b', lineHeight: 1.78,
                    margin: 0, position: 'relative', zIndex: 1, flexGrow: 1,
                  }}
                >
                  {r.desc}
                </p>

                {/* Bottom: dots + progress */}
                <div style={{ marginTop: 36, position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    {reasons.map((_, i) => (
                      <button
                        key={i}
                        className="dot-btn"
                        onClick={() => {
                          clearInterval(timerRef.current)
                          goTo(i)
                          timerRef.current = setInterval(() => {
                            setActive((prev) => (prev + 1) % reasons.length)
                          }, INTERVAL)
                        }}
                        style={{
                          width: i === active ? 28 : 8,
                          background: i === active ? r.color : '#d1cdc7',
                          opacity: i === active ? 1 : 0.5,
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: 'auto', fontSize: '0.78rem', fontWeight: 600,
                        color: '#94a3b8', letterSpacing: '0.04em',
                      }}
                    >
                      {String(active + 1).padStart(2, '0')} / {String(reasons.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Progress bar — key forces remount on active change to restart animation */}
                  <div className="progress-bar">
                    <div
                      key={active}
                      className="progress-fill"
                      style={{ background: r.gradient }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}