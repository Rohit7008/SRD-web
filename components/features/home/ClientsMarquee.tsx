"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

// Assuming files are named client-1.png to client-9.png after processing
const clients = Array.from({ length: 9 }, (_, i) => `/clients/client-${i + 1}.png`);

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-white border-b border-zinc-100 overflow-hidden">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-600 tracking-tight">Our Trusted Partners</h2>
          </div>

          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {/* First Marquee Strip */}
            <motion.div
              className="flex gap-16 items-center flex-shrink-0 pr-16"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="relative w-32 h-20 flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* Second Marquee Strip (Immediate follower) */}
            <motion.div
              className="flex gap-16 items-center flex-shrink-0 pr-16"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="relative w-32 h-20 flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
