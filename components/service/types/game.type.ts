import type { CategoriesType } from './categories.type'
import type { UserType } from './user.type'

export interface GameType {
  id: number
  title: string
  developer: string
  description: string
  image: string
  link: string
  published_at: string
  created_at: string
  updated_at: string
  user: null | UserType[]
  categories: CategoriesType[]
  users_permissions_users: UserType[]
}
