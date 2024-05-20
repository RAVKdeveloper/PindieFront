import { useEffect, useState } from 'react'

import useStore from '@/components/service/zustand/store.instance'

import { useCreateVoteMutation, useRemoveVoteMutation } from '@/components/shared'

export const useAbout = (votes: string[]) => {
  const [voited, setIsVoited] = useState<boolean>(false)
  const { user, setIsOpenPopup, isOpenPopup } = useStore()
  const { mutate: createVote } = useCreateVoteMutation()
  const { mutate: removeVote } = useRemoveVoteMutation()

  const addVoteToGame = (gameId: string) => {
    createVote({ gameId })
  }

  const removeVoteToGame = (gameId: string) => {
    removeVote({ gameId })
  }

  const filterVotes = () => {
    if (votes && user) {
      const isVoites = votes.find(id => id === user._id)

      if (!isVoites) setIsVoited(false)

      if (isVoites) setIsVoited(true)
    }
  }

  const closePopup = () => setIsOpenPopup(false)

  useEffect(() => {
    filterVotes()
  }, [votes, user])

  return {
    isOpenPopup,
    closePopup,
    voited,
    user,
    addVoteToGame,
    removeVoteToGame,
  }
}
