import Popup from '../Popup/Popup';

import Overlay from './Overlay';

import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Overlay> = {
    title: 'Overlay',
    component: Overlay,
  };

  export default meta;
  type Story = StoryObj<typeof Overlay>;

  export const Default: Story = {
    args: {
        children: 'This Overlay',
        isOpen: true
    }
  };

  export const WithPopup: Story = {
    args: {
        children: <Popup isOpen={true}>wer</Popup>,
        isOpen: true
    }
  }