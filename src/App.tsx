import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UndoProvider } from './contexts/UndoContext'
import Home from './components/Home'
import BlogPage from './components/BlogPage'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetails from './components/ProjectDetails'
import MarketingDashboard from './components/MarketingDashboard'
import ErrorBoundary from './components/ErrorBoundary'

// Import tempo routes only in development
let routes: any = []
if (import.meta.env.VITE_TEMPO) {
  try {
    const tempoRoutes = await import('tempo-routes')
    routes = tempoRoutes.default || []
  } catch (error) {
    console.log('Tempo routes not available')
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <UndoProvider>
          <Router>
            {/* Tempo routes */}
            {import.meta.env.VITE_TEMPO && useRoutes(routes)}
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/marketing-dashboard" element={<MarketingDashboard />} />
            </Routes>
          </Router>
        </UndoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App