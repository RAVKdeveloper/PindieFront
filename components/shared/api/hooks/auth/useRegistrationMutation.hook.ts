import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { AuthApiService } from '@/components/shared'
import { Routes } from '@/routes/routes'

import { RegistrationUserDto } from '@/dto'

export const useRegistrationMutation = () => {
  const { push } = useRouter()

  return useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (dto: RegistrationUserDto) => await AuthApiService.registration(dto),
    onSuccess: () => {
      push(Routes.dashboard)
    },
  })
}
