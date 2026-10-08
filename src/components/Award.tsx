import { Link } from 'react-router-dom'
import { award } from '../data/portfolio'
import { ArrowIcon, AwardIcon } from './Icons'
import { Reveal } from './Reveal'

export function AwardSpotlight() {
  return (
    <section className="section" id="recognition" aria-labelledby="award-title">
      <div className="wrap">
        <Reveal>
          <article className="award">
            <span className="award-shine" aria-hidden="true" />
            <div className="award-inner">
              <p className="eyebrow award-eyebrow">
                <AwardIcon />
                <span className="idx">03</span>
                Achievement
              </p>
              <div className="award-top">
                <h2 id="award-title">
                  <span className="award-rank">{award.place}</span>
                  <span className="award-rank-copy">
                    <span className="award-kicker">Place</span>
                    <span className="award-event">{award.event}</span>
                  </span>
                </h2>
                <p className="award-when">
                  <time dateTime={award.dateISO}>{award.date}</time>
                </p>
              </div>
              <p className="award-project">
                {award.project}
                <span>{award.projectLine}</span>
              </p>
              <p className="award-role">{award.role}</p>
              <p className="award-summary">{award.summary}</p>
              <ul className="pills">
                {award.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to="/projects#buddhacalm">
                See the project <ArrowIcon />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
