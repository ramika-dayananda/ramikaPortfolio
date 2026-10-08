import { Link } from 'react-router-dom'
import { site } from '../data/portfolio'
import { usePageTitle } from '../usePageTitle'
import { About } from '../components/About'
import { AwardSpotlight } from '../components/Award'
import { ContactSection } from '../components/ContactPanel'
import { EducationSection } from '../components/EducationSection'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { ArrowIcon } from '../components/Icons'
import { ProjectBrowser } from '../components/ProjectBrowser'
import { SectionHeader } from '../components/SectionHeader'
import { Skills } from '../components/Skills'

export default function Home() {
  usePageTitle(site.title)

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <AwardSpotlight />
      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <SectionHeader
            id="work-title"
            index="04"
            eyebrow="Projects"
            title="Selected work"
            lede="Hackathon builds and a six-person rental platform. Earlier projects are on the full projects page."
          />
          <ProjectBrowser mode="featured" />
          <Link className="text-link" to="/projects">
            All projects <ArrowIcon />
          </Link>
        </div>
      </section>
      <Skills />
      <EducationSection />
      <ContactSection />
    </>
  )
}
