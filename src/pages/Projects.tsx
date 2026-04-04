import './Projects.css'

const PROJECTS = [
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    description: 'A full-stack application for tracking workouts, exercises, and progress. Built with a modern front end and persistent data storage, featuring exercise logging, set/rep tracking, and workout history.',
    tech: ['React', 'Node.js', 'SQL', 'Front End', 'Backend'],
  },
  {
    id: 'bug-smasher',
    title: 'Bug Smasher Game',
    description: 'An interactive game developed with a focus on clean UI and smooth gameplay. Demonstrates front-end skills, graphic design, and user experience considerations.',
    tech: ['JavaScript', 'React', 'Graphic Design'],
  },
  {
    id: 'retail-database',
    title: 'Retail Database System',
    description: 'A database-driven system for managing retail operations. Includes data modeling, SQL queries, and integration with a backend for inventory and reporting.',
    tech: ['C#', 'Java', 'SQL', 'Database', 'Agile'],
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="page-subtitle">Selected work from my Software Engineering journey</p>
      </header>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-inner">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
