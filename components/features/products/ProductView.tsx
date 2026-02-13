"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductColorPicker } from "@/components/features/products/ProductColorPicker";
import { PRODUCT_COLORS } from "@/lib/products";
import type { Product } from "@/lib/products";

interface ProductViewProps {
    product: Product;
}

export function ProductView({ product }: ProductViewProps) {
    const [activeImage, setActiveImage] = useState(product.image);
    const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0]);

    const handleColorSelect = (color: typeof PRODUCT_COLORS[0]) => {
        setSelectedColor(color);
        if (product.colorImages) {
            const key = color.name as keyof typeof product.colorImages;
            if (product.colorImages[key]) {
                setActiveImage(product.colorImages[key]!);
            }
        }
    };

    const hideColorPicker = ["acp-cladding", "shower-cubicles", "frameless-glass-doors", "structural-glazing"].includes(product.id);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
                <Image
                    src={activeImage}
                    alt={product.title}
                    fill
                    className="object-cover transition-all duration-500"
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
                {!hideColorPicker && (
                    <div className="pt-4">
                        <ProductColorPicker
                            selectedColor={selectedColor}
                            onColorSelect={handleColorSelect}
                        />
                    </div>
                )}

                <div className="pt-8 border-t border-zinc-100 space-y-6">
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="font-heading font-bold text-xl text-zinc-900 mb-2">Interested in this product?</h4>
                        <p className="text-zinc-500 mb-6">Get a custom quote tailored to your requirements.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="rounded-xl flex-1 h-14 bg-zinc-900 text-white hover:bg-zinc-800" asChild>
                                <Link href="/contact">Get Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-xl flex-1 h-14 border-zinc-200 hover:bg-white hover:border-blue-200 hover:text-blue-600" asChild>
                                <a href="tel:+919019788904"><Phone className="w-4 h-4 mr-2" /> Call Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
