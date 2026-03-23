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
        <section id="contact" ref={ref} style={{ background: '#000', padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
                                    <button type="submit" disabled={sending} className="btn btn-white" style={{ flex: 1, justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                                        {sending ? (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={{ width: '14px', height: '14px', border: '2px solid #00000033', borderTopColor: '#000', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite', display: 'inline-block' }} />
                                                Sending...
                                            </span>
                                        ) : 'Book My Free Audit →'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit(onWhatsApp)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            padding: '0.8rem 1.25rem', borderRadius: '100px',
                                            background: '#25D366', color: '#fff',
                                            fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', border: 'none',
                                            transition: 'opacity 0.2s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, flexShrink: 0 }}>
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.127 1.527 5.865L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.378l-.36-.213-3.727.977.996-3.638-.234-.374A9.77 9.77 0 012.182 12C2.182 6.66 6.66 2.182 12 2.182S21.818 6.66 21.818 12 17.34 21.818 12 21.818z" />
                                        </svg>
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
