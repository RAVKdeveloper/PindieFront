import type { UserType } from '../types/user.type'

export interface StoreType {
  isAuth: boolean
  user: null | UserType
  token: null | string
  login: (user: UserType) => void
  logout: () => void
  setAuth: (auth: boolean, user: UserType | null) => void
  isOpenPopup: boolean
  setIsOpenPopup: (state: boolean) => void
}
