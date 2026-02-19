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
  title: 'Overcoming Ordinary | Dominating Average',
  description:
    'Performance over Pathology. Dr. Dillon has spent over 16 years helping high performers elevate their game in athletics, business, academics, and parenting.',
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
