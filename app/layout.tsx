import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CertifyPro Global - Leading Certification Authority | ISO, Professional & Industry Certifications",
  description:
    "Market-aligned certification provider empowering professionals and businesses through verified, high-quality certifications. ISO 9001, 14001, 27001, 45001 and industry-specific programs.",
  keywords:
    "certification, ISO certification, professional certification, quality management, information security, environmental management, occupational health safety, training programs, audit services, compliance, accredited certification body",
  authors: [{ name: "CertifyPro Global" }],
  creator: "CertifyPro Global",
  publisher: "CertifyPro Global",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://certifyprogloba.com",
    siteName: "CertifyPro Global",
    title: "CertifyPro Global - Leading Certification Authority",
    description:
      "Market-aligned certification provider empowering professionals and businesses through verified, high-quality certifications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CertifyPro Global - Leading Certification Authority",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CertifyPro Global - Leading Certification Authority",
    description:
      "Market-aligned certification provider empowering professionals and businesses through verified, high-quality certifications.",
    images: ["/twitter-image.jpg"],
    creator: "@CertifyProGlobal",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://certifyprogloba.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#059669" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CertifyPro Global",
              description: "Leading certification authority providing ISO and professional certifications worldwide",
              url: "https://certifyprogloba.com",
              logo: "https://certifyprogloba.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: ["English", "Spanish", "French", "German"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressLocality: "New York",
              },
              sameAs: ["https://linkedin.com/company/certifyprogloba", "https://twitter.com/certifyprogloba"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
