import './Certifications.css'

const CERTIFICATIONS = [
  {
    id: 'hs-diploma',
    name: 'High School Diploma',
    description: 'Secondary school completion.',
  },
]

export default function Certifications() {
  return (
    <div className="certifications-page">
      <header className="page-header">
        <h1>Certifications</h1>
        <p className="page-subtitle">Education and credentials</p>
      </header>

      <div className="certs-list">
        {CERTIFICATIONS.map((cert) => (
          <article key={cert.id} className="cert-card">
            <div className="cert-card-inner">
              <h2>{cert.name}</h2>
              <p className="cert-description">{cert.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
