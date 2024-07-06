import { CardWrapper } from '@/components/Card'
import { Experience } from '@/components/Experience'
import { Bio } from '@/components/Bio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="max-w-3xl flex flex-col gap-8">
        <CardWrapper>
          <Bio />
        </CardWrapper>

        <CardWrapper>
          <Experience />
        </CardWrapper>
      </div>
    </main>
  )
}
