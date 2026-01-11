"use client"

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder data
const PROJECTS = [
    {
        id: 1,
        title: "Luxury Villa Glazing",
        category: "Residential",
        location: "Whitefield, Bengaluru",
        image: "/images/hero.png",
        stats: "2000 sq.ft UPVC",
        year: "2024"
    },
    {
        id: 2,
        title: "Tech Park Facade",
        category: "Commercial",
        location: "Electronic City, Bengaluru",
        image: "/images/hero.png",
        stats: "Structural Glazing",
        year: "2023"
    },
    {
        id: 3,
        title: "Modern Apartment Complex",
        category: "Residential",
        location: "Hebbal, Bengaluru",
        image: "/images/hero.png",
        stats: "500+ Windows",
        year: "2023"
    },
    {
        id: 4,
        title: "Corporate Office Interiors",
        category: "Interiors",
        location: "Indiranagar, Bengaluru",
        image: "/images/hero.png",
        stats: "Turnkey Execution",
        year: "2024"
    }
];

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            {/* Cinematic Header */}
            <Section className="bg-zinc-900 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 opacity-50" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 max-w-3xl"
                    >
                        <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Portfolio</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-none">
                            Our <span className="italic font-serif text-white/80">Legacy</span> in Glass
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                            A showcase of our finest work in architectural glazing and interior solutions across Bengaluru.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container>
                    {/* Filter Tabs - App style */}
                    <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                        {["All", "Residential", "Commercial", "Interiors"].map((filter, i) => (
                            <button
                                key={filter}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-bold transition-all active:scale-95 ${i === 0 ? 'bg-zinc-900 text-white shadow-lg' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-zinc-100 rounded-[2rem] overflow-hidden relative mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <div className="absolute inset-0 bg-zinc-200 transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <Badge variant="secondary" className="bg-white/95 backdrop-blur-md text-zinc-900 font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 border-none shadow-sm rounded-full">
                                            {project.category}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-zinc-900/90 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 border-none shadow-sm rounded-full">
                                            {project.year}
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="w-12 h-12 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-2xl">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 px-2">
                                    <h3 className="text-2xl font-heading font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-zinc-400 group-hover:text-zinc-600 transition-colors">
                                        <p className="flex items-center text-sm font-bold uppercase tracking-widest leading-none">
                                            <MapPin className="w-4 h-4 mr-2" /> {project.location}
                                        </p>
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                                        <p className="text-sm font-bold uppercase tracking-widest leading-none">
                                            {project.stats}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 text-center space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-heading font-bold text-zinc-900">Want to see more?</h2>
                            <p className="text-zinc-500 max-w-md mx-auto">Get access to our full technical portfolio and case studies for your specific project type.</p>
                        </div>
                        <Button className="h-16 px-10 rounded-2xl text-lg font-bold shadow-xl transition-all active:scale-95">
                            Request Full Portfolio
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
