'use client'

import { FC } from 'react'

import FormBtn from '@/ui/FormBtn/FormBtn'
import Overlay from '@/ui/Overlay/Overlay'
import Popup from '@/ui/Popup/Popup'

import AuthForm from '../Forms/AuthForm/AuthForm'

import { useAbout } from './logic/useAbout.model'

import s from './style.module.css'

import type { GameType } from '@/components/service/types/game.type'

const AboutGame: FC<GameType> = ({ title, description, developer, _id, vote }) => {
  const { isOpenPopup, closePopup, voited, addVoteToGame, removeVoteToGame, user } = useAbout(vote)

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
        {user && (
          <p className={s['about__vote-amount']}>
            За игру уже проголосовали:
            <span className={s['about__accent']}>{vote.length}</span>
          </p>
        )}
        {user ? (
          voited ? (
            <FormBtn
              onClick={() => removeVoteToGame(_id)}
              text={'Голос учтён'}
              variant='primary'
              disabled={true}
              borderR
            />
          ) : (
            <FormBtn
              onClick={() => addVoteToGame(_id)}
              text={'Голосовать'}
              variant='primary'
              borderR
            />
          )
        ) : (
          <p>Для того чтобы проголосовать надо авторизоваться</p>
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
