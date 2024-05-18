import { FC, useState, useEffect } from 'react'
import Image from 'next/image'

import promoImage from '@/images/promo-illustration.svg'

import s from './style.module.css'

const PromoHomePage: FC = () => {
  const [codeIsVisible, setCodeIsVisible] = useState<boolean>(false)

  const handleCodeClick = () => setCodeIsVisible(!codeIsVisible)

  useEffect(() => {
    if (codeIsVisible) {
      const timeoutCode = setTimeout(() => setCodeIsVisible(false), 5000)

      return () => clearTimeout(timeoutCode)
    }
  }, [codeIsVisible])

  const isCodeRendering = codeIsVisible ? 'WEBTEENS10' : 'Получить код'

  return (
    <section className={s.promo}>
      <div className={s['promo__description-block']}>
        <h2 className={s['promo__title']}>Твой промо-код</h2>
        <p className={s['promo__description']}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button onClick={handleCodeClick} className={`${s.button} ${s['promo__button']}`}>
          {isCodeRendering}
        </button>
      </div>
      <Image src={promoImage} alt='Собака' className={s['promo__image']} />
    </section>
  )
}

export default PromoHomePage
