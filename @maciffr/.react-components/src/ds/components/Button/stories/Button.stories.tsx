import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonTheme } from "../index";

const meta: Meta = {
  title: "DS/Components/Button",
  tags: ["autodocs"],
  component: Button,
} as Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button id={"monBouton"}>Cliquez ici</Button>,
};

export const Secondary: Story = {
  render: () => (
    <Button id={"monBouton"} theme={ButtonTheme.Secondary}>
      Cliquez ici
    </Button>
  ),
};

export const Tertiary: Story = {
  render: () => (
    <Button id={"monBouton"} theme={ButtonTheme.Tertiary}>
      Cliquez ici
    </Button>
  ),
};

export const PrimaryIcon: Story = {
  render: () => (
    <Button id={"monBouton"} icon={"mds-icon__arrow-forward--right"}>
      Cliquez ici
    </Button>
  ),
};
export const PrimaryIconOnly: Story = {
  render: () => <Button id={"monBouton"} icon={"mds-icon__arrow-forward"} iconOnly={true} />,
};
