import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Projects from '../components/Projects'

export default function ProjectsPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '150px', background: '#000', minHeight: '100vh' }}>
                <div className="container-main" style={{ paddingBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <span className="section-num">03</span>
                        <span style={{ width: '40px', height: '1px', background: '#333' }} />
                        <span className="label-text">Portfolio</span>
                    </div>
                    <h1 className="display-xl" style={{ color: '#fff', marginBottom: '3rem' }}>
                        Selected <span className="gradient-text">Projects.</span>
                    </h1>
                </div>
                <Projects />
            </div>
        </PageTransition>
    )
}
