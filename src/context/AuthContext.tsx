import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

const AUTH_KEY = 'portfolio-auth'

type AuthContextType = {
  isLoggedIn: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored === 'true') setLoggedIn(true)
  }, [])

  const login = (email: string, password: string) => {
    if (email.trim() && password.trim()) {
      setLoggedIn(true)
      localStorage.setItem(AUTH_KEY, 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setLoggedIn(false)
    localStorage.removeItem(AUTH_KEY)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
