
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PRODUCTS } from "@/lib/products";
import { ProductColorPicker } from "@/components/features/products/ProductColorPicker";

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Product Overview</h2>
                                <p className="text-zinc-600 leading-relaxed text-lg">
                                    {product.longDescription}
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-widest text-sm text-blue-600">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="font-medium text-zinc-900">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Color Picker Section */}
                            <div className="pt-4">
                                <ProductColorPicker />
                            </div>



                            <div className="pt-8 border-t border-zinc-100 space-y-6">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <h4 className="font-heading font-bold text-xl text-zinc-900 mb-2">Interested in this product?</h4>
                                    <p className="text-zinc-500 mb-6">Get a custom quote tailored to your requirements.</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button size="lg" className="rounded-xl flex-1 h-14 bg-zinc-900 text-white hover:bg-zinc-800" asChild>
                                            <Link href="/contact">Get Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                        </Button>
                                        <Button size="lg" variant="outline" className="rounded-xl flex-1 h-14 border-zinc-200 hover:bg-white hover:border-blue-200 hover:text-blue-600" asChild>
                                            <a href="tel:+919902924666"><Phone className="w-4 h-4 mr-2" /> Call Us</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
