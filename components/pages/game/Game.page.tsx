'use client'

import { FC } from 'react'

import GameSection from '@/ui/GameSection/GameSection'
import AboutGame from '@/components/Entitys/AboutGame/about'

import { Loader } from './loader/Loader'

import { useOneGame } from './logic/useOneGame.model'

const GamePage: FC<{ id: number }> = ({ id }) => {
  const { card, isFetching } = useOneGame(id)

  return (
    <>
      {card && !isFetching ? (
        <>
          <GameSection source={card.link} />
          <AboutGame {...card} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default GamePage
