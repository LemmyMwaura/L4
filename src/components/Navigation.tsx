'use client'

import Link from 'next/link'

export const Navigation = () => {
  return (
    <div className="flex gap-2">
      <Link href={'/'}>Home</Link>
      <Link href={'faq'}>FAQ</Link>
      <Link href={'faq'}>Blog</Link>
      <Link href={'faq'}>Github</Link>
      <Link href={'faq'}>Linkdin</Link>
    </div>
  )
}
