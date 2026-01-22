
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Disallow API routes to save crawl budget
        },
        sitemap: 'https://sairamdecorators.com/sitemap.xml',
    }
}
