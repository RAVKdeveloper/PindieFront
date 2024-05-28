import type { UserType } from './user.type'

export interface GameType {
  _id: string
  title: string
  developer: string
  description: string
  image: string
  link: string
  created_at: string
  updated_at: string
  user: null | UserType[]
  categories: string[]
  vote: User[]
}
