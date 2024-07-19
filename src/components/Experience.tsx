import { workExperience } from '@/utils/experience'
import { Work } from './Work'

export const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-0">
        <h4 className="text-xl font-semibold">Experience</h4>

        <div>
          {workExperience.map((exp) => {
            return <Work key={exp.id} experience={exp} />
          })}
        </div>
      </div>
    </>
  )
}
