export interface MarketingData {
  total_revenue: number
  total_customers: number
  total_orders: number
  average_order_value: number
  daily_metrics: DailyMetric[]
  monthly_metrics: MonthlyMetric[]
  main_categories: CategoryMetric[]
  channel_analysis: ChannelMetric[]
  customer_analysis: CustomerMetric[]
}

export interface DailyMetric {
  date: string
  revenue: number
  orders: number
  customers: number
}

export interface MonthlyMetric {
  month: string
  revenue: number
  orders: number
  customers: number
}

export interface CategoryMetric {
  category: string
  revenue: number
  orders: number
  percentage: number
}

export interface ChannelMetric {
  channel: string
  revenue: number
  customers: number
  conversion_rate: number
}

export interface CustomerMetric {
  customer_id: string
  total_spent: number
  order_count: number
  average_order_value: number
  last_purchase_date: string
}
