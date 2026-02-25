import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ConsentProvider } from '@/lib/consent'
import { CookieBanner } from '@/components/oo/cookie-banner'
import { GatedScripts } from '@/components/oo/gated-scripts'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: {
    default: 'Overcoming Ordinary | Dominate Average',
    template: '%s | Overcoming Ordinary',
  },
  description:
    'Performance over Pathology. Dr. Dillon Small has spent over 16 years helping high performers elevate their game in athletics, business, aviation, and military.',
  metadataBase: new URL('https://overcomingordinary.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'performance psychology',
    'Dr. Dillon Small',
    'mental performance',
    'high performance coaching',
    'keynote speaker',
    'athletics psychology',
    'business performance',
    'aviation psychology',
    'military mental performance',
    'overcoming ordinary',
  ],
  authors: [{ name: 'Dr. Dillon Small' }],
  creator: 'Overcoming Ordinary',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Overcoming Ordinary',
    title: 'Overcoming Ordinary | Dominate Average',
    description:
      'Performance over Pathology. Dr. Dillon Small has spent over 16 years helping high performers elevate their game in athletics, business, aviation, and military.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overcoming Ordinary | Dominate Average',
    description:
      'Performance over Pathology. Dr. Dillon Small helps high performers elevate their game.',
    creator: '@drdillonsmall',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://overcomingordinary.com/#organization",
      name: "Overcoming Ordinary",
      url: "https://overcomingordinary.com",
      logo: {
        "@type": "ImageObject",
        url: "https://overcomingordinary.com/images/oo-logo.png",
      },
      description:
        "Performance psychology coaching and training by Dr. Dillon Small. Helping high performers dominate average in athletics, business, aviation, and military.",
      email: "Business@overcomingordinary.com",
      founder: {
        "@type": "Person",
        name: "Dr. Dillon Small",
        jobTitle: "Director of Sport Performance Psychology",
        affiliation: {
          "@type": "Organization",
          name: "United States Air Force Academy",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://overcomingordinary.com/#website",
      url: "https://overcomingordinary.com",
      name: "Overcoming Ordinary",
      publisher: { "@id": "https://overcomingordinary.com/#organization" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${_inter.variable} ${_bebasNeue.variable} font-sans antialiased`}
      >
        <ConsentProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wider focus:text-accent-foreground"
          >
            Skip to main content
          </a>
          {children}
          <CookieBanner />
          <GatedScripts />
        </ConsentProvider>
        <Analytics />
      </body>
    </html>
  )
}
