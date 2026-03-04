import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

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
                    <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center font-syne font-black text-xl text-black transition-transform group-hover:scale-105">
                        I
                    </div>
                    <div className="flex flex-col">
                        <span className="font-syne font-bold text-lg tracking-tight text-white leading-none">INFOZ</span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Tech & Solutions</span>
                    </div>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
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
                    <NavLink to="/contact" className="btn btn-white no-underline ml-4 py-2 px-6 text-sm">
                        Hire Me <span className="ml-1 opacity-50">→</span>
                    </NavLink>
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
                            <NavLink to="/contact" className="btn btn-white py-4 text-lg mt-4 no-underline">
                                Hire Me →
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
