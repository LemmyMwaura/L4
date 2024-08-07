'use client'

import { Plus } from 'lucide-react'

type Props = {
  item: string;
}

export const Achievement = ({ item }: Props) => {
  return (
    <div key={item} className="flex gap-2 items-baseline">
      <div className='pt-[4px]'>
        <Plus color="white" size={15} />
      </div>
      <span>{item}</span>
    </div>
  )
}
