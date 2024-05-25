'use client'

import { FC } from 'react'

import CardList from '@/components/HomePage/CardList/CardList'

import { useGetAllGamesQuery } from '@/components/shared'

import s from './style.module.css'

interface Props {
  readonly id: string
}

export const CategoryPage: FC<Props> = ({ id }) => {
  const { data } = useGetAllGamesQuery({ category: id })

  return (
    <>
      {data && data.data && data.data.length > 0 ? (
        <CardList title='Игры по этой категории' data={data.data} />
      ) : (
        <div className={s.empty}>Игры по этой категории не найдены</div>
      )}
    </>
  )
}
