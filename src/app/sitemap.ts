import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Define your base URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN

  // Define your routes
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      },
    {
      url: `${baseUrl}/explorer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      },
    {
      url: `${baseUrl}/coco`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      },
    {
      url: `${baseUrl}/coaching`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      },
    {
      url: `${baseUrl}/behavioural-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      },
    {
      url: `${baseUrl}/blog/career-guidance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      },
    {
      url: `${baseUrl}/blog/coaching-vs-counselling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Add more routes as needed
  ]
}