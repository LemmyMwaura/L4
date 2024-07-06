import { type FC } from 'react'

export const CardWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="p-5 border border-gray-300 rounded-2xl border-neutral-200/10 bg-[#1A1A1A]/90 backdrop-blur-md">
      {children}
    </section>
  )
}
