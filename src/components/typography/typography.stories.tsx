import type { Meta, StoryObj } from '@storybook/react'
import Typography from './typography'

const meta: Meta<typeof Typography> = {
  title: "UIKIT/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta
type Story = StoryObj<typeof Typography>

export const Primary: Story = {
<<<<<<< Updated upstream
  render: ({children = "Я шмекс"}) => <Typography>{children}</Typography>,
=======
  render: ({children = "Я текста!", variant="hairline", tag="p"}) => <Typography variant={variant} tag={tag}>{children}</Typography>,
>>>>>>> Stashed changes
};
