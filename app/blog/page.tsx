
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { blogPosts, categories } from "@/lib/blog-data";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Insights: UPVC & Aluminium Windows Blog | Sai Ram Decorators",
    description: "Read our expert guides on choosing the best windows for your Indian home. We cover cost comparisons, soundproofing tips, and design trends for UPVC and Aluminium systems.",
    keywords: ["UPVC windows blog", "Aluminium windows India guide", "window cost calculator India", "soundproof windows blog"],
};

export default function BlogIndexPage() {


    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/blog_header_bg.png"
                        alt="Architectural Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expert Insights</span>
                        <h1 className="text-3xl md:text-6xl font-heading font-medium text-zinc-900 tracking-tight leading-tight">
                            The <span className="italic font-serif">Education</span> Hub
                        </h1>
                        <p className="text-base md:text-xl text-zinc-600 font-light leading-relaxed">
                            Honest answers to your questions about windows, doors, and home renovation.
                            Written by experts, not salespeople.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-24">
                <Container>
                    {/* Categories (Visual only for now) */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16">
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className="px-5 py-2.5 min-h-[44px] flex items-center rounded-full text-sm font-medium bg-zinc-100 text-zinc-600 cursor-pointer hover:bg-zinc-900 hover:text-white transition-colors"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* SEO Footer Section */}
            <section className="bg-zinc-900 py-16 text-zinc-400 text-sm">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h3 className="text-white font-bold text-lg">Why Read Our Blog?</h3>
                        <p>
                            At Sai Ram Decorators, we believe an informed customer is our best customer. The Indian market is flooded with misinformation about UPVC vs Aluminium. Our goal is to provide transparent, data-backed comparisons to help you make the everlasting choice for your dream home.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
