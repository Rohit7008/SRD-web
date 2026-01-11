import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const STEPS = [
    {
        id: "01",
        title: "Consultation & Measurement",
        description: "We visit your site to understand your requirements, take precise measurements, and discuss design possibilities."
    },
    {
        id: "02",
        title: "Design & Quotation",
        description: "Our team creates a tailored plan with material samples and provides a transparent, itemized quotation."
    },
    {
        id: "03",
        title: "Fabrication",
        description: "Once approved, manufacturing begins in our state-of-the-art facility using German CNC machinery for precision."
    },
    {
        id: "04",
        title: "Installation",
        description: "Our certified installation team ensures perfect fitting with minimal disruption to your schedule."
    },
    {
        id: "05",
        title: "Quality Check & Handover",
        description: "A final inspection is conducted to ensure everything meets our high standards before handover."
    }
];

export default function ProcessPage() {
    return (
        <div className="pt-32">
            <Section className="bg-zinc-900 text-white py-20">
                <Container>
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-4 block">How We Work</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Simple, Transparent,<br />Professional.</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Our proven process ensures that your project is delivered on time, within budget, and to your exact specifications.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="relative border-l border-zinc-200 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16 md:space-y-24 py-8">
                        {STEPS.map((step) => (
                            <div key={step.id} className="relative">
                                <div className="absolute -left-[41px] md:-left-[74px] top-0 w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base border-4 border-white shadow-sm ring-1 ring-zinc-200">
                                    {step.id}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3">{step.title}</h3>
                                        <p className="text-zinc-600 text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                    <div className="bg-zinc-100 rounded-2xl aspect-video md:aspect-[3/2] flex items-center justify-center text-zinc-400">
                                        Video / Image: {step.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
