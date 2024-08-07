import { type FC } from 'react'

import { FAQ } from '@/utils/types'

type FAQProps = {
  faq: FAQ
}

export const Faq: FC<FAQProps> = ({ faq }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-nice-orange">{faq.question}</div>
      <div>{faq.answer}</div>
    </div>
  )
}
