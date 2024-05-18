import { ChangeEvent } from 'react'

export interface useAuthFormType {
  submit: () => void
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
  authData: { identifier: string; password: string }
  message: string
}
