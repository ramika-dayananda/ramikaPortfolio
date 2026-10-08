import { forwardRef, useEffect, useRef, useState, type PointerEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from '../data/portfolio'
import { ArrowIcon, ExternalIcon, GitHubIcon } from './Icons'
import { ProjectVisual } from './ProjectVisual'

const ease = [0.22, 1, 0.36, 1] as const

function glow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function ProjectBrowser({ mode }: { mode: 'featured' | 'all' }) {
  const reduce = Boolean(useReducedMotion())
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const entered = useRef(false)

  useEffect(() => {
    entered.current = true
  }, [])

  const source = mode === 'featured' ? projects.filter((project) => project.featured) : projects
  const shown =
    mode === 'all' && filter !== 'All'
      ? source.filter((project) => project.filters.includes(filter))
      : source

  return (
    <div>
      {mode === 'all' ? (
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((item) => {
            const active = filter === item
            return (
              <button
                key={item}
                type="button"
                className={active ? 'filter is-on' : 'filter'}
                aria-pressed={active}
                onClick={() => setFilter(item)}
              >
                {active ? <motion.span layoutId="filter-pill" className="filter-pill" /> : null}
                <span>{item}</span>
              </button>
            )
          })}
        </div>
      ) : null}
      {mode === 'all' ? (
        <p className="filter-count" aria-live="polite">
          {shown.length} {shown.length === 1 ? 'project' : 'projects'}
        </p>
      ) : null}
      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {shown.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
              animateEnter={entered.current && !reduce}
            />
          ))}
        </AnimatePresence>
      </div>
      {shown.length === 0 ? <p className="empty-note">Nothing in this filter.</p> : null}
    </div>
  )
}

const ProjectCard = forwardRef<
  HTMLElement,
  { project: Project; reverse: boolean; animateEnter: boolean }
>(function ProjectCard({ project, reverse, animateEnter }, ref) {
  const reduce = Boolean(useReducedMotion())
  const className = `project-card glow-card${project.featured ? ' is-feature' : ' is-compact'}${
    reverse ? ' is-reverse' : ''
  }`

  return (
    <motion.article
      ref={ref}
      id={project.id}
      layout={!reduce}
      className={className}
      tabIndex={-1}
      onPointerMove={glow}
      initial={animateEnter ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: 8 }}
      transition={{ duration: reduce ? 0 : 0.28, ease }}
    >
      <div className="project-media">
        <ProjectVisual visual={project.visual} />
      </div>
      <div className="project-copy">
        <p className="project-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-sub">{project.subtitle}</p>
        <p className="project-role">{project.role}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="bullet-list">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="pills">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label === 'GitHub' ? <GitHubIcon size={15} /> : <ExternalIcon />}
                {link.label}
                <ArrowIcon size={14} />
              </a>
            ))}
          </div>
        ) : null}
        {project.note ? <p className="project-note">{project.note}</p> : null}
      </div>
    </motion.article>
  )
})
