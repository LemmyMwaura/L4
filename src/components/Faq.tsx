import { type FC } from 'react'

type FAQProps = {
  faq: {
    id: string,
    question: string
    answer: string
  }
}

export const Faq: FC<FAQProps> = ({ faq }) => {
  return (
    <div>
      <div className="text-nice-orange">{faq.question}</div>
      <div>{faq.answer}</div>
    </div>
  )
}
