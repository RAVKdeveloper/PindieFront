'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import useStore from '@/components/service/zustand/store.instance'
import { useLoginMutation } from '@/components/shared'

import type { FormData, useAuthFormType } from './useAuthForm.type'

export const useAuthForm = (): useAuthFormType => {
  const [authData, setAuthData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState<string>('')
  const { login } = useStore()
  const { mutate, isSuccess, isError, data } = useLoginMutation()

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
    if (isSuccess && data && data.user) {
      setMessage('Вы зарегистрированы')
      login(data.user)
    }

    if (!isSuccess && isError) setMessage('Неверный логин или пароль')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, data])

  return {
    submit,
    changeInput,
    authData,
    message,
  }
}
