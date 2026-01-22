
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    // Replace with your actual domain when deploying
    const baseUrl = 'https://sairamdecorators.com'

    // Blog Posts Sitemap
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Static Pages Sitemap
    const routes = [
        '',
        '/about',
        '/projects',
        '/products/upvc',
        '/products/aluminium',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }))

    return [...routes, ...posts]
}
