import { createContext, useContext, useEffect, useState } from 'react'
import { useUndo } from './UndoContext'

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return saved === 'dark' || (!saved && prefersDark)
  })
  
  const { addToHistory } = useUndo()

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      addToHistory('dark')
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      // Update CSS variables for dark mode
      root.style.setProperty('--toast-bg', '#1F2937')
      root.style.setProperty('--toast-color', '#F9FAFB')
    } else {
      addToHistory('light')
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      // Reset CSS variables for light mode
      root.style.setProperty('--toast-bg', '#ffffff')
      root.style.setProperty('--toast-color', '#111827')
    }
  }, [isDark, addToHistory])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === null) {
        setIsDark(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
