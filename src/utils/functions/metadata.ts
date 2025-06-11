import { Metadata } from "next";

export const generateMetadata = ({
  title = {
    default: `Inwesol - Beyond careers, towards wellbeing`,
    template: `%s | Inwesol`,
  },
  description = `${process.env.NEXT_PUBLIC_APP_NAME} is the career guidance platform. It brings clarity, builds confidence, and reduces stress, leading to a more purposeful career. Get expert career guidance to make informed decisions and achieve your goals with evidence-based support.`,
  image = "/thumbnail.png",  
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/icon.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/icon.png",
    },
  ],
  noIndex = false,
  path = "",  // Path for current page path
}: {
  title?: Metadata["title"];
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
    noIndex?: boolean;
  path?: string;
  } = {}): Metadata => {
  // Get base URL from environment or default
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://inwesol.com';
  
  // Ensure baseUrl doesn't have trailing slash
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  // Create full URL for current page
  const fullUrl = path ? `${normalizedBaseUrl}/${path.startsWith('/') ? path.slice(1) : path}` : normalizedBaseUrl;

  return {
    title,
  description,
  icons,
  metadataBase: new URL(normalizedBaseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: fullUrl,
    siteName: process.env.NEXT_PUBLIC_APP_NAME || 'Inwesol',
    description,
    ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
  },
  twitter: {
    card: "summary_large_image",
    description,
    ...(image && { images: [image] }),
    creator: "@inwesol",
    site: '@inwesol',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: fullUrl,
  },
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  // }
  };
  
};
