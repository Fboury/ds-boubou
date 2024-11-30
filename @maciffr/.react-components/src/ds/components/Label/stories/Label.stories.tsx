import { Meta } from "@storybook/react";
import Label from "../index";
import LabelDescription from "../../Description";
import LabelFacultatif from "../../Facultatif";

const meta: Meta<typeof Label> = {
  title: "DS/Components/Label",
  tags: ["autodocs"],
  component: Label,
};

export default meta;

export const Base = {
  render: () => <Label data-testid="test-label">Label</Label>,
};

export const Disabled = {
  render: () => (
    <Label disabled data-testid="test-label">
      Label
    </Label>
  ),
};

export const WithDescription = {
  render: () => (
    <Label data-testid="test-label">
      Label
      <LabelDescription>Description</LabelDescription>
    </Label>
  ),
};

export const WithDescriptionAndFacultatif = {
  render: () => (
    <Label data-testid="test-label">
      Label
      <LabelFacultatif />
      <LabelDescription>Description</LabelDescription>
    </Label>
  ),
};
