import { create } from 'zustand'

import { tokenKey } from '@/configs/server.config'

import type { StoreType } from './store.type'
import type { UserType } from '../types/user.type'

const useStore = create<StoreType>(set => ({
  isAuth: false,
  user: null,
  token: null,
  isOpenPopup: false,
  login: (user: UserType, token: string) => {
    set({ isAuth: true, user, token })
  },
  logout: () => {
    localStorage.removeItem(tokenKey)
    set({ isAuth: false, user: null, token: null })
  },
  setAuth: (auth: boolean, user: UserType | null) => {
    set({ isAuth: auth, user })
  },
  setIsOpenPopup: (state: boolean) => {
    set({ isOpenPopup: state })
  },
}))

export default useStore
