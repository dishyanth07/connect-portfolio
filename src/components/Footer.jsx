import { NavLink } from 'react-router-dom'
import { FiInstagram, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const socials = [
    { icon: FiInstagram, href: 'https://www.instagram.com/itz_me_dishxx_/?hl=en' },
    { icon: FiLinkedin, href: 'https://linkedin.com' },
    { icon: FiGithub, href: 'https://github.com/dishyanth07' },
]

const clients = ['Nexus', 'Quantum', 'Urban Canvas', 'Velocity', 'Lumina Health']

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container-main">

                {/* 4-column grid exactly matching mockup */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Col 1: Brand */}
                    <div>
                        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
                            <img
                                src="/logo.png"
                                alt="INFOZ Logo"
                                style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                            />
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.03em', color: '#fff', textTransform: 'uppercase' }}>
                                INFOZ Agency
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
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: '#3f3f46', fontSize: '13px', fontWeight: 400 }}>
                        © {currentYear} INFOZ. All rights reserved.
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
