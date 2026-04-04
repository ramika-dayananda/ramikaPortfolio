import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import SignIn from './pages/Login'
import { useAuth } from './context/AuthContext'
import './App.css'

function ProtectedContact() {
  const { isLoggedIn } = useAuth()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return <Contact />
}

function App() {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className="app">
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-text">Projects</span>
        </NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-text">Certifications</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-text">Contact</span>
        </NavLink>
        {isLoggedIn ? (
          <button type="button" className="nav-link nav-logout" onClick={logout}>
            <span className="nav-text">Logout</span>
          </button>
        ) : (
          <NavLink to="/signin" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <span className="nav-text">Sign In</span>
          </NavLink>
        )}
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Navigate to="/signin" replace />} />
          <Route path="/contact" element={<ProtectedContact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
