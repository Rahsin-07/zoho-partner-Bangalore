'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  { q: 'Why should Bangalore businesses choose ZoFlowX as their Zoho Partner?', a: "ZoFlowX is an Authorized Zoho Partner in Bangalore with proven experience helping local businesses implement, customize, and scale Zoho the right way. We understand how Bangalore businesses operate and build Zoho solutions around your exact needs — not a generic template." },
  { q: 'What Zoho services does ZoFlowX offer to businesses in Bangalore?', a: "As a trusted Zoho Partner in Bangalore, ZoFlowX offers end-to-end Zoho services including implementation, customization, data migration, third-party integrations, app development, and ongoing managed support — everything your Bangalore business needs under one roof." },
  { q: 'Can ZoFlowX build a custom Zoho solution for my specific industry in Bangalore?', a: 'Yes. ZoFlowX has delivered custom Zoho solutions for businesses across education, real estate, healthcare, retail, IT, and more in Bangalore. We study your industry workflows first and build a Zoho setup that fits how your sector actually operates.' },
  { q: 'How can Zoho CRM help my Bangalore business close more deals?', a: 'Zoho CRM helps Bangalore businesses track every lead, automate follow-ups, score prospects, and manage the full sales pipeline in one place. ZoFlowX sets it up specifically around your sales process so your team spends less time on admin and more time closing.' },
  { q: 'How much does Zoho implementation cost for a Bangalore business?', a: 'Zoho implementation costs vary based on the products required, level of customization, and business size. ZoFlowX offers transparent pricing tailored to Bangalore businesses of every budget. Book a free audit to get a clear estimate for your specific requirements.' },
  { q: 'How fast can a Bangalore business go live with Zoho through ZoFlowX?', a: 'Most Bangalore businesses go live within 2 to 4 weeks depending on complexity. ZoFlowX follows a structured implementation process — discovery, configuration, testing, and training — so your team is up and running with minimal disruption.' },
  { q: 'Can ZoFlowX migrate my existing business data to Zoho without any loss?', a: 'Yes. ZoFlowX handles complete data migration for Bangalore businesses from CRMs, Excel sheets, ERPs, and legacy systems to Zoho — with full data integrity, zero data loss, and no business downtime during the transition.' },
  { q: 'Does ZoFlowX provide Zoho training for Bangalore business teams?', a: 'Yes. After every Zoho implementation, ZoFlowX provides hands-on training sessions for your Bangalore team, covering daily usage, reporting, automation, and best practices — so your staff can use Zoho confidently from day one.' },
  { q: 'What makes ZoFlowX different from other Zoho Partners in Bangalore?', a: 'Unlike most Zoho partners, ZoFlowX does not offer ready-made setups. As the best Zoho Partner in Bangalore, we invest time understanding your business first — your workflows, gaps, and goals — and then build a Zoho system designed specifically around your operations.' },
  { q: 'Can ZoFlowX integrate Zoho with other tools my business already uses?', a: 'Yes. ZoFlowX connects Zoho with your existing tools including your website, WhatsApp, payment gateways, ERP systems, and third-party platforms — so all your business data flows automatically into Zoho without any manual effort.' },
  { q: 'Does ZoFlowX offer ongoing Zoho support for businesses after implementation?', a: 'Yes. ZoFlowX provides dedicated post-implementation support for businesses, covering system maintenance, troubleshooting, performance monitoring, and continuous improvements — so your Zoho setup keeps delivering results long term.' },
  { q: 'Which Zoho products does ZoFlowX implement for Bangalore businesses?', a: 'ZoFlowX implements the complete Zoho suite for Bangalore businesses including Zoho CRM, Zoho One, Zoho Books, Zoho Analytics, Zoho Creator, Zoho Inventory, Zoho Desk, Zoho Campaigns, and more — based on what your business actually needs.' },
  { q: 'Can a small business in Bangalore afford Zoho implementation with ZoFlowX?', a: 'Absolutely. ZoFlowX works with startups, small businesses, and growing companies across Bangalore. We offer flexible Zoho implementation packages designed to deliver maximum value within your budget — without compromising on quality or results.' },
  { q: 'How do I get started with ZoFlowX as my Zoho Partner in Bangalore?', a: 'Getting started is simple. Book a free 30-minute Zoho audit with ZoFlowX. Our Bangalore team will review your current setup, understand your business requirements, and give you a clear roadmap — with no obligation and no sales pressure.' },
]

const relatedPages = [
  { label: 'Zoho Partner in India',   href: '#' },
  { label: 'Zoho Partner in Mumbai',  href: '#' },
  { label: 'Zoho Partner in Chennai', href: '#' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
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
    <section id="faq" ref={ref} style={{ background: '#fafaf7' }}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Questions come up? <span className="grad-blue-red">Let's clear them.</span>
          </h2>
          <p className="section-sub mx-auto">
            Not sure about something? Here are clear answers to the questions most businesses ask before choosing Zoho.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={i} style={{
                    border: `1px solid ${isOpen ? '#2563eb' : '#e8e3dc'}`,
                    borderRadius: 16, marginBottom: 12, overflow: 'hidden',
                    background: '#fff',
                    boxShadow: isOpen ? '0 14px 38px rgba(37,99,235,0.10)' : 'none',
                    transition: 'all 0.3s',
                  }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: '100%', textAlign: 'left',
                        background: 'transparent', border: 'none',
                        padding: '22px 26px',
                        fontFamily: 'Plus Jakarta Sans,sans-serif',
                        fontWeight: 700, fontSize: '0.98rem',
                        color: isOpen ? '#2563eb' : '#0b1220',
                        cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', gap: 16,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { if (!isOpen) e.currentTarget.style.color = '#2563eb' }}
                      onMouseLeave={e => { if (!isOpen) e.currentTarget.style.color = '#0b1220' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                        <span style={{
                          fontFamily: 'Plus Jakarta Sans,sans-serif',
                          fontSize: '0.78rem', fontWeight: 800,
                          color: isOpen ? '#2563eb' : '#94a3b8',
                          letterSpacing: 1, minWidth: 22,
                        }}>{String(i + 1).padStart(2, '0')}</span>
                        {faq.q}
                      </span>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%',
                        background: isOpen ? 'var(--grad-tri)' : '#f6f1ea',
                        color: isOpen ? '#fff' : '#334155',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.88rem', flexShrink: 0,
                        transition: 'all 0.3s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}>
                        <i className="bi bi-plus-lg" />
                      </div>
                    </button>
                    <div style={{
                      maxHeight: isOpen ? 480 : 0, overflow: 'hidden',
                      transition: 'max-height 0.45s ease',
                    }}>
                      <div style={{
                        padding: '0 26px 24px 62px',
                        fontSize: '0.93rem', color: '#475569',
                        lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
                      }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="fade-up text-center" style={{
              marginTop: 32, padding: '28px 24px',
              background: '#fff', borderRadius: 18, border: '1px solid #e8e3dc',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'var(--grad-tri)',
              }} />
              <div style={{ fontSize: '0.92rem', color: '#475569', marginBottom: 14, fontFamily: 'Inter,sans-serif' }}>
                Still have questions?
              </div>
              <a href="#contact" className="btn-gradient ahover">
                Ask Us Directly <i className="bi bi-arrow-right" />
              </a>
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 44 }}>
              <h4 style={{
                fontSize: '0.78rem', fontWeight: 700, color: '#64748b',
                marginBottom: 16, fontFamily: 'Inter,sans-serif',
                letterSpacing: 1.8, textTransform: 'uppercase',
              }}>
                Related Pages
              </h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {relatedPages.map((page, i) => {
                  const colors = ['#2563eb', '#dc2626', '#f59e0b']
                  const c = colors[i % 3]
                  return (
                    <a key={page.label} href={page.href}
                      style={{
                        background: `${c}10`, color: c,
                        padding: '10px 20px', borderRadius: 50,
                        fontSize: '0.86rem', fontWeight: 700,
                        textDecoration: 'none', transition: 'all 0.25s',
                        fontFamily: 'Inter,sans-serif',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        border: `1px solid ${c}30`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = c
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 22px ${c}55`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${c}10`
                        e.currentTarget.style.color = c
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.boxShadow = ''
                      }}
                    >
                      {page.label} <i className="bi bi-arrow-up-right" style={{ fontSize: '0.75rem' }} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
