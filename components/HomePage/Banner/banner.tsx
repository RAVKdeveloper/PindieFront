import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import bannerImg from '@/images/banner-illustration.jpg'

import s from './style.module.css'

const BannerHomePage: FC = () => {
  return (
    <section className={s.banner}>
      <div className={s['banner__description']}>
        <h1 className={s['banner__title']}>Портал инди-игр от&nbsp;студентов Яндекс Практикума</h1>
        <div className={s['banner__text-block']}>
          <p className={s['banner__text']}>
            Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете
            играть прямо на сайте. А если у вас есть аккаунт пользователя — получаете возможность
            голосовать за игры.
          </p>
        </div>
        <Link href='#popular' className={`${s.button} ${s['banner__link']}`}>
          Смотреть игры
        </Link>
      </div>
      <Image src={bannerImg} alt='Рука, утопленная в желтом фоне' className={s['banner__image']} />
    </section>
  )
}

export default BannerHomePage
