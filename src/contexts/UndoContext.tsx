import { createContext, useContext, useState, useCallback } from 'react'

type ColorHistoryType = {
  colors: string[]
  currentIndex: number
}

type UndoContextType = {
  addToHistory: (color: string) => void
  undo: () => void
  canUndo: boolean
}

const UndoContext = createContext<UndoContextType | undefined>(undefined)

export function UndoProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<ColorHistoryType>({
    colors: ['bg-white'], // Initial background color
    currentIndex: 0
  })

  const addToHistory = useCallback((color: string) => {
    setHistory(prev => {
      // Remove any forward history when adding new color
      const newColors = prev.colors.slice(0, prev.currentIndex + 1)
      return {
        colors: [...newColors, color],
        currentIndex: newColors.length
      }
    })

    // Apply the color
    document.documentElement.className = color
  }, [])

  const undo = useCallback(() => {
    setHistory(prev => {
      if (prev.currentIndex > 0) {
        const newIndex = prev.currentIndex - 1
        const previousColor = prev.colors[newIndex]
        
        // Apply the previous color
        document.documentElement.className = previousColor
        
        return {
          ...prev,
          currentIndex: newIndex
        }
      }
      return prev
    })
  }, [])

  const canUndo = history.currentIndex > 0

  return (
    <UndoContext.Provider value={{ addToHistory, undo, canUndo }}>
      {children}
    </UndoContext.Provider>
  )
}

export function useUndo() {
  const context = useContext(UndoContext)
  if (context === undefined) {
    throw new Error('useUndo must be used within an UndoProvider')
  }
  return context
}
