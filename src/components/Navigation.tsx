import Link from 'next/link'
import { Home, CircleHelp, BookOpenText, Github, Linkedin } from 'lucide-react'

export const Navigation = () => {
  return (
    <div className="flex gap-4">
      <Link href="/">
        <Home />
      </Link>
      <Link href="/faq">
        <CircleHelp />
      </Link>
      <Link
        href="https://lemmymwaura.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BookOpenText />
      </Link>
      <Link
        href="https://github.com/LemmyMwaura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/stephenlemmymwaura/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </Link>
    </div>
  )
}
