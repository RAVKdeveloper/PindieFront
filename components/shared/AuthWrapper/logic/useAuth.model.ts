'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import useStore from '@/components/service/zustand/store.instance'

import { AuthAPI } from '@/components/service/api/auth/auth.api'

export const useAuth = () => {
  const pathname = usePathname()
  const { setAuth } = useStore()

  const fetchMe = async () => {
    try {
      const api = new AuthAPI('GET')

      const data = await api.me()

      if (data) setAuth(true, data)
      else setAuth(false, null)
    } catch {
      alert('Произошла ошибка авторизации ')
    }
  }

  useEffect(() => {
    fetchMe()
  }, [pathname])
}
