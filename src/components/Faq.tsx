import { type FC } from 'react'

type FAQProps = {
  faq: {
    id: number
    question: string
    answer: string
  }
}

export const Faq: FC<FAQProps> = ({ faq }) => {
  return <div>{faq.id}</div>
}
