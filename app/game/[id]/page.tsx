'use client'

import { FC } from 'react'

import GamePage from '@/components/pages/game/Game.page'

interface Props {
  params: { id: string }
}

const Game: FC<Props> = ({ params }) => {
  const idNumber = Number(params.id)

  return (
    <main>
      <GamePage id={idNumber} />
    </main>
  )
}

export default Game
