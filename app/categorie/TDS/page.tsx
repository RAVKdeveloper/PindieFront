import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const TDSPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('TDS')

  return (
    <main>
      <CardList title={'TDS'} data={data} />
    </main>
  )
}

export default TDSPage