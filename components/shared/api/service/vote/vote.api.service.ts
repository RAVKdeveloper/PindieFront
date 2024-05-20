import { CreateVoteDto, RemoveVoteDto } from '@/dto'

import { APIService } from '../../api.instance'

class VoteApiService extends APIService {
  private prefix = '/vote'

  public async createVote(dto: CreateVoteDto) {
    const { data } = await this.api.post(this.prefix, dto)

    return data
  }

  public async removeVote(dto: RemoveVoteDto) {
    const { data } = await this.api.delete(`${this.prefix}/${dto.gameId}`)

    return data
  }
}

export default new VoteApiService()
