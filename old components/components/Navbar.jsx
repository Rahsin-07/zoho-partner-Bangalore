'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoMark from './LogoMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Home', '#hero'],
    ['Services', '#services'],
    ['Why Us', '#why-us'],
    ['Industries', '#industries'],
    ['Products', '#products'],
    ['Case Studies', '#case-studies'],
    ['FAQ', '#faq'],
  ]

  return (
    <nav style={{
      background: scrolled ? 'rgba(255,255,255,0.85)' : '#fff',
      backdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232,227,220,0.8)' : '1px solid #e8e3dc',
      padding: scrolled ? '0.5rem 0' : '0.75rem 0',
      position: 'sticky', top: 0, zIndex: 1000,
      boxShadow: scrolled ? '0 8px 30px rgba(11,18,32,0.06)' : 'none',
      transition: 'all 0.3s cubic-bezier(.2,.7,.2,1)',
    }}>
      {/* Tri-color thin top stripe */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--grad-tri)', opacity: scrolled ? 0 : 0.9,
        transition: 'opacity 0.3s',
      }} />
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <LogoMark size={34} />
            <span style={{ fontFamily: 'inter Sans,sans-serif', fontSize: '1.42rem', fontWeight: 800, color: '#0b1220', letterSpacing: '-0.022em' }}>
              ZoFlow<span style={{
                background: 'linear-gradient(95deg, #2563eb 0%, #dc2626 55%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>X</span>
            </span>
            <div className="d-none d-md-block" style={{ width: 1, height: 28, background: '#e8e3dc' }} />
            <div className="d-none d-md-flex" style={{ alignItems: 'center', gap: 6, background: '#f6f1ea', border: '1px solid #e8e3dc', borderRadius: 8, padding: '4px 10px' }}>
              <i className="bi bi-patch-check-fill" style={{ color: '#dc2626', fontSize: '0.85rem' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', whiteSpace: 'nowrap' }}>Zoho Authorized Partner</span>
            </div>
          </Link>

          {/* Nav links — desktop */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: 2 }}>
            {links.map(([label, href]) => (
              <a key={label} href={href}
                style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: '0.9rem', color: '#334155', padding: '7px 14px', borderRadius: 8, textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap', position: 'relative' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0b1220'; e.currentTarget.style.background = '#f6f1ea' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.background = 'transparent' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: 10, flexShrink: 0 }}>
            <a href="#contact" className="btn-gradient" style={{ padding: '0.58rem 1.3rem', fontSize: '0.85rem' }}>
              Book Free Audit <i className="bi bi-arrow-right" />
            </a>
            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer"
              aria-label="WhatsApp"
              style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 4px 14px rgba(37,211,102,0.40)', transition: 'all 0.2s', flexShrink: 0 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = '' }}
            >
              <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.15rem' }} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="d-lg-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ background: 'none', border: '1px solid #e8e3dc', borderRadius: 8, padding: '6px 10px', cursor: 'pointer' }}>
            <i className={`bi bi-${menuOpen ? 'x-lg' : 'list'}`} style={{ fontSize: '1.2rem', color: '#0b1220' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ padding: '16px 0 8px', borderTop: '1px solid #e8e3dc', marginTop: 12 }}>
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '10px 4px', fontFamily: 'Inter,sans-serif', fontWeight: 500, color: '#334155', textDecoration: 'none', borderBottom: '1px solid #f0ece8' }}>
                {label}
              </a>
            ))}
            <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gradient" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>Book Free Audit</a>
              <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.1rem' }} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
