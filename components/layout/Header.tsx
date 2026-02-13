"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone, X, Instagram, Facebook, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { LeadFormModal } from "@/components/forms/LeadFormModal"
import { cn } from "@/lib/utils"
import { ContactTrigger } from "@/components/features/contact/ContactTrigger"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
    { label: "Upvc Products", href: "/products/upvc" },
    { label: "Aluminium Products", href: "/products/aluminium" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
]

export function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)

    const isHome = pathname === "/"
    // Header should be transparent only on Home page and when not scrolled
    const isTransparent = isHome && !isScrolled

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
                    !isTransparent
                        ? "bg-white/95 backdrop-blur-md border-b border-zinc-100 py-3 shadow-sm"
                        : "bg-transparent py-5"
                )}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group relative z-50">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Sai Ram Decorators Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className={cn(
                                "font-heading font-bold text-lg md:text-xl tracking-tight transition-colors whitespace-nowrap",
                                !isTransparent ? "text-zinc-900" : "text-white"
                            )}>
                                Sai Ram Decorators
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-semibold transition-all hover:-translate-y-0.5",
                                        !isTransparent ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ContactTrigger className={cn(
                                "flex items-center gap-2 font-medium transition-colors cursor-pointer",
                                !isTransparent ? "text-zinc-900" : "text-white"
                            )}>
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-semibold tracking-tight">+91 90197 88904</span>
                            </ContactTrigger>

                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={cn(
                                "lg:hidden p-3 rounded-xl transition-all active:scale-90 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center",
                                mobileMenuOpen
                                    ? "text-zinc-900 bg-zinc-100 shadow-md"
                                    : "text-zinc-900 bg-white/90 backdrop-blur-md shadow-sm"
                            )}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[65] bg-black/50 backdrop-blur-sm lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[70] bg-white lg:hidden flex flex-col"
                        >
                            {/* Fixed Header with Close Button */}
                            <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white">
                                <span className="text-lg font-heading font-bold text-zinc-900">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
                                    aria-label="Close Menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-8 pb-6 space-y-12" style={{ WebkitOverflowScrolling: 'touch' }}>
                                {/* Navigation Links */}
                                <nav className="flex flex-col space-y-6">
                                    {NAV_ITEMS.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="block text-3xl md:text-4xl font-heading font-bold text-zinc-900 hover:text-zinc-500 transition-colors py-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Contact Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-6 pt-8 border-t border-zinc-100"
                                >
                                    <div className="space-y-4">
                                        <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Get in Touch</p>
                                        <a href="tel:+919902924666" className="flex items-center gap-4 text-zinc-900 group">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold">+91 99029 24666</span>
                                        </a>
                                        <ContactTrigger className="flex items-center gap-4 text-zinc-900 group" phoneNumber="+919019788904">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold">+91 90197 88904</span>
                                        </ContactTrigger>
                                        <a href="tel:+918049527803" className="flex items-center gap-4 text-zinc-900 group">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold">+91 80 49527803</span>
                                        </a>
                                        <a href="mailto:info@sairamdecorators.com" className="flex items-center gap-4 text-zinc-900 group">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold">info@sairamdecorators.com</span>
                                        </a>
                                        <div className="flex items-center gap-4 text-zinc-900">
                                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold">HSR Layout, Bengaluru</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pb-4">
                                        <Link href="#" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all">
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all">
                                            <Facebook className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Fixed Footer with CTA */}
                            <div className="flex-shrink-0 p-6 bg-zinc-50 border-t border-zinc-100">
                                <Button
                                    className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg"
                                    onClick={() => {
                                        setMobileMenuOpen(false)
                                        setModalOpen(true)
                                    }}
                                >
                                    Get a Free Quote
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}
