'use client'

import { FC } from 'react'

import CardGame from '@/ui/GameCard/CardGame'

import s from './style.module.css'

import type { GameType } from '@/components/service/types/game.type'

interface Props {
  title: string
  data: GameType[]
}

const CardList: FC<Props> = ({ title, data }) => {
  return (
    <section className={s['list-section']}>
      <h2 className={s['list-section__title']} id='popular'>
        {title}
      </h2>
      <ul className={s['cards-list']}>
        {data && data.map(card => <CardGame key={card.id} {...card} />)}
      </ul>
    </section>
  )
}

export default CardList
