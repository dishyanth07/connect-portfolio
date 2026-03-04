import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function CTA() {
    return (
        <section style={{ background: '#000', padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Very subtle glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px', height: '200px',
                background: 'var(--accent-muted)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                opacity: 0.2,
                pointerEvents: 'none'
            }} />

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* Heading – matches mockup size and weight */}
                    <h2 style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 800,
                        fontSize: 'clamp(36px, 5vw, 56px)',
                        color: '#fff',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        marginBottom: '16px'
                    }}>
                        Have a project <span style={{ color: 'var(--accent)' }}>in mind?</span>
                    </h2>

                    {/* Subtitle */}
                    <p style={{
                        color: '#71717a',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        maxWidth: '400px',
                        margin: '0 auto 48px'
                    }}>
                        Let's discuss how we can bring your technical vision to life.
                    </p>

                    {/* Pill button – matching mockup proportions */}
                    <NavLink
                        to="/contact"
                        style={{
                            display: 'inline-block',
                            background: 'var(--accent)',
                            color: '#000',
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: 800,
                            fontSize: '15px',
                            letterSpacing: '0.05em',
                            padding: '20px 60px',
                            borderRadius: '999px',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 16px 48px rgba(0,255,157,0.2)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.04)'
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,255,157,0.3)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,255,157,0.2)'
                        }}
                    >
                        Start a Project
                    </NavLink>
                </motion.div>
            </div>
        </section>
    )
}
