import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

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
        <section id="pricing" className="py-20 bg-transparent border-t border-white/[0.05]">
            <div className="container-main max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-3 uppercase tracking-tight">
                        Simple, <span className="text-[var(--accent)]">Transparent</span> Pricing
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium">
                        Choose the plan that fits your business stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-7 rounded-[20px] border transition-all duration-300 flex flex-col ${
                                plan.highlight 
                                ? 'bg-white/[0.03] border-[var(--accent)]/30 shadow-2xl shadow-[var(--accent)]/5 scale-105 z-10' 
                                : 'bg-[#121212] border-white/5 hover:border-white/10'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-4 right-4 bg-[var(--accent)] text-black text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-base leading-none">{plan.label}</span>
                                <h3 className="font-syne font-bold text-base text-white uppercase tracking-tight">{plan.name}</h3>
                            </div>

                            <div className="mb-5 flex items-baseline gap-1">
                                <span className="text-2xl font-black text-white">{plan.price}</span>
                                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">{plan.priceSub}</span>
                            </div>
                            
                            <div className="space-y-2.5 mb-8 flex-grow">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-2">
                                        <FiCheck className="mt-0.5 flex-shrink-0" size={12} style={{ color: plan.color }} />
                                        <span className="text-zinc-400 text-[12px] leading-relaxed">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-5 border-t border-white/[0.03] mt-auto">
                                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                                    <span>Best for:</span>
                                    <span className="text-zinc-400 font-medium normal-case tracking-normal">{plan.desc}</span>
                                </div>
                                <button
                                    className={`w-full py-2.5 rounded-full font-syne font-bold text-[12px] transition-all active:scale-95 ${
                                        plan.highlight
                                        ? 'bg-[var(--accent)] text-black shadow-lg shadow-[var(--accent)]/10 hover:scale-[1.02]'
                                        : 'border border-white/10 text-white hover:bg-white/5'
                                    }`}
                                >
                                    {plan.highlight ? 'Get Results Now' : 'Get Started'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Section */}
                <div className="max-w-3xl mx-auto bg-[#121212] border border-white/5 rounded-[24px] p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/5 blur-[60px] rounded-full -mr-24 -mt-24 pointer-events-none" />
                    
                    <div className="flex items-center gap-2.5 mb-8">
                        <span className="text-lg">⚡</span>
                        <h3 className="font-syne font-bold text-sm text-white uppercase tracking-widest">Simple Add-ons</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {addOns.map((addon) => (
                            <div key={addon.name} className="flex items-center justify-between group py-1.5 border-b border-white/[0.03] last:border-0 hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-[var(--accent)] transition-colors" />
                                    <span className="text-zinc-400 text-[12px] font-medium">{addon.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-[12px]">{addon.price}</span>
                                    {addon.type && <span className="text-zinc-600 text-[9px] uppercase font-bold tracking-tighter">({addon.type})</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
