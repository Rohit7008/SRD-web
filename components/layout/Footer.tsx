import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-zinc-50 pt-20 pb-8 border-t border-zinc-200">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 flex-shrink-0">
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
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                            Premium architectural solutions for modern homes and commercial spaces. Specializing in UPVC, Aluminium, and high-end decor.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-zinc-900 mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/services/upvc-windows" className="hover:text-zinc-900 transition-colors">UPVC Windows</Link></li>
                            <li><Link href="/services/aluminium-windows" className="hover:text-zinc-900 transition-colors">Aluminium Systems</Link></li>
                            <li><Link href="/services/commercial-glazing" className="hover:text-zinc-900 transition-colors">Commercial Glazing</Link></li>
                            <li><Link href="/services/doors" className="hover:text-zinc-900 transition-colors">Door Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/why-us" className="hover:text-zinc-900 transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-zinc-900 transition-colors">Our Projects</Link></li>
                            <li><Link href="/careers" className="hover:text-zinc-900 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-zinc-900 mb-6">Visit Us</h4>
                        <address className="text-sm text-zinc-500 not-italic leading-relaxed">
                            123, Tech Park Road,<br />
                            Whitefield, Bengaluru,<br />
                            Karnataka 560066<br />
                            <br />
                            <a href="tel:+919876543210" className="hover:text-zinc-900 transition-colors">+91 98765 43210</a><br />
                            <a href="mailto:hello@sairamdecorators.com" className="hover:text-zinc-900 transition-colors">hello@sairamdecorators.com</a>
                        </address>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                    <p>© {new Date().getFullYear()} Sai Ram Decorators. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
