import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiMessageSquare, FiCommand, FiCode, FiShield, FiSend, FiRefreshCw, FiSearch, FiLayers, FiCheckCircle } from 'react-icons/fi'

const steps = [
    { num: '01', icon: FiSearch, title: 'Strategy & Audit', desc: 'We start with a free audit to understand your business goals and identify growth opportunities.' },
    { num: '02', icon: FiLayers, title: 'Success Roadmap', desc: 'Defining the perfect architecture and plan to ensure your project delivers real-world results.' },
    { num: '03', icon: FiCode, title: 'Rapid Building', desc: 'High-speed development with modern tools to get your business online as quickly as possible.' },
    { num: '04', icon: FiCheckCircle, title: 'Performance Check', desc: 'Rigorous testing to ensure your site is fast, secure, and ready for your first visitors.' },
    { num: '05', icon: FiSend, title: 'Go-Live!', desc: 'A smooth launch with everything set up for search engines and lead generation.' },
    { num: '06', icon: FiShield, title: 'Ongoing Care', desc: 'Continuous monthly support and updates to keep your business ahead of the competition.' },
]

export default function Process() {
    return (
        <section className="bg-transparent relative">
            <div className="container-main relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="label-text">02. Our Workflow</span>
                        <div className="h-px w-8 bg-white/10" />
                    </div>
                    <h2 className="display-lg text-white mb-6 uppercase tracking-tight">
                        Our <span className="text-[var(--accent)]">Process.</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl">
                    {/* Subtle Vertical Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10" />

                    <div className="space-y-20">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className="relative flex items-start gap-12 group"
                            >
                                {/* Timeline Connector Node */}
                                <div className="relative z-10 mt-1">
                                    <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent)]/40 group-hover:bg-[#161616] group-hover:scale-105">
                                        <span className="text-xs font-black text-zinc-500 group-hover:text-[var(--accent)] transition-colors tracking-widest">{step.num}</span>
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="flex-1 border-b border-white/[0.05] pb-12">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-[var(--accent)] group-hover:bg-[var(--accent-muted)] transition-all duration-500">
                                            <step.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-syne font-black text-2xl text-white uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-500 text-[1.1rem] leading-relaxed font-medium group-hover:text-zinc-300 transition-colors duration-500 max-w-2xl opacity-80">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
