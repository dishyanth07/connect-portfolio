import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

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

export const useModal = () => useContext(ModalContext);
