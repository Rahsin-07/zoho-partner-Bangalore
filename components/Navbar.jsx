'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #ececec',
        padding: '0.75rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled
          ? '0 6px 24px rgba(0,0,0,0.06)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >

          {/* LEFT SIDE */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              flexShrink: 0,
            }}
          >

            {/* Logo */}
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
            <Image
  src="/zoflowx.com_.png"
  alt="ZoFlowX"
  width={165}
  height={48}
  priority
  style={{
    width: '165px',
    height: 'auto',
    objectFit: 'contain',
  }}
/>
            </Link>

            {/* Divider */}
            <div
              className="d-none d-lg-block"
              style={{
                width: 1,
                height: 52,
                background: '#dcdcdc',
              }}
            />

            {/* Zoho Partner Badge */}
            {/* <div
              className="d-none d-lg-flex"
              style={{
                alignItems: 'center',
              }}
            >
              <Image
                src="/components/zoflowx.com_.png"
                alt="Zoho Partner"
                width={85}
                height={48}
                style={{
                  width: '85px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div> */}
          </div>

          {/* DESKTOP NAV */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{
              gap: 10,
            }}
          >
            {[
              ['Home', '/'],
              ['Case Studies', '#case-studies'],
              ['Solutions', '#services'],
              ['Products', '#'],
              ['Blogs', '#resources'],
              ['Contact Us', '#consultation'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#374151',
                  padding: '8px 10px',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#111827'

                  const underline =
                    e.currentTarget.querySelector('.nav-underline')

                  if (underline) {
                    underline.style.width = '100%'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#374151'

                  const underline =
                    e.currentTarget.querySelector('.nav-underline')

                  if (underline) {
                    underline.style.width = '0%'
                  }
                }}
              >
                {label}

                {/* Underline */}
                <span
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 2,
                    width: '0%',
                    height: 2,
                    borderRadius: 10,
                    background:
                      'linear-gradient(90deg, #2563eb 0%, #eab308 50%, #ef4444 100%)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </a>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div
            className="d-none d-lg-flex align-items-center"
            style={{
              gap: 16,
              flexShrink: 0,
            }}
          >

            {/* CTA BUTTON */}
            <a
            href ="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
              style={{
                background:
                  'linear-gradient(90deg, #2563eb 0%, #eab308 48%, #f97316 72%, #ef4444 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 20,
                padding: '1rem 2.6rem',
                fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0)'
              }}
            >
              Talk to our Experts
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918190009222"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                background: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(34,197,94,0.25)',
                transition: 'all 0.25s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0)'
              }}
            >
              <i
                className="bi bi-whatsapp"
                style={{
                  color: '#fff',
                  fontSize: '1.7rem',
                }}
              />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: '6px 10px',
              cursor: 'pointer',
            }}
          >
            <i
              className={`bi bi-${menuOpen ? 'x-lg' : 'list'}`}
              style={{
                fontSize: '1.2rem',
                color: '#111827',
              }}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            style={{
              padding: '18px 0 10px',
              borderTop: '1px solid #ececec',
              marginTop: 14,
            }}
          >
            {[
              ['Home', '/'],
              ['Case Studies', '#case-studies'],
              ['Solutions', '#services'],
              ['Blogs', '#resources'],
              ['Contact Us', '#consultation'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 4px',
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 600,
                  color: '#374151',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                {label}
              </a>
            ))}

            <div
              style={{
                marginTop: 16,
                display: 'flex',
                gap: 12,
                alignItems: 'center',
              }}
            >
              <a
                href="#consultation"
                style={{
                  background:
                    'linear-gradient(90deg, #2563eb 0%, #eab308 48%, #f97316 72%, #ef4444 100%)',
                  color: '#fff',
                  borderRadius: 16,
                  padding: '0.9rem 1.6rem',
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Talk to Experts
              </a>

              <a
                href="https://wa.me/918190009222"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <i
                  className="bi bi-whatsapp"
                  style={{
                    color: '#fff',
                    fontSize: '1.35rem',
                  }}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}