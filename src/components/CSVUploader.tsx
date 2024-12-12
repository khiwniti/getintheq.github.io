import { UploadCloud } from 'lucide-react'
import { useCallback, useState } from 'react'
import { parseCSV } from '../services/csvService'
import { MarketingData } from '../types/MarketingData'
import toast from 'react-hot-toast'

interface CSVUploaderProps {
  onDataLoaded: (data: MarketingData) => void
}

const CSVUploader = ({ onDataLoaded }: CSVUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'text/csv') {
      await processFile(file)
    } else {
      toast.error('Please upload a valid CSV file')
    }
  }, [])

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await processFile(file)
    }
  }, [])

  const processFile = async (file: File) => {
    setIsLoading(true)
    try {
      const data = await parseCSV(file)
      onDataLoaded(data)
      toast.success('Data loaded successfully!')
    } catch (error) {
      toast.error('Error loading CSV: ' + error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full p-6">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-8
          flex flex-col items-center justify-center
          transition-colors cursor-pointer
          ${isDragging 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
          }
        `}
      >
        <UploadCloud 
          size={48} 
          className={`mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} 
        />
        
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          Drag and drop your CSV file here, or{' '}
          <label className="text-blue-500 hover:text-blue-600 cursor-pointer">
            browse
            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileSelect}
              disabled={isLoading}
            />
          </label>
        </p>
        
        {isLoading && (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Loading data...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CSVUploader
