import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.role}</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>
        <p className="footer-meta">
          <span>© {year}</span>
          <span>Designed & built by Ramika.</span>
        </p>
      </div>
    </footer>
  )
}
