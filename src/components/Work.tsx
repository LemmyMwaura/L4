import { FC } from 'react'
import Image from 'next/image'

import { Achievement } from './Achievement'

type WorkProps = {
  experience: {
    logo: string
    name: string
    skills: string[]
    role: string
    time: string
    description: string
    achievements: string[]
  }
}

export const Work: FC<WorkProps> = ({ experience }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mt-8">
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
    </div>
  )
}
