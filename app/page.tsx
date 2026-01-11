"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/features/ServiceCard";
import { HeroSection } from "@/components/features/home/HeroSection";
import { MotionContainer } from "@/components/ui/motion-container";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />



      {/* Services Section */}
      <Section id="services" className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <MotionContainer className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 mb-4 tracking-tight leading-tight">
                Engineered for <span className="italic font-serif">Excellence</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                We deliver comprehensive architectural solutions, from precision-engineered windows to complete interior transformations.
              </p>
            </MotionContainer>
            <Button variant="outline" className="hidden md:flex rounded-full px-8 h-12" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title="UPVC Windows"
              description="Energy-efficient, noise-canceling, and durable UPVC window systems optimized for Indian weather."
              href="/services/upvc-windows"
              specs={["Sound Proof", "Weather Resistant", "Low Maintenance"]}
              priceHint="Most Popular"
              image="/images/upvc.png"
            />
            <ServiceCard
              title="Aluminium Systems"
              description="Sleek, minimal profile aluminium windows and doors for modern architectural aesthetics."
              href="/services/aluminium-windows"
              specs={["Slim Profile", "High Strength", "Premium Finish"]}
              priceHint="Premium"
              image="/images/aluminium.png"
            />
            <ServiceCard
              title="Commercial Glazing"
              description="Structural glazing and facade solutions for office buildings and commercial complexes."
              href="/services/commercial-glazing"
              specs={["Structural Strength", "Modern Look", "Safety Glass"]}
              priceHint="B2B Ready"
              image="/images/commercial.png"
            />
            <ServiceCard
              title="Door Solutions"
              description="Secure and stylish main doors, french doors, and sliding systems for every need."
              href="/services/doors"
              specs={["High Security", "Custom Design", "Durable"]}
              image="/images/doors.png"
            />
            <ServiceCard
              title="Interior Decor"
              description="End-to-end interior execution including false ceilings, wall paneling and custom furniture."
              href="/services/interiors"
              specs={["Turnkey", "False Ceilings", "Wall Paneling"]}
              image="/images/interiors.png"
            />
            {/* CTA Card for Service Grid */}
            <div className="rounded-[2.5rem] border-2 border-dashed border-zinc-200 bg-zinc-50 flex flex-col items-center justify-center p-10 text-center h-full min-h-[400px] transition-colors hover:bg-zinc-100 hover:border-zinc-300">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3">Need something custom?</h3>
              <p className="text-zinc-500 mb-8 max-w-xs text-sm leading-relaxed">We specialize in bespoke architectural solutions tailored to your unique requirements.</p>
              <Button className="rounded-full px-8 h-12" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 md:hidden pb-12">
            <Button variant="outline" className="w-full h-14 rounded-2xl text-base font-bold" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Us / Value Proposition */}
      <Section className="bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative h-[450px] lg:h-[600px] group order-2 lg:order-1">
              <div className="absolute inset-4 border border-zinc-300 rounded-[2rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative h-full w-full bg-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/factory.png"
                  alt="Sai Ram Decorators Process"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm block">The Sai Ram Advantage</span>
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 tracking-tight leading-tight">
                  Crafting spaces that <span className="italic font-serif">Inspire</span>
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  We don&apos;t just clear orders; we partner with you to deliver spaces that inspire. Our commitment to quality is backed by over a decade of excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Precision Engineering", description: "Top-grade materials & German CNC machinery." },
                  { title: "Transparent Pricing", description: "Detailed quotations with no hidden costs." },
                  { title: "Expert Installation", description: "Certified installers ensure lifelong performance." },
                  { title: "Post-Sales Support", description: "Dedicated team for hassle-free maintenance." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group pointer-events-auto"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-900 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors shrink-0">
                      <CheckCircle2 className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 mb-0.5">{item.title}</h3>
                      <p className="text-zinc-500 text-xs">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Luxury Interior"
            fill
            className="object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-black/95" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
        </div>

        <Container className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-heading font-medium text-white tracking-tight leading-tight">
              Ready to <span className="italic text-white/80 font-serif">transform</span> <br className="hidden md:block" /> your space?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Book a consultation with our design experts today. We'll help you create a home that reflects your unique style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-lg bg-white text-zinc-900 hover:bg-zinc-200 shadow-xl rounded-2xl md:rounded-full transition-all active:scale-95 font-bold">
                Book Free Site Visit
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-12 text-lg bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-zinc-900 rounded-2xl md:rounded-full backdrop-blur-md transition-all active:scale-95 font-bold">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
