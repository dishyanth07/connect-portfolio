import { NavLink } from 'react-router-dom'
import { FiInstagram, FiLinkedin, FiTwitter, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const socials = [
    { icon: FiInstagram, href: 'https://instagram.com' },
    { icon: FiLinkedin, href: 'https://linkedin.com' },
    { icon: FiTwitter, href: 'https://twitter.com' },
    { icon: FiGithub, href: 'https://github.com/dishyanth' },
]

const clients = ['Nexus', 'Quantum', 'Urban Canvas', 'Velocity', 'Lumina Health']

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container-main">

                {/* 4-column grid exactly matching mockup */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr', gap: '40px', marginBottom: '64px' }}>

                    {/* Col 1: Brand */}
                    <div>
                        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
                            <div style={{ width: '36px', height: '36px', background: 'var(--accent)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '16px', color: '#000' }}>
                                C
                            </div>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.03em', color: '#fff', textTransform: 'uppercase' }}>
                                CONNECT
                            </span>
                        </NavLink>
                        <p style={{ color: '#71717a', fontSize: '14px', lineHeight: '1.7', maxWidth: '220px', fontWeight: 400 }}>
                            Crafting digital experiences that feel like the future.
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h4 style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                            Navigation
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(link => (
                                <NavLink
                                    key={link}
                                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                                    style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 400, textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.target.style.color = '#fff'}
                                    onMouseLeave={e => e.target.style.color = '#a1a1aa'}
                                >
                                    {link}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h4 style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a href="mailto:dishyanth@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '14px', fontWeight: 400, textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = '#fff'}
                                onMouseLeave={e => e.target.style.color = '#a1a1aa'}
                            >
                                <FiMail size={14} style={{ color: '#52525b', flexShrink: 0 }} />
                                dishyanth@gmail.com
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '14px', fontWeight: 400 }}>
                                <FiPhone size={14} style={{ color: '#52525b', flexShrink: 0 }} />
                                9092330688
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '14px', fontWeight: 400 }}>
                                <FiMapPin size={14} style={{ color: '#52525b', flexShrink: 0 }} />
                                Adyar, Chennai
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Clients */}
                    <div>
                        <h4 style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                            Clients
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {clients.map(client => (
                                <span key={client} style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 400 }}>
                                    {client}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar: copyright left, social icons right */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#3f3f46', fontSize: '13px', fontWeight: 400 }}>
                        © {currentYear} CONNECT. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {socials.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#52525b', transition: 'color 0.2s', display: 'flex' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={e => e.currentTarget.style.color = '#52525b'}
                            >
                                <s.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
