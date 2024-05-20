import { useMutation } from '@tanstack/react-query'

import { VoteApiService } from '@/components/shared'
import { CreateVoteDto } from '@/dto'

export const useCreateVoteMutation = () => {
  return useMutation({
    mutationKey: ['createVote'],
    mutationFn: async (dto: CreateVoteDto) => await VoteApiService.createVote(dto),
  })
}
