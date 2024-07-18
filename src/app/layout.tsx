import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { BASE_URL } from '@/utils/getBaseUrl'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Lemmy Mwaura',
    default: 'Home | Lemmy Mwaura',
  },
  description: "Lemmy Mwaura's portfolio",
  openGraph: {
    title: 'Portfolio | LemmyMwaura',
    description: "Lemmy Mwaura's Portfolio",
    images: '/images/og-image.png',
  },
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

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:title" content="<generated>" />
        <meta property="og:description" content="<generated>" />
        <meta property="og:url" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
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
