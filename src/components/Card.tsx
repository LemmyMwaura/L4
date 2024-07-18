import { type FC } from 'react'
import { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

export const CardWrapper: FC<{
  children: React.ReactNode
  className?: ClassValue
}> = ({ children, className }) => {
  return (
    <section
      className={cn(
        'p-5 border border-gray-300 rounded-2xl border-neutral-200/10 bg-[#1A1A1A]/90 backdrop-blur-md',
        className
      )}
    >
      {children}
    </section>
  )
}
