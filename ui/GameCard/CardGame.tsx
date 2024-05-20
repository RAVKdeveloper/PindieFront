import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Routes } from '../../routes/routes'

import s from './style.module.css'

import type { GameType } from '@/components/service/types/game.type'

const CardGame: FC<GameType> = ({ _id, image, title, description, developer }) => {
  return (
    <li className={s['cards-list__item']}>
      <Link href={`${Routes.oneGame}${_id}`} className={s['card-list__link']}>
        <article className={s.card}>
          <Image
            unoptimized
            loader={() => image}
            src={image}
            alt={title}
            className={s['card__image']}
            width={396.4}
            height={264.26}
          />
          <div className={s['card__content-block']}>
            <h3 className={s['card__title']}>{title}</h3>
            <p className={s['card__description']}>{description}</p>
            <div className={s['card__info-container']}>
              <p className={s['card__author']}>
                Автор: <span className={s['card__accent']}>{developer}</span>
              </p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default CardGame
