import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'

const testimonials = [
    {
        id: 1, initials: 'SJ', name: 'Sarah Jenkins', role: 'Owner · The Daily Bread Bakery',
        text: 'Switching to an online ordering system was the best decision for my bakery. Dishyanth made the process so easy and our sales have never been better. The monthly support gives me peace of mind.',
        rating: 5, color: '#7B5EA7',
    },
    {
        id: 2, initials: 'MC', name: 'Dr. Michael Chen', role: 'Lead Dentist · Bright Smiles Clinic',
        text: "The appointment portal has revolutionized how we handle bookings. Our staff is much less stressed, and patients love the WhatsApp reminders. It's a game-changer for any local clinic.",
        rating: 5, color: '#d97706',
    },
    {
        id: 3, initials: 'JR', name: 'James Rodriguez', role: 'Manager · Iron Forge Gym',
        text: 'We used to struggle with membership tracking and late payments. The new dashboard and automated billing have completely solved those issues. Professional, fast, and highly effective.',
        rating: 5, color: '#059669',
    },
    {
        id: 4, initials: 'ER', name: 'Elena Rossi', role: 'Founder · Rossi Real Estate',
        text: "Our property inquiries have more than doubled since the new site went live. The design is premium and the lead alerts are instant. I couldn't be happier with the results.",
        rating: 5, color: '#db2777',
    },
]

export default function Testimonials({ limit, hideHeader }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [cur, setCur] = useState(0)
    const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials

    const t = displayedTestimonials[cur] || displayedTestimonials[0]

    return (
        <section id="testimonials" ref={ref} style={{ background: '#000', padding: hideHeader ? '0 0 8rem 0' : '8rem 0', borderTop: hideHeader ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container-main">
                {/* Header */}
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}
                    >
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                                <span className="section-num">05</span>
                                <span style={{ width: '40px', height: '1px', background: '#333' }} />
                                <span className="label-text">Testimonials</span>
                            </div>
                            <h2 className="display-md" style={{ color: '#fff' }}>
                                What Clients <span className="gradient-text">Say</span>
                            </h2>
                        </div>
                        {limit && (
                            <NavLink to="/about" className="btn btn-outline text-sm no-underline mb-2">
                                Read All Success Stories ↗
                            </NavLink>
                        )}
                    </motion.div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {/* Featured large testimonial */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ gridColumn: 'span 2' }}
                        className="responsive-span"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={cur}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35 }}
                                className="card"
                                style={{ padding: '2.5rem', height: '100%', position: 'relative', overflow: 'hidden' }}
                            >
                                {/* Huge quote mark */}
                                <div style={{ position: 'absolute', top: '1rem', right: '2rem', fontFamily: 'Georgia, serif', fontSize: '8rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none' }}>"</div>

                                <div style={{ display: 'flex', gap: '6px', marginBottom: '1.75rem' }}>
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} style={{ color: '#fbbf24', fontSize: '0.85rem' }}>★</span>
                                    ))}
                                </div>
                                <p style={{ color: '#bbb', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic' }}>
                                    "{t.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <div style={{
                                        width: '42px', height: '42px', borderRadius: '12px',
                                        background: `${t.color}22`, border: `1px solid ${t.color}44`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.8rem', fontWeight: 700, color: t.color,
                                        flexShrink: 0,
                                    }}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                                        <div style={{ color: '#555', fontSize: '0.78rem', marginTop: '2px' }}>{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Right side — selector cards + nav */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                    >
                        {displayedTestimonials.map((item, i) => (
                            <button
                                key={item.id}
                                onClick={() => setCur(i)}
                                style={{
                                    background: i === cur ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                                    border: i === cur ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '14px',
                                    padding: '1rem 1.25rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'all 0.2s',
                                    textAlign: 'left',
                                }}
                            >
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                                    background: `${item.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.72rem', fontWeight: 700, color: item.color,
                                }}>
                                    {item.initials}
                                </div>
                                <div>
                                    <div style={{ color: i === cur ? '#fff' : '#666', fontWeight: 600, fontSize: '0.82rem', lineHeight: 1.2 }}>{item.name}</div>
                                    <div style={{ color: '#444', fontSize: '0.72rem', marginTop: '3px' }}>{item.role.split(' · ')[1]}</div>
                                </div>
                            </button>
                        ))}
                    </motion.div>
                </div>

                <style>{`
          @media (max-width: 640px) { .responsive-span { grid-column: span 1 !important; } }
        `}</style>
            </div>
        </section>
    )
}
