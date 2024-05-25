import { useMutation } from '@tanstack/react-query'

import { AuthApiService } from '@/components/shared'

import { RegistrationUserDto } from '@/dto'

export const useRegistrationMutation = () => {
  return useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (dto: RegistrationUserDto) => await AuthApiService.registration(dto),
  })
}
