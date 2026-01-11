"use client";

import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionContainer } from "@/components/ui/motion-container";
import { LeadFormModal } from "@/components/forms/LeadFormModal";
import { useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
    const [modalOpen, setModalOpen] = useState(false);

    const scrollToContent = () => {
        const nextSection = document.getElementById('services');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-16 md:pt-0">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Interior Design"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Slight overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            <Container className="relative z-10 text-center text-white h-full flex flex-col items-center justify-center py-20 px-6">
                <MotionContainer delay={0.2} className="space-y-10 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-100 mb-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Premium Architectural Glazing
                        </motion.div>

                        <h1 className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-7xl font-heading font-medium tracking-tight">
                            <span className="block mb-2">Elevate Your</span>
                            <span className="block italic font-serif text-white/90">Living Space</span>
                        </h1>

                        <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-200 font-light leading-relaxed px-4 md:px-0 opacity-90">
                            Bespoke UPVC windows, aluminium systems, and interior solutions for the modern home.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                        <Button
                            size="lg"
                            onClick={() => setModalOpen(true)}
                            className="w-full sm:w-auto h-14 md:h-16 px-10 rounded-2xl md:rounded-full bg-white text-black hover:bg-zinc-200 text-lg font-bold tracking-tight transition-all active:scale-95 shadow-xl"
                        >
                            Book Consultation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-14 md:h-16 px-10 rounded-2xl md:rounded-full border-2 border-white/40 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white text-lg font-bold backdrop-blur-md transition-all active:scale-95"
                        >
                            View Collection
                        </Button>
                    </div>

                    {/* Stats Grid - App style cards on mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-12 pt-8 w-full max-w-4xl">
                        {[
                            { label: "Years Exp.", value: "15+" },
                            { label: "Projects", value: "500+" },
                            { label: "On-Time", value: "100%" },
                            { label: "Location", value: "Bengaluru" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-0 md:bg-transparent md:border-0 md:rounded-none text-center group transition-colors hover:bg-white/10"
                            >
                                <div className="text-2xl md:text-4xl font-serif italic text-white mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </MotionContainer>
            </Container>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={scrollToContent}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-colors"
            >
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.button>

            <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
