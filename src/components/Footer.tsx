import React from 'react'
import { CardWrapper } from './Card'
import Navigation from './Navigation'

export const Footer = () => {
  return (
    <div className="flex justify-center w-full fixed bottom-[10%]">
      <CardWrapper>
        <Navigation />
      </CardWrapper>
    </div>
  )
}
