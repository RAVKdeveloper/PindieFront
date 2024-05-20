'use client'

import { FC } from 'react'

import { useGetAllGamesQuery } from '@/components/shared'

import BannerHomePage from '@/components/HomePage/Banner/banner'
import CardList from '@/components/HomePage/CardList/CardList'
import PromoHomePage from '@/components/HomePage/Promo/promo'

const HomePage: FC = () => {
  const { data } = useGetAllGamesQuery()

  return (
    <>
      <BannerHomePage />
      {data && data.data && <CardList title={'Все игры'} data={data.data} />}
      <PromoHomePage />
    </>
  )
}

export default HomePage
