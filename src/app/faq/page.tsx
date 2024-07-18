import { Metadata } from 'next'
import { FAQList } from './faq'
import { Faq } from '@/components/Faq'

export const metadata: Metadata = {
  title: 'FAQ',
  description: "Lemmy Mwaura's portfolio",
}

export default function FAQpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="max-w-3xl flex flex-col gap-8">
        {FAQList.map((faq) => {
          return (
            <div key={faq.id}>
              <Faq faq={faq}></Faq>
            </div>
          )
        })}
      </div>
    </main>
  )
}
