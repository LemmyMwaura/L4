'use client'

import Link from 'next/link'
import { BookOpenText, CircleHelp, Github, Home, Linkedin } from 'lucide-react'

export const Navigation = () => {
  return (
    <div className="flex gap-4">
      <Link href={'/'}>
        <Home />
      </Link>
      <Link href={'faq'}>
        <CircleHelp />
      </Link>
      <Link href={'faq'}>
        <BookOpenText />
      </Link>
      <Link href={'faq'}>
        <Github />
      </Link>
      <Link href={'faq'}>
        <Linkedin />
      </Link>
    </div>
  )
}
