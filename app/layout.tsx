import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HK Labs — Modern websites, built with intent",
    template: "%s | HK Labs",
  },
  description:
    "HK Labs designs and builds modern, responsive websites and frontend experiences for independent businesses and digital agencies.",
  applicationName: "HK Labs",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "HK Labs — Modern websites, built with intent",
    description:
      "Frontend development, focused website improvements and landing page rebuilds.",
    siteName: "HK Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "HK Labs — Modern websites, built with intent",
    description: "Modern frontend development for businesses and agencies.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0e12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
