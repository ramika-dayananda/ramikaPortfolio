import { useState } from 'react'
import { profile, resumeHref } from '../data/portfolio'
import { ArrowIcon, CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { Button } from './Button'

export function ContactPanel({ heading = 'h2' }: { heading?: 'h1' | 'h2' }) {
  const [copied, setCopied] = useState(false)
  const Title = heading

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="contact-grid">
      <div>
        <p className="eyebrow">
          <span className="idx">08</span>
          Contact
        </p>
        <Title id="contact-title" className="section-title">
          Let&apos;s build something useful.
        </Title>
        <p className="lede">
          Open to software development, frontend, full-stack, and co-op opportunities.
        </p>
        <p className="contact-note">
          There isn’t a contact form on this site. Email is the direct route. The resume file isn’t
          hosted here yet — Resume sends me a request for a copy.
        </p>
        <Button href={resumeHref} variant="primary" tip="Email me for a copy" ariaLabel="Request resume by email">
          Resume <ArrowIcon />
        </Button>
      </div>
      <div className="contact-list">
        <div className="contact-row">
          <span className="contact-icon">
            <MailIcon />
          </span>
          <a className="contact-main" href={`mailto:${profile.email}`}>
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
          <button type="button" className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
          <span className="contact-icon">
            <LinkedInIcon />
          </span>
          <span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">{profile.linkedinLabel}</span>
          </span>
          <ArrowIcon />
        </a>
        <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer noopener">
          <span className="contact-icon">
            <GitHubIcon />
          </span>
          <span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">{profile.githubLabel}</span>
          </span>
          <ArrowIcon />
        </a>
        <p className="sr-only" aria-live="polite">
          {copied ? 'Email copied' : ''}
        </p>
      </div>
    </div>
  )
}

export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  return (
    <section
      className={asPage ? 'section page-section' : 'section'}
      id={asPage ? undefined : 'contact'}
      aria-labelledby="contact-title"
    >
      <div className="wrap">
        <ContactPanel heading={asPage ? 'h1' : 'h2'} />
      </div>
    </section>
  )
}
