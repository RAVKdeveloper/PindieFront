import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const NewPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('new')

  return (
    <main>
      <CardList title={'NEW'} data={data} />
    </main>
  )
}

export default NewPage