import { FC, ReactNode } from 'react'

import { ReactQueryProvider } from '@/components/providers/ReactQuery.provider'
import Footer from '@/components/widgets/Footer/footer'
import Header from '@/components/widgets/Header/header'

import { AuthWrapper } from '../AuthWrapper/AuthWrapper.shared'
import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper.shared'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <ReactQueryProvider>
      <ScrollWrapper>
        <AuthWrapper>
          <Header />
          {children}
          <Footer />
        </AuthWrapper>
      </ScrollWrapper>
    </ReactQueryProvider>
  </>
)
