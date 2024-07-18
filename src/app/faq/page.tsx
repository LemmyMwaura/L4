import { Metadata } from 'next'
import { FAQList } from './faq'

import { Faq } from '@/components/Faq'
import { CardWrapper } from '@/components/Card'

export const metadata: Metadata = {
  title: 'FAQ',
  description: "Lemmy Mwaura's portfolio",
}

export default function FAQpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="min-w-[90vw] sm:min-w-0 sm:max-w-4xl md:max-w-4xl">
        <div className="flex flex-col gap-8">
          {FAQList.map((faq) => {
            return (
              <CardWrapper key={faq.id}>
                <Faq faq={faq}></Faq>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </main>
  )
}
