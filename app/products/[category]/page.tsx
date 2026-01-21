
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PRODUCTS } from "@/lib/products";

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ category: string }> }) {
    const params = await paramsPromise;
    const categoryName = params.category === "upvc" ? "UPVC Windows & Doors" :
        params.category === "aluminium" ? "Aluminium Systems" : null;

    if (!categoryName) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: `${categoryName} | Sai Ram Decorators`,
        description: `Explore our range of ${categoryName}.`,
    };
}

export default async function CategoryPage({ params: paramsPromise }: { params: Promise<{ category: string }> }) {
    const params = await paramsPromise;
    const categoryKey = params.category;
    const categoryProducts = PRODUCTS[categoryKey];

    if (!categoryProducts) {
        return notFound();
    }

    const categoryName = categoryKey === "upvc" ? "UPVC Windows & Doors" : "Aluminium Systems";
    const categoryDesc = categoryKey === "upvc"
        ? "Authentically re-create the classical style of traditional timber windows with our modern, thermally-efficient UPVC systems."
        : "Strong, durable, and light material with a clean, ultra-slim frame design allowing an abundance of natural light.";

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-zinc-900 pt-24 pb-8 text-white">
                <Container>
                    <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-4 transition-colors font-medium text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-3">
                        {categoryName}
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light">
                        {categoryDesc}
                    </p>
                </Container>
            </div>

            <Section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(categoryProducts).map((product) => (
                            <ServiceCard
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                href={`/products/${categoryKey}/${product.id}`}
                                image={product.image}
                                specs={product.features.slice(0, 3)}
                            />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
