'use client'

import { ChangeEvent, useState } from 'react'

import useStore from '@/components/service/zustand/store.instance'

import { AuthAPI } from '@/components/service/api/auth/auth.api'

import type { useAuthFormType } from './useAuthForm.type'

interface FormData {
  identifier: string
  password: string
}

export const useAuthForm = (): useAuthFormType => {
  const [authData, setAuthData] = useState<FormData>({
    identifier: '',
    password: '',
  })
  const [message, setMessage] = useState<string>('')
  const { login, setIsOpenPopup } = useStore()

  const fetchLoginUser = async (dto: FormData) => {
    try {
      const api = new AuthAPI('POST')

      const data = await api.login(dto)

      if (data) login(data.user, data.jwt)

      setMessage('Вы зарегистрированы')

      setTimeout(() => setIsOpenPopup(false), 1500)
    } catch {
      setMessage('Неверный логин или пароль')
    }
  }

  const submit = () => {
    fetchLoginUser(authData)
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  return {
    submit,
    changeInput,
    authData,
    message,
  }
}
