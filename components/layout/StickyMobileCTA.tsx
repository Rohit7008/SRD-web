"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutGrid, FolderHeart, Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: LayoutGrid },
    { label: "Projects", href: "/projects", icon: FolderHeart },
    { label: "Contact", href: "/contact", icon: Phone },
]

export function StickyMobileCTA() {
    const pathname = usePathname()

    return (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50">
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 shadow-2xl flex items-center justify-between gap-1 overflow-hidden">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center flex-1 py-2.5 px-1 rounded-2xl transition-all active:scale-90",
                                isActive
                                    ? "bg-white text-zinc-900 shadow-lg scale-105"
                                    : "text-white/60 hover:text-white"
                            )}
                        >
                            <Icon className={cn("w-5 h-5 mb-1", isActive ? "stroke-[2.5px]" : "stroke-[2px]")} />
                            <span className={cn("text-[10px] font-bold uppercase tracking-tight", isActive ? "opacity-100" : "opacity-60")}>
                                {item.label}
                            </span>
                        </Link>
                    )
                })}

                {/* Floating Action-like Button for WhatsApp */}
                <a
                    href="https://wa.me/919341267500?text=Hi%2C%20can%20I%20get%20more%20information%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center flex-1 py-2.5 px-1 rounded-2xl text-green-400 hover:text-green-300 transition-all active:scale-90"
                >
                    <MessageCircle className="w-5 h-5 mb-1 stroke-[2.5px]" />
                    <span className="text-[10px] font-bold uppercase tracking-tight opacity-100">
                        Chat
                    </span>
                </a>
            </div>
        </div>
    )
}
