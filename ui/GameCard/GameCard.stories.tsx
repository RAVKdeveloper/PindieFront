import CardGame from './CardGame'

import type { Meta, StoryObj } from '@storybook/react'

import '../../styles/global.css'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof CardGame> = {
  title: 'CardGame',
  component: CardGame,
}

export default meta
type Story = StoryObj<typeof CardGame>

export const Default: Story = {
  args: {
    _id: 'erwerewr3r',
    title: 'Go Away',
    image: 'https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg',
    description: `Управляй автомобилем, избегая аварий и перепрыгивая препятствия 
        на пути к следующему уровню.`,
    developer: 'Mahisto',
    vote: ['2e2eqwewqewe'],
    categories: ['new'],
  },
}
