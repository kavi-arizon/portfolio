import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PROFILE } from "@/data/profile";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
  ],
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-flash inline theme initializer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-content-primary antialiased font-sans min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
