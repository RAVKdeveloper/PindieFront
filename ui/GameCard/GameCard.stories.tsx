import CardGame from './CardGame';

import type { Meta, StoryObj } from '@storybook/react'

import '../../styles/global.css'


// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof CardGame> = {
    title: 'CardGame',
    component: CardGame,
};

  export default meta;
  type Story = StoryObj<typeof CardGame>;


  export const Default: Story = {
    args: {
        id: 1,
        name: 'Go Away',
        img: 'https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg',
        desc: `Управляй автомобилем, избегая аварий и перепрыгивая препятствия 
        на пути к следующему уровню.`,
        author: 'Mahisto',
        visible: [
            {
                id: 1,
                name: 'hello@gmail.com'
            },
            {
                id: 2,
                name: 'oleg@gamil.com'
            }
        ],
        type: ['new']
    }
  };