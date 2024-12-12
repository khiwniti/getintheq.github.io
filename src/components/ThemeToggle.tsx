import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'


const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()
 

  return (
    
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={24} className="text-gray-600 dark:text-gray-300" />
        ) : (
          <Moon size={24} className="text-gray-600" />
        )}
      </button>
  )
}

export default ThemeToggle
