import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile, resumeHref } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './Icons'

const NAV = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About', href: '/#about', key: 'about' },
  { label: 'Experience', href: '/#experience', key: 'experience' },
  { label: 'Projects', href: '/projects', key: 'projects' },
  { label: 'Skills', href: '/#skills', key: 'skills' },
  { label: 'Education', href: '/education', key: 'education' },
  { label: 'Contact', href: '/contact', key: 'contact' },
] as const

const SECTION_IDS = ['top', 'about', 'experience', 'skills', 'education', 'contact']

export function Navbar() {
  const { pathname, hash } = useLocation()
  const reduce = Boolean(useReducedMotion())
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (pathname !== '/') {
      setSection(null)
      return
    }

    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    )
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (!visible.length) return
        const id = visible[0].target.id
        setSection(id === 'top' ? null : id)
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.25, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const panel = panelRef.current
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a, button'))
      : []
    focusable[0]?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 980) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function isActive(key: (typeof NAV)[number]['key']) {
    if (key === 'projects') return pathname === '/projects'
    if (key === 'education') return pathname === '/education' || (pathname === '/' && section === 'education')
    if (key === 'contact') return pathname === '/contact' || (pathname === '/' && section === 'contact')
    if (key === 'home') return pathname === '/' && !section
    return pathname === '/' && section === key
  }

  function onNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false)
    if (href === '/' && pathname === '/' && !hash) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      return
    }
    if (href.startsWith('/#') && pathname === '/' && hash === href.slice(1)) {
      event.preventDefault()
      document.getElementById(href.slice(2))?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className="nav-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav" aria-label="Primary">
        <Link to="/" className="brand" aria-label={`${profile.name}, home`} onClick={(event) => onNavClick(event, '/')}>
          <span className="brand-mark">RD</span>
          <span className="brand-name">Ramika</span>
        </Link>

        <ul className="nav-links">
          {NAV.map((item) => {
            const active = isActive(item.key)
            return (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className={active ? 'nav-link is-active' : 'nav-link'}
                  aria-current={active ? 'page' : undefined}
                  onClick={(event) => onNavClick(event, item.href)}
                >
                  {active ? <motion.span layoutId="nav-pill" className="nav-pill" /> : null}
                  <span className="nav-link-label">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <a
          className="nav-resume"
          href={resumeHref}
          data-tip="Email me for a copy"
          aria-label="Request resume by email"
        >
          Resume
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="nav-backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              onClick={() => {
                setOpen(false)
                toggleRef.current?.focus()
              }}
            />
            <motion.div
              ref={panelRef}
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="mobile-nav"
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.22 }}
            >
              <ul>
                {NAV.map((item, index) => {
                  const active = isActive(item.key)
                  return (
                    <li key={item.key}>
                      <Link
                        to={item.href}
                        className={active ? 'is-active' : undefined}
                        aria-current={active ? 'page' : undefined}
                        onClick={(event) => onNavClick(event, item.href)}
                      >
                        <span>0{index + 1}</span>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
