import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'UIKIT/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {

  render: ({
    disabled = false,
    children = 'Button',
    variant = 'neutral',
    size = 'small',
    className = 'orange',
    ...rest
  }) => (
    <Button
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  ),
}
