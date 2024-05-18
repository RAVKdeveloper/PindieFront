'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

import { queryClient } from '@/components/shared'

export const ReactQueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
