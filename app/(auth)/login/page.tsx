import { FC } from 'react'

import AuthForm from '@/components/Entitys/Forms/AuthForm/AuthForm'

import s from './style.module.css'

const LoginPage: FC = () => {
  return (
    <main>
      <div className={s.content}>
        <div className={s.conteiner}>
          <AuthForm />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
