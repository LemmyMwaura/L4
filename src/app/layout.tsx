import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import './globals.css'

import { Space_Grotesk } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s | Lemmy Mwaura',
    default: 'Home | Lemmy Mwaura',
  },
  description: "Lemmy Mwaura's portfolio",
  icons: [],
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" sizes="any" />

        <meta property="og:title" content="Lemmy Mwaura's Portfolio" />
        <meta property="og:description" content="Lemmy Mwaura's portfolio" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://lemmymwaura.com" />

        <meta name="twitter:title" content="Lemmy Mwaura's Portfolio" />
        <meta name="twitter:description" content="Lemmy Mwaura's portfolio" />
        <meta name="twitter:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="/images/og-image.png" />
        <meta property="twitter:domain" content="lemmymwaura.com" />
        <meta property="twitter:url" content="https://lemmymwaura.com" />
      </head>

      <body className="no-repeat relative w-full bg-[#161616] bg-[url(/svgs/bg.svg)] bg-cover bg-fixed text-white">
        <div className={spaceGrotesk.className} style={{ fontSize: '15px' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
