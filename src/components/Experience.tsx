import type { PointerEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'

const ease = [0.22, 1, 0.36, 1] as const

function glow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function Experience() {
  const reduce = Boolean(useReducedMotion())
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            <span className="idx">02</span>
            Experience
          </p>
          <h2 id="experience-title" className="section-title">
            Professional work
          </h2>
          <p className="lede">
            A remote Riipen placement building and testing LMS features with a cross-functional team.
          </p>
        </Reveal>
        <div className="timeline">
          <div className="rail" aria-hidden="true">
            <span className="rail-dot" />
            <motion.span
              className="rail-line"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: reduce ? 0 : 0.8, ease }}
            />
          </div>
          <Reveal>
            <article className="exp-card glow-card" onPointerMove={glow}>
              <header className="exp-head">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="exp-org">{experience.org}</p>
                  <p className="exp-context">{experience.context}</p>
                </div>
                <p className="exp-dates">
                  <time dateTime={experience.startISO}>{experience.start}</time>
                  {' – '}
                  <time dateTime={experience.endISO}>{experience.end}</time>
                </p>
              </header>
              <ul className="bullet-list">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="pills">
                {experience.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
