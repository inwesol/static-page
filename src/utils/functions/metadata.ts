import { Metadata } from "next";

export const generateMetadata = ({
  title = `Inwesol - Beyond careers, towards wellbeing`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} is the career guidance platform. It brings clarity, builds confidence, and reduces stress, leading to a more purposeful career.`,
  image = "/web-app-manifest-512x512.png",  
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
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://inwesol.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: process.env.NEXT_PUBLIC_APP_DOMAIN,
    title,
    description,
    ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(image && { images: [image] }),
    creator: "@inwesol",
    site: '@inwesol',
  },
  robots: {
    index: !noIndex,
    follow: !noIndex,
    nocache: false,
    googleBot: {
      index: !noIndex,
      follow: !noIndex,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_DOMAIN,
  },
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  // }
});
