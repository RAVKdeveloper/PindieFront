import { useEffect, useState } from 'react'

import { arrCards } from '@/db/data'

import type { CardType } from '@/db/data'

export const useGetCard = (cardId: number): CardType[] | undefined => {
  const [cardValue, setCard] = useState<CardType[]>()

  useEffect(() => {
    if (cardId) filteringCards()
  }, [cardId])

  function filteringCards() {
    const card = arrCards.filter(({ id }) => id === cardId)

    setCard(card)
  }

  return cardValue
}
