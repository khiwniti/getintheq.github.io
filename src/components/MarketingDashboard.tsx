import { useState } from 'react'
import { MarketingData } from '../types/MarketingData'
import CSVUploader from './CSVUploader'
import { BarChart, DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react'

const MarketingDashboard = () => {
  const [data, setData] = useState<MarketingData | null>(null)

  const handleDataLoaded = (newData: MarketingData) => {
    setData(newData)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Marketing Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upload your CSV file to view marketing analytics
        </p>
      </div>

      {!data ? (
        <CSVUploader onDataLoaded={handleDataLoaded} />
      ) : (
        <div className="space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                  <p className="text-xl font-semibold">{formatCurrency(data.total_revenue)}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
                  <p className="text-xl font-semibold">{data.total_customers.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
                  <p className="text-xl font-semibold">{data.total_orders.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avg Order Value</p>
                  <p className="text-xl font-semibold">{formatCurrency(data.average_order_value)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-semibold">Category Analysis</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-right py-3 px-4">Revenue</th>
                    <th className="text-right py-3 px-4">Orders</th>
                    <th className="text-right py-3 px-4">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {data.main_categories.map((category, index) => (
                    <tr 
                      key={index}
                      className="border-b dark:border-gray-700 last:border-0"
                    >
                      <td className="py-3 px-4">{category.category}</td>
                      <td className="text-right py-3 px-4">{formatCurrency(category.revenue)}</td>
                      <td className="text-right py-3 px-4">{category.orders.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">{(category.percentage * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketingDashboard
