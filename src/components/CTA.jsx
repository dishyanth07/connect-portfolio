import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function CTA() {
    return (
        <section style={{ background: '#000', padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* Heading – matches mockup size and weight */}
                    <h2 className="display-lg mb-4">
                        Build a website that <span style={{ color: 'var(--accent)' }}>gets you customers.</span>
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
                        Get a professional website and ongoing monthly support tailored for your local business.
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
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.04)'
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                    >
                        Get Free Website Audit
                    </NavLink>
                </motion.div>
            </div>
        </section>
    )
}
