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
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="no-repeat relative w-full bg-[#161616] bg-[url(/svgs/bg.svg)] bg-cover bg-fixed text-white">
        <div className={spaceGrotesk.className} style={{ fontSize: '15px' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
