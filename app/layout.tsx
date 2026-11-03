import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PROFILE } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.social.website || "https://portfolio-hazel-gamma-94.vercel.app"),
  title: {
    default: `${PROFILE.name} | ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: `${PROFILE.name} is an ${PROFILE.role} at Arizon Digital specializing in React, Next.js, TypeScript, and modern headless e-commerce architectures.`,
  keywords: [
    "Kaviyarasu C",
    "Associate Software Engineer",
    "Full Stack Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Headless Commerce",
    "BigCommerce Catalyst",
    "Makeswift CMS",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.social.github }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROFILE.social.website || "https://portfolio-hazel-gamma-94.vercel.app/",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.bio,
    siteName: `${PROFILE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    worksFor: {
      "@type": "Organization",
      name: "Arizon Digital",
    },
    url: PROFILE.social.website || "https://portfolio-hazel-gamma-94.vercel.app",
    sameAs: [PROFILE.social.github, PROFILE.social.linkedin].filter(Boolean),
    knowsAbout: PROFILE.currentlyWorkingWith,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090d16] text-slate-100 antialiased font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
