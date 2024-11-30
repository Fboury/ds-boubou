import type { Meta, StoryObj } from "@storybook/react";

import ButtonLoader, { ButtonLoaderProps } from "../index";
import { ButtonTheme } from "../../Button";
import { ReactElement, useState } from "react";

const meta: Meta = {
  title: "DS/Components/ButtonLoader",
  tags: ["autodocs"],
  component: ButtonLoader,
} as Meta;

export default meta;

type Story = StoryObj<typeof ButtonLoader>;

const Template: ({ children, ...props }: ButtonLoaderProps) => ReactElement = ({
  children,
  ...props
}: ButtonLoaderProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <ButtonLoader onClick={() => setLoading(true)} loading={loading} id="monBouton" {...props}>
      {children}
    </ButtonLoader>
  );
};

export const Primary: Story = {
  args: {
    children: "Enregistrer et continuer",
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};

export const PrimaryIcon: Story = {
  args: {
    icon: "mds-icon__arrow-forward--right",
    children: "Enregistrer et continuer",
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};

export const PrimaryIconReverse: Story = {
  args: {
    icon: "mds-icon__arrow-forward--right",
    children: "Enregistrer et continuer",
    reversed: true,
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};

export const SecondaryIcon: Story = {
  args: {
    icon: "mds-icon__arrow-forward--right",
    children: "Enregistrer et continuer",
    theme: ButtonTheme.Secondary,
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};

export const Tertiary: Story = {
  args: {
    children: "Enregistrer et continuer",
    theme: ButtonTheme.Tertiary,
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};

export const TertiaryIcon: Story = {
  args: {
    icon: "mds-icon__arrow-forward--right",
    children: "Enregistrer et continuer",
    theme: ButtonTheme.Tertiary,
    accessibilityText: "Chargement en cours",
  },
  render: Template,
};
