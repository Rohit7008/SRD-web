import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    return (
        <div className="pt-32">
            <Section className="bg-zinc-900 text-white py-20">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        From precision-engineered windows to complete interior transformations, explore our range of architectural solutions.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="UPVC Windows"
                            description="High-performance UPVC windows designed for noise reduction, thermal insulation, and weather resistance."
                            href="/services/upvc-windows"
                            specs={["Sound Proof", "Energy Efficient", "10 Year Warranty"]}
                            priceHint="Trending"
                        />
                        <ServiceCard
                            title="Aluminium Windows"
                            description="Minimalist slim-profile aluminium windows offering maximum visibility and structural strength."
                            href="/services/aluminium-windows"
                            specs={["Slim Profile", "Durable", "Modern Look"]}
                        />
                        <ServiceCard
                            title="Commercial Glazing"
                            description="Structural glazing, curtain walls, and spider glazing for commercial buildings and offices."
                            href="/services/commercial-glazing"
                            specs={["Facade Systems", "Safety Glass", "Spider Fitting"]}
                            priceHint="B2B"
                        />
                        <ServiceCard
                            title="Door Solutions"
                            description="Main doors, balcony doors, and french doors available in UPVC, Aluminium, and Composite materials."
                            href="/services/doors"
                            specs={["High Security", "Multi-point Lock", "Custom Design"]}
                        />
                        <ServiceCard
                            title="Interior Execution"
                            description="Turnkey interior solutions including false ceilings, wall paneling, modular kitchens and wardrobes."
                            href="/services/interiors"
                            specs={["Turnkey", "Modular", "False Ceiling"]}
                        />
                        <ServiceCard
                            title="Facade Systems"
                            description="Advanced facade engineered solutions for modern architectural requirements."
                            href="/services/facade"
                            specs={["Cladding", "Louver", "ACP Sheets"]}
                        />
                    </div>

                    <div className="mt-16 text-center bg-zinc-50 p-10 rounded-3xl border border-zinc-200">
                        <h2 className="text-2xl font-heading font-bold text-zinc-900 mb-4">Looking for a custom solution?</h2>
                        <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                            We understand that every project is unique. Contact our design experts for a tailored consultation.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Get Custom Quote</Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
