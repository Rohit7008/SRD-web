"use client"

import * as React from "react"
import { ContactModal } from "./ContactModal"

interface ContactTriggerProps {
    children: React.ReactNode
    phoneNumber?: string
    className?: string
}

export function ContactTrigger({ children, phoneNumber = "+919019788904", className }: ContactTriggerProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                }}
                className={className}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
            >
                {children}
            </div>
            <ContactModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                phoneNumber={phoneNumber}
            />
        </>
    )
}
