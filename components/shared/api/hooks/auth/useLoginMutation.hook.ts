'use client'

import { useMutation } from '@tanstack/react-query'

import { AuthApiService } from '@/components/shared'
import { LoginUserDto } from '@/dto'

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: async (dto: LoginUserDto) => await AuthApiService.login(dto),
  })
}
