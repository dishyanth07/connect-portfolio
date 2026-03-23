import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiTarget, FiShield } from 'react-icons/fi'

const indicators = [
    {
        icon: FiZap,
        title: 'Fast 7-Day Delivery',
        desc: 'Get your business online in record time without compromising quality.'
    },
    {
        icon: FiTarget,
        title: 'Business-Focused Design',
        desc: 'We design for conversions, not just looks. Every pixel has a purpose.'
    },
    {
        icon: FiShield,
        title: 'Monthly Support Included',
        desc: 'We handle the technical stuff so you can focus on running your business.'
    }
]

export default function TrustIndicators() {
    return (
        <section className="pt-0 pb-20 bg-transparent">
            <div className="container-main">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {indicators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)]">
                                <item.icon size={32} />
                            </div>
                            <h3 className="font-syne font-bold text-xl text-white mb-3">{item.title}</h3>
                            <p className="text-zinc-500 max-w-xs">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
