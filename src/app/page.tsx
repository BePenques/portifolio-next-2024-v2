import { HighLightedProjects } from './components/pages/highlighted-projects'
import { HeroSection } from './components/pages/home/hero-section'
import { KnowTechs } from './components/pages/know-techs/index'
import { WorkExperience } from './components/pages/work-experience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
