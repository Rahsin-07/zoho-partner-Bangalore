'use client'
import LogoMark from './LogoMark'

const linkHover = (hoverColor = '#fff') => ({
  onMouseEnter: (e) => { e.currentTarget.style.color = hoverColor; e.currentTarget.style.transform = 'translateX(3px)' },
  onMouseLeave: (e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.58)'; e.currentTarget.style.transform = '' },
})

const linkStyle = {
  color: 'rgba(255,255,255,0.58)', textDecoration: 'none',
  fontSize: '0.88rem', fontFamily: 'Inter,sans-serif',
  transition: 'all 0.2s', display: 'inline-block',
}

const services = [
  'Zoho Implementation',
  'Zoho Customization',
  'Zoho Data Migration',
  'Zoho Integrations',
  'Zoho App Development',
  'Zoho Managed Services',
  'Hire a Zoho Developer',
]

const locations = ['Bangalore', 'Mumbai', 'Chennai', 'Hyderabad', 'Delhi', 'Pune']

const companyLinks = ['About Us', 'Case Studies', 'Resources', 'Contact Us', 'Privacy Policy']

export default function Footer() {
  return (
    <footer style={{
      background: '#070b16', color: 'rgba(255,255,255,0.65)',
      padding: '76px 0 32px', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 220,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.22), transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-tri)', opacity: 0.9 }} />

      <div className="container position-relative">
        <div className="row g-5">
          {/* Brand block */}
          <div className="col-lg-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <LogoMark size={36} />
              <div style={{
                fontFamily: 'inter Sans,sans-serif', fontSize: '1.6rem',
                fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
              }}>
                ZoFlow
                <span style={{
                  background: 'linear-gradient(95deg, #3b82f6 0%, #ef4444 55%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>X</span>
              </div>
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '5px 12px', marginBottom: 20,
            }}>
              <i className="bi bi-patch-check-fill" style={{ color: '#fbbf24', fontSize: '0.8rem' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter,sans-serif' }}>
                Zoho Authorized Partner
              </span>
            </div>

            <p style={{
              fontSize: '0.9rem', maxWidth: 360, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter,sans-serif', marginBottom: 22,
            }}>
              ZoFlowX is a certified Zoho Authorized Partner in Bangalore, India — helping businesses implement, customize, migrate and manage Zoho the right way. Serving startups to enterprises across India and the USA.
            </p>

            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: 'linkedin',   color: '#0a66c2', href: 'https://www.linkedin.com/in/arulraj-inboxist/' },
                { icon: 'twitter-x',  color: '#ffffff', href: '#' },
                { icon: 'instagram',  color: '#e4405f', href: '#' },
                { icon: 'youtube',    color: '#ff0000', href: '#' },
                { icon: 'whatsapp',   color: '#25d366', href: 'https://wa.me/918190009222' },
              ].map(s => (
                <a key={s.icon} href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                  aria-label={s.icon}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
                    textDecoration: 'none', transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.color
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <i className={`bi bi-${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div style={{
              fontFamily: 'inter Sans,sans-serif', fontSize: '0.78rem',
              fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: 18,
            }}>Company</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map(l => (
                <li key={l} style={{ marginBottom: 11 }}>
                  <a href="#" style={linkStyle} {...linkHover()}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <div style={{
              fontFamily: 'inter Sans,sans-serif', fontSize: '0.78rem',
              fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: 18,
            }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map(l => (
                <li key={l} style={{ marginBottom: 11 }}>
                  <a href="#services" style={linkStyle} {...linkHover()}>{l}</a>
                </li>
              ))}
            </ul>

            <div style={{
              fontFamily: 'inter Sans,sans-serif', fontSize: '0.78rem',
              fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginTop: 24, marginBottom: 14,
            }}>Zoho Partner In</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {locations.map((loc, i) => {
                const colors = ['#2563eb', '#dc2626', '#f59e0b']
                const c = colors[i % 3]
                return (
                  <a key={loc} href="#"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${c}40`, color: '#fff',
                      padding: '4px 10px', borderRadius: 50,
                      fontSize: '0.74rem', fontWeight: 600,
                      textDecoration: 'none', fontFamily: 'Inter,sans-serif',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = c; e.currentTarget.style.borderColor = c }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = `${c}40` }}
                  >{loc}</a>
                )
              })}
            </div>
          </div>

          <div className="col-lg-3">
            <div style={{
              fontFamily: 'inter Sans,sans-serif', fontSize: '0.78rem',
              fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: 18,
            }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 11 }}>
                <a href="mailto:info@zoflowx.com"
                  style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
                >
                  <i className="bi bi-envelope" />
                  info@zoflowx.com
                </a>
              </li>
              <li style={{ marginBottom: 11 }}>
                <a href="tel:+918190009222"
                  style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
                >
                  <i className="bi bi-telephone" />
                  +91 8190 009 222
                </a>
              </li>
              <li style={{ marginBottom: 11 }}>
                <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer"
                  style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#25d366')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
                >
                  <i className="bi bi-whatsapp" />
                  WhatsApp us
                </a>
              </li>
              <li style={{
                color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.65,
                fontFamily: 'Inter,sans-serif', display: 'flex', gap: 8, marginTop: 6,
              }}>
                <i className="bi bi-geo-alt" style={{ marginTop: 3 }} />
                <span>
                  Bangalore, Karnataka — India
                  <br />
                  Serving clients across India & USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: 52, paddingTop: 28,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
          fontSize: '0.8rem', fontFamily: 'Inter,sans-serif',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} ZoFlowX · An Inboxist company. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Terms & Conditions', 'Privacy Policy'].map(l => (
              <a key={l} href="#"
                style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = '#fff')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
