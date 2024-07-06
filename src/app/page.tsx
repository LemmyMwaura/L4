import { CardWrapper } from '@/components/Card'
import { Bio } from '@/components/Bio'
import { Experience } from '@/components/Experience'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <CardWrapper>
        <Bio />
      </CardWrapper>

      <CardWrapper>
        <Experience />
      </CardWrapper>
    </main>
  )
}
