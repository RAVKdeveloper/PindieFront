import { FC } from 'react'
import Link from 'next/link'

import s from './style.module.css'

const Footer: FC = () => {
  const arrLi = ['YT', 'BK', 'TG']

  return (
    <footer className={s.footer}>
      <Link href={'/'} className={s['footer__logo']}>
        <span className={s['footer__logo-name']}>pindie</span>
        <span className={s['footer__logo-copy']}>, XXI век</span>
      </Link>
      <ul className={s['social-list']}>
        {arrLi.map((el, i) => (
          <li key={i} className={s['social-list__item']}>
            <Link href={'/'} className={`${s.button} ${s['social-list__link']}`}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
