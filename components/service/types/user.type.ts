import type { UserRoleType } from './userRole.type'

export interface UserType {
  id: number
  games: null
  email: string
  provider: string
  blocked: boolean
  confirmed: boolean
  created_at: string
  role: UserRoleType
  username: string
  updated_at: string
}
