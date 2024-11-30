import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import StepIndicator from "../index";

const meta: Meta<typeof StepIndicator> = {
  title: "DS/Components/StepIndicator",
  component: StepIndicator
};

export default meta;

type Story = StoryObj<typeof StepIndicator>;

export const Basic: Story = {
  render: args => <StepIndicator {...args} />,
  args: {
    activeSection: "Informations personnelles",
    sections: ["Commune de résidence", "Informations personnelles", "Consentements"],
    accessTitle: "Formulaire en progression"
  }
};

export const BasicLastStep: Story = {
  render: args => <StepIndicator {...args} />,
  args: {
    activeSection: "Consentements",
    sections: ["Commune de résidence", "Informations personnelles", "Consentements"],
    accessTitle: "Formulaire en progression"
  }
};
