import { ChangeEvent } from 'react'

export interface FormData {
  email: string
  password: string
}

export interface useAuthFormType {
  submit: () => void
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
  authData: FormData
  message: string
}
