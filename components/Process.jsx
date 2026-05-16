'use client'
import { useEffect, useRef } from 'react'

// Section 6 — Our Process (Step-by-Step Zoho Implementation)
const steps = [
  { num: '01', icon: 'bi-chat-dots',          title: 'Free Audit',     desc: 'A 30-minute call where we listen, look at your current setup, and identify what\'s costing you time and money.' },
  { num: '02', icon: 'bi-clipboard2-data',    title: 'Discovery',      desc: 'We map your business workflows and translate them into a Zoho blueprint your team will actually use.' },
  { num: '03', icon: 'bi-pencil-square',      title: 'Design & Plan',  desc: 'You get a written implementation plan with timelines, modules, integrations and clear deliverables. No guesswork.' },
  { num: '04', icon: 'bi-hammer',             title: 'Build & Configure', desc: 'We set up, customize and integrate Zoho around your workflow — with demos at every milestone, not just at the end.' },
  { num: '05', icon: 'bi-mortarboard',        title: 'Train Your Team', desc: 'Hands-on training, recorded walkthroughs, and a custom playbook so your team owns the system from day one.' },
  { num: '06', icon: 'bi-activity',           title: 'Run & Support',  desc: 'Ongoing managed services — monthly check-ins, quick support, and continuous improvement. We don\'t disappear.' },
]

const STEP_COLORS = [
  { ring: '#3b82f6', node: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
  { ring: '#ef4444', node: 'linear-gradient(135deg, #dc2626, #ef4444)' },
  { ring: '#fbbf24', node: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  { ring: '#3b82f6', node: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
  { ring: '#ef4444', node: 'linear-gradient(135deg, #dc2626, #ef4444)' },
  { ring: '#fbbf24', node: 'linear-gradient(135deg, #f59e0b, #d97706)' },
]

export default function Process() {
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
    <section id="process" ref={ref} style={{
      background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
      position: 'relative', overflow: 'hidden', color: '#fff',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 20%, rgba(99,179,237,0.22) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(220,38,38,0.16) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.14) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.25 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.8px',
              textTransform: 'uppercase', color: '#f59e0b', marginBottom: 14,
            }}>
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              Our Process
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(2rem, 4.3vw, 3.15rem)', fontWeight: 800,
            color: '#fff', marginBottom: 18, letterSpacing: '-0.024em', lineHeight: 1.08,
          }}>
            Step-by-Step Zoho <span style={{
              background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Implementation Process</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.74)', fontSize: '1.04rem',
            maxWidth: 720, margin: '0 auto',
            fontFamily: 'Inter,sans-serif', lineHeight: 1.72,
          }}>
            A simple, transparent approach so you always know where things stand, what comes next, and what to expect. From the very first call to ongoing success, we are by your side at every stage.
          </p>
        </div>

        {/* Desktop horizontal timeline — 6 steps in 2 rows */}
        <div className="d-none d-lg-block fade-up" style={{ marginTop: 60 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 60, position: 'relative' }}>
            <div aria-hidden style={{
              position: 'absolute', top: 36, left: '14%', right: '14%', height: 3,
              background: 'linear-gradient(90deg, rgba(147,197,253,0.50) 0%, rgba(252,165,165,0.55) 50%, rgba(252,211,77,0.6) 100%)',
              borderRadius: 3,
            }} />
            {steps.slice(0, 3).map((s, i) => {
              const c = STEP_COLORS[i]
              return (
                <div key={s.num} className="step-cell" style={{ textAlign: 'center', position: 'relative' }}>
                  <div className="step-node" style={{
                    width: 76, height: 76, margin: '0 auto 22px',
                    borderRadius: '50%', background: c.node,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '1.65rem',
                    boxShadow: `0 10px 28px ${c.ring}66, 0 0 0 6px #0b1220, 0 0 0 7px ${c.ring}66`,
                    transition: 'transform 0.36s cubic-bezier(.2,.7,.2,1)',
                    position: 'relative', zIndex: 2,
                  }}>
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.72rem', fontWeight: 800, color: '#f59e0b', letterSpacing: 2.2, marginBottom: 6 }}>STEP {s.num}</div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.16rem', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, fontFamily: 'Inter,sans-serif', padding: '0 8px', marginBottom: 0 }}>{s.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, position: 'relative' }}>
            <div aria-hidden style={{
              position: 'absolute', top: 36, left: '14%', right: '14%', height: 3,
              background: 'linear-gradient(90deg, rgba(147,197,253,0.50) 0%, rgba(252,165,165,0.55) 50%, rgba(252,211,77,0.6) 100%)',
              borderRadius: 3,
            }} />
            {steps.slice(3, 6).map((s, i) => {
              const c = STEP_COLORS[i + 3]
              return (
                <div key={s.num} className="step-cell" style={{ textAlign: 'center', position: 'relative' }}>
                  <div className="step-node" style={{
                    width: 76, height: 76, margin: '0 auto 22px',
                    borderRadius: '50%', background: c.node,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '1.65rem',
                    boxShadow: `0 10px 28px ${c.ring}66, 0 0 0 6px #0b1220, 0 0 0 7px ${c.ring}66`,
                    transition: 'transform 0.36s cubic-bezier(.2,.7,.2,1)',
                    position: 'relative', zIndex: 2,
                  }}>
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.72rem', fontWeight: 800, color: '#f59e0b', letterSpacing: 2.2, marginBottom: 6 }}>STEP {s.num}</div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.16rem', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, fontFamily: 'Inter,sans-serif', padding: '0 8px', marginBottom: 0 }}>{s.desc}</p>
                </div>
              )
            })}
          </div>
          <style>{`
            .step-cell:hover .step-node { transform: translateY(-6px) scale(1.07); }
          `}</style>
        </div>

        {/* Mobile vertical timeline */}
        <div className="d-lg-none fade-up">
          {steps.map((s, i) => {
            const c = STEP_COLORS[i]
            return (
              <div key={s.num} style={{ display: 'flex', gap: 20, padding: '20px 0', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div aria-hidden style={{
                    position: 'absolute', left: 29, top: 72,
                    width: 2, height: 'calc(100% - 42px)',
                    background: `linear-gradient(180deg, ${c.ring}80, ${STEP_COLORS[i+1].ring}80)`,
                  }} />
                )}
                <div style={{
                  width: 60, height: 60, minWidth: 60, borderRadius: '50%',
                  background: c.node, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.3rem',
                  boxShadow: `0 8px 22px ${c.ring}66`, zIndex: 1,
                }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#f59e0b', letterSpacing: 2.2, marginBottom: 4 }}>STEP {s.num}</div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontFamily: 'Inter,sans-serif' }}>{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 60 }}>
          <p style={{
            color: 'rgba(255,255,255,0.74)', fontFamily: 'Inter,sans-serif',
            fontSize: '0.95rem', marginBottom: 18,
          }}>Ready to take the first step? The free audit is on us.</p>
          <a href="#contact" className="btn-accent ahover">
            Begin With a Free Audit <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
