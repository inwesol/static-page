import { Metadata } from "next";

export const generateMetadata = ({
  title = `Inwesol`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} is the career guidance platform. It brings clarity, builds confidence, and reduces stress, leading to a more purposeful career.`,
  image = "/inwesol-symbol.svg",  
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/inwesol-symbol.svg",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/inwesol-symbol.svg",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/inwesol-symbol.svg",
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
  openGraph: {
    title,
    description,
    ...(image && { images: [{ url: image }] }),
  },
  // twitter: {
  //   title,
  //   description,
  //   ...(image && { card: "summary_large_image", images: [image] }),
  //   creator: "@shreyassihasane",
  // },
  // metadataBase: new URL(process.env.APP_DOMAIN!),
  ...(noIndex && { robots: {
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
  } }),
});
