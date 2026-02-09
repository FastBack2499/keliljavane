import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/vazirmatn'
import '@ant-design/v5-patch-for-react-19';
import Script from "next/script";

export const metadata: Metadata = {
  title: "کلیل جوانه",
  description: "Kalil Javaneh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-Id"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "کلیل جوانه",
              // "url": "https://www.misagh-khateri.info",
              // "image": "https://www.misagh-khateri.info/preview.png",
              "jobTitle": "Kalil Javaneh",
              "author": {
                "@type": "Person",
                "name": "Roham Esmaeili",
                "url": "https://fastback2499.github.io/"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
