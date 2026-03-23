import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FiCode, FiLayers, FiShoppingCart, FiSmartphone,
    FiBox, FiUser, FiCpu, FiBookOpen, FiZap
} from 'react-icons/fi'

const services = [
    {
        num: '01',
        title: 'Custom Business Website',
        desc: 'Get a professional site that turns visitors into loyal customers. Perfect for salons, clinics, and local shops.',
        icon: FiCode,
        tags: ['Mobile-optimized design', 'SEO-ready for Google', 'Blazing fast performance']
    },
    {
        num: '02',
        title: 'E-commerce & Appointments',
        desc: 'Sell products or book appointments directly online with ease. Secure, reliable, and easy to manage.',
        icon: FiShoppingCart,
        tags: ['Secure payment setup', 'Easy product management', 'Direct booking system']
    },
    {
        num: '03',
        title: 'Monthly Care & Support',
        desc: 'Focus on your business while we handle the technical stuff. Peace of mind guaranteed.',
        icon: FiZap,
        tags: ['Daily backups & security', 'Unlimited small edits', '24/7 technical support']
    }
]

export default function Services({ limit, hideHeader }) {
    const { ref, inView } = useInView({
        threshold: 0.05,
        triggerOnce: true
    })

    const displayedServices = limit ? services.slice(0, limit) : services

    return (
        <section id="services" ref={ref} className="bg-transparent">
            <div className="container-main">
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="text-center mb-24"
                    >
                        <h2 className="display-lg text-white mb-6 uppercase tracking-tight">
                            Complete <span className="text-[var(--accent)]">Solutions</span>
                        </h2>

                        {/* Mockup Underline Effect */}
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-1 bg-[var(--accent)] rounded-full blur-[2px]" />
                        </div>

                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-70">
                            Everything your local business needs to thrive online, from initial launch to ongoing support.
                        </p>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                            className="group"
                        >
                            <div className="bg-[#0a0a0a] border border-white/[0.05] p-12 h-full rounded-[40px] flex flex-col items-center text-center transition-all duration-700 group-hover:bg-[#0e0e0e] group-hover:border-[var(--accent)]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">

                                {/* Corner Number */}
                                <div className="absolute top-8 right-8 text-[10px] font-black text-zinc-800 bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.05] tracking-widest group-hover:text-[var(--accent)] group-hover:border-[var(--accent-muted)] transition-all">
                                    {svc.num}
                                </div>

                                {/* Dynamic Icon Section */}
                                <div className="w-28 h-28 mb-10 rounded-3xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-white/90 group-hover:text-[var(--accent)] group-hover:border-[var(--accent-glow)] group-hover:bg-[var(--accent-muted)] transition-all duration-700">
                                    <svc.icon size={42} strokeWidth={1} />
                                </div>

                                <h3 className="font-syne font-black text-2xl text-white mb-6 tracking-tight uppercase">
                                    {svc.title}
                                </h3>

                                <p className="text-zinc-500 text-[1.05rem] leading-relaxed mb-10 font-medium opacity-80 max-w-[280px]">
                                    {svc.desc}
                                </p>

                                <div className="mt-auto flex flex-wrap justify-center gap-2">
                                    {svc.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600 bg-white/[0.01] border border-white/[0.05] px-4 py-2 rounded-full group-hover:text-zinc-400 group-hover:border-zinc-700 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
