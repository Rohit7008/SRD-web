
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectList } from "@/components/features/projects/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects | Sai Ram Decorators",
    description: "View our portfolio of residential and commercial projects showcasing our UPVC and Aluminium window installations in Bangalore.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-zinc-900 pt-32 pb-16 text-white">
                <Container>
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
                        Explore our diverse portfolio of residential and commercial projects, showcasing our expertise in UPVC and Aluminium solutions.
                    </p>
                </Container>
            </div>

            <Section className="bg-white py-20">
                <Container>
                    <ProjectList />
                </Container>
            </Section>
        </div>
    );
}
