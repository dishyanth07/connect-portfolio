import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
    return (
        <>
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                    zIndex: 100,
                    transformOrigin: 'bottom',
                }}
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                    zIndex: 100,
                    transformOrigin: 'top',
                }}
            />
            {children}
        </>
    )
}
