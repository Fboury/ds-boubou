import { Meta, StoryObj } from "@storybook/react";
import Erreur from "../Erreur";

const meta: Meta<typeof Erreur> = {
  title: "DS/Components/Erreur",
  tags: ["autodocs"],
  component: Erreur,
};

export default meta;
type Story = StoryObj<typeof Erreur>;

export const Base: Story = {
  render: (args) => (
    <Erreur id="error-id" {...args}>
      Message d'erreur
    </Erreur>
  ),
};
