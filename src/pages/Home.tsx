import { Link } from 'react-router-dom'
import './Home.css'

const SKILLS = [
  'Front End',
  'Backend',
  'C#',
  'Java',
  'Database & SQL',
  'Node.js',
  'React',
  'Graphic Design',
  'Agile Software Development',
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <div className="profile-photo-wrap">
            <img
              src="/profile.png"
              alt="Profile"
              className="profile-photo"
            />
          </div>
          <p className="hero-label">Software Engineering</p>
          <h1 className="hero-title">Centennial College</h1>
          <p className="hero-subtitle">
            Building full‑stack applications with modern tools and agile practices.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="section-inner">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            I'm a Software Engineering student at Centennial College with a strong foundation in
            both front-end and back-end development. I build clean, scalable applications using
            technologies like C#, Java, React, and Node.js, and I'm comfortable working with
            databases and SQL. I also bring graphic design skills to the table and thrive in
            agile, collaborative environments.
          </p>
        </div>
      </section>

      <section className="skills section">
        <div className="section-inner">
          <h2 className="section-title">Skills & Technologies</h2>
          <ul className="skills-grid">
            {SKILLS.map((skill) => (
              <li key={skill} className="skill-tag">{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
