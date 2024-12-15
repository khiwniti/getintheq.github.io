import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { UndoProvider } from './contexts/UndoContext'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'

// Lazy loaded components
const Home = lazy(() => import('./components/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const ProjectsPage = lazy(() => import('./pages/Projects'))

const App = () => {
  return (
    <UndoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg dark:bg-opacity-85 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
            <div className="fixed inset-0 dark:bg-gradient-to-br dark:from-dark-gradient-start dark:to-dark-gradient-end -z-10" />
            <div className="dark:backdrop-blur-md relative z-10">
              <main className="flex-grow">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<Blog />} />
                  </Routes>
                </Suspense>
              </main>
              <Toaster
                toastOptions={{
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-color)',
                    backdropFilter: 'blur(8px)',
                  },
                }}
              />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </UndoProvider>
  )
}

export default App

