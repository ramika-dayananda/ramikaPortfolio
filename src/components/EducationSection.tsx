import { achievements, profile, volunteer } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function EducationSection({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      className={asPage ? 'section page-section' : 'section'}
      id={asPage ? undefined : 'education'}
      aria-labelledby="education-title"
    >
      <div className="wrap">
        <SectionHeader
          as={asPage ? 'h1' : 'h2'}
          id="education-title"
          index="06"
          eyebrow="Education"
          title="Education & Achievements"
          lede="The credential I’m finishing, plus the results worth putting next to it."
        />
        <div className="education-layout">
        <Reveal className="degree-slot">
          <article className="degree-card">
            <div>
              <p className="project-kicker">{profile.school}</p>
              <h3>{profile.credential}</h3>
              <p className="degree-program">{profile.program}</p>
              <p className="degree-dates">
                <time dateTime={profile.studyStartISO}>{profile.studyStart}</time>
                {' – '}
                <time dateTime={profile.studyEndISO}>{profile.studyEnd}</time>
              </p>
              <p className="degree-note">
                Expected graduation in 2027. The work sits across frontend engineering, APIs,
                databases, and testing.
              </p>
              <ul className="pills">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'SQL'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="gpa-seal">
              <strong>{profile.gpa}</strong>
              <span>GPA</span>
            </div>
          </article>
        </Reveal>
        <div className="achieve-grid">
          {achievements.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="achieve-card">
                <p className="project-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="achieve-meta">
                  {item.metaISO ? <time dateTime={item.metaISO}>{item.meta}</time> : item.meta}
                </p>
                <p>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        </div>
        <Reveal>
          <article className="volunteer-card">
            <div>
              <p className="eyebrow">
                <span className="idx">07</span>
                Volunteer
              </p>
              <h3>{volunteer.role}</h3>
              <p className="exp-org">{volunteer.org}</p>
              <p className="exp-dates">
                <time dateTime={volunteer.startISO}>{volunteer.start}</time>
                {' – '}
                <time dateTime={volunteer.endISO}>{volunteer.end}</time>
              </p>
            </div>
            <ul className="bullet-list">
              {volunteer.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
