import { FC } from 'react'
import Image from 'next/image'

type WorkProps = {
  experience: {
    logo: string
    name: string
    skills: string[]
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
            width={30}
            height={30}
            alt={experience.logo}
          ></Image>
        </div>

        <div>
          <div className="flex gap-2">
            <span>{experience.name}</span>
            <span>{experience.time}</span>
          </div>
        </div>
      </div>

      <div>
        {experience.achievements.map((item, idx) => {
          return (
            <div key={idx} className="flex gap-2">
              <Image src="svgs/plus.svg" width={10} height={10} alt="plus" />
              <span>{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
