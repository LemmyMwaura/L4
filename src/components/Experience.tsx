import { workExperience } from '@/app/experience'
import { Work } from './Work'

export const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-2 max-w-3xl">
        <h4 className="text-xl font-semibold">Experience</h4>
        <div className="flex flex-col gap-2">
          <div>
            I&apos;m a software engineer proficient in JavaScript/TypeScript,
            Python and Go. I have extensive experience with Node, React and
            Angular including their meta framework equivalents such as Next.js
            and Angular Universal.
          </div>

          <div>
            I am passionate about open-source contributions and have actively
            contributed to projects like Infisical and Calcom, as well as other
            private contributions.
          </div>

          <div>
            My side-quests include cloud engineering, infrastructure
            provisioning, internal tooling, frontend wizadry, and writing
            stellar documentation.
          </div>
        </div>

        <div>
          {workExperience.map((exp, idx) => {
            return (
              <div key={idx}>
                <Work experience={exp} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
