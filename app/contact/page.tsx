import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-16 pb-12">
            <Section className="bg-zinc-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">Get in Touch</span>
                            <h1 className="text-2xl md:text-5xl font-heading font-bold mb-6 text-zinc-900 leading-tight">
                                Let&apos;s discuss your dream project.
                            </h1>
                            <p className="text-base md:text-xl text-zinc-500 mb-12 leading-relaxed">
                                Whether you have a specific requirement or just need advice on glazing and fenestration, our team is here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Call Us</h3>
                                        <p className="text-zinc-500 mb-1">Mon-Sat from 9am to 7pm</p>
                                        <div className="flex flex-col">
                                            <a href="tel:+919902924666" className="text-blue-600 font-medium hover:underline text-lg">+91 99029 24666</a>
                                            <a href="tel:+919019788904" className="text-blue-600 font-medium hover:underline text-lg">+91 90197 88904</a>
                                            <a href="tel:+918049527803" className="text-blue-600 font-medium hover:underline text-lg">+91 80 49527803</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Email</h3>
                                        <p className="text-zinc-500 mb-1">For quotes and general inquiries</p>
                                        <a href="mailto:info@sairamdecorators.com" className="text-blue-600 font-medium hover:underline text-lg">info@sairamdecorators.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 md:w-12 md:h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-bold text-zinc-900 mb-3">Office / Experience Center</h3>
                                        <div className="w-full h-[200px] bg-zinc-100 rounded-2xl overflow-hidden shadow-sm border border-zinc-200">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509!2d77.636065!3d12.900951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bdf1ab8f49%3A0x62e7a2618703d3fe!2sSairam%20Decorators!5e0!3m2!1sen!2sin!4v1705856000000!5m2!1sen!2sin"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-zinc-100">
                            <LeadForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
