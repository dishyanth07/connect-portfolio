import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Services from '../components/Services'
import Process from '../components/Process'
import CTA from '../components/CTA'

export default function ServicesPage() {
    return (
        <PageTransition>
            <div style={{ background: '#000', minHeight: '100vh' }}>
                {/* Page Hero - consistent with all other pages */}
                <div className="container-main" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                            <span className="section-num">02</span>
                            <span style={{ width: '40px', height: '1px', background: '#333' }} />
                            <span className="label-text">What We Do</span>
                        </div>
                        <h1 className="display-xl" style={{ color: '#fff', marginBottom: '1.25rem' }}>
                            Business <span className="gradient-text">Solutions.</span>
                        </h1>
                        <p style={{ color: '#71717a', fontSize: '1.125rem', lineHeight: '1.75', maxWidth: '560px', fontWeight: 400 }}>
                            We provide the strategic design and technical support local businesses need to grow and thrive in the digital age.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div style={{ paddingBottom: '120px' }}>
                    <Services hideHeader={true} />
                </div>

                {/* Divider */}
                <div className="container-main">
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                </div>

                {/* Process */}
                <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                    <Process />
                </div>

                {/* CTA */}
                <CTA />
            </div>
        </PageTransition>
    )
}
