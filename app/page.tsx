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
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />



      {/* Products Section */}
      <Section id="services" className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <MotionContainer className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-3 block">Our Manufacturing Range</span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 mb-4 tracking-tight leading-tight">
                Premium <span className="italic font-serif">UPVC</span> & Aluminium <span className="italic font-serif">Systems</span>
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
            {/* UPVC Category */}
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-l-4 border-blue-600 pl-4">UPVC Windows & Doors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                <ServiceCard
                  title="UPVC Sliding Windows"
                  description="Traditional style with contemporary performance. Two sashes sliding horizontally."
                  href="/products/upvc/sliding-windows"
                  specs={["Smooth Glide", "Ventilation"]}
                  image="/images/upvc_sliding_window_1769009483560.png"
                />
                <ServiceCard
                  title="UPVC Fixed Windows"
                  description="Great way of bringing light and views into a space. Affordable and energy efficient."
                  href="/products/upvc/fixed-windows"
                  specs={["Max Light", "Affordable"]}
                  image="/images/upvc_fixed_window_view_1769016648166.png"
                />
                <ServiceCard
                  title="UPVC Casement"
                  description="Sashes open out on special friction hinges to stay open in any position."
                  href="/products/upvc/casement-windows"
                  specs={["Friction Hinges", "Customizable"]}
                  image="/images/upvc.png"
                />
                <ServiceCard
                  title="UPVC French Windows"
                  description="Two fully opening sashes with a floating mullion and excellent thermal insulation."
                  href="/products/upvc/french-windows"
                  specs={["Thermal Insulation", "Sound Proof"]}
                  image="/images/upvc_french_doors_1769009826593.png"
                />
                <ServiceCard
                  title="UPVC Sliding Doors"
                  description="Classic good looks with a maximum glass area which optimizes visibility."
                  href="/products/upvc/sliding-doors"
                  specs={["Max Visibility", "Space Saving"]}
                  image="/images/upvc_sliding_patio_door_1769017888626.png"
                />
                <ServiceCard
                  title="French Doors"
                  description="Charming addition to any home. Extensive opening allows unrestricted access."
                  href="/products/upvc/french-doors"
                  specs={["Garden Access", "Elegant"]}
                  image="/images/french_door_garden_1769016541444.png"
                />
                <ServiceCard
                  title="Single Leaf Doors"
                  description="Suitable for domestic and light commercial use. Compatible with wide range of hardware."
                  href="/products/upvc/single-leaf-doors"
                  specs={["Versatile", "Secure", "Modern"]}
                  image="/images/single_leaf_door_1769016600646.png"
                />
                <ServiceCard
                  title="Double Leaf Doors"
                  description="Double sash for larger clear openings. Available in swing or out swing option."
                  href="/products/upvc/double-leaf-doors"
                  specs={["Large Opening", "Heavy Duty"]}
                  image="/images/double_leaf_door_1769016625650.png"
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
                />
                <ServiceCard
                  title="Aluminium Fixed"
                  description="Admit daylight in acceptable and consistent quantities while maintaining temperature."
                  href="/products/aluminium/fixed-windows"
                  specs={["Daylight", "Temp Control"]}
                  image="/images/upvc_fixed_window_view_1769016648166.png"
                />
                <ServiceCard
                  title="Aluminium Casement"
                  description="Strong, durable, and light material with a clean, ultra-slim frame design."
                  href="/products/aluminium/casement-windows"
                  specs={["Slim Frame", "Durable"]}
                  image="/images/aluminium_casement_window_1769010141339.png"
                />
                <ServiceCard
                  title="Combination Windows"
                  description="Integration of sliding, casement, and fixed windows. Versatile designs."
                  href="/products/aluminium/combination-windows"
                  specs={["Versatile", "Custom Design"]}
                  image="/images/combination_window_1769016525414.png"
                />
                <ServiceCard
                  title="Aluminium Sliding Door"
                  description="Give you more glass and less frame which results in more light being let through."
                  href="/products/aluminium/sliding-doors"
                  specs={["More Glass", "Brighter Rooms"]}
                  image="/images/aluminium_sliding_window_modern_1769016564516.png"
                />
                <ServiceCard
                  title="Double Leaf Front Door"
                  description="Suit wider door openings. Two door panels which swing outwards."
                  href="/products/aluminium/double-leaf-front-doors"
                  specs={["Wider Openings", "Outward Swing"]}
                  image="/images/double_leaf_door_1769016625650.png"
                />
                <ServiceCard
                  title="Toughened Glass"
                  description="Glass partitions for offices or homes to split spaces while utilizing light."
                  href="/products/aluminium/partitions"
                  specs={["Modern Office", "Light & Space"]}
                  image="/images/toughened_glass_partition_1769016480903.png"
                />
                <ServiceCard
                  title="Glass & Board"
                  description="Aluminium frames with glass panes or particle board. Ideal for partitions."
                  href="/products/aluminium/board-partitions"
                  specs={["Privacy", "Office Cubicles"]}
                  image="/images/glass_particle_board_partition_1769016502970.png"
                />
              </div>
            </div>
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
