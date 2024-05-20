import { create } from 'zustand'

import { tokenKey } from '@/configs/server.config'

import type { UserType } from '../types/user.type'
import type { StoreType } from './store.type'

const useStore = create<StoreType>(set => ({
  isAuth: false,
  user: null,
  token: null,
  isOpenPopup: false,
  login: (user: UserType) => {
    set({
      isAuth: true,
      user: { _id: user._id, email: user.email, password: user.password, username: user.username },
    })
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
