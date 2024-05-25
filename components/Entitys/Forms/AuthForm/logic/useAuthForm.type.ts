import { ChangeEvent } from 'react'

export interface FormData {
  email: string
  password: string
}

export interface useAuthFormType {
  submit: () => void
  // eslint-disable-next-line no-unused-vars
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
  authData: FormData
  message: string
}
