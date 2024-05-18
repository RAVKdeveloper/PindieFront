'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import { useLoginMutation } from '@/components/shared'
import { Routes } from '@/routes/routes'

import type { FormData, useAuthFormType } from './useAuthForm.type'

export const useAuthForm = (): useAuthFormType => {
  const [authData, setAuthData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState<string>('')
  const { mutate, isSuccess, isError } = useLoginMutation()
  const { push } = useRouter()

  const fetchLoginUser = async (dto: FormData) => {
    mutate(dto)
  }

  const submit = () => {
    fetchLoginUser(authData)
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (isSuccess) {
      setMessage('Вы зарегистрированы')
      push(Routes.dashboard)
    }

    if (!isSuccess && isError) setMessage('Неверный логин или пароль')
  }, [isError, isSuccess])

  return {
    submit,
    changeInput,
    authData,
    message,
  }
}
