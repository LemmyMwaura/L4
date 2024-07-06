import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | LemmyMwaura',
    default: 'Portfolio | LemmyMwaura',
    absolute: 'Home | LemmyMwaura',
  },
  description: "Lemmy Mwaura's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="no-repeat relative w-full bg-[#161616] bg-[url(/bg.svg)] bg-cover bg-fixed text-white">
        {children}
      </body>
    </html>
  )
}
