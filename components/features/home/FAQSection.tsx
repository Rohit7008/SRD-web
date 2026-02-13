
// Rebuild trigger
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

export function FAQSection() {
    return (
        <section className="py-24 bg-zinc-50 border-t border-zinc-200">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Common Questions</span>
                        <h2 className="text-4xl font-heading font-medium text-zinc-900">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-bold text-zinc-900">
                                How much do Upvc windows cost in Bangalore?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 leading-relaxed text-base">
                                The cost of Upvc windows in Bangalore typically ranges from ₹450 to ₹950 per square foot, depending on the profile type (sliding or casement), glass thickness (single or double glazing), and wood-finish laminations. At Sai Ram Decorators, we provide a transparent quote within 24 hours of a site visit.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-bold text-zinc-900">
                                Which is better for Bangalore climate: Upvc or Aluminium?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 leading-relaxed text-base">
                                Both have unique advantages. Upvc is engineered to withstand **Bangalore&apos;s heavy monsoon rains** without leaking or rotting. It also offers superior heat insulation. Aluminium (especially slim profiles) provides better aesthetics for modern villas and high-rise apartments, but Upvc is generally better suited for thermal comfort in our changing weather.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-bold text-zinc-900">
                                Do you provide soundproof windows for traffic noise?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 leading-relaxed text-base">
                                Yes, we specialize in high-performance acoustic glazing. By using Double Glazed Units (DGU) with laminated glass, we can **reduce Outer Ring Road traffic noise by up to 40dB**, significantly improving peace of mind in busy neighborhoods like Indiranagar, Koramangala, and Whitefield.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-bold text-zinc-900">
                                How long does installation take?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 leading-relaxed text-base">
                                For a standard 2-3 BHK apartment in Bangalore, installation usually takes 2-3 days once the windows are manufactured. Our manufacturing timeline is typically 10-15 days from the date of final measurement.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-bold text-zinc-900">
                                Do you serve areas outside Bangalore Central?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-600 leading-relaxed text-base">
                                Yes, we cover all major areas in and around Bangalore, including Whitefield, Sarjapur, Electronic City, Yelahanka, Kanakapura Road, and Mysore Road.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Container>
        </section>
    );
}
