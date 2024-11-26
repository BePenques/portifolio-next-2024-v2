import { HorizontalDivider } from '../../divider/horizontal'
import { SectionTitle } from '../../section-title'
import { ProjectCard } from './project-card'

export const HighLightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider />
      <div>
        <ProjectCard />
        {/* <ProjectCard /> */}
        {/* <ProjectCard /> */}
      </div>
    </section>
  )
}
