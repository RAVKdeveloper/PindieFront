import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { GamesApi } from '@/components/service/api/games/games.api'


const RunnerPage: FC = async () => {
  const data = await new GamesApi('GET').getByCategories('runner')

  return (
    <main>
      <CardList title={'RUNNER'} data={data} />
    </main>
  )
}

export default RunnerPage