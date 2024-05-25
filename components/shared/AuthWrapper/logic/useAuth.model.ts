'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import useStore from '@/components/service/zustand/store.instance'

import { useMeQuery } from '@/components/shared'

import type { UserType } from '@/components/service/types/user.type'

export const useAuth = () => {
  const pathname = usePathname()
  const { setAuth } = useStore()
  const { data, isError, isSuccess } = useMeQuery()

  const trueAuth = (user: UserType) => {
    setAuth(true, user)
  }

  const falseAuth = () => {
    setAuth(false, null)
  }

  useEffect(() => {
    if (isSuccess && data) trueAuth(data.user)

    if (isError && !isSuccess) falseAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, data])
}
