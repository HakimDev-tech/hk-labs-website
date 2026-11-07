import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HK Labs | Frontend Development & Website Improvements",
    template: "%s | HK Labs",
  },
  description:
    "HK Labs builds responsive business websites, SaaS landing pages and polished frontend experiences. Fixed-scope projects, transparent pricing and written communication.",
  applicationName: "HK Labs",
  alternates: { canonical: "/" },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "HK Labs",
    title: "HK Labs | Frontend Development & Website Improvements",
    description:
      "Responsive business websites, SaaS landing pages and practical frontend engineering. Clear scope, written communication.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HK Labs — Frontend development studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HK Labs | Frontend Development & Website Improvements",
    description:
      "Responsive business websites, SaaS landing pages and practical frontend engineering.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0e12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HK Labs",
    url: siteConfig.url,
    description:
      "Independent frontend development studio building responsive business websites, SaaS landing pages and frontend improvements.",
    email: siteConfig.email,
    priceRange: "$$",
    serviceType: [
      "Frontend development",
      "Business website development",
      "SaaS landing page development",
      "Website improvement",
      "Responsive web design",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
