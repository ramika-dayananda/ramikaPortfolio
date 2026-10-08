import { profile, stats } from '../data/portfolio'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <p className="eyebrow">
              <span className="idx">01</span>
              About me
            </p>
            <h2 id="about-title" className="statement">
              I care about software that is clear on the screen and solid underneath.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-copy">
              <p>
                I’m in the {profile.credential} for {profile.program} at {profile.school},{' '}
                {profile.studyStart} through {profile.studyEnd}, with a {profile.gpa} GPA. Most of
                my time goes to frontend and full-stack work: React, Next.js, TypeScript, and the
                services those interfaces depend on.
              </p>
              <p>
                On a Riipen project with Budtenders Association Inc., I contributed to an LMS in
                Next.js and Payload CMS — course, module, and member-progress flows, TypeScript
                contracts, mock data, and integration tests — with front-end, back-end, and design
                teammates on GitHub and Agile.
              </p>
            </div>
          </Reveal>
        </div>
        <ul className="stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="stat" delay={0.05 * index}>
              <p className={stat.word ? 'stat-value is-word' : 'stat-value'}>{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
