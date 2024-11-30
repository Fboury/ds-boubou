import { within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import Select from "../index";
import SelectDropdown from "../SelectDropdown";
import Label from "../../../components/Label";
import Description from "../../../components/Description";

const meta: Meta<typeof Select> = {
  title: "DS/Components/Form/Select",
  tags: ["autodocs"],
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Base: Story = {
  args: {
    id: "test",
    "aria-describedby": "description",
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <SelectDropdown>
      <Label>
        Label
        <Description>Description</Description>
      </Label>
      <Select data-testid="test-select" {...args}>
        <option value="">Sélectionnez</option>
        <option value="code1">value1</option>
        <option value="code2">value2</option>
        <option value="code3">value3</option>
      </Select>
    </SelectDropdown>
  ),
};

export const Disabled: Story = {
  args: {
    id: "test",
    "aria-describedby": "description",
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
    disabled: true,
  },
  render: (args) => (
    <SelectDropdown disabled={args.disabled}>
      <Label>
        Label
        <Description>Description</Description>
      </Label>
      <Select data-testid="test-select" {...args}>
        <option value="">Sélectionnez</option>
        <option value="code1">value1</option>
        <option value="code2">value2</option>
        <option value="code3">value3</option>
      </Select>
    </SelectDropdown>
  ),
};

export const RequiredError: Story = {
  args: {
    id: "test",
    "aria-describedby": "description",
    required: true,
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <SelectDropdown disabled={args.disabled}>
      <Label>
        Label
        <Description>Description</Description>
      </Label>
      <Select data-testid="test-select" {...args}>
        <option value="">Sélectionnez</option>
        <option value="code1">value1</option>
        <option value="code2">value2</option>
        <option value="code3">value3</option>
      </Select>
    </SelectDropdown>
  ),
};

RequiredError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId<HTMLInputElement>("test-select");

  inputElement.reportValidity();
};

export const CustomError: Story = {
  args: {
    id: "test",
    "aria-describedby": "description",
    required: true,
    error: "Problème technique à la récupération des valeurs.",
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <SelectDropdown disabled={args.disabled}>
      <Label>
        Label
        <Description>Description</Description>
      </Label>
      <Select data-testid="test-select" {...args}>
        <option value="">Sélectionnez</option>
        <option value="code1">value1</option>
        <option value="code2">value2</option>
        <option value="code3">value3</option>
      </Select>
    </SelectDropdown>
  ),
};
