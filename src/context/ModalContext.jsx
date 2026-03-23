import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
    isAuditModalOpen: false,
    openAuditModal: () => {},
    closeAuditModal: () => {}
});

export function ModalProvider({ children }) {
    const [isAuditModalOpen, setAuditModalOpen] = useState(false);

    const openAuditModal = () => {
        console.log("Triggered: Get Free Audit 🚀");
        setAuditModalOpen(true);
    };
    
    const closeAuditModal = () => setAuditModalOpen(false);

    return (
        <ModalContext.Provider value={{ isAuditModalOpen, openAuditModal, closeAuditModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
