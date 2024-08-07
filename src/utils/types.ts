import { z } from 'zod'

const FAQSchema = z.object({
  id: z.string().min(8),
  question: z.string(),
  answer: z.string(),
})

const ExperienceSchema = z.object({
  id: z.string().min(8),
  logo: z.string(),
  name: z.string(),
  skills: z.array(z.string()),
  time: z.string(),
  role: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
})

export type FAQ = z.infer<typeof FAQSchema>
export type Experience = z.infer<typeof ExperienceSchema>
