import { useEffect, useState } from 'react'

export const useMediaQuery = (mediaQuery: string) => {
  const [isAMatch, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery)

    if (mql.matches !== isAMatch) {
      setMatches(isAMatch)
    }

    const listener = () => setMatches(mql.matches)

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [isAMatch, mediaQuery])

  return isAMatch
}
