import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Routes } from '../../routes/routes'

import s from './style.module.css'

import type { GameType } from '@/components/service/types/game.type'


const CardGame: FC<GameType> = ({ id, image, title, description, developer, users_permissions_users }) => {

    return (

        <li className={s['cards-list__item']}>
        <Link href={`${Routes.oneGame}${id}`} className={s['card-list__link']}>
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
              <p className={s['card__description']}>
                 {description}
              </p>
              <div className={s['card__info-container']}>
                <p className={s['card__author']}>
                  Автор: <span className={s['card__accent']}>{developer}</span>
                </p>
                <p className={s['card__votes']}>
                  Голосов на сайте: <span className={s['card__accent']}>{users_permissions_users.length}</span>
                </p>
              </div>
            </div>
          </article>
        </Link>
        </li>
    )
}

export default CardGame