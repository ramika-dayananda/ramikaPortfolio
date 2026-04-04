import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/contact'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (login(email, password)) {
      navigate(from, { replace: true })
    } else {
      setError('Please enter email and password.')
    }
  }

  return (
    <div className="login-page signin-page">
      <div className="login-card signin-card">
        <p className="signin-kicker">Portfolio Access</p>
        <h1>Sign In</h1>
        <p className="login-subtitle">Sign in to access the Contact page and download my resume.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
