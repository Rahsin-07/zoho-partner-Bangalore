'use client'
import { useEffect, useRef } from 'react'

// Section 9, Zoho Products We Implement & Customize
const products = [
  { name: 'Zoho One',        icon: 'bi-grid-3x3-gap-fill', color: '#2563eb', desc: 'A unified business platform that integrates 45+ applications from CRM, HR, finance and operations, all under one account and one affordable subscription.' },
  { name: 'Zoho CRM',        icon: 'bi-people-fill',       color: '#dc2626', desc: 'Complete sales management solution to capture leads, automate follow up sequences, monitor deal progress, and close more business with AI driven insights.' },
  { name: 'Zoho Creator',    icon: 'bi-app-indicator',     color: '#f59e0b', desc: 'Visual app building platform that lets you design custom workflows, internal tools, and business applications with minimal coding knowledge required.' },
  { name: 'Zoho Campaigns',  icon: 'bi-megaphone-fill',    color: '#2563eb', desc: 'Multi channel marketing platform to build targeted email and SMS campaigns, set up automated drip sequences, and measure performance in real time.' },
  { name: 'Zoho SalesIQ',    icon: 'bi-chat-square-text-fill', color: '#dc2626', desc: 'Website intelligence and live chat tool to track website visitor activity, find prospects ready to buy and initiate conversations that convert website visits into leads.' },
  { name: 'Zoho Inventory',  icon: 'bi-box-seam-fill',     color: '#f59e0b', desc: 'Centralised stock and order control system to manage warehouses, raise purchase orders, monitor stock levels, and sync across all your selling channels.' },
  { name: 'Zoho Mail',       icon: 'bi-envelope-fill',     color: '#2563eb', desc: 'Clean, ad free business email solution with custom domain support, shared team inboxes, and native integration with your calendar and task management.' },
  { name: 'Zoho Analytics',  icon: 'bi-bar-chart-fill',    color: '#dc2626', desc: 'Self service business intelligence software for custom reporting, interactive dashboards, multi source data analysis and trend identification for improved business decisions.' },
  { name: 'Zoho Books',      icon: 'bi-journal-text',      color: '#f59e0b', desc: 'India GST ready accounting platform to automate the creation of invoices, vendor payments, bank reconciliation, and financial statements.' },
  { name: 'Zoho Workplace',  icon: 'bi-people',            color: '#2563eb', desc: 'All in one collaboration suite combining email, instant messaging, video calls, document editing, and team workspaces under a single platform.' },
  { name: 'Zoho Expense',    icon: 'bi-receipt',           color: '#dc2626', desc: 'End to end expense and travel management tool to digitise receipts, apply approval workflows, control budgets, and push reimbursements directly to payroll.' },
  { name: 'Zoho Bookings',   icon: 'bi-calendar-check-fill', color: '#f59e0b', desc: 'Smart scheduling platform that allows clients to book appointments online, sends automatic reminders, and syncs with your calendar to reduce no shows.' },
  { name: 'Zoho Social',     icon: 'bi-share-fill',        color: '#2563eb', desc: 'Social media marketing platform for planning and publishing content, tracking followers, monitoring brand mentions, analysing post performance and managing multiple social accounts from one place.' },
  { name: 'Zoho Bigin',      icon: 'bi-kanban',            color: '#dc2626', desc: 'Lightweight CRM designed for small businesses to organise contacts, manage deal pipelines, and automate follow ups without any enterprise level complexity.' },
  { name: 'Zoho Commerce',   icon: 'bi-bag-fill',          color: '#f59e0b', desc: 'End to end online selling platform to create your ecommerce store, manage product listings, process payments, fulfil orders and track sales performance all in one place.' },
  { name: 'Zoho Forms',      icon: 'bi-ui-checks',         color: '#2563eb', desc: 'Easy drag and drop form builder with conditional logic, payment collection, and automatic CRM sync, making it simple to capture leads and customer responses instantly.' },
]

export default function ZohoProducts() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '20%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Zoho Products</div>
            <h2 className="section-title">
              Zoho Applications We <span className="grad-blue-red">Implement & Customize</span>
            </h2>
            <p className="section-sub">
              Whether it's sales or finance, we implement, customize and integrate the right Zoho applications around your business workflow, ensuring every tool you use adds real value.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="link-reveal">
              Help me pick the right app <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {products.map((p, i) => (
            <div key={p.name} className={`col-sm-6 col-lg-4 col-xl-3 fade-up ${i % 2 ? 'zx-sr' : 'zx-sl'}`} style={{ transitionDelay: `${(i % 8) * 0.04}s` }}>
              <div className="prod-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 18,
                padding: '24px 22px', height: '100%',
                transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-5px)'
                  el.style.borderColor = p.color
                  el.style.boxShadow = `0 22px 50px ${p.color}1f`
                  el.querySelector('.pp-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.pp-icon').style.background = p.color
                  el.querySelector('.pp-icon').style.color = '#fff'
                  el.querySelector('.pp-icon').style.transform = 'rotate(-6deg) scale(1.05)'
                  el.querySelector('.pp-link').style.color = p.color
                  el.querySelector('.pp-link').style.gap = '10px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.borderColor = '#e8e3dc'
                  el.style.boxShadow = ''
                  el.querySelector('.pp-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.pp-icon').style.background = `${p.color}15`
                  el.querySelector('.pp-icon').style.color = p.color
                  el.querySelector('.pp-icon').style.transform = ''
                  el.querySelector('.pp-link').style.color = '#0b1220'
                  el.querySelector('.pp-link').style.gap = '6px'
                }}
              >
                <div className="pp-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />

                <div className="pp-icon" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${p.color}15`, color: p.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.35rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  marginBottom: 14,
                }}>
                  <i className={`bi ${p.icon}`} />
                </div>

                <h3 style={{
                  fontSize: '1rem', fontWeight: 800, color: '#0b1220',
                  fontFamily: 'Inter,sans-serif', lineHeight: 1.3,
                  marginBottom: 8, letterSpacing: '-0.012em',
                }}>{p.name}</h3>

                <p style={{
                  fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6,
                  marginBottom: 12, fontFamily: 'Inter,sans-serif', flex: 1,
                }}>{p.desc}</p>

                <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="pp-link" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: '0.8rem', fontWeight: 700, color: '#0b1220',
                  textDecoration: 'none', fontFamily: 'Inter,sans-serif',
                  transition: 'all 0.28s',
                }}>
                  Learn more <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Helper card */}
        <div className="fade-up" style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, #f6f1ea 0%, #fef3c7 100%)',
          border: '1px solid #e8e3dc', borderRadius: 22,
          padding: '32px 36px', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'var(--grad-tri)',
          }} />
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                textTransform: 'uppercase', color: '#dc2626', marginBottom: 10,
                fontFamily: 'Inter,sans-serif',
              }}>Not sure where to start?</div>
              <h4 style={{
                fontFamily: 'Inter,sans-serif', fontWeight: 800,
                fontSize: '1.5rem', color: '#0b1220', lineHeight: 1.25,
                marginBottom: 8, letterSpacing: '-0.014em',
              }}>
                Confused About Which Zoho App Your Business Actually Needs?
              </h4>
              <p style={{
                fontFamily: 'Inter,sans-serif', color: '#475569',
                fontSize: '0.96rem', marginBottom: 0, lineHeight: 1.65,
              }}>
                We analyse your existing workflows and match them to the right Zoho products, no assumptions, no unnecessary upselling.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" className="btn-gradient ahover">
                Help Me Pick the Right App <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
