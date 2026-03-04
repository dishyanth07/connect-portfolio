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
        title: 'Modern E-commerce Platform',
        tags: ['React', 'Node.js', 'MongoDB'],
        year: '2024',
        type: 'Web App',
        desc: 'High-performance e-commerce solution built for TechStartup Co. featuring seamless registration, complex cart logic, and ultra-fast product filtering.',
        highlights: ['Scalable architecture', 'Dynamic filtering', 'Secure checkout'],
        color: '#7B5EA7',
    },
    {
        id: 2,
        num: '02',
        title: 'Coffee Shop POS System',
        tags: ['React', 'FastAPI', 'Python'],
        year: '2024',
        type: 'Business System',
        desc: 'Comprehensive management system for CaféBrew. Features an AI-driven crisis pricing engine, inventory tracking, and integrated WhatsApp billing.',
        highlights: ['AI pricing engine', 'Inventory tracking', 'WhatsApp billing'],
        color: '#d97706',
    },
    {
        id: 3,
        num: '03',
        title: 'College Election System',
        tags: ['React', 'Django', 'PostgreSQL'],
        year: '2025',
        type: 'Security App',
        desc: 'Secure digital voting platform for State College. Implements biometric verification, real-time results streaming, and unbreakable audit trails.',
        highlights: ['Biometric auth', 'Live results', 'Audit trails'],
        color: '#059669',
    },
    {
        id: 4,
        num: '04',
        title: 'Logistics Tracking App',
        tags: ['Next.js', 'Firebase', 'Realtime'],
        year: '2025',
        type: 'Enterprise App',
        desc: 'End-to-end supply chain solution for LogiTech Solutions. Real-time fleet tracking, automated documentation, and stellar post-launch support.',
        highlights: ['Real-time tracking', 'Cloud storage', 'Enterprise security'],
        color: '#db2777',
    },
]

export default function Projects({ limit }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
    const [hovered, setHovered] = useState(null)
    const displayedProjects = limit ? projects.slice(0, limit) : projects

    return (
        <section id="projects" ref={ref} style={{ background: '#000', padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container-main">
                {/* Header */}
                <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div className="max-w-[600px]">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                            <span className="section-num">03</span>
                            <span style={{ width: '32px', height: '1px', background: '#222' }} />
                            <span className="label-text">Projects</span>
                        </div>
                        <h2 className="display-md" style={{ color: '#fff', lineHeight: 1.1 }}>
                            Selected <span className="gradient-text">Work</span>
                        </h2>
                    </div>
                    {limit ? (
                        <NavLink to="/projects" className="btn btn-outline no-underline px-5 py-2.5 mb-1" style={{ alignSelf: 'flex-end', fontSize: '0.8rem' }}>
                            Explore All Portfolio ↗
                        </NavLink>
                    ) : (
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-5 py-2.5 mb-1" style={{ alignSelf: 'flex-end', fontSize: '0.8rem' }}>
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
                                gridTemplateColumns: '80px 1fr auto',
                                gap: '1.5rem',
                                alignItems: 'start',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                cursor: 'default',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                borderRadius: hovered === p.id ? '20px' : '0',
                                margin: hovered === p.id ? '0 -1.5rem' : '0 0',
                                padding: hovered === p.id ? '2.5rem 2rem' : '2.5rem 1rem',
                                background: hovered === p.id ? 'rgba(255,255,255,0.02)' : 'transparent',
                            }}
                        >
                            {/* Number */}
                            <div style={{ paddingTop: '8px' }}>
                                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#333', letterSpacing: '0.1em' }}>{p.num}</span>
                            </div>

                            {/* Main content */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
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
                                <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem' }}>
                                    {p.desc}
                                </p>
                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {p.tags.map(t => (
                                        <span key={t} className="pill" style={{ fontSize: '0.7rem' }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Year + links */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', paddingTop: '4px' }}>
                                <span style={{ color: '#444', fontSize: '0.78rem', fontWeight: 600 }}>{p.year}</span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button className="btn-arrow" style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}>
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
