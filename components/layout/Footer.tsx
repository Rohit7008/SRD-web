import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { Container } from "@/components/ui/container"
import { ContactTrigger } from "@/components/features/contact/ContactTrigger"

export function Footer() {
    return (
        <footer className="bg-zinc-50 pt-12 pb-6 border-t border-zinc-200">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12 flex-shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Sai Ram Decorators Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-zinc-900">
                                Sai Ram Decorators
                            </span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
                            Premium architectural solutions for modern homes and commercial spaces. Specializing in UPVC, Aluminium, and Structural Glazing.
                        </p>
                        <div className="flex gap-3">
                            <Link href="https://www.facebook.com/share/1BeGKaE78B/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.instagram.com/saira_m4616?utm_source=qr&igsh=eThwb2p0eHNxYTU=" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-pink-600 hover:border-pink-600 transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-zinc-900 mb-4 text-base uppercase tracking-wide">Services</h4>
                        <ul className="space-y-3 text-base text-zinc-500">
                            <li><Link href="/products/upvc" className="hover:text-zinc-900 transition-colors">UPVC Windows & Doors</Link></li>
                            <li><Link href="/products/aluminium" className="hover:text-zinc-900 transition-colors">Aluminium Systems</Link></li>
                            <li><Link href="/products/partitions" className="hover:text-zinc-900 transition-colors">Partitions & Glazing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-zinc-900 mb-4 text-base uppercase tracking-wide">Company</h4>
                        <ul className="space-y-3 text-base text-zinc-500">
                            <li><Link href="/about" className="hover:text-zinc-900 transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-zinc-900 transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-zinc-900 mb-4 text-base uppercase tracking-wide">Visit Us</h4>
                        <div className="rounded-xl overflow-hidden shadow-sm border border-zinc-200 h-40 w-full mb-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509!2d77.636065!3d12.900951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bdf1ab8f49%3A0x62e7a2618703d3fe!2sSairam%20Decorators!5e0!3m2!1sen!2sin!4v1705856000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">Phone</span>
                                <div className="flex flex-col gap-1 text-sm font-medium text-zinc-500">
                                    <a href="tel:+919341267500" className="hover:text-zinc-900 transition-colors">+91 93412 67500</a>
                                    <ContactTrigger className="hover:text-zinc-900 transition-colors cursor-pointer" phoneNumber="+919019788904">+91 90197 88904</ContactTrigger>
                                    <a href="tel:+918049527803" className="hover:text-zinc-900 transition-colors">+91 80 49527803</a>
                                </div>
                            </div>
                            <div>
                                <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">Email</span>
                                <a href="mailto:info@sairamdecorators.com" className="hover:text-zinc-900 transition-colors text-sm font-medium text-zinc-500">info@sairamdecorators.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider text-zinc-400">
                    <p>© {new Date().getFullYear()} Sai Ram Decorators. All rights reserved.</p>
                </div>
            </Container>
        </footer >
    )
}
