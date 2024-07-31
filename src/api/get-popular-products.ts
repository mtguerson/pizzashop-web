import { api } from '@/lib/axios'

export type GetPouplarProductsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPouplarProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
