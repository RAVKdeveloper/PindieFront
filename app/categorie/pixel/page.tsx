import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const PixelPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('pixel')

  return (
    <main>
      <CardList title={'PIXEL'} data={data} />
    </main>
  )
}

export default PixelPage