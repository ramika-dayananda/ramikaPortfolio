import { ProjectBrowser } from '../components/ProjectBrowser'
import { SectionHeader } from '../components/SectionHeader'
import { usePageTitle } from '../usePageTitle'

export default function Projects() {
  usePageTitle('Projects | Ramika Dinan Dayananda')

  return (
    <section className="section page-section" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeader
          as="h1"
          id="projects-title"
          index="04"
          eyebrow="Projects"
          title="Projects"
          lede="BuddhaCalm took 1st place at WIMTACH. CampusRent was a six-person Agile build. SmartPlate AI is a CentennialHacks project with a public repo and live demo. The last three are earlier work."
        />
        <ProjectBrowser mode="all" />
      </div>
    </section>
  )
}
