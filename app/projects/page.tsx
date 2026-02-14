
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectGallery } from "@/components/features/projects/ProjectGallery";
import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
    title: "Our Work & Projects | Sai Ram Decorators",
    description: "Browse our extensive portfolio of Upvc windows, aluminium partitions, and interior solutions installed across Bangalore.",
};

export default function ProjectsPage() {
    // Read images from public/projects
    const projectsDir = path.join(process.cwd(), "public/projects");
    let images: string[] = [];

    try {
        if (fs.existsSync(projectsDir)) {
            const files = fs.readdirSync(projectsDir);
            images = files
                .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
                .map((file) => `/projects/${file}`);
        }
    } catch (error) {
        console.error("Error reading project images:", error);
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="bg-zinc-900 pt-32 pb-16 text-white">
                <Container>
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
                        Explore our diverse portfolio of residential and commercial projects, showcasing our expertise in Upvc and Aluminium solutions.
                    </p>
                </Container>
            </div>

            <Section className="bg-white py-20">
                <Container>
                    {images.length > 0 ? (
                        <ProjectGallery images={images} />
                    ) : (
                        <div className="text-center text-zinc-500 py-12">
                            No project images found at the moment.
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
}
