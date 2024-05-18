import type { Meta, StoryObj } from '@storybook/react'
import Popup from "./Popup";


const meta: Meta<typeof Popup> = {
    title: 'Popup',
    component: Popup,
    argTypes: {
        color: {
            description: 'Цвет попапа',
            type: 'string'
        }
    }
  };

  export default meta;
  type Story = StoryObj<typeof Popup>;


  export const Default: Story = {
    args: {
      color: 'white',
      children: 'Hello popup',
      isOpen: true,
      borderR: false
    },
  };

  export const BorderRadius: Story = {
    args: {
      color: 'white',
      children: 'Hello popup',
      isOpen: true,
      borderR: true,
    },
  };