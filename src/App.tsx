import { useLayoutEffect, type ReactNode } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'

const ease = [0.22, 1, 0.36, 1] as const

function RouteShell({
  pathname,
  hash,
  children,
}: {
  pathname: string
  hash: string
  children: ReactNode
}) {
  const reduce = Boolean(useReducedMotion())

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, reduce])

  return children
}

function AnimatedRoutes() {
  const location = useLocation()
  const reduce = Boolean(useReducedMotion())

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: reduce ? 0 : 0.28, ease }}
      >
        <RouteShell pathname={location.pathname} hash={location.hash}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Navigate to="/education" replace />} />
            <Route path="/signin" element={<Navigate to="/contact" replace />} />
            <Route path="/login" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RouteShell>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Background />
        <Navbar />
        <main id="main" tabIndex={-1}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
