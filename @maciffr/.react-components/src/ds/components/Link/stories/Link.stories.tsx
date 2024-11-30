import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Link, { LinkVariant } from "../index";
import { TextSize } from "../../../enums/TextSize";

const meta: Meta<typeof Link> = {
  title: "DS/Components/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: (args) => (
    <Link data-testid="link" href="#">
      Lien
    </Link>
  ),
};

export const Standalone: Story = {
  render: (args) => (
    <Link data-testid="link" variant={LinkVariant.Standalone} href="#">
      Lien
    </Link>
  ),
};

export const Reverse: Story = {
  render: (args) => (
    <Link data-testid="link" reverse href="#">
      Lien
    </Link>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Link data-testid="link" size={TextSize.L} href="#">
      Lien
    </Link>
  ),
};

export const Icon: Story = {
  render: (args) => (
    <Link data-testid="link" icon="mds-icon__chevron-right" href="#">
      Lien
    </Link>
  ),
};

export const IconRight: Story = {
  render: (args) => (
    <Link data-testid="link" icon="mds-icon__chevron-right--right" href="#">
      Lien
    </Link>
  ),
};

export const OnlyIcon: Story = {
  render: (args) => (
    <Link data-testid="link" variant={LinkVariant.IconOnly} icon="mds-icon__chevron-right" href="#">
      <span className="mds-sr-only">Lien</span>
    </Link>
  ),
};
