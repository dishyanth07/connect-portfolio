import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const plans = [
    {
        name: 'Starter',
        price: '₹14,999',
        desc: 'Perfect for new local businesses starting their journey.',
        features: [
            '5-Page Custom Website',
            'Mobile-Responsive Design',
            'Basic SEO Setup',
            'Contact Form Integration',
            '1 Month Support'
        ],
        cta: 'Start Now',
        highlighted: false
    },
    {
        name: 'Growth',
        price: '₹29,999',
        desc: 'Advanced features for scaling your business and leads.',
        features: [
            'Unlimited Pages',
            'E-commerce / Booking System',
            'Advanced SEO Strategy',
            'WhatsApp & Social Integration',
            '3 Months Priority Support',
            'Speed Optimization'
        ],
        cta: 'Choose Growth',
        highlighted: true
    },
    {
        name: 'Professional',
        price: 'Custom',
        desc: 'Fully managed solutions for established enterprises.',
        features: [
            'Custom Web Application',
            'Payment Gateway Integration',
            'Monthly Content Updates',
            'Dedicated Account Manager',
            '24/7 Technical Support',
            'Conversion Rate Optimization'
        ],
        cta: 'Contact Us',
        highlighted: false
    }
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-transparent border-t border-white/[0.05]">
            <div className="container-main">
                <div className="text-center mb-20">
                    <h2 className="display-lg text-white mb-6 uppercase tracking-tight">
                        Simple, <span className="text-[var(--accent)]">Transparent</span> Pricing
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
                        Invest in a website that works as hard as you do. Monthly maintenance included.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-[24px] border transition-all duration-300 flex flex-col ${
                                plan.highlighted 
                                ? 'bg-white/[0.03] border-[var(--accent)]/40 shadow-2xl shadow-[var(--accent)]/5' 
                                : 'bg-[#121212] border-white/5 hover:border-white/10'
                            }`}
                        >
                            <h3 className="font-syne font-bold text-xl text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-black text-white">{plan.price}</span>
                                {plan.price !== 'Custom' && <span className="text-zinc-500 text-sm ml-1">/ one-time</span>}
                            </div>
                            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                {plan.desc}
                            </p>
                            
                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-3">
                                        <FiCheck className="text-[var(--accent)] mt-1 flex-shrink-0" size={16} />
                                        <span className="text-zinc-400 text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 rounded-full font-syne font-bold text-sm transition-all active:scale-95 ${
                                    plan.highlighted
                                    ? 'bg-[var(--accent)] text-black shadow-lg shadow-[var(--accent)]/20 hover:scale-[1.02]'
                                    : 'border border-white/10 text-white hover:bg-white/5'
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
