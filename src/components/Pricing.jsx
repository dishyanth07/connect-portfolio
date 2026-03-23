import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheck, FiArrowRight, FiZap } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const plans = [
    {
        name: 'Starter Plan',
        price: '₹5,000 - ₹10,000',
        subtitle: 'One-time investment',
        desc: 'Perfect for small businesses starting their digital journey.',
        features: [
            '1–5 Page Professional Website',
            'Mobile Responsive Design',
            'Basic Search Engine Setup',
            'WhatsApp Integration',
            '7-Day Delivery'
        ],
        cta: 'Get Free Audit',
        link: '/contact'
    },
    {
        name: 'Growth Plan',
        price: '₹1,999 - ₹4,999',
        priceSuffix: '/month',
        subtitle: 'The best value for growth',
        desc: 'Complete website maintenance + growth support for your business.',
        features: [
            'Professional Website Included',
            'Monthly Maintenance & Security',
            'Speed Optimization (Sub-2s)',
            'Unlimited Small Edits',
            'Advanced SEO Strategy',
            'Priority 24/7 Support'
        ],
        cta: 'Start Growing Now',
        highlight: true,
        link: 'https://wa.me/919092330688'
    },
    {
        name: 'Premium Plan',
        price: '₹5,000 - ₹15,000',
        priceSuffix: '/month',
        subtitle: 'Advanced growth & automation',
        desc: 'Scale your business with high-end automation and deep SEO.',
        features: [
            'Everything in Growth Plan',
            'WhatsApp Automation Setup',
            'Advanced Link Building',
            'Google My Business (GMB) Management',
            'Custom Lead Generation Funnels',
            'Deep Analytics & Reporting'
        ],
        cta: 'Book My Audit',
        link: '/contact'
    }
]

const addOns = [
    { name: 'WhatsApp Automation', price: '₹2K – ₹5K setup' },
    { name: 'Speed Optimization', price: '₹1K – ₹3K' },
    { name: 'Landing Page/Funnel', price: '₹3K – ₹10K' },
    { name: 'Website Redesign', price: '₹5K – ₹25K' }
]

export default function Pricing() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="pricing" ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-main relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="label-text mb-4 inline-block">Investment Plans</span>
                        <h2 className="display-lg text-white mb-6">
                            Plans Built for <span className="gradient-text">Business Results</span>
                        </h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg opacity-80">
                            Transparent pricing with no hidden fees. Choose a plan that fits your current stage of growth.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group relative flex flex-col p-8 md:p-10 rounded-[32px] border transition-all duration-500 ${
                                plan.highlight 
                                ? 'bg-[#0a0a0a] border-[var(--accent)]/30 scale-105 shadow-[0_20px_50px_rgba(0,255,157,0.1)]' 
                                : 'bg-black/40 border-white/[0.05] hover:border-white/10'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_var(--accent-glow)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="font-syne font-bold text-xl text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{plan.price}</span>
                                    {plan.priceSuffix && <span className="text-zinc-500 text-lg">{plan.priceSuffix}</span>}
                                </div>
                                <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest opacity-80">{plan.subtitle}</p>
                            </div>

                            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                {plan.desc}
                            </p>

                            <div className="space-y-4 mb-10">
                                {plan.features.map(feat => (
                                    <div key={feat} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0">
                                            <FiCheck className="text-[var(--accent)]" size={12} />
                                        </div>
                                        <span className="text-zinc-300 text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {plan.link.startsWith('http') ? (
                                <a
                                    href={plan.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-auto btn w-full justify-center group/btn h-14 ${
                                        plan.highlight 
                                        ? 'bg-[var(--accent)] text-black hover:bg-white' 
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                                    }`}
                                >
                                    {plan.cta}
                                    <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            ) : (
                                <NavLink
                                    to={plan.link}
                                    className={`mt-auto btn w-full justify-center group/btn h-14 ${
                                        plan.highlight 
                                        ? 'bg-[var(--accent)] text-black hover:bg-white' 
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                                    }`}
                                >
                                    {plan.cta}
                                    <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </NavLink>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Sub-section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-8 md:p-12"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                        <div>
                            <h3 className="font-syne font-bold text-2xl text-white mb-2 flex items-center gap-3">
                                <FiZap className="text-[var(--accent)]" />
                                Expert Add-ons
                            </h3>
                            <p className="text-zinc-500 text-sm">Need something specific? Boost your site with these performance tools.</p>
                        </div>
                        <a href="https://wa.me/919092330688" className="btn btn-outline whitespace-nowrap">
                            Custom Quote ↗
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {addOns.map(add => (
                            <div key={add.name} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:border-[var(--accent)]/20 transition-all group">
                                <div className="text-zinc-400 text-xs mb-2 font-bold uppercase tracking-wider group-hover:text-[var(--accent)]">{add.name}</div>
                                <div className="text-white font-bold">{add.price}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
