import './Contact.css'

export default function Contact() {
  const resumePath = '/RamikaDinan_Resume.docx.pdf'

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Contact</h1>
        <p className="page-subtitle">Get in touch — open to opportunities and collaboration</p>
      </header>

      <div className="contact-content">
        <section className="contact-info">
          <p>
            I'm a Software Engineering student at Centennial College with experience in front end,
            backend, C#, Java, databases, SQL, Node, React, graphic design, and agile software
            development.
          </p>
          <p>
            Feel free to reach out for project discussions, internship opportunities, or general
            inquiries. I'll get back to you as soon as I can.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:ramikadinan01@gmail.com">ramikadinan01@gmail.com</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/ramika-dayananda" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ramika-dayananda
              </a>
            </p>
          </div>

          <div className="resume-card" role="region" aria-label="Resume download">
            <h2>Resume</h2>
            <p>Download my latest resume directly from this page.</p>
            <a href={resumePath} download="RamikaDinan_Resume.pdf" className="resume-download-btn">
              Download Resume
            </a>
            <p className="resume-note">Resume file path: /public/RamikaDinan_Resume.docx.pdf</p>
          </div>
        </section>
      </div>
    </div>
  )
}
