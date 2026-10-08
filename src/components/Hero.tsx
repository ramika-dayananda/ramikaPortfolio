import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile, resumeHref } from '../data/portfolio'
import { ArrowIcon, GitHubIcon, LinkedInIcon } from './Icons'
import { Button } from './Button'

const ease = [0.22, 1, 0.36, 1] as const

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export function Hero() {
  const reduce = Boolean(useReducedMotion())
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduce) return
    const node = stageRef.current
    if (!node) return
    let frame = 0

    function onMove(event: PointerEvent) {
      if (!node || event.pointerType !== 'mouse') return
      const rect = node.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        node.style.setProperty('--px', x.toFixed(3))
        node.style.setProperty('--py', y.toFixed(3))
      })
    }

    function onLeave() {
      node?.style.setProperty('--px', '0')
      node?.style.setProperty('--py', '0')
    }

    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <motion.div
          variants={reduce ? undefined : list}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.p className="status-pill" variants={reduce ? undefined : item}>
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </motion.p>
          <motion.p className="eyebrow hero-eyebrow" variants={reduce ? undefined : item}>
            Software Engineering Technology · {profile.school}
          </motion.p>
          <motion.h1 id="hero-title" className="hero-title" variants={reduce ? undefined : item}>
            Building software that <span>feels</span> as good as it works.
          </motion.h1>
          <motion.p className="hero-name" variants={reduce ? undefined : item}>
            {profile.name}
          </motion.p>
          <motion.p className="hero-role" variants={reduce ? undefined : item}>
            {profile.role}
          </motion.p>
          <motion.p className="hero-copy" variants={reduce ? undefined : item}>
            I build web applications with React, Next.js, and TypeScript — screens, APIs, and the
            state between them. I like the work of making those pieces clear, testable, and usable
            with a team.
          </motion.p>
          <motion.div className="hero-actions" variants={reduce ? undefined : item}>
            <Button to="/projects" variant="primary">
              View Projects <ArrowIcon />
            </Button>
            <Button href={resumeHref} tip="Email me for a copy" ariaLabel="Request resume by email">
              View Resume
            </Button>
            <Button to="/contact">
              Contact Me
            </Button>
          </motion.div>
          <motion.div className="socials" variants={reduce ? undefined : item}>
            <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          ref={stageRef}
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.22, ease }}
        >
          <div className="stage-chips">
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
          </div>
          <div className="code-window">
            <div className="code-chrome">
              <span className="traffic" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="code-file">progress.ts</span>
              <span className="code-sample">sample</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-comment">// member progress</span>
                {'\n'}
                <span className="c-key">type</span> <span className="c-type">ModuleState</span> ={' '}
                <span className="c-str">&apos;locked&apos;</span>
                {'\n  | '}
                <span className="c-str">&apos;active&apos;</span>
                {'\n  | '}
                <span className="c-str">&apos;complete&apos;</span>
                {'\n\n'}
                <span className="c-key">function</span> <span className="c-fn">currentModule</span>
                (states: <span className="c-type">ModuleState</span>[]) {'{'}
                {'\n  '}
                <span className="c-key">return</span> states.
                <span className="c-fn">findIndex</span>(
                {'\n    '}(state) =&gt; state === <span className="c-str">&apos;active&apos;</span>
                {'\n  '}
                )<span className="caret" />
                {'\n}'}
              </code>
            </pre>
            <div className="code-dock">
              <div>
                <strong>Client</strong>
                <span>React</span>
              </div>
              <div className="dock-line" />
              <div>
                <strong>API</strong>
                <span>REST</span>
              </div>
              <div className="dock-line" />
              <div>
                <strong>Data</strong>
                <span>SQL · CMS</span>
              </div>
            </div>
          </div>
          <ul className="focus-chips">
            <li>Next.js</li>
            <li>Payload CMS</li>
            <li>Integration tests</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
