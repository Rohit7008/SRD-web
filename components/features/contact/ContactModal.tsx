"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle } from "lucide-react"
import { createPortal } from "react-dom"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
    phoneNumber: string
}

export function ContactModal({ isOpen, onClose, phoneNumber }: ContactModalProps) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!mounted) return null

    // Format phone number for WhatsApp (remove spaces, symbols)
    const cleanNumber = phoneNumber.replace(/\D/g, '')

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 text-center bg-white">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-2">
                                    Contact Us
                                </h3>
                                <p className="text-zinc-500 mb-8">
                                    How would you like to connect with us?
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="flex items-center justify-center gap-3 w-full p-4 rounded-xl border-2 border-zinc-100 hover:border-zinc-900 hover:bg-zinc-50 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-zinc-900 text-lg">Call Now</span>
                                    </a>

                                    <a
                                        href={`https://wa.me/${cleanNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200 hover:shadow-green-300 transition-all"
                                    >
                                        <MessageCircle className="w-6 h-6 fill-current" />
                                        <span className="font-bold text-lg">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}
