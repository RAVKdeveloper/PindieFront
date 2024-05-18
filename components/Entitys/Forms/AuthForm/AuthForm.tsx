'use client'

import { FC } from 'react'

import TextField from '@/ui/TextField/TextField'
import FormBtn from '@/ui/FormBtn/FormBtn'

import { useAuthForm } from './logic/useAuthForm.model'

import s from './style.module.css'

const AuthForm: FC = () => {
  const { submit, changeInput, authData, message } = useAuthForm()

  return (
    <form className={s['form']}>
      <h2 className={s['form__title']}>Авторизация</h2>
      <div className={s['form__fields']}>
        <TextField
          name='identifier'
          value={authData.identifier}
          label='Email'
          type='email'
          placeholder='hello@world.com'
          onChange={changeInput}
        />
        <TextField
          name='password'
          value={authData.password}
          label='Пароль'
          type='password'
          placeholder='***********'
          onChange={changeInput}
        />
        {message && <p className={s.message}>{message}</p>}
      </div>
      <div className={s['form__actions']}>
        <FormBtn text='Очистить' type='reset' variant={'basic'} />
        <FormBtn onClick={submit} text='Войти' type='button' variant='primary' />
      </div>
    </form>
  )
}

export default AuthForm
