import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiPlus } from 'react-icons/fi'

const plans = [
    {
        name: 'Starter Plan',
        price: '₹7,999',
        priceSub: 'one-time',
        desc: 'Small businesses starting online',
        color: '#22c55e',
        features: [
            '1–5 Page Website',
            'Mobile Responsive Design',
            'Basic SEO Setup',
            'WhatsApp Integration',
            '5–7 Day Delivery'
        ],
        highlight: false,
        label: '🟢'
    },
    {
        name: 'Growth Plan',
        price: '₹2,999',
        priceSub: '/ month',
        desc: 'Businesses that want consistent growth',
        color: '#3b82f6',
        features: [
            'Professional Website Included',
            'Monthly Maintenance & Updates',
            'Speed Optimization',
            'Basic SEO',
            'Unlimited Small Edits',
            'Priority Support'
        ],
        highlight: true,
        label: '🔵',
        badge: 'MOST IMPORTANT 🔥'
    },
    {
        name: 'Premium Plan',
        price: '₹7,999',
        priceSub: '/ month',
        desc: 'Businesses serious about scaling',
        color: '#a855f7',
        features: [
            'Everything in Growth Plan',
            'Advanced SEO Strategy',
            'WhatsApp Automation Setup',
            'Google My Business Optimization',
            'Lead Generation Funnels',
            'Monthly Analytics Report'
        ],
        highlight: false,
        label: '🟣'
    }
]

const addOns = [
    { name: 'WhatsApp Automation', price: '₹3,999', type: 'one-time' },
    { name: 'Speed Optimization', price: '₹1,999', type: '' },
    { name: 'Landing Page', price: '₹4,999', type: '' },
    { name: 'Website Redesign', price: '₹9,999+', type: '' },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-transparent border-t border-white/[0.05]">
            <div className="container-main">
                <div className="text-center mb-16">
                    <h2 className="display-lg text-white mb-4 uppercase tracking-tight">
                        Simple, <span className="text-[var(--accent)]">Transparent</span> Pricing
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-base font-medium">
                        Invest in a website that works as hard as you do. Choose the plan that fits your stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-[24px] border transition-all duration-300 flex flex-col ${
                                plan.highlight 
                                ? 'bg-white/[0.03] border-[var(--accent)]/40 shadow-2xl shadow-[var(--accent)]/5' 
                                : 'bg-[#121212] border-white/5 hover:border-white/10'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-lg">{plan.label}</span>
                                <h3 className="font-syne font-bold text-lg text-white uppercase tracking-tight">{plan.name}</h3>
                            </div>

                            <div className="mb-6">
                                <span className="text-3xl font-black text-white">{plan.price}</span>
                                <span className="text-zinc-500 text-xs ml-1 font-medium">{plan.priceSub}</span>
                            </div>
                            
                            <div className="space-y-3 mb-8 flex-grow">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-2.5">
                                        <FiCheck className="mt-1 flex-shrink-0" size={14} style={{ color: plan.color }} />
                                        <span className="text-zinc-400 text-[13px] leading-snug">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-bold mb-4">
                                    Best for: <span className="text-zinc-300 ml-1">{plan.desc}</span>
                                </div>
                                <button
                                    className={`w-full py-3.5 rounded-full font-syne font-bold text-[13px] transition-all active:scale-95 ${
                                        plan.highlight
                                        ? 'bg-[var(--accent)] text-black shadow-lg shadow-[var(--accent)]/20 hover:scale-[1.02]'
                                        : 'border border-white/10 text-white hover:bg-white/5'
                                    }`}
                                >
                                    {plan.highlight ? 'Choose Growth' : plan.name === 'Premium Plan' ? 'Scale Now' : 'Start Today'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Section */}
                <div className="max-w-4xl mx-auto bg-[#121212] border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-10">
                        <span className="text-xl">⚡</span>
                        <h3 className="font-syne font-bold text-xl text-white uppercase tracking-tight">Simple Add-ons</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {addOns.map((addon) => (
                            <div key={addon.name} className="flex items-center justify-between group py-2 border-b border-white/[0.03] last:border-0 hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[var(--accent)] transition-colors" />
                                    <span className="text-zinc-300 text-[14px] font-medium">{addon.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-[14px]">{addon.price}</span>
                                    {addon.type && <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-tighter">({addon.type})</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
