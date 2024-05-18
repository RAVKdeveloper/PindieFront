'use client'

import { FC } from 'react'

import HomePage from '@/components/pages/home/Home.page'

import s from './page.module.css'

const Home: FC = () => {
  return (
    <main className={s.main}>
      <HomePage />
    </main>
  )
}

export default Home
