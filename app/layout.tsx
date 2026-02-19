import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'

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
    'Performance over Pathology. Dr. Dillon Small has spent over 16 years helping high performers elevate their game in athletics, business, academics, and parenting.',
  metadataBase: new URL('https://overcomingordinary.com'),
  keywords: [
    'performance psychology',
    'Dr. Dillon Small',
    'mental performance',
    'high performance coaching',
    'keynote speaker',
    'athletics psychology',
    'business performance',
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
      'Performance over Pathology. Dr. Dillon Small has spent over 16 years helping high performers elevate their game in athletics, business, academics, and parenting.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${_inter.variable} ${_bebasNeue.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
