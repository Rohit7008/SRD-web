import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
    title: string
    description: string
    href: string
    image?: string
    specs?: string[]
    priceHint?: string
    className?: string
}

export function ServiceCard({ title, description, href, image, specs, priceHint, className }: ServiceCardProps) {
    return (
        <div className={cn("group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500", className)}>
            <Link href={href} className="block overflow-hidden aspect-[16/10] relative">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center">
                        <span className="text-zinc-300 font-heading font-bold text-4xl">SRD</span>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {priceHint && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-900 shadow-lg z-10 border border-white/20">
                        {priceHint}
                    </div>
                )}

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-0 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>
                </div>
            </Link>

            <div className="flex flex-col flex-grow p-6 space-y-4">
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base line-clamp-3 flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {specs?.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-lg">
                            {spec}
                        </span>
                    ))}
                </div>

                <div className="pt-2 flex gap-3">
                    <Button className="flex-1 h-12 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg transition-all active:scale-95 group/btn" asChild>
                        <Link href="/contact" className="gap-2">
                            Get Quote
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Link
                        href={href}
                        className="w-12 h-12 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-all active:scale-90"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
