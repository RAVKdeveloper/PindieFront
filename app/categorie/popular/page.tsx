import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const PopularPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('popular')

  return (
    <main>
      <CardList title={'POPULAR'} data={data} />
    </main>
  )
}

export default PopularPage