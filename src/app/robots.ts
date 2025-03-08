import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: [
      //   '/private/',
      //   '/api/',
      //     '/admin/',
      //   // '/coco-fec1d3f0',
      // ]
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/sitemap.xml`
  }
}
