import { MetadataRoute } from 'next'
import { CONDITIONS, SERVICES } from '@/data/conditions'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yourdomain.com'
  const now = new Date()

  const staticPages = [
    { url: base,            lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/book`,  lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/articles`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  const conditionPages = CONDITIONS.map(c => ({
    url: `${base}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = SERVICES.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...conditionPages, ...servicePages]
}
