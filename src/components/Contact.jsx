import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useModal } from '../context/ModalContext'

const WHATSAPP = '919092330688'
const EMAIL = 'dishyanth@gmail.com'

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const { openAuditModal } = useModal()

    return (
        <section id="contact" ref={ref} style={{ background: '#000', padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container-main">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '5rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <span className="section-num">06</span>
                        <span style={{ width: '40px', height: '1px', background: '#333' }} />
                        <span className="label-text">Contact</span>
                    </div>
                    <h2 className="display-lg" style={{ color: '#fff', maxWidth: '700px' }}>
                        Ready to Grow your{' '}
                        <span className="gradient-text">Business Online?</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    {/* Left col */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p style={{ color: '#666', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: '380px' }}>
                            Stop losing potential customers to your competitors. Get a Free Website Audit and let's discuss how we can help your business thrive.
                        </p>

                        {/* Contact info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                            {[
                                { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                                { label: 'WhatsApp', value: '+91 9092330688', href: `https://wa.me/${WHATSAPP}` },
                                { label: 'Location', value: 'Tamil Nadu, India', href: null },
                            ].map(row => (
                                <div
                                    key={row.label}
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '0.9rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    }}
                                >
                                    <span style={{ color: '#444', fontSize: '0.8rem', letterSpacing: '0.06em' }}>{row.label}</span>
                                    {row.href ? (
                                        <a href={row.href} target="_blank" rel="noopener noreferrer"
                                            style={{ color: '#bbb', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                            onMouseLeave={e => e.currentTarget.style.color = '#bbb'}
                                        >
                                            {row.value} ↗
                                        </a>
                                    ) : (
                                        <span style={{ color: '#bbb', fontSize: '0.88rem', fontWeight: 500 }}>{row.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Availability */}
                        <div style={{ marginTop: '2rem' }}>
                            <span className="pill pill-green">
                                <span className="status-dot" />
                                Available for new projects
                            </span>
                        </div>
                    </motion.div>

                    {/* Right — CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <h3 className="font-syne font-bold text-white text-xl mb-2">Prefer a direct call or chat?</h3>
                                <p className="text-zinc-500 text-sm">Choose the best way to connect with us.</p>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                <button 
                                    onClick={openAuditModal}
                                    className="bg-[var(--accent)] text-black font-syne font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--accent)]/10 hover:glow-strong cursor-pointer"
                                >
                                    Get Started 🚀
                                </button>
                                <a
                                    href={`https://wa.me/${WHATSAPP}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/10 hover:border-white/20 text-white font-syne font-bold px-8 py-4 rounded-full text-base transition-all hover:bg-white/5 no-underline flex items-center justify-center gap-2 hover:scale-105"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
