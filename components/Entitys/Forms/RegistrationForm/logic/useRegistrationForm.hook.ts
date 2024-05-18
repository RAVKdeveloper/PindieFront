'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useRegistrationMutation } from '@/components/shared'
import { RegistrationUserDto } from '@/dto'

export const useRegistrationForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<RegistrationUserDto>({
    mode: 'all',
  })
  const { mutate } = useRegistrationMutation()

  const submit: SubmitHandler<RegistrationUserDto> = data => {
    mutate(data)
  }

  const resetAllFields = () => {
    setValue('email', '')
    setValue('password', '')
    setValue('username', '')
  }

  return {
    submit,
    handleSubmit,
    isValid,
    control,
    resetAllFields,
  }
}
