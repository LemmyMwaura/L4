const getBaseURl = () => {
  if (process.env.NODE_ENV !== 'development') {
    return process.env.NEXT_PUBLIC_BASE_URL ?? 'https://lemmymwaura.com'
  } else {
    return 'http://localhost:3000'
  }
}

export const BASE_URL = getBaseURl()
