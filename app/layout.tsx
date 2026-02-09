import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/vazirmatn";
import "@ant-design/v5-patch-for-react-19";
import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();
const siteName = "\u06A9\u0644\u06CC\u0644 \u062C\u0648\u0627\u0646\u0647";
const title = siteName;
const description = "Kalil Javaneh";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "fa-IR",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+98-913-318-1977",
        contactType: "customer service",
        availableLanguage: "fa",
      },
      sameAs: ["https://t.me/Keliljavane", "https://wa.me/+989133181977"],
      founder: {
        "@type": "Person",
        name: "Roham Esmaeili",
        url: "https://fastback2499.github.io/",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "\u06A9\u0644\u06CC\u0644 \u062C\u0648\u0627\u0646\u0647",
    "\u062C\u0646\u06CC\u0646 \u06AF\u0646\u062F\u0645",
    "\u06AF\u06CC\u0627\u0647\u06A9 \u06AF\u0646\u062F\u0645",
    "Kalil Javaneh",
  ],
  alternates: {
    canonical: "/",
  },
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
    locale: "fa_IR",
    url: siteUrl,
    siteName,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
