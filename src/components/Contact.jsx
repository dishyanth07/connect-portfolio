import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'

const WHATSAPP = '919092330688'
const EMAIL = 'dishyanth@gmail.com'

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setSending(true)
        await new Promise(r => setTimeout(r, 1000))
        setSending(false)
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
    }

    const onWhatsApp = (data) => {
        const msg = encodeURIComponent(`Hi Dishyanth! I'm ${data?.name || 'a visitor'}.\n\nI'd like to discuss: ${data?.message || 'a project'}`)
        window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
    }

    return (
        <section id="contact" ref={ref} style={{ background: '#000', padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="container-main">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
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

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Message sent!</div>
                                <div style={{ color: '#555', fontSize: '0.875rem' }}>I'll get back to you within 24 hours.</div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {/* Name + Phone */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <input
                                            {...register('name', { required: 'Required' })}
                                            placeholder="Your name"
                                            className="input"
                                            style={errors.name ? { borderColor: 'rgba(239,68,68,0.4)' } : {}}
                                        />
                                        {errors.name && <p style={{ color: '#f87171', fontSize: '0.72rem', marginTop: '4px' }}>{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            {...register('phone')}
                                            placeholder="Phone (optional)"
                                            className="input"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        {...register('email', {
                                            required: 'Required',
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                                        })}
                                        placeholder="Email address"
                                        className="input"
                                        style={errors.email ? { borderColor: 'rgba(239,68,68,0.4)' } : {}}
                                    />
                                    {errors.email && <p style={{ color: '#f87171', fontSize: '0.72rem', marginTop: '4px' }}>{errors.email.message}</p>}
                                </div>

                                {/* Subject */}
                                <select {...register('subject', { required: 'Required' })} className="input" style={errors.subject ? { borderColor: 'rgba(239,68,68,0.4)' } : {}}>
                                    <option value="">What do you need?</option>
                                    <option value="website">Website Development</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="management">Management System</option>
                                    <option value="freelance">Freelance Project</option>
                                    <option value="ai">AI & Automation</option>
                                    <option value="other">Other</option>
                                </select>

                                {/* Message */}
                                <div>
                                    <textarea
                                        {...register('message', { required: 'Required', minLength: { value: 15, message: 'Too short' } })}
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="input"
                                        style={{ resize: 'none', ...(errors.message ? { borderColor: 'rgba(239,68,68,0.4)' } : {}) }}
                                    />
                                    {errors.message && <p style={{ color: '#f87171', fontSize: '0.72rem', marginTop: '4px' }}>{errors.message.message}</p>}
                                </div>

                                {/* Submit row */}
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button 
                                        type="submit" 
                                        disabled={sending} 
                                        className="bg-[var(--accent)] text-black font-syne font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--accent)]/10"
                                        style={{ flex: 1, opacity: sending ? 0.7 : 1 }}
                                    >
                                        {sending ? 'Sending...' : 'Book My Free Audit'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit(onWhatsApp)}
                                        className="border border-white/10 hover:border-white/20 text-white font-syne font-bold px-8 py-4 rounded-full text-base transition-all hover:bg-white/5"
                                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        WhatsApp
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
