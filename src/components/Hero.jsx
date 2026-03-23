import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const PHRASES = [
    'Get More Leads & Sales',
    'Professional Online Presence',
    'Reliable Monthly Support',
    'Boost Your Local Business',
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
            {/* 3D Decor Elements - Business Related */}
            <motion.div
                className="absolute top-[18%] right-[12%] w-32 md:w-64 opacity-50 pointer-events-none z-10"
                animate={{
                    y: [0, -30, 0],
                    rotateY: [0, 360],
                    rotateZ: [5, -5, 5],
                    scale: [1, 1.05, 1]
                }}
                transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear",
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img src="/web_cursor_3d.png" alt="" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(34,197,94,0.1)]" />
            </motion.div>

            <motion.div
                className="absolute bottom-[20%] left-[10%] w-32 md:w-56 opacity-30 pointer-events-none z-10"
                animate={{
                    y: [0, 30, 0],
                    rotateY: [0, -360],
                    rotateX: [0, 15, 0],
                    scale: [1, 0.95, 1]
                }}
                transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "linear",
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
            >
                <img src="/growth_chart_3d.png" alt="" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(34,197,94,0.1)]" />
            </motion.div>

            <div className="container-main relative z-40 pt-40 pb-56 md:pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="pill pill-green">
                            <span className="status-dot" />
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="display-xl mb-4 text-center">
                        <span className="gradient-text-white">We Build Websites That</span>
                        <br />
                        <span className="text-zinc-500 text-center">Get You More Customers.</span>
                    </h1>

                    <p className="text-base md:text-lg text-zinc-400 mb-6 max-w-2xl leading-relaxed opacity-90 text-center mx-auto">
                        Professional Web Development + Ongoing Support tailored for small businesses like yours.
                    </p>

                    <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center mb-10">
                        <span className="font-syne font-bold text-lg md:text-2xl text-zinc-500">
                            {displayText}
                            <span className="ml-1 animate-pulse inline-block w-[2px] h-6 bg-purple-500 align-middle" />
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <NavLink
                            to="/contact"
                            className="bg-[var(--accent)] text-black font-syne font-bold px-10 py-5 rounded-full text-base transition-all hover:scale-105 active:scale-95 no-underline shadow-xl shadow-[var(--accent)]/10"
                        >
                            Get Free Website Audit
                        </NavLink>
                        <a
                            href="https://wa.me/919092330688"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/10 hover:border-white/20 text-white font-syne font-bold px-10 py-5 rounded-full text-base transition-all hover:bg-white/5 no-underline"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/5 bg-black/40 backdrop-blur-md z-30">
                <div className="container-main flex flex-wrap justify-center md:justify-between items-center gap-8 px-4">
                    {[
                        { label: 'SUCCESSFUL PROJECTS', val: '24+' },
                        { label: 'HAPPY CLIENTS', val: '18+' },
                        { label: 'YEARS EXPERIENCE', val: '04+' },
                        { label: 'AWARDS WON', val: '07' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="font-syne font-bold text-xl md:text-2xl text-white mb-1">{stat.val}</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
