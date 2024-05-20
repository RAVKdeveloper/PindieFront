import { useQuery } from '@tanstack/react-query'

import { GameApiService } from '@/components/shared'

export const useGetGameByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['getGameById'],
    queryFn: async () => await GameApiService.getGameById(id),
  })
}
