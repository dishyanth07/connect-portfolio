import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiMessageSquare, FiCommand, FiCode, FiShield, FiSend, FiRefreshCw, FiSearch, FiLayers, FiCheckCircle } from 'react-icons/fi'

const steps = [
    { num: '01', icon: FiSearch, title: 'Consultation', desc: 'Understand project goals and requirements through deep strategic analysis.' },
    { num: '02', icon: FiLayers, title: 'Planning', desc: 'Define architecture, timeline and technologies to ensure a solid foundation.' },
    { num: '03', icon: FiCode, title: 'Development', desc: 'Agile development with continuous updates and modular engineering.' },
    { num: '04', icon: FiCheckCircle, title: 'Testing', desc: 'Quality assurance and performance testing to guarantee zero-defect delivery.' },
    { num: '05', icon: FiSend, title: 'Deployment', desc: 'Smooth launch and delivery with scalable cloud infrastructure.' },
    { num: '06', icon: FiShield, title: 'Support', desc: 'Ongoing maintenance and proactive improvements to keep your product ahead.' },
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
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-20" />
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-[var(--accent)] opacity-10 blur-sm" />

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
                                    <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-muted)] group-hover:scale-110 shadow-2xl">
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
