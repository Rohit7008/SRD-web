import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle2, Trophy, Users, Wrench } from "lucide-react";
import Image from "next/image"; // Placeholder usage

export default function WhyUsPage() {
    return (
        <div className="pt-32">
            <Section className="bg-zinc-50 border-b border-zinc-200 py-20">
                <Container className="text-center">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">About Our Company</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-zinc-900">
                        Built on Trust,<br /> Engineered for Perfection.
                    </h1>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        Sai Ram Decorators has been setting the benchmark for architectural glazing and premium interiors in Bengaluru for over 15 years.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-zinc-900">Our Story</h2>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                Founded in 2010, we started as a small team of fabricators with a vision to bring European-standard window systems to Indian homes. Today, we are a full-service architectural solutions provider, trusted by over 500 homeowners and top architects.
                            </p>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                We believe that windows and interiors are not just functional elements but key drivers of a building&apos;s comfort, energy efficiency, and aesthetic appeal.
                            </p>
                        </div>
                        <div className="bg-zinc-100 rounded-3xl aspect-square relative overflow-hidden shadow-xl border border-zinc-200">
                            <Image
                                src="/images/factory.png"
                                alt="Sai Ram Decorators Manufacturing Facility"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-zinc-900 text-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3">Unmatched Quality</h3>
                            <p className="text-zinc-400">We source only the highest grade UPVC and Aluminium profiles, certified for durability and performance.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3">Expert Team</h3>
                            <p className="text-zinc-400">No freelancers. Our in-house team of 50+ skilled technicians ensures consistent quality.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                                <Wrench className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3">Lifetime Support</h3>
                            <p className="text-zinc-400">We don&apos;t disappear after installation. Enjoy 10-year warranty and dedicated service support.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {["Transparency", "Punctuality", "Innovation", "Customer First"].map((val) => (
                            <div key={val} className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl bg-zinc-50">
                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-zinc-900">{val}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
