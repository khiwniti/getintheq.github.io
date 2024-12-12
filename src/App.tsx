import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { UndoProvider } from './contexts/UndoContext'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loaded components
const Home = lazy(() => import('./components/Home'))
const ProjectDetails = lazy(() => import('./components/ProjectDetails'))
const BlogPost = lazy(() => import('./components/BlogPost'))
const Blog = lazy(() => import('./components/Blog'))
const ProjectsPage = lazy(() => import('./components/ProjectsPage'))
const MarketingDashboard = lazy(() => import('./components/MarketingDashboard'))
function App() {

  return (
    <UndoProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg dark:bg-opacity-85 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
            <div className="fixed inset-0 dark:bg-gradient-to-br dark:from-dark-gradient-start dark:to-dark-gradient-end -z-10" />
            <div className="dark:backdrop-blur-md relative z-10">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
                  <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id" element={<ProjectDetails />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/dashboard" element={<MarketingDashboard />} />
                  </Routes>
                </Suspense>

              </main>
              <Footer />
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
