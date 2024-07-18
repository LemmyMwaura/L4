import { CardWrapper } from './Card'
import { Navigation } from './Navigation'

export const Footer = () => {
  return (
    <div className="flex justify-center w-full fixed bottom-[5%]">
      <CardWrapper>
        <Navigation />
      </CardWrapper>
    </div>
  )
}
