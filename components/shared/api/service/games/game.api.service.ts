import { GameType } from '@/components/service/types/game.type'
import { CreateGameDto, QueryGamesDto, UpdateGameDto } from '@/dto'

import { APIService } from '../../api.instance'

class GameApiService extends APIService {
  private prefix = '/game'

  public async getAllGames(query?: QueryGamesDto): Promise<ServerRespones<GameType[]>> {
    const queryValue = query?.category ? `?category=${query.category}` : ''
    const { data } = await this.api.get<ServerRespones<GameType[]>>(`${this.prefix}${queryValue}`)

    return data
  }

  public async getGameById(id: string): Promise<ServerRespones<GameType>> {
    const { data } = await this.api.get<ServerRespones<GameType>>(`${this.prefix}/${id}`)

    return data
  }

  public async createGame(dto: CreateGameDto): Promise<ServerRespones<GameType>> {
    const { data } = await this.api.post<ServerRespones<GameType>>(this.prefix, dto)

    return data
  }

  public async updateGame({ id, ...dto }: UpdateGameDto): Promise<ServerRespones<GameType>> {
    const { data } = await this.api.put<ServerRespones<GameType>>(`${this.prefix}/${id}`, dto)

    return data
  }
  public async deleteGame(id: number): Promise<ServerRespones<GameType>> {
    const { data } = await this.api.delete<ServerRespones<GameType>>(`${this.prefix}/${id}`)

    return data
  }
}

export default new GameApiService()
