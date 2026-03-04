import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'JavaScript', level: 92 },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'FastAPI', level: 88 },
            { name: 'Django', level: 82 },
            { name: 'Node.js', level: 80 },
            { name: 'PostgreSQL', level: 85 },
        ]
    },
    {
        title: 'Mobile & Tools',
        skills: [
            { name: 'Flutter', level: 78 },
            { name: 'Firebase', level: 85 },
            { name: 'Git', level: 90 },
            { name: 'Figma', level: 75 },
        ]
    }
]

const tools = [
    'VS Code', 'Docker', 'Postman', 'Supabase', 'Vercel', 'AWS', 'Python', 'Redis', 'Zustand', 'Radix UI'
]

export default function Skills({ hideHeader }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="skills" ref={ref} className={`${hideHeader ? 'py-0' : 'py-28'} bg-black relative`}>
            <div className="container-main">
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="section-num">05</span>
                            <span className="w-10 h-px bg-zinc-800" />
                            <span className="label-text">Stacks</span>
                        </div>
                        <h2 className="display-md">
                            Building with <span className="gradient-text">Modern Tech.</span>
                        </h2>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 mb-40">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <h4 className="font-syne font-bold text-white text-[12px] uppercase tracking-[0.4em] opacity-40">
                                    {cat.title}
                                </h4>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            <div className="space-y-10">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={skill.name} className="group cursor-default relative">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="text-[16px] font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-[11px] font-bold text-zinc-600 group-hover:text-purple-400 transition-colors duration-300">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-[3px] w-full bg-white/[0.04] rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: idx * 0.1 + sIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                                className="h-full bg-gradient-to-r from-purple-800 to-purple-400 relative z-10 bar-glow"
                                            />
                                            {/* Glow overlay */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: idx * 0.1 + sIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                                className="absolute top-0 left-0 h-full bg-purple-500/20 blur-sm"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Ecosystem */}
                <div className="pt-24 border-t border-white/5 relative">
                    <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                        <div className="lg:w-1/4">
                            <h5 className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.5em] mb-5">Ecosystem</h5>
                            <p className="text-zinc-500 text-[1rem] leading-relaxed max-w-[260px] font-medium">
                                A curated selection of tools that enable our high-performance architecture.
                            </p>
                        </div>
                        <div className="lg:w-3/4 flex flex-wrap gap-3">
                            {tools.map((tool, i) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.05,
                                        borderColor: 'rgba(167, 139, 250, 0.3)',
                                        backgroundColor: 'rgba(167, 139, 250, 0.05)',
                                        color: '#fff'
                                    }}
                                    className="px-6 py-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] text-[14px] font-bold text-zinc-500 hover:shadow-[0_10px_20px_rgba(124,58,237,0.1)] transition-all duration-300 cursor-default"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
