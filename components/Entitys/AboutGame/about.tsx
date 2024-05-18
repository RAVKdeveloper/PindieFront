'use client'

import { FC } from 'react'

import FormBtn from '@/ui/FormBtn/FormBtn'
import Popup from '@/ui/Popup/Popup'
import Overlay from '@/ui/Overlay/Overlay'

import AuthForm from '../Forms/AuthForm/AuthForm'

import { useAbout } from './logic/useAbout.model'

import s from './style.module.css'

import type { GameType } from '@/components/service/types/game.type'

const AboutGame: FC<GameType> = ({
  title,
  description,
  developer,
  id,
  users_permissions_users,
}) => {
  const { fetchVoited, voited, isOpenPopup, closePopup } = useAbout(users_permissions_users)

  return (
    <section className={s['about']}>
      <h2 className={s['about__title']}>{title}</h2>
      <div className={s['about__content']}>
        <p className={s['about__description']}>{description}</p>
        <div className={s['about__author']}>
          <p>
            Автор:
            <span className={s['about__accent']}>{developer}</span>
          </p>
        </div>
      </div>
      <div className={s['about__vote']}>
        <p className={s['about__vote-amount']}>
          За игру уже проголосовали:
          <span className={s['about__accent']}>{users_permissions_users.length}</span>
        </p>
        {voited ? (
          <FormBtn text={'Голос учтён'} variant='primary' disabled={true} borderR />
        ) : (
          <FormBtn onClick={() => fetchVoited(id)} text={'Голосовать'} variant='primary' borderR />
        )}
      </div>
      <Overlay isOpen={isOpenPopup} close={closePopup} />
      <Popup isOpen={isOpenPopup} setIsOpen={closePopup}>
        <AuthForm />
      </Popup>
    </section>
  )
}

export default AboutGame
