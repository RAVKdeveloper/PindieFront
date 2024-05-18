import type { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'


const meta: Meta<typeof TextField> = {
    title: 'TextField',
    component: TextField,
    argTypes: {
        isError: {
            description: 'Eсть ошибка?',
        }
    }
  };

  export default meta;
  type Story = StoryObj<typeof TextField>;


  export const Default: Story = {
    args: {
        label: 'Email',
        placeholder: 'test@test.gmail',
        type: 'text',
        isError: false
    },
  };

  export const ErrorInput: Story = {
    args: {
        label: 'Email',
        placeholder: 'test@test.gmail',
        type: 'text',
        isError: true,
        textError: 'Невалидная почта'
    },
  };