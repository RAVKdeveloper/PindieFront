'use client'

import { FC, ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ScrollWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
