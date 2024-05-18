import { ServerEndpoints, ServerApi, tokenKey } from '@/configs/server.config'

import { API } from '../api.service'

import type { LoginDto } from './dto/login.dto'
import type { Methods } from '../api.service'
import type { UserType } from '../../types/user.type'

export class AuthAPI extends API {
  constructor(method: Methods, url?: string | undefined) {
    super(method, url)
  }

  async login(dto: LoginDto): Promise<{ jwt: string; user: UserType }> {
    try {
      const apiUrl = this.url ?? ServerEndpoints.auth.login
      const respones = await fetch(`${ServerApi}${apiUrl}`, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      })

      const data: { jwt: string; user: UserType } = await respones.json()

      this.tokenAction('set', data.jwt)

      return data
    } catch {
      throw new Error('Ошибка при авторизации')
    }
  }

  async me(): Promise<UserType | undefined> {
    try {
      const token = this.tokenAction('get')

      if (token) {
        const apiUrl = this.url ?? ServerEndpoints.auth.me
        const respones = await fetch(`${ServerApi}${apiUrl}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })

        const data = await respones.json()

        return data
      } else {
        return undefined
      }
    } catch (e: any) {
      throw new Error('Ошибка авторизации')
    }
  }

  tokenAction(type: 'set' | 'get', payload?: string) {
    if (type === 'set' && payload) localStorage.setItem(tokenKey, payload)

    if (type === 'get') return localStorage.getItem(tokenKey)
  }
}
