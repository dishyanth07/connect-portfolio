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
        title: 'Web Development',
        desc: 'Fast, scalable, and modern web applications using React, Next.js, and Node.js.',
        icon: FiCode,
        tags: ['React / Next.js', 'Scalable Apps', 'Modern Design', 'High Performance']
    },
    {
        num: '02',
        title: 'Full Stack Development',
        desc: 'Complete frontend, backend, database, and cloud-deployed systems.',
        icon: FiLayers,
        tags: ['Frontend & Backend', 'Database Design', 'Cloud Deployment', 'Unified Systems']
    },
    {
        num: '03',
        title: 'E-Commerce Development',
        desc: 'Online stores and business platforms with secure payments and admin controls.',
        icon: FiShoppingCart,
        tags: ['Payment Integration', 'Inventory Management', 'Customer Accounts', 'Admin Analytics']
    },
    {
        num: '04',
        title: 'Mobile App Development',
        desc: 'Android and iOS applications with clean UI and cloud integration.',
        icon: FiSmartphone,
        tags: ['Android & iOS', 'Clean UI', 'Cloud Integration', 'High Performance']
    },
    {
        num: '05',
        title: 'SaaS Development',
        desc: 'Scalable SaaS platforms with authentication, dashboards, storage, and automation.',
        icon: FiBox,
        tags: ['Scalable Architecture', 'Authentication', 'Data Storage', 'Automation']
    },
    {
        num: '06',
        title: 'Portfolio Development',
        desc: 'Professional digital portfolios for individuals, startups, and creators.',
        icon: FiUser,
        tags: ['Digital Portfolios', 'Brand Identity', 'Showcase Work', 'Professional Design']
    },
    {
        num: '07',
        title: 'IoT Projects',
        desc: 'Real-time IoT systems with sensors, cloud connectivity, and embedded hardware.',
        icon: FiCpu,
        tags: ['Real-time Systems', 'Cloud Connectivity', 'Dashboards', 'Embedded Hardware']
    },
    {
        num: '08',
        title: 'Final Year Projects',
        desc: 'End-to-end project development for engineering students with modern tools.',
        icon: FiBookOpen,
        tags: ['Complete Documentation', 'Viva Support', 'Source Code', 'Working Models']
    },
    {
        num: '09',
        title: 'Hackathons',
        desc: 'Hackathon solutions with fast, powerful prototypes designed for competitive success.',
        icon: FiZap,
        tags: ['Quick Prototypes', 'Powerful Solutions', 'Competition Ready', 'Idea Execution']
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
                            What <span className="text-[var(--accent)]">We Offer</span>
                        </h2>

                        {/* Mockup Underline Effect */}
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-1 bg-[var(--accent)] rounded-full blur-[2px]" />
                        </div>

                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-70">
                            Comprehensive services designed to meet your unique needs and exceed expectations
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
