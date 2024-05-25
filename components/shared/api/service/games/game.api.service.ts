import { GameType } from '@/components/service/types/game.type'
import { CreateGameDto, QueryGamesDto, UpdateGameDto } from '@/dto'

import { APIService } from '../../api.instance'

class GameApiService extends APIService {
  private prefix = '/game'

  public async getAllGames(query?: QueryGamesDto): Promise<ServerResponse<GameType[]>> {
    const queryValue = query?.category ? `?category=${query.category}` : ''
    const { data } = await this.api.get<ServerResponse<GameType[]>>(`${this.prefix}${queryValue}`)

    return data
  }

  public async getGameById(id: string): Promise<ServerResponse<GameType>> {
    const { data } = await this.api.get<ServerResponse<GameType>>(`${this.prefix}/${id}`)

    return data
  }

  public async createGame(dto: CreateGameDto): Promise<ServerResponse<GameType>> {
    const { data } = await this.api.post<ServerResponse<GameType>>(this.prefix, dto)

    return data
  }

  public async updateGame({ id, ...dto }: UpdateGameDto): Promise<ServerResponse<GameType>> {
    const { data } = await this.api.put<ServerResponse<GameType>>(`${this.prefix}/${id}`, dto)

    return data
  }
  public async deleteGame(id: number): Promise<ServerResponse<GameType>> {
    const { data } = await this.api.delete<ServerResponse<GameType>>(`${this.prefix}/${id}`)

    return data
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GameApiService()
