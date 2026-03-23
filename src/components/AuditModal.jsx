import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useModal } from '../context/ModalContext';

export default function AuditModal() {
    const { isAuditModalOpen, closeAuditModal } = useModal();

    // The provided Google Form link (using the embeddable version if possible or just standard)
    // https://forms.gle/XoZBvwyMFwe8N69JA typically redirects to a full form.
    // For iframe embedding, we need the full URL.
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdyH5p1Ew6vB7D9U07-W-B8R_D3hZk10P9_G9e_vS_8z9m8-w/viewform?embedded=true";
    // NOTE: Above is a placeholder for the actual embedded URL if direct forms.gle link fails in iframe. 
    // Standard forms.gle link might not allow embedding. 
    // I'll use the provided link but the user might need to use the "Embed" option in Google Forms for perfect iframe scaling.
    const providedLink = "https://forms.gle/XoZBvwyMFwe8N69JA";

    return (
        <AnimatePresence>
            {isAuditModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAuditModal}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl h-[90vh] bg-[#121212] rounded-[24px] border border-white/10 overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#181818]">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🚀</span>
                                <h3 className="font-syne font-bold text-white uppercase tracking-tight">Get Free Website Audit</h3>
                            </div>
                            <button 
                                onClick={closeAuditModal}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Iframe */}
                        <div className="flex-grow bg-white">
                            <iframe 
                                src={providedLink}
                                className="w-full h-full border-none"
                                title="Audit Form"
                            >
                                Loading…
                            </iframe>
                        </div>

                        {/* Footer - Minimal */}
                        <div className="p-3 text-center bg-[#121212] text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                            Secure Lead Capture via Google Forms
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
