import { SectionTitle } from '../../../section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Enperiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          cupiditate, dignissimos fuga maiores et minus repudiandae sequi modi
          impedit?
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
