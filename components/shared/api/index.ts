// Configs

export * from './api.instance'
export * from './axios.instance'

// Services

import AuthApiService from './service/auth/auth.api.service'

export { AuthApiService }

// Api hooks

export { useLoginMutation } from './hooks/auth/useLoginMutation.hook'
export { useRegistrationMutation } from './hooks/auth/useRegistrationMutation.hook'
