import { FC } from 'react'

import { GamesApi } from '@/components/service/api/games/games.api'

import BannerHomePage from '@/components/HomePage/Banner/banner'
import CardList from '@/components/HomePage/CardList/CardList'
import PromoHomePage from '@/components/HomePage/Promo/promo'

const HomePage: FC = async () => {
  const newCards = await new GamesApi('GET').getByCategories('new')
  const popularCards = await new GamesApi('GET').getByCategories('popular')

  return (
    <>
      <BannerHomePage />
      <CardList title={'Популярное'} data={popularCards} />
      <CardList title={'Новинки'} data={newCards} />
      <PromoHomePage />
    </>
  )
}

export default HomePage
