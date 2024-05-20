// Configs

export * from './api.instance'
export * from './axios.instance'

// Services

import AuthApiService from './service/auth/auth.api.service'
import GameApiService from './service/games/game.api.service'
import VoteApiService from './service/vote/vote.api.service'

export { AuthApiService, GameApiService, VoteApiService }

// Api hooks

export { useLoginMutation } from './hooks/auth/useLoginMutation.hook'
export { useMeQuery } from './hooks/auth/useMeQuery.hook'
export { useRegistrationMutation } from './hooks/auth/useRegistrationMutation.hook'
export { useGetAllGamesQuery } from './hooks/game/useGetAllGamesQuery.hook'
export { useGetGameByIdQuery } from './hooks/game/useGetGameByIdQuery.hook'
export { useCreateVoteMutation } from './hooks/vote/useCreateVoteMutation.hook'
export { useRemoveVoteMutation } from './hooks/vote/useRemoveVoteMutation.hook'
