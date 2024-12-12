import { ReactNode } from 'react'

interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
  className?: string
}

const SplitLayout = ({ left, right, className = '' }: SplitLayoutProps) => {
  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      {/* Left vertical section - 30% width with no text wrap */}
      <div className="w-full md:w-[30%] min-w-[300px] bg-white dark:bg-dark-card border-r dark:border-dark-border whitespace-nowrap overflow-x-hidden">
        {left}
      </div>
      
      {/* Right vertical section - 70% width */}
      <div className="w-full md:w-[70%]">
        {right}
      </div>
    </div>
  )
}

export default SplitLayout
