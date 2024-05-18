'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Overlay from '@/ui/Overlay/Overlay'
import Popup from '@/ui/Popup/Popup'
import AuthForm from '@/components/Entitys/Forms/AuthForm/AuthForm'

// import { useAuth } from '@/components/shared/AuthWrapper/logic/useAuth.model'
import useStore from '@/components/service/zustand/store.instance'

import { arrNavHeader } from '@/db/data'

import logo from '@/images/logo.svg'

import s from './style.module.css'

const Header: FC = () => {
  const pathName = usePathname()
  const { isAuth, logout, isOpenPopup, setIsOpenPopup } = useStore()

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPopup = () => setIsOpenPopup(true)

  const closePopup = () => setIsOpenPopup(false)

  return (
    <header className={s.header}>
      <Link href='/' className={s.logo}>
        <Image className={s['logo__image']} src={logo} alt='Логотип Pindie' />
      </Link>
      <nav className={s.menu}>
        <ul className={s['menu__list']}>
          {arrNavHeader.map(({ name, route }, i) => (
            <li key={i} className={s['menu__item']}>
              <Link
                href={route}
                className={pathName === route ? `${s['menu__link']} ${s.active}` : s['menu__link']}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        {!isAuth && (
          <div className={s.auth}>
            <button onClick={openPopup} className={s['auth__button']}>
              Войти
            </button>
          </div>
        )}
        {isAuth && (
          <div className={s.auth}>
            <button onClick={logout} className={s['auth__button']}>
              Выйти
            </button>
          </div>
        )}
      </nav>
      {!isAuth && (
        <>
          <Overlay isOpen={isOpenPopup} close={closePopup} />
          <Popup isOpen={isOpenPopup} setIsOpen={closePopup}>
            <AuthForm />
          </Popup>
        </>
      )}
    </header>
  )
}

export default Header
