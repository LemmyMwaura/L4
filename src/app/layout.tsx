import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Lemmy Mwaura',
    default: 'Home | Lemmy Mwaura',
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
      <body className="no-repeat relative w-full bg-[#161616] bg-[url(/svgs/bg.svg)] bg-cover bg-fixed text-white">
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
