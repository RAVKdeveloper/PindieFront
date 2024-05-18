import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const ShooterPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('shooter')

  return (
    <main>
      <CardList title={'SHOOTER'} data={data} />
    </main>
  )
}

export default ShooterPage