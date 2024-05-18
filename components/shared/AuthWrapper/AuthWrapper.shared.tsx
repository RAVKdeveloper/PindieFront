'use client'

import { FC, ReactNode } from 'react'

import { useAuth } from './logic/useAuth.model'

export const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  useAuth()

  return <>{children}</>
}
