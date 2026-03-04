import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Contact from '../components/Contact'

export default function ContactPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '150px', background: '#000', minHeight: '100vh' }}>
                <div className="container-main" style={{ paddingBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <span className="section-num">04</span>
                        <span style={{ width: '40px', height: '1px', background: '#333' }} />
                        <span className="label-text">Get in touch</span>
                    </div>
                    <h1 className="display-xl" style={{ color: '#fff', marginBottom: '3rem' }}>
                        Let's <span className="gradient-text">Sync.</span>
                    </h1>
                </div>
                <Contact />
            </div>
        </PageTransition>
    )
}
