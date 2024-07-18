import { workExperience } from '@/utils/experience'
import { Work } from './Work'

export const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-">
        <h4 className="text-xl font-semibold">Experience</h4>
        <div className="flex flex-col gap-2">
          <div>
            I&apos;m a full-stack web dev proficient in JavaScript/TypeScript,
            Python, and Go. I have extensive experience with Node, React, and
            Next.js. I also know how to make a mean cup of coffee, which is
            essential for those long coding sessions.
          </div>

          <div>
            I&apos;m passionate about open-source contributions and actively
            contribute to projects that align with my interests. Think of me as
            a digital philanthropist, but with more Git commits and fewer
            tuxedos.
          </div>

          <div>
            My side-quests include{' '}
            <span className="underline decoration-white text-nice-orange">
              cloud enginnering
            </span>{' '}
            (because who doesn’t love playing with the sky?),{' '}
            <span className="underline decoration-white text-nice-orange">
              infrastructure provisioning
            </span>{' '}
            (terraforming like a pro),{' '}
            <span className="underline decoration-white text-nice-orange">
              internal tooling
            </span>{' '}
            (building gadgets for my coding Batcave),{' '}
            <span className="underline decoration-white text-nice-orange">
              frontend wizardry
            </span>
            (Abracadabra! Watch that button become beautiful), and{' '}
            <span className="underline decoration-white text-nice-orange">
              writing stellar documentation
            </span>
            (because every epic needs a good story).
          </div>
        </div>

        <div>
          {workExperience.map((exp) => {
            return <Work key={exp.id} experience={exp} />
          })}
        </div>
      </div>
    </>
  )
}
