import { useQuery } from '@tanstack/react-query'

import { GameApiService } from '@/components/shared'
import { QueryGamesDto } from '@/dto'

export const useGetAllGamesQuery = (query?: QueryGamesDto) => {
  return useQuery({
    queryKey: ['getAllGames', query?.category],
    queryFn: async () => await GameApiService.getAllGames(query),
  })
}
