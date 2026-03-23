import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import TrustIndicators from '../components/TrustIndicators'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            <div style={{ background: '#000' }}>
                <About simple={true} />
                <Services limit={3} />
                <TrustIndicators />
                <Projects limit={2} />
                <Testimonials limit={2} />
                <Contact />
            </div>
        </PageTransition>
    )
}
