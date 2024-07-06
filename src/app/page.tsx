import { Bio } from '@/components/Bio'
import { CardWrapper } from '@/components/Card'
import { Work } from '@/components/Work'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <CardWrapper>
        <Bio></Bio>
      </CardWrapper>

      <CardWrapper>
        <Work></Work>
      </CardWrapper>
    </main>
  )
}
