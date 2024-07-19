import { CardWrapper } from '@/components/Card'
import { Experience } from '@/components/Experience'
import { About } from '@/components/About'
import { Bio } from '@/components/Bio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="min-w-[90vw] sm:min-w-0 sm:max-w-4xl md:max-w-4xl flex flex-col gap-8">
        <CardWrapper>
          <Bio />
        </CardWrapper>

        <CardWrapper className="bg-rosewater/90 text-black">
          <About />
        </CardWrapper>

        <CardWrapper>
          <Experience />
        </CardWrapper>
      </div>
    </main>
  )
}
