import FormBtn from './FormBtn';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof FormBtn> = {
    title: 'FormBtn',
    component: FormBtn,
};

export default meta;
type Story = StoryObj<typeof FormBtn>;


export const Basic: Story = {
    args: {
       variant: 'basic',
       text: 'Basic',
    },
};

export const Primary: Story = {
    args: {
       variant: 'primary',
       text: 'Primary',
    },
}

export const BorderR: Story = {
    args: {
        variant: 'primary',
        text: 'Border',
        borderR: true
     },
}