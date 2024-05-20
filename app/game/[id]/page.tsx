'use client'

import { FC } from 'react'

import GamePage from '@/components/pages/game/Game.page'

interface Props {
  params: { id: string }
}

const Game: FC<Props> = ({ params }) => {
  return (
    <main>
      <GamePage id={params.id} />
    </main>
  )
}

export default Game
