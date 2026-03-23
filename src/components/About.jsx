import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { NavLink } from 'react-router-dom'

const fade = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function About({ simple, hideHeader }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

    return (
        <section id="about" ref={ref} className="relative overflow-hidden" style={{ background: '#000', padding: hideHeader ? '0 0 7rem 0' : '7rem 0' }}>
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />

            <div className="container-main relative z-10">
                {/* Label */}
                {!hideHeader && (
                    <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4rem' }}>
                            <span className="section-num">01</span>
                            <span style={{ width: '40px', height: '1px', background: '#333' }} />
                            <span className="label-text">About</span>
                        </div>
                    </motion.div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                    {/* Big intro text */}
                    <motion.div variants={fade(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <h2 className="display-lg" style={{ color: '#fff', maxWidth: '800px', lineHeight: 1.05 }}>
                            Your partner in{' '}
                            <span className="gradient-text">business growth</span>{' '}
                            through digital excellence.
                        </h2>
                        {simple && (
                            <NavLink to="/about" className="btn btn-outline no-underline mb-2">
                                Discover Full Story ↗
                            </NavLink>
                        )}
                    </motion.div>

                    {!simple && (
                        <>
                            {/* Two-column details */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                {/* Bio */}
                                <motion.div variants={fade(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                                    <p style={{ color: '#777', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                        We are <span style={{ color: '#fff', fontWeight: 600 }}>INFOZ Agency</span>, a dedicated team of web developers and growth strategists. We specialize in helping local businesses establish a powerful online presence that drives real-world results.
                                    </p>
                                    <p style={{ color: '#555', lineHeight: 1.9, fontSize: '0.9rem' }}>
                                        Our mission is simple: To provide high-quality, conversion-focused web solutions and reliable monthly support, so you can focus on what you do best—running your business.
                                    </p>
                                </motion.div>

                                {/* Details grid */}
                                <motion.div
                                    variants={fade(0.3)}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}
                                >
                                    {[
                                        { label: 'Agency', value: 'INFOZ Web & Growth' },
                                        { label: 'Specialty', value: 'Local Business Solutions' },
                                        { label: 'Location', value: 'Tamil Nadu, India' },
                                        { label: 'Support', value: '24/7 Dedicated Care' },
                                        { label: 'Availability', value: 'Enrolling New Clients', highlight: true },
                                    ].map(row => (
                                        <div
                                            key={row.label}
                                            style={{
                                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                padding: '0.9rem 0',
                                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            <span style={{ color: '#444', fontSize: '0.82rem', letterSpacing: '0.04em' }}>{row.label}</span>
                                            <span style={{
                                                fontSize: '0.85rem', fontWeight: 500,
                                                color: row.highlight ? '#4ade80' : '#ccc',
                                            }}>
                                                {row.highlight && <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#4ade80', marginRight: 8, animation: 'blink 2s infinite' }} />}
                                                {row.value}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Values bento row */}
                            <motion.div
                                variants={fade(0.35)}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}
                            >
                                {[
                                    { icon: '⚡', title: 'Fast Delivery', desc: 'Always on deadline' },
                                    { icon: '🎯', title: 'Goal-Oriented', desc: 'Focused on impact' },
                                    { icon: '🔍', title: 'Attention to Detail', desc: 'Polish matters' },
                                    { icon: '📈', title: 'Continuous Learning', desc: 'Always growing' },
                                ].map(v => (
                                    <div
                                        key={v.title}
                                        className="card hover-lift"
                                        style={{ padding: '1.5rem', cursor: 'default' }}
                                    >
                                        <div style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                                        <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>{v.title}</div>
                                        <div style={{ color: '#555', fontSize: '0.8rem' }}>{v.desc}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
