"use client";


import Image from "next/image";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/features/ServiceCard";
import { HeroSection } from "@/components/features/home/HeroSection";
import { MotionContainer } from "@/components/ui/motion-container";
import { FAQSection } from "@/components/features/home/FAQSection";
import { ClientsMarquee } from "@/components/features/home/ClientsMarquee";
import { ColorShowcase } from "@/components/features/home/ColorShowcase";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {/* Hero Section */}
      <HeroSection />



      {/* Products Section */}
      <Section id="services" className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <MotionContainer className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-3 block">Our Manufacturing Range</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 mb-4 tracking-tight leading-tight">
                Premium <span className="italic font-serif">Upvc</span> & Aluminium <span className="italic font-serif">Systems</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                We manufacture high-quality, eco-friendly, and precise window and door systems tailored to your needs.
              </p>
            </MotionContainer>

            <div className="flex-shrink-0">
              <Button size="lg" className="rounded-xl h-12 bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg" asChild>
                <a href="/Sai Ram Decorator Brochure.pdf" download="Sai_Ram_Decorators_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>


          <div className="space-y-16">
            {/* Upvc Category */}
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-l-4 border-blue-600 pl-4">Upvc Windows & Doors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                <ServiceCard
                  title="Upvc Sliding Windows"
                  description="Traditional style with contemporary performance. Two sashes sliding horizontally."
                  href="/products/upvc/sliding-windows"
                  specs={["Smooth Glide", "Ventilation"]}
                  image="/images/upvc_sliding_window_golden_oak.png"
                  id="sliding-windows"
                />
                <ServiceCard
                  title="Upvc Fixed Windows"
                  description="Great way of bringing light and views into a space. Affordable and energy efficient."
                  href="/products/upvc/fixed-windows"
                  specs={["Max Light", "Affordable"]}
                  image="/images/upvc_fixed_window_golden_oak.png"
                  id="fixed-windows"
                />
                <ServiceCard
                  title="Upvc Casement"
                  description="Sashes open out on special friction hinges to stay open in any position."
                  href="/products/upvc/casement-windows"
                  specs={["Friction Hinges", "Customizable"]}
                  image="/images/upvc_casement_window_grey_open.png"
                  id="casement-windows"
                />
                <ServiceCard
                  title="Upvc French Windows"
                  description="Two fully opening sashes with a floating mullion and excellent thermal insulation."
                  href="/products/upvc/french-windows"
                  specs={["Thermal Insulation", "Sound Proof"]}
                  image="/images/upvc_casement_window_black.png"
                  id="french-windows"
                />
                <ServiceCard
                  title="Upvc Sliding Doors"
                  description="Classic good looks with a maximum glass area which optimizes visibility."
                  href="/products/upvc/sliding-doors"
                  specs={["Max Visibility", "Space Saving"]}
                  image="/images/upvc_sliding_window_golden_oak.png"
                  id="sliding-doors"
                />

                <ServiceCard
                  title="Upvc Foldable Sliding Windows"
                  description="Innovative foldable mechanism for maximum openness."
                  href="/products/upvc/foldable-sliding-windows"
                  specs={["Max Openness", "Bi-Fold", "Seamless"]}
                  image="/images/upvc_sliding_window_wall_nut.png"
                  id="foldable-sliding-windows"
                />
                <ServiceCard
                  title="Upvc Partitions"
                  description="Sleek and durable partitions for modern office and home interiors."
                  href="/products/upvc/upvc-partitions"
                  specs={["Sound Insulation", "Modern Aesthetic"]}
                  image="/images/upvc_partitions_1769899302276.png"
                  id="upvc-partitions"
                />
              </div>
            </div>


            {/* Aluminium Category */}
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-l-4 border-zinc-600 pl-4">Aluminium Systems</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                <ServiceCard
                  title="Aluminium Sliding"
                  description="Uniquely designed to carry a wide range of glass thickness for sound reduction."
                  href="/products/aluminium/sliding-windows"
                  specs={["Sound Reduction", "Heavy Duty"]}
                  image="/images/aluminium_sliding_window_modern_1769016564516.png"
                  id="sliding-windows"
                />
                <ServiceCard
                  title="Aluminium Fixed"
                  description="Admit daylight in acceptable and consistent quantities while maintaining temperature."
                  href="/products/aluminium/fixed-windows"
                  specs={["Daylight", "Temp Control"]}
                  image="/images/upvc_fixed_window_view_1769016648166.png"
                  id="fixed-windows"
                />
                <ServiceCard
                  title="Shower Cubicles"
                  description="Luxury glass shower enclosures for modern bathrooms with watertight execution."
                  href="/products/aluminium/shower-cubicles"
                  specs={["Watertight", "Elegant Design"]}
                  image="/images/shower_cubical_1769899677610.png"
                  id="shower-cubicles"
                />
                <ServiceCard
                  title="Combination Windows"
                  description="Integration of sliding, casement, and fixed windows. Versatile designs."
                  href="/products/aluminium/combination-windows"
                  specs={["Versatile", "Custom Design"]}
                  image="/images/upvc_sliding_window_black.png"
                  id="combination-windows"
                />
                <ServiceCard
                  title="Aluminium Sliding Door"
                  description="Give you more glass and less frame which results in more light being let through."
                  href="/products/aluminium/sliding-doors"
                  specs={["More Glass", "Brighter Rooms"]}
                  image="/images/aluminium_sliding_window_modern_1769016564516.png"
                  id="sliding-doors"
                />
                <ServiceCard
                  title="Structural Glazing"
                  description="Seamless glass facades for commercial buildings. Flush glass surfaces."
                  href="/products/aluminium/structural-glazing"
                  specs={["Seamless", "Modern Facade"]}
                  image="/images/structural_glazing_1769899627474.png"
                  id="structural-glazing"
                />
                <ServiceCard
                  title="Frameless Glass Door"
                  description="Elegant and minimal glass doors for a premium look with stainless steel handles."
                  href="/products/aluminium/frameless-glass-doors"
                  specs={["Minimalist", "High Durability"]}
                  image="/images/frameless_glass_door_1769899641320.png"
                  id="frameless-glass-doors"
                />
                <ServiceCard
                  title="Aluminium Partitions"
                  description="Versatile partitioning systems for modern workspaces. Privacy and openness."
                  href="/products/aluminium/aluminium-partitions"
                  specs={["Flexible", "Office Ready"]}
                  image="/images/aluminium_partitions_1769899659115.png"
                  id="aluminium-partitions"
                />
                <ServiceCard
                  title="ACP Cladding"
                  description="Aluminum Composite Panels for modern building exteriors. Weather protection."
                  href="/products/aluminium/acp-cladding"
                  specs={["Weather Proof", "Modern Look"]}
                  image="/images/acp_cladding_real_1769899993594.png"
                  id="acp-cladding"
                />
              </div>
            </div>

            {/* Color Showcase Banner - Moved here */}
            <ColorShowcase />
          </div>
        </Container>
      </Section>


      {/* Why Us / Value Proposition */}
      <Section className="bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative h-[450px] lg:h-[600px] group order-2 lg:order-1">
              <div className="absolute inset-4 border border-blue-200 rounded-[2rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative h-full w-full bg-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/factory.png"
                  alt="Sai Ram Decorators Manufacturing"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm block">The Factory Direct Advantage</span>
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 tracking-tight leading-tight">
                  Premium Quality, <span className="italic font-serif">Honest Pricing</span>
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  We manufacture everything in-house at our facility in Bommanahalli. This means you get custom sizes, strict quality control, and better prices by cutting out the dealer margin.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "No Middlemen Markup", description: "Save 20-30% by buying directly from the manufacturer." },
                  { title: "German Precision Machinery", description: "Automated fabrication for perfect 90-degree joints." },
                  { title: "10-Year Warranty", description: "Direct manufacturer support without third-party hassles." },
                  { title: "15-Day Delivery", description: "Controlled timelines ensuring on-time project completion." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all group pointer-events-auto"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
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


      <ClientsMarquee />
      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta_background_luxury_interior_1769018407384.png"
            alt="Luxury Interior Transformation"
            fill
            className="object-cover opacity-60 scale-105"
          />
          {/* Gradient Overlay for vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-zinc-900/80 to-black/90" />
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
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Book a consultation with our design experts today. We&apos;ll help you create a home that reflects your unique style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-lg bg-white text-zinc-900 hover:bg-zinc-200 shadow-xl rounded-2xl md:rounded-full transition-all active:scale-95 font-bold">
                Book Free Site Visit
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div >
  );
}
