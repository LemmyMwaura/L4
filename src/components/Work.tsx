import { FC } from 'react'
import Image from 'next/image'

import { Experience } from '@/utils/types'

import { Achievement } from './Achievement'

type WorkProps = {
  experience: Experience
}

export const Work: FC<WorkProps> = ({ experience }) => {
  return (
    <>
      <div className="flex gap-4 items-center mt-8 first:mt-2">
        <div className="flex items-center">
          <Image
            src={'/images/' + experience.logo}
            width={40}
            height={40}
            style={{ borderRadius: '0.35rem' }}
            alt={experience.logo}
          ></Image>
        </div>

        <div>
          <div className="flex gap-2">
            <span>{experience.name}</span>
            <span>{experience.time}</span>
          </div>
          <div>{experience.role}</div>
        </div>
      </div>

      <div>
        <div className="pb-5 pt-5">{experience.description}</div>
      </div>

      <div>
        {experience.achievements.map((item) => {
          return <Achievement key={item} item={item} />
        })}
      </div>
    </>
  )
}
