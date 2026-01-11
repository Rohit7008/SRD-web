import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

// This would typically come from a CMS or database
const SERVICES_DATA: Record<string, {
    title: string;
    description: string;
    features: string[];
    details: string;
    specs: { label: string; value: string }[];
}> = {
    "upvc-windows": {
        title: "UPVC Windows",
        description: "High-performance, energy-efficient windows designed for modern Indian homes.",
        details: "Our UPVC windows are engineered to provide superior thermal insulation, soundproofing, and durability. Made with high-quality compound materials, they resist fading, peeling, and rotting, ensuring a long-lasting pristine look with minimal maintenance.",
        features: ["Sound Proof upto 40dB", "Termite & Rust Proof", "Energy Saving", "Dust & Pollution Resistant"],
        specs: [
            { label: "Material", value: "High-grade UPVC" },
            { label: "Glass", value: "Toughened / Laminated / DGU" },
            { label: "Warranty", value: "10 Years Profile Warranty" },
            { label: "Colors", value: "White, Golden Oak, Dark Oak, Walnut" }
        ]
    },
    "aluminium-windows": {
        title: "Aluminium Systems",
        description: "Sleek, minimal profile aluminium windows offering maximum visibility.",
        details: "Experience the perfect blend of strength and aesthetics with our premium aluminium window systems. Ideal for large openings, these windows offer slim sightlines and robust performance, capable of holding heavy glass panels for expansive views.",
        features: ["Ultra-slim Profiles", "High Structural Strength", "Powder Coated Finish", "Large Span Capabilities"],
        specs: [
            { label: "Material", value: "6063 T6 Aluminium Alloy" },
            { label: "Finish", value: "Anodized / Powder Coated / PVDF" },
            { label: "Glass", value: "Single / Double Glazed" },
            { label: "Design", value: "Sliding, Casement, Lift & Slide" }
        ]
    },
    "commercial-glazing": {
        title: "Commercial Glazing",
        description: "Advanced structural glazing solutions for modern office complexes.",
        details: "We provide end-to-end facade solutions including curtain walls, structural glazing, and spider glazing systems. Our designs ensure safety, energy efficiency, and a striking corporate identity for your building.",
        features: ["Structural Glazing", "Curtain Wall Systems", "Spider Fitting", "ACP Cladding"],
        specs: [
            { label: "Glass Type", value: "High Performance Low-E" },
            { label: "Structure", value: "Aluminum / Steel Reinforced" },
            { label: "Safety", value: "Laminated Toughened Glass" },
            { label: "Compliance", value: "National Building Code" }
        ]
    },
    "doors": {
        title: "Door Solutions",
        description: "Secure, stylish, and durable doors for every entrance and room.",
        details: "From grand main entrances to space-saving sliding balcony doors, our range covers it all. Choose from UPVC, Aluminium, or Composite materials designed to provide security without compromising on style.",
        features: ["Multi-point Locking System", "Weather Sealed", "Custom Designs", "High Impact Resistance"],
        specs: [
            { label: "Types", value: "Casement, Sliding, Fold & Slide" },
            { label: "Security", value: "Multipoint Locking" },
            { label: "Threshold", value: "Low / Flush Threshold Options" },
            { label: "Mesh", value: "SS 304 Mesh Integration Available" }
        ]
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const data = SERVICES_DATA[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="pt-32">
            {/* Header */}
            <section className="bg-zinc-900 text-white py-12 md:py-20 border-b border-zinc-800">
                <Container>
                    <Link href="/services" className="inline-flex items-center text-zinc-400 hover:text-white mb-6 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{data.title}</h1>
                    <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">{data.description}</p>
                </Container>
            </section>

            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Placeholder Image */}
                        <div className="aspect-video bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 border border-zinc-200">
                            Product Image Gallery ({slug})
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-zinc-900 mb-4">Overview</h2>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                {data.details}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-zinc-900 mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 border border-zinc-100 bg-zinc-50 rounded-xl">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-zinc-900">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-zinc-900 mb-6">Technical Specifications</h2>
                            <div className="border border-zinc-200 rounded-xl overflow-hidden">
                                {data.specs.map((item, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row border-b last:border-0 border-zinc-200">
                                        <div className="w-full sm:w-1/3 bg-zinc-50 p-4 font-medium text-zinc-900 flex items-center border-b sm:border-b-0 sm:border-r border-zinc-200">
                                            {item.label}
                                        </div>
                                        <div className="w-full sm:w-2/3 p-4 text-zinc-600">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl">
                                <h3 className="text-xl font-bold font-heading mb-2">Get a Quote</h3>
                                <p className="text-zinc-400 text-sm mb-6">Fill out the form below to get a custom estimation for your project.</p>
                                {/* We can reuse LeadForm but maybe a simplified version or just call CTA */}
                                <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100 mb-4" size="lg">Call Now</Button>
                                <div className="text-center text-xs text-zinc-500">
                                    or +91 98765 43210
                                </div>
                            </div>

                            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                    <span className="font-bold text-zinc-900">10 Year Warranty</span>
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    All our {data.title} installations come with a comprehensive service warranty for your peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom CTA */}
            <Section className="bg-blue-600 text-white mt-12">
                <Container className="text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">Ready to start your project?</h2>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-zinc-100">Book Free Site Visit</Button>
                </Container>
            </Section>
        </div>
    );
}
