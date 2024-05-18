import { FC, ReactNode } from 'react'

import Header from '@/components/widgets/Header/header'
import Footer from '@/components/widgets/Footer/footer'

import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper.shared'
import { AuthWrapper } from '../AuthWrapper/AuthWrapper.shared'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <ScrollWrapper>
      <AuthWrapper>
        <Header />
        {children}
        <Footer />
      </AuthWrapper>
    </ScrollWrapper>
  </>
)
