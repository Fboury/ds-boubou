import type { Meta, StoryObj } from "@storybook/react";

import Callout from "./Callout";
import React from "react";
import CalloutTitle from "./CalloutTitle/index";
import CalloutSubTitle from "./CalloutSubtitle";
import CalloutPicto from "./CalloutPicto";
import CalloutDescription from "./CalloutDescription";

const meta: Meta<typeof Callout> = {
  title: "DS/Components/Callout",
  tags: ["autodocs"],
  component: Callout,
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const FullCallout: Story = {
  render: () => (
    <Callout>
      <CalloutPicto className={"mds-callout__picto mds-picto__appareil-photo"}></CalloutPicto>
      <CalloutTitle>
        Titre du Callout
        <CalloutSubTitle>Sous-titre du Callout</CalloutSubTitle>
      </CalloutTitle>
      <CalloutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </CalloutDescription>
    </Callout>
  ),
};

export const CalloutSansPictogramme: Story = {
  render: () => (
    <Callout>
      <CalloutTitle>
        Titre du Callout
        <CalloutSubTitle>Sous-titre du Callout</CalloutSubTitle>
      </CalloutTitle>
      <CalloutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </CalloutDescription>
    </Callout>
  ),
};

export const CalloutSansSubtitle: Story = {
  render: () => (
    <Callout>
      <CalloutPicto className={"mds-callout__picto mds-picto__appareil-photo"}></CalloutPicto>
      <CalloutTitle>Titre du Callout</CalloutTitle>
      <CalloutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </CalloutDescription>
    </Callout>
  ),
};
