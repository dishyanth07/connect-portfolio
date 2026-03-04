import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const PHRASES = [
    'Innovative Digital Solutions',
    'Scalable Web Architectures',
    'Premium User Experiences',
    'Next-Gen Product Engineering',
]

export default function Hero() {
    const [index, setIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = PHRASES[index % PHRASES.length]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentPhrase.substring(0, displayText.length + 1))
                if (displayText === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                setDisplayText(currentPhrase.substring(0, displayText.length - 1))
                if (displayText === '') {
                    setIsDeleting(false)
                    setIndex(index + 1)
                }
            }
        }, isDeleting ? 40 : 80)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, index])

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
            {/* Background Video Graphics */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105 blur-[2px] opacity-40"
                    style={{ transition: 'opacity 2s ease-in' }}
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-purple-and-blue-neon-light-31758-large.mp4" type="video/mp4" />
                </video>
                {/* Particle/Grid Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-20" style={{
                    backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)',
                    backgroundSize: '24px 24px'
                }} />
            </div>

            <div className="container-main relative z-30 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="pill pill-green">
                            <span className="status-dot" />
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="display-xl mb-6">
                        <span className="gradient-text-white">INFOZ</span>
                        <br />
                        <span className="text-zinc-500">Tech & Solutions.</span>
                    </h1>

                    <div className="h-12 flex items-center mb-10">
                        <span className="font-syne font-bold text-xl md:text-3xl text-zinc-400">
                            {displayText}
                            <span className="ml-1 animate-pulse inline-block w-[3px] h-8 bg-purple-500 align-middle" />
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <NavLink to="/contact" className="btn btn-white text-lg no-underline px-10 py-5">
                            Start a Project <span className="ml-2">→</span>
                        </NavLink>
                        <NavLink to="/projects" className="btn btn-outline text-lg no-underline px-10 py-5">
                            View Work
                        </NavLink>
                    </div>
                </motion.div>
            </div>

            {/* Hero Stats */}
            <div className="absolute bottom-0 left-0 right-0 py-12 border-t border-white/5 bg-black/40 backdrop-blur-md z-30">
                <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Successful Projects', val: '24+' },
                        { label: 'Happy Clients', val: '18+' },
                        { label: 'Years Experience', val: '04+' },
                        { label: 'Awards Won', val: '07' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                        >
                            <div className="font-syne font-bold text-2xl text-white mb-1">{stat.val}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
