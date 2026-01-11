import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32">
            <Section className="bg-zinc-50 border-b border-zinc-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">Get in Touch</span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-zinc-900">
                                Let&apos;s discuss your dream project.
                            </h1>
                            <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
                                Whether you have a specific requirement or just need advice on glazing and interiors, our team is here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Call Us</h3>
                                        <p className="text-zinc-500 mb-1">Mon-Sat from 9am to 7pm</p>
                                        <a href="tel:+919876543210" className="text-blue-600 font-medium hover:underline text-lg">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Email</h3>
                                        <p className="text-zinc-500 mb-1">For quotes and general inquiries</p>
                                        <a href="mailto:hello@sairamdecorators.com" className="text-blue-600 font-medium hover:underline text-lg">hello@sairamdecorators.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-1">Office / Experience Center</h3>
                                        <address className="text-zinc-500 not-italic leading-relaxed">
                                            123, Tech Park Road, Whitefield,<br />
                                            Bengaluru, Karnataka 560066
                                        </address>
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

            <Section>
                <Container>
                    {/* Map Placeholder */}
                    <div className="w-full h-[400px] bg-zinc-200 rounded-3xl flex items-center justify-center text-zinc-500 font-medium text-lg">
                        Google Maps Embed
                    </div>
                </Container>
            </Section>
        </div>
    );
}
