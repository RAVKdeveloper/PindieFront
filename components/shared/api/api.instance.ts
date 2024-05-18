import { QueryClient } from '@tanstack/react-query'

import { apiInstance } from './axios.instance'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export abstract class APIService {
  protected api = apiInstance
}
