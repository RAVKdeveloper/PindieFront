'use client'

import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import img from '@/images/not-found.svg'

import s from './style.module.css'

const NotFoundPage: FC = () => {
  const { push } = useRouter()

  setTimeout(() => push('/'), 6000)

  return (
    <div className={s['not-found']}>
      <Image src={img} alt='' width={300} height={300} />
      <h2 className={s['not-found__text']}>Такой игры не существует :(</h2>
    </div>
  )
}

export default NotFoundPage
