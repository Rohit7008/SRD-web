
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
    post: BlogPost;
    className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={cn(
                "group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full",
                className
            )}
        >
            <div className="relative h-48 md:h-64 w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-zinc-900 font-medium px-3 py-1 hover:bg-white/90">
                        {post.category}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-5 md:p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readingTime}</span>
                    </div>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-zinc-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
