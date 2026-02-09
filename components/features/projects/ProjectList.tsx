"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Luxury Villa",
        location: "Indiranagar, Bangalore",
        description: "Complete UPVC fenestration solution for a modern luxury villa.",
        image: "/images/hero_luxury_home_1769009357122.png",
    },
    {
        title: "Corporate Office Hub",
        location: "Whitefield, Bangalore",
        description: "Frameless glass partitions and aluminium glazing systems.",
        image: "/images/toughened_glass_partition_1769016480903.png",
    },
    {
        title: "Modern Apartment Complex",
        location: "HSR Layout, Bangalore",
        description: "High-performance aluminium sliding windows for 50+ units.",
        image: "/images/aluminium_sliding_window_modern_1769016564516.png",
    },
    {
        title: "Garden Conservatory",
        location: "Koramangala, Bangalore",
        description: "Elegant UPVC French doors opening to a landscaped garden.",
        image: "/images/french_door_garden_1769016541444.png",
    },
    {
        title: "Tech Park Partitions",
        location: "Electronic City, Bangalore",
        description: "Acoustic glass and particle board partitions for meeting rooms.",
        image: "/images/glass_particle_board_partition_1769016502970.png",
    },
    {
        title: "Premium Residence",
        location: "Jayanagar, Bangalore",
        description: "Custom double leaf entrance doors and fixed glazing.",
        image: "/images/double_leaf_door_1769016625650.png",
    }
];

export function ProjectList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <span className="text-xs font-medium bg-blue-600 px-2 py-1 rounded-md mb-2 inline-block">
                                {project.location}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
