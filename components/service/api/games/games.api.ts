import { ServerApi, ServerEndpoints, tokenKey } from '@/configs/server.config'

import { API, Methods } from '../api.service'

import { UserType } from '../../types/user.type'

import type { GameType } from '../../types/game.type'

export class GamesApi extends API {
  constructor(method: Methods, url?: string | undefined) {
    super(method, url)
  }

  async allGames(): Promise<GameType[]> {
    const apiUrl = this.url ?? ServerEndpoints.allGames
    const respones = await fetch(`${ServerApi}${apiUrl}`)

    const data = await respones.json()

    return data
  }

  async getByCategories(categorie: string): Promise<GameType[]> {
    const apiUrl = this.url ?? ServerEndpoints.categoriesGame
    const respones = await fetch(`${ServerApi}${apiUrl}${categorie}`)

    const data = await respones.json()

    return data
  }

  async getById(id: number): Promise<GameType> {
    const apiUrl = this.url ?? `${ServerEndpoints.allGames}/${id}`
    const respones = await fetch(`${ServerApi}${apiUrl}`)

    const data = await respones.json()

    return data
  }

  async putVoited(gameId: number, usersArray: number[]): Promise<UserType[]> {
    const token = localStorage.getItem(tokenKey)

    const apiUrl = this.url ?? `${ServerEndpoints.allGames}/${gameId}`
    const respones = await fetch(`${ServerApi}${apiUrl}`, {
      method: this.method ?? 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ users_permissions_users: usersArray }),
    })

    const data = await respones.json()

    return data
  }
}
