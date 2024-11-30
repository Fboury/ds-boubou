import { Meta, StoryObj } from "@storybook/react";
import Erreur from "./Erreur";

const meta: Meta<typeof Erreur> = {
  title: 'Macif/Commons/View/Erreur',
  tags: ['autodocs'],
  component: Erreur,
};

export default meta;
type Story = StoryObj<typeof Erreur>;

export const Base: Story = {
  args: {
    children: "Message d'erreur",
    id: "error"
  },
  render: (args) => (
    <Erreur data-testid="test-Erreur" {...args} />
  ),
};
