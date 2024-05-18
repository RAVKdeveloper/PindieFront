import { useEffect, useState } from 'react'

import useStore from '@/components/service/zustand/store.instance'

import { GamesApi } from '@/components/service/api/games/games.api'

import type { UserType } from '@/components/service/types/user.type'
import type { useAboutType } from './useAbout.type'

export const useAbout = (users_permissions_users: UserType[]): useAboutType => {
  const [voited, setIsVoited] = useState<boolean>(false)
  const { user, setIsOpenPopup, isOpenPopup } = useStore()

  const fetchVoited = async (gameId: number) => {
    try {
      const api = new GamesApi('PUT')

      const userArr = users_permissions_users.map(user => user.id)

      if (user) {
        userArr.push(user.id)

        await api.putVoited(gameId, userArr)

        setIsVoited(true)
      } else setIsOpenPopup(true)
    } catch {
      alert('Произошла ошибка')
    }
  }

  const filterVoited = () => {
    if (user) {
      const isVoited = users_permissions_users.filter(person => person.id === user.id)

      if (isVoited.length > 0) return setIsVoited(true)

      return setIsVoited(false)
    }
  }

  const closePopup = () => setIsOpenPopup(false)

  useEffect(() => {
    if (user) filterVoited()
  }, [user])

  return {
    fetchVoited,
    voited,
    isOpenPopup,
    closePopup,
  }
}
