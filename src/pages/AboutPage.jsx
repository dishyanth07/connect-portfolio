import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
    return (
        <PageTransition>
            <div style={{ paddingTop: '150px', background: '#000', minHeight: '100vh' }}>
                <div className="container-main" style={{ paddingBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <span className="section-num">01</span>
                        <span className="w-10 h-px bg-zinc-800" />
                        <span className="label-text">The Studio</span>
                    </div>
                    <h1 className="display-xl mb-4">
                        About <span className="gradient-text">Infoz.</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
                        A technology-driven creative studio focused on building scalable digital solutions
                        that merge aesthetic excellence with technical precision.
                    </p>
                </div>

                <About hideHeader={true} />
                <div className="mt-[-4rem]">
                    <Testimonials hideHeader={true} />
                </div>
            </div>
        </PageTransition>
    )
}
