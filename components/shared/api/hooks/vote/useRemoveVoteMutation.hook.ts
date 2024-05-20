import { useMutation } from '@tanstack/react-query'

import { VoteApiService, queryClient } from '@/components/shared'
import { RemoveVoteDto } from '@/dto'

export const useRemoveVoteMutation = () => {
  return useMutation({
    mutationKey: ['removeVote'],
    mutationFn: async (dto: RemoveVoteDto) => await VoteApiService.removeVote(dto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['getGameById'] })
    },
  })
}
