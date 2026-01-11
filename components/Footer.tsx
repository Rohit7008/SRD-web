import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-serif font-bold text-white mb-4 block">
                            Sai Ram Decorators
                        </Link>
                        <p className="max-w-xs text-sm">
                            Transforming your events into unforgettable memories with exquisite decorations and professional service.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-rose-500 transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-rose-500 transition-colors">Services</Link></li>
                            <li><Link href="#gallery" className="hover:text-rose-500 transition-colors">Gallery</Link></li>
                            <li><Link href="#contact" className="hover:text-rose-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>123 Decor Lane</li>
                            <li>Cityville, ST 12345</li>
                            <li>info@sairamdecorators.com</li>
                            <li>+91 98765 43210</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© {new Date().getFullYear()} Sai Ram Decorators. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-rose-500 transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-rose-500 transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-rose-500 transition-colors"><Twitter className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
