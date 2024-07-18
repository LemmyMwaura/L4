'use client'

import { Plus } from 'lucide-react'
import React from 'react'

export const Achievement = ({ item }: { item: string }) => {
  return (
    <div key={item} className="flex gap-2 items-baseline">
      <div className='pt-[4px]'>
        <Plus color="white" size={15} />
      </div>
      <span>{item}</span>
    </div>
  )
}
