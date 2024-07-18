import { Navigation } from './Navigation'

export const Footer = () => {
  return (
    <div className="flex justify-center w-full fixed bottom-[2%]">
      <div className="p-5 border rounded-full border-gray-300 border-neutral-200/10 bg-[#161616]/80">
        <Navigation />
      </div>
    </div>
  )
}
