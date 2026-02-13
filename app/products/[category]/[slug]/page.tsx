
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PRODUCTS } from "@/lib/products";
import { ProductColorPicker } from "@/components/features/products/ProductColorPicker";
import { ProductView } from "@/components/features/products/ProductView";

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ category: string; slug: string }> }) {
    const params = await paramsPromise;
    const category = PRODUCTS[params.category];
    const product = category ? category[params.slug] : null;

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.title} | Sai Ram Decorators`,
        description: product.description,
    };
}

export default async function ProductPage({ params: paramsPromise }: { params: Promise<{ category: string; slug: string }> }) {
    const params = await paramsPromise;
    const category = PRODUCTS[params.category];
    const product = category ? category[params.slug] : null;

    if (!product) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header/Breadcrumb Area */}
            {/* Header/Breadcrumb Area */}
            <div className="bg-zinc-900 pt-24 pb-8 text-white">
                <Container>
                    <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-4 transition-colors font-medium text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-3">
                        {product.title}
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light">
                        {product.description}
                    </p>
                </Container>
            </div>



            <Section className="py-12 md:py-20">
                <Container>
                    <ProductView product={product} />
                </Container>
            </Section>
        </div>
    );
}
