import { FC } from 'react'

import { RegistrationForm } from '@/components/Entitys/Forms/RegistrationForm/ui/RegistrationForm.ui'

import s from './style.module.css'

export const Registration: FC = () => {
  return (
    <div className={s.form}>
      <RegistrationForm />
    </div>
  )
}
