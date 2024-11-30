import { Meta } from "@storybook/react";
import Legend from "../index";
import Description from "../../Description";
import Facultatif from "../../Facultatif";

const meta: Meta<typeof Legend> = {
  title: "DS/Components/Legend",
  tags: ["autodocs"],
  component: Legend,
};

export default meta;

export const Base = {
  render: () => <Legend data-testid="test-label">Legend</Legend>,
};

export const WithDescription = {
  render: () => (
    <Legend data-testid="test-label">
      Legend
      <Description>Description</Description>
    </Legend>
  ),
};

export const WithDescriptionAndFacultatif = {
  render: () => (
    <Legend data-testid="test-label">
      Legend
      <Facultatif />
      <Description>Description</Description>
    </Legend>
  ),
};
