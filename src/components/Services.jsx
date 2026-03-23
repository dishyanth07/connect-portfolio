import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FiCode, FiLayers, FiShoppingCart, FiSmartphone,
    FiBox, FiUser, FiCpu, FiBookOpen, FiZap, FiSearch, FiMapPin, FiMessageSquare, FiTrendingUp, FiLayout, FiRefreshCw
} from 'react-icons/fi'

const serviceCategories = [
    {
        name: 'Core Services',
        services: [
            {
                title: 'Custom Business Website',
                desc: 'A premium, high-performance site built to turn local visitors into loyal customers.',
                icon: FiCode,
                tags: ['High Conversion Rate', 'Brand-Focused Design', 'Fully Responsive']
            },
            {
                title: 'E-commerce Website',
                desc: 'Sell your products or manage bookings 24/7 with a secure, easy-to-use storefront.',
                icon: FiShoppingCart,
                tags: ['Seamless Payments', 'Inventory Management', 'Order Tracking']
            }
        ]
    },
    {
        name: 'Growth Services (Monthly)',
        services: [
            {
                title: 'Monthly Care & Support',
                desc: 'Peace of mind with technical maintenance, security, and unlimited small updates.',
                icon: FiZap,
                tags: ['Daily Backups', '24/7 Security', 'Lead Tracking']
            },
            {
                title: 'Search Engine Optimization',
                desc: 'Get found on the first page of Google and attract constant organic traffic.',
                icon: FiSearch,
                tags: ['Keyword Ranking', 'On-Page SEO', 'Monthly Reports']
            },
            {
                title: 'Local SEO (GMB)',
                desc: 'Dominant local presence with Google Maps ranking and optimized My Business profile.',
                icon: FiMapPin,
                tags: ['Maps Ranking', 'Review Strategy', 'Local Authority']
            }
        ]
    },
    {
        name: 'Add-on Solutions',
        services: [
            {
                title: 'WhatsApp Automation',
                desc: 'Automate your customer communication with instant replies and lead capture.',
                icon: FiMessageSquare,
                tags: ['Instant Responses', 'Lead Management', '24/7 Support']
            },
            {
                title: 'Speed Optimization',
                desc: 'Turbocharge your loading speeds to reduce bounce rates and improve SEO.',
                icon: FiTrendingUp,
                tags: ['Sub-2s Loading', 'Core Web Vitals', 'Better Experience']
            },
            {
                title: 'High-Converting Funnels',
                desc: 'Custom landing pages designed for a single goal: turning clicks into cash.',
                icon: FiLayout,
                tags: ['A/B Testing', 'Lead Magnets', 'Direct Sales']
            },
            {
                title: 'Professional Redesign',
                desc: 'Modernize your outdated site to meet the standards of today’s marketplace.',
                icon: FiRefreshCw,
                tags: ['Modern Aesthetic', 'Better UX', 'Mobile First']
            }
        ]
    }
]

export default function Services({ limit, hideHeader }) {
    const { ref, inView } = useInView({
        threshold: 0.05,
        triggerOnce: true
    })

    const displayedServices = limit ? services.slice(0, limit) : services

    return (
        <section id="services" ref={ref} className="bg-transparent py-32">
            <div className="container-main">
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="text-center mb-28 md:mb-36"
                    >
                        <h2 className="display-lg text-white mb-6 uppercase tracking-tight">
                            Complete <span className="text-[var(--accent)]">Solutions</span>
                        </h2>

                        {/* Mockup Underline Effect */}
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-1 bg-[var(--accent)] rounded-full blur-[2px]" />
                        </div>

                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80 text-center">
                            Everything your local business needs to thrive online, from initial launch to ongoing support.
                        </p>
                    </motion.div>
                )}

                <div className="space-y-32">
                    {serviceCategories.map((cat, catIdx) => (
                        <div key={cat.name}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="font-syne font-bold text-lg md:text-xl text-[var(--accent)] uppercase tracking-[0.2em] mb-12 flex items-center gap-4"
                            >
                                <span className="w-12 h-[1px] bg-[var(--accent)] opacity-30" />
                                {cat.name}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {cat.services.map((svc, i) => (
                                    <motion.div
                                        key={svc.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                        className="group"
                                    >
                                        <div className="bg-[#0a0a0a] border border-white/[0.05] p-10 h-full rounded-[32px] flex flex-col items-center text-center transition-all duration-700 group-hover:bg-[#0e0e0e] group-hover:border-[var(--accent)]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">

                                            {/* Dynamic Icon Section */}
                                            <div className="w-20 h-20 mb-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/90 group-hover:text-[var(--accent)] group-hover:border-[var(--accent-glow)] group-hover:bg-[var(--accent-muted)] transition-all duration-700">
                                                <svc.icon size={32} strokeWidth={1} />
                                            </div>

                                            <h3 className="font-syne font-black text-2xl text-white mb-6 tracking-tight uppercase">
                                                {svc.title}
                                            </h3>

                                            <p className="text-zinc-500 text-[1rem] leading-relaxed mb-10 font-medium opacity-80 max-w-[320px]">
                                                {svc.desc}
                                            </p>

                                            <div className="mt-auto flex flex-wrap justify-center gap-2">
                                                {svc.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600 bg-white/[0.01] border border-white/[0.05] px-4 py-2 rounded-full group-hover:text-zinc-400 group-hover:border-zinc-700 transition-all">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
