'use client'

import { FC } from 'react'

import { useGetGameByIdQuery } from '@/components/shared'

import AboutGame from '@/components/Entitys/AboutGame/about'
import GameSection from '@/ui/GameSection/GameSection'

import { Loader } from './loader/Loader'

const GamePage: FC<{ id: string }> = ({ id }) => {
  const { data, isFetching } = useGetGameByIdQuery(id)

  return (
    <>
      {data && data.data && !isFetching ? (
        <>
          <GameSection source={data.data.link} />
          <AboutGame {...data.data} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default GamePage
