'use client'

import { FC } from 'react'
import { Controller } from 'react-hook-form'

import FormBtn from '@/ui/FormBtn/FormBtn'
import TextField from '@/ui/TextField/TextField'

import { useRegistrationForm } from '../logic/useRegistrationForm.hook'

import s from '../assets/style.module.css'

export const RegistrationForm: FC = () => {
  const { isValid, submit, handleSubmit, control, resetAllFields } = useRegistrationForm()

  return (
    <form onSubmit={handleSubmit(submit)} className={s.root}>
      <h2 className={s.title}>Регистрация</h2>
      <div className={s.fields}>
        <Controller
          control={control}
          name='username'
          render={({ field }) => {
            return <TextField label='Имя юзера' {...field} />
          }}
        />
        <Controller
          control={control}
          name='email'
          render={({ field }) => {
            return <TextField label='Email' {...field} />
          }}
        />
        <Controller
          control={control}
          name='password'
          render={({ field }) => {
            return <TextField label='Пароль' {...field} />
          }}
        />
      </div>
      <div className={s.btnRow}>
        <FormBtn onClick={resetAllFields} text='Очистить' type='reset' variant={'basic'} />
        <FormBtn text='Войти' type='submit' variant='primary' disabled={!isValid} />
      </div>
    </form>
  )
}
