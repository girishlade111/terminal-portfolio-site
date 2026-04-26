import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://v0-terminal-portfolio-site.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#resume`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date('2026-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}