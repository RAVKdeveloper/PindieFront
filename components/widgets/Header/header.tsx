'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import useStore from '@/components/service/zustand/store.instance'
import { useGetAllCategoriesQuery } from '@/components/shared'

import { Routes } from '@/routes/routes'

import logo from '@/images/logo.svg'

import s from './style.module.css'

const Header: FC = () => {
  const pathName = usePathname()
  const { isAuth, logout } = useStore()
  const { data } = useGetAllCategoriesQuery()

  return (
    <header className={s.header}>
      <Link href='/' className={s.logo}>
        <Image className={s['logo__image']} src={logo} alt='Логотип Pindie' />
      </Link>
      <nav className={s.menu}>
        <ul className={s['menu__list']}>
          {data &&
            data.data &&
            data.data.map(({ name, _id }) => (
              <li key={_id} className={s['menu__item']}>
                <Link
                  href={`/categorie/${_id}`}
                  className={pathName === _id ? `${s['menu__link']} ${s.active}` : s['menu__link']}
                >
                  {name}
                </Link>
              </li>
            ))}
        </ul>
        {!isAuth && (
          <Link href={Routes.login} className={s.authLink}>
            <div className={s.auth}>
              <button className={s['auth__button']}>Войти</button>
            </div>
          </Link>
        )}
        {isAuth && (
          <div className={s.auth}>
            <button onClick={logout} className={s['auth__button']}>
              Выйти
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
