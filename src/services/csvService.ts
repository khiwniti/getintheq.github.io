import Papa from 'papaparse'
import { MarketingData } from '../types/MarketingData'

export const parseCSV = async (file: File): Promise<MarketingData> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (results) => {
        try {
          const data = results.data as any[]
          
          // Parse summary metrics
          const summaryMetrics = {
            total_revenue: parseFloat(data[0]?.total_revenue || "0"),
            total_customers: parseInt(data[0]?.total_customers || "0"),
            total_orders: parseInt(data[0]?.total_orders || "0"),
            average_order_value: parseFloat(data[0]?.average_order_value || "0")
          }

          // Parse time series data
          const dailyMetrics = data
            .filter(row => row.metric_type === 'daily')
            .map(row => ({
              date: row.date,
              revenue: parseFloat(row.revenue),
              orders: parseInt(row.orders),
              customers: parseInt(row.customers)
            }))

          const monthlyMetrics = data
            .filter(row => row.metric_type === 'monthly')
            .map(row => ({
              month: row.month,
              revenue: parseFloat(row.revenue),
              orders: parseInt(row.orders),
              customers: parseInt(row.customers)
            }))

          // Parse category analysis
          const categoryMetrics = data
            .filter(row => row.metric_type === 'category')
            .map(row => ({
              category: row.category,
              revenue: parseFloat(row.revenue),
              orders: parseInt(row.orders),
              percentage: parseFloat(row.percentage)
            }))

          // Parse channel analysis
          const channelMetrics = data
            .filter(row => row.metric_type === 'channel')
            .map(row => ({
              channel: row.channel,
              revenue: parseFloat(row.revenue),
              customers: parseInt(row.customers),
              conversion_rate: parseFloat(row.conversion_rate)
            }))

          // Parse customer analysis
          const customerMetrics = data
            .filter(row => row.metric_type === 'customer')
            .map(row => ({
              customer_id: row.customer_id,
              total_spent: parseFloat(row.total_spent),
              order_count: parseInt(row.order_count),
              average_order_value: parseFloat(row.average_order_value),
              last_purchase_date: row.last_purchase_date
            }))

          resolve({
            ...summaryMetrics,
            daily_metrics: dailyMetrics,
            monthly_metrics: monthlyMetrics,
            main_categories: categoryMetrics,
            channel_analysis: channelMetrics,
            customer_analysis: customerMetrics
          })
        } catch (error) {
          reject(new Error('Error parsing CSV data: ' + error))
        }
      },
      header: true,
      skipEmptyLines: true,
      error: (error) => {
        reject(new Error('Error reading CSV file: ' + error))
      }
    })
  })
}
