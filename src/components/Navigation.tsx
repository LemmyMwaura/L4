'use client'

import Link from 'next/link'

function Navigation() {
  return (
    <div className="position-absolute flex gap-2">
      <Link href={'/'}>Home</Link>
      <Link href={'faq'}>FAQ</Link>
      <Link href={'faq'}>Blog</Link>
      <Link href={'faq'}>Github</Link>
      <Link href={'faq'}>Linkdin</Link>
    </div>
  )
}

export default Navigation
