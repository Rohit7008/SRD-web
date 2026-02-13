"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SHOWCASE_COLORS = [
    {
        name: "Golden Oak",
        gradient: "linear-gradient(to bottom, #d97706, #b45309)",
        border: "#92400e",
        woodTexture: true
    },
    {
        name: "Walnut",
        gradient: "linear-gradient(to bottom, #5D4037, #3E2723)",
        border: "#271914",
        woodTexture: true
    },
    {
        name: "Grey",
        gradient: "linear-gradient(to bottom, #4b5563, #374151)",
        border: "#1f2937",
        woodTexture: false
    },
    {
        name: "Black",
        gradient: "linear-gradient(to bottom, #27272a, #09090b)",
        border: "#000000",
        woodTexture: false
    }
];

export function ColorShowcase() {
    return (
        <section className="py-12 md:py-16 bg-[#F8F7F4] overflow-hidden relative border-t border-zinc-200">
            <div className="container px-4 mx-auto relative z-10">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4 mb-4">
                            <Image src="/images/logo.png" alt="Sai Ram Decorators" width={64} height={64} className="h-12 w-auto object-contain" />
                            <div className="h-8 w-[1px] bg-zinc-200 hidden md:block" />
                            <span className="text-xl font-bold tracking-tight text-zinc-800">Sai Ram Decorators</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D2E] tracking-tight">
                            Premium Exterior Finishes
                        </h3>
                        <p className="text-zinc-600 max-w-md">
                            Explore our high-performance color laminations available for both Upvc and Aluminium window systems.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="text-left md:text-right">
                            <p className="text-lg md:text-xl text-[#0A3D2E]/70 font-medium italic">
                                Elevate Your Home Style
                            </p>
                            <div className="h-1 w-20 bg-green-600 md:ml-auto mt-2" />
                        </div>
                        <Button className="bg-[#0A3D2E] hover:bg-[#082f24] text-white rounded-full px-4 py-2 text-sm h-10 shadow-sm" asChild>
                            <Link href="/contact">
                                Get a Quote <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* The Windows Row - Compact & Professional */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-end max-w-5xl mx-auto">
                    {SHOWCASE_COLORS.map((color, index) => (
                        <motion.div
                            key={color.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div
                                className="relative w-full aspect-[1/1.8] rounded-sm shadow-xl overflow-hidden p-4 md:p-6 hover:scale-[1.02] transition-transform duration-500 group"
                                style={{
                                    background: color.gradient,
                                    border: `1px solid ${color.border}`
                                }}
                            >
                                {color.woodTexture && (
                                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                                )}

                                <div className="absolute inset-0 border-[8px] md:border-[16px] border-black/10 pointer-events-none" />

                                <div className="w-full h-full bg-[#fcfcfc] relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-white/10 opacity-60" />
                                </div>

                                {/* Handle */}
                                <div className="absolute top-[50%] -left-1 w-2 md:w-3 h-12 md:h-16 bg-gradient-to-b from-zinc-100 to-zinc-300 rounded shadow-md z-20" />
                            </div>

                            <h4 className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-900">
                                {color.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-right">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                        * Colors shown are indicative. Actual finish may vary based on lighting and texture.
                    </p>
                </div>
            </div>
        </section>
    );
}
