import { randomUUID } from 'crypto'

import { FAQ } from './types'

export const FAQList: FAQ[] = [
  {
    id: randomUUID(),
    question: "What's your name?",
    answer:
      'Officially Stephen N. Mwaura, but I prefer to go by the name `Lemmy`.',
  },
  {
    id: randomUUID(),
    question: 'What do you hope to achieve in your career?',
    answer:
      'Create amazing products/solutions, work with amazing people, and do this as often as I can.',
  },
  {
    id: randomUUID(),
    question: 'What programming languages do you know?',
    answer: "I'm most proficient in TypeScript (JavaScript), Python, and Go.",
  },
  {
    id: randomUUID(),
    question: "What's your view on type safety?",
    answer: 'Never sacrifice type safety.',
  },
  {
    id: randomUUID(),
    question: 'What are you working on nowadays?',
    answer:
      'Currently building an open-source chatbot editor at Elewa. During my free time, I actively contribute to various open-source projects that align with my interests.',
  },
]
