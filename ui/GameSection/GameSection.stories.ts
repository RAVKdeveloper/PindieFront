import GameSection from './GameSection'

import type { Meta, StoryObj } from '@storybook/react'


// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof GameSection> = {
    title: 'GameSection',
    component: GameSection,
};

  export default meta;
  type Story = StoryObj<typeof GameSection>;


export const Default: Story = {
    args: {
        source: 'https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/game/index.html'
    }
}