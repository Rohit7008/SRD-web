"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
    images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 group shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                    <Image
                        src={src}
                        alt={`Project Image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </motion.div>
            ))}
        </div>
    );
}
