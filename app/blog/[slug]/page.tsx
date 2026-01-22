
import { blogPosts } from "@/lib/blog-data";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Sai Ram Decorators`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
            type: "article",
        },
    };
}

// Simple Markdown Renderer
function MarkdownRenderer({ content }: { content: string }) {
    // This is a very basic parser. In a real app, use 'react-markdown'
    // Splitting by double newline to identify potential blocks
    const blocks = content.split('\n');

    return (
        <div className="space-y-6 text-zinc-700 leading-relaxed text-lg">
            {blocks.map((block, index) => {
                const trimmed = block.trim();
                if (!trimmed) return null;

                // Headers
                if (trimmed.startsWith('### ')) {
                    return <h3 key={index} className="text-2xl font-bold text-zinc-900 mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('## ')) {
                    return <h2 key={index} className="text-3xl font-heading font-medium text-zinc-900 mt-12 mb-6 border-l-4 border-blue-600 pl-4">{trimmed.replace('## ', '')}</h2>;
                }

                // Lists
                if (trimmed.startsWith('* ')) {
                    return (
                        <div key={index} className="flex items-start gap-3 ml-2 md:ml-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{trimmed.replace('* ', '')}</span>
                        </div>
                    )
                }
                if (trimmed.startsWith('1. ')) {
                    return (
                        <div key={index} className="flex items-start gap-3 ml-2 md:ml-4">
                            <span className="font-bold text-blue-600 shrink-0">1.</span>
                            <span>{trimmed.replace('1. ', '')}</span>
                        </div>
                    )
                }
                // Numbered list specific handling for simple cases
                const numberedListMatch = trimmed.match(/^(\d+)\.\s(.+)/);
                if (numberedListMatch) {
                    return (
                        <div key={index} className="flex items-start gap-3 ml-2 md:ml-4">
                            <span className="font-bold text-blue-600 shrink-0">{numberedListMatch[1]}.</span>
                            <span>{numberedListMatch[2]}</span>
                        </div>
                    )
                }

                // Bold text parser (simple regex for **text**)
                const parts = trimmed.split(/(\*\*.*?\*\*)/);
                return (
                    <p key={index} className="mb-4">
                        {parts.map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <span key={i} className="font-bold text-zinc-900">{part.slice(2, -2)}</span>;
                            }
                            return part;
                        })}
                    </p>
                );
            })}
        </div>
    );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-zinc-900">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                <Container className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-zinc-300 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <div className="space-y-6 max-w-4xl">
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-300">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">{post.category}</span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </Container>
            </div>

            <Container className="relative z-10 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 bg-white rounded-t-3xl p-6 md:p-10 shadow-sm min-h-[500px]">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8 pt-10 lg:pt-0">
                        {/* Author Card */}
                        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                            <h4 className="font-bold text-zinc-900 mb-2">Written By</h4>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-zinc-900">{post.author}</p>
                                    <p className="text-xs text-zinc-500">Industry Expert</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-zinc-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-10 translate-x-10" />

                            <h3 className="text-xl font-heading font-medium mb-3 relative z-10">
                                Need help deciding?
                            </h3>
                            <p className="text-zinc-300 text-sm mb-6 relative z-10">
                                We offer free site visits to measure your windows and suggest the best material for your needs.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center w-full bg-white text-zinc-900 font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors relative z-10">
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </article>
    );
}
