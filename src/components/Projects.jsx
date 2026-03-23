import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'

const fade = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const projects = [
    {
        id: 1,
        num: '01',
        title: 'Local Bakery Ordering System',
        tags: ['E-commerce', 'Payments', 'Automation'],
        year: '2024',
        type: 'Web App',
        desc: 'Problem: Losing customers due to phone-only orders. Solution: Custom online store with automated receipts. Result: 40% increase in weekly sales.',
        highlights: ['Online Payments', 'Auto-Receipts', 'Mobile First'],
        color: '#7B5EA7',
    },
    {
        id: 2,
        num: '02',
        title: 'Dental Clinic Booking Portal',
        tags: ['Booking System', 'WhatsApp', 'FastAPI'],
        year: '2024',
        type: 'Business System',
        desc: 'Problem: Staff overwhelmed by manual bookings. Solution: 24/7 automated booking system with WhatsApp reminders. Result: Saved 15 hours/week of admin work.',
        highlights: ['WhatsApp Integration', 'Auto-Reminders', 'Staff Dashboard'],
        color: '#d97706',
    },
    {
        id: 3,
        num: '03',
        title: 'Fitness Gym Member App',
        tags: ['React', 'Dashboard', 'Billing'],
        year: '2025',
        type: 'Dashboard',
        desc: 'Problem: High rate of missed membership payments. Solution: Digital member portal with automated recurring billing. Result: 60% reduction in payment delays.',
        highlights: ['Auto-Billing', 'Member Growth', 'Member Stats'],
        color: '#059669',
    },
    {
        id: 4,
        num: '04',
        title: 'Real Estate Lead Capture',
        tags: ['Next.js', 'SEO', 'Lead Gen'],
        year: '2025',
        type: 'Marketing Site',
        desc: 'Problem: Boutique agency struggling to get property inquiries. Solution: High-performance portfolio with instant lead alerts. Result: 2.5x more qualified buyer inquiries.',
        highlights: ['Lead Alerts', 'Virtual Tours', 'High SEO'],
        color: '#db2777',
    },
]

export default function Projects({ limit }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
    const [hovered, setHovered] = useState(null)
    const displayedProjects = limit ? projects.slice(0, limit) : projects

    return (
        <section id="projects" ref={ref} style={{ background: '#000', padding: '9rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container-main">
                {/* Header */}
                <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '5rem', gap: '2rem' }}>
                    <div className="max-w-[600px]">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                            <span className="section-num">03</span>
                            <span style={{ width: '32px', height: '1px', background: '#222' }} />
                            <span className="label-text">Projects</span>
                        </div>
                        <h2 className="display-md" style={{ color: '#fff', lineHeight: 1.1 }}>
                            Recent <span className="text-[var(--accent)]">Success Stories</span>
                        </h2>
                    </div>
                    {limit ? (
                        <NavLink to="/projects" className="btn btn-outline no-underline px-8 py-3" style={{ fontSize: '0.85rem' }}>
                            Explore All Portfolio ↗
                        </NavLink>
                    ) : (
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-8 py-3" style={{ fontSize: '0.85rem' }}>
                            GitHub Repository ↗
                        </a>
                    )}
                </motion.div>

                {/* Project list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {displayedProjects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            variants={fade(i * 0.1)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            onMouseEnter={() => setHovered(p.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '1.5rem',
                                alignItems: 'start',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                cursor: 'default',
                                transition: 'all 0.3s ease',
                                padding: '2.5rem 0',
                            }}
                        >
                            {/* Number */}
                            <div style={{ paddingTop: '8px' }}>
                                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#333', letterSpacing: '0.1em' }}>{p.num}</span>
                            </div>

                            {/* Main content */}
                            <div className="text-center flex flex-col items-center">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                                    <h3 style={{
                                        fontFamily: 'Syne, sans-serif', fontWeight: 700,
                                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                                        color: hovered === p.id ? '#fff' : '#999',
                                        transition: 'color 0.3s',
                                    }}>
                                        {p.title}
                                    </h3>
                                    <span style={{
                                        fontSize: '0.68rem', padding: '2px 10px', borderRadius: '100px',
                                        border: `1px solid ${p.color}44`, color: p.color, fontWeight: 600,
                                        letterSpacing: '0.06em',
                                    }}>
                                        {p.type}
                                    </span>
                                </div>
                                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem', margin: '0 auto 1.5rem' }}>
                                    {p.desc}
                                </p>
                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px' }}>
                                    {p.tags.map(t => (
                                        <span key={t} className="pill" style={{ fontSize: '0.7rem' }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Year + links */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', paddingTop: '4px' }}>
                                <span style={{ color: '#444', fontSize: '0.78rem', fontWeight: 600 }}>{p.year}</span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button className="btn-arrow" style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}>
                                        ↗
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
