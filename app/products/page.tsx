
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
    title: "Products | Sai Ram Decorators",
    description: "Browse our complete range of Upvc and Aluminium solutions.",
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-zinc-900 pt-32 pb-12 text-white">
                <Container>
                    <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-6 transition-colors font-medium text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4">
                        Our Products
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light">
                        Explore our comprehensive range of architectural glazing solutions.
                    </p>
                </Container>
            </div>

            <Section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Upvc Windows & Doors"
                            description="Energy-efficient, noise-canceling, and durable Upvc window systems optimized for Indian weather."
                            href="/products/upvc"
                            specs={["Sound Proof", "Thermal Insulation", "Eco-Friendly"]}
                            image="/images/upvc.png"
                            priceHint="Popular"
                        />
                        <ServiceCard
                            title="Aluminium Systems"
                            description="Sleek, minimal profile aluminium windows and doors for modern architectural aesthetics."
                            href="/products/aluminium"
                            specs={["Slim Profile", "High Strength", "Premium Finish"]}
                            image="/images/aluminium.png"
                            priceHint="Premium"
                        />
                    </div>
                </Container>
            </Section>
        </div>
    );
}
