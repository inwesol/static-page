import { Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "../../../public/fonts/DMSans-Light.woff2",
      weight: "300",
    },
    {
      path: "../../../public/fonts/DMSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../public/fonts/DMSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../public/fonts/DMSans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../public/fonts/DMSans-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-aeonik",
});

export const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});
