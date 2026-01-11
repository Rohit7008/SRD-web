import { HeartHandshake, Building2, PartyPopper } from "lucide-react";

const SERVICES = [
    {
        title: "Wedding Decor",
        description: "Breathtaking mandaps, receptions, and floral arrangements designed to make your special day unforgettable.",
        icon: HeartHandshake,
    },
    {
        title: "Corporate Events",
        description: "Professional and classy layouts for conferences, seminars, and office parties that leave a lasting impression.",
        icon: Building2,
    },
    {
        title: "Birthday Bashes",
        description: "Fun, vibrant, and thematic decorations for birthday parties of all ages, from kids to milestones.",
        icon: PartyPopper,
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 mb-4">Our Services</h2>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        We offer a wide range of decoration services tailored to your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-6">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
