import type { PointerEvent } from 'react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function glow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeader
          id="skills-title"
          index="05"
          eyebrow="Skills"
          title="Tools I actually use"
          lede="Grouped by the kind of work, with the tools and the projects they showed up on."
        />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04}>
              <article className="skill-card glow-card" onPointerMove={glow}>
                <p className="skill-index">{group.index}</p>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
