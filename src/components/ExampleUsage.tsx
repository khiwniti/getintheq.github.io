import SplitLayout from './SplitLayout'

const ExampleUsage = () => {
  return (
    <SplitLayout
      left={
        <div className="p-4">
          {/* Left sidebar content */}
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <nav className="space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded">
              Item 1
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded">
              Item 2
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded">
              Item 3
            </a>
          </nav>
        </div>
      }
      right={
        <div className="p-4">
          {/* Main content */}
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p className="text-gray-600 dark:text-gray-300">
            This section takes up 80% of the width on desktop screens.
          </p>
        </div>
      }
    />
  )
}

export default ExampleUsage
