import { useQuery } from '@tanstack/react-query'

import { AuthApiService } from '@/components/shared'

export const useMeQuery = () => {
  return useQuery({
    queryKey: ['getMe'],
    queryFn: async () => await AuthApiService.me(),
  })
}
