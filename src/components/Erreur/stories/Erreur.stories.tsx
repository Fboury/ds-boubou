import { Meta, StoryObj } from "@storybook/react";
import Erreur from "../Erreur";

const meta: Meta<typeof Erreur> = {
  title: "Components/Erreur",
  component: Erreur,
};

export default meta;
type Story = StoryObj<typeof Erreur>;

export const Base: Story = {
  render: (args) => <Erreur {...args}>Message d'erreur</Erreur>,
};
