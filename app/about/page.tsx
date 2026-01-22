
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                        <div className="flex-1 space-y-6">
                            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm block">The Company</span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
                                Sai Ram Decorators
                            </h1>
                            <h2 className="text-xl md:text-2xl text-zinc-500 font-medium">
                                Manufacturer of UPVC, Aluminium Windows, Doors & Partitions
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full" />
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                As an independently owned Manufacturer, we are able to choose the products we manufacture to best suit our customer requirements, and our own ethos.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Authentically re-create the classical style of traditional timber windows and doors with a modern, thermally-efficient, UPVC, Aluminium window and Door system exclusively by Sai Ram Decorators.
                            </p>
                        </div>
                        <div className="flex-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
                            <Image
                                src="/images/factory.png"
                                alt="Sai Ram Decorators Factory"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Quality Assurance</h3>
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                All our products are carved out from the finest quality raw material and further tested and checked as per the industry defined standards. In addition, our products are highly praised for features like precise designs, eco-friendly nature and superior strength.
                            </p>
                            <ul className="space-y-3">
                                {["Precise Designs", "Eco-Friendly Nature", "Superior Strength", "Industry Standard Testing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        <span className="text-zinc-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h3>
                                <p className="text-zinc-600 leading-relaxed mb-8">
                                    This brochure will help you make the right decisions to suit your needs and your budget. With so many potential options, we guide you through finding the perfect architectural solution for your space.
                                </p>
                                <a href="/Sai Ram Decorator Brochure.pdf" download="Sai_Ram_Decorator_Brochure.pdf" target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button className="w-full gap-2 shadow-lg hover:shadow-xl transition-all h-12 text-lg" size="lg">
                                        <Download className="w-5 h-5" />
                                        Download Brochure
                                    </Button>
                                </a>
                            </div>
                            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                                <p className="italic text-zinc-500 text-lg text-center font-medium">
                                    &quot;Quality within the Budget...&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
