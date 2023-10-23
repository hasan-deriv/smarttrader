import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'Components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        fullwidth: {
            options: [true, false],
            control: { type: 'radio' },
        },
        variant: {
            options: ['contained', 'outlined'],
            control: { type: 'radio' },
        },
        asChild: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type TButtonStory = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: TButtonStory = {
    args: {
        color: 'primary',
        children: 'test',
        variant: 'contained',
        fullwidth: true,
        size: 'default',
        className: 'inline-flex',
        asChild: false,
    },
};
