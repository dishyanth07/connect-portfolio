import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { useModal } from '../context/ModalContext'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const { openAuditModal } = useModal()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#000000bb] backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container-main flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 no-underline group cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="iZ Logo"
                        className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
                    />
                    <div className="flex flex-col">
                        <span className="font-syne font-bold text-lg tracking-tight text-white leading-none">INFOZ</span>
                    </div>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            className={({ isActive }) =>
                                `nav-link no-underline transition-colors hover:text-white ${isActive ? 'text-white' : 'text-zinc-400'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <button
                        onClick={openAuditModal}
                        className="bg-[var(--accent)] text-black font-syne font-bold px-7 py-2.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40 hover:glow-strong cursor-pointer"
                    >
                        Get Free Audit 🚀
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-white/5"
                    >
                        <div className="container-main py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `font-syne font-bold text-2xl no-underline transition-colors ${isActive ? 'text-white' : 'text-zinc-600'}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <button 
                                onClick={openAuditModal}
                                className="bg-[var(--accent)] text-black font-syne font-bold py-4 rounded-full text-lg mt-4 cursor-pointer hover:scale-105 transition-transform"
                            >
                                Get Free Audit 🚀
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
