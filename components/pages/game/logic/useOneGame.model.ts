import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { GamesApi } from '@/components/service/api/games/games.api'

import type { GameType } from '@/components/service/types/game.type'

export const useOneGame = (id: number): { card: GameType | undefined; isFetching: boolean } => {
  const [card, setCard] = useState<GameType>()
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const { push } = useRouter()

  const fetchCard = async () => {
    try {
      const data = await new GamesApi('GET').getById(id)

      setCard(data)
    } catch {
      alert('Ошибка при получении игры')
      push('/not-found')
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    if (id) fetchCard()
  }, [id])

  return {
    card,
    isFetching,
  }
}
