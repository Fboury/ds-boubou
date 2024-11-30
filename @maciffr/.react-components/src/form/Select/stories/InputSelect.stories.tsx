import { within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import Select from "../index";

const meta: Meta<typeof Select> = {
  title: 'Macif/Components/Form/Select',
  tags: ['autodocs'],
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Base: Story = {
  args: {
    id: 'test',
    'aria-describedby': 'description',
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <div>
      <label htmlFor="test">
        <b>Label du champ</b>
      </label>
      <p id="description">Description du champ</p>
      <Select data-testid="test-select" {...args}>
        <option value="">Sélectionnez</option>
        <option value="code1">value1</option>
        <option value="code2">value2</option>
        <option value="code3">value3</option>
      </Select>
    </div>
  ),
};

export const RequiredError: Story = {
  args: {
    id: 'test',
    'aria-describedby': 'description',
    required: true,
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <Select data-testid="test-select" {...args}>
      <option value="">Sélectionnez</option>
      <option value="code1">value1</option>
      <option value="code2">value2</option>
      <option value="code3">value3</option>
    </Select>
  ),
};

RequiredError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId<HTMLInputElement>('test-select');

  inputElement.reportValidity();
};

export const CustomError: Story = {
  args: {
    id: 'test',
    'aria-describedby': 'description',
    required: true,
    error: 'Problème technique à la récupération des valeurs.',
    onChange: (value?: string) => action(`Valeur saisie ${value}`),
  },
  render: (args) => (
    <Select data-testid="test-select" {...args}>
      <option value="">Sélectionnez</option>
      <option value="code1">value1</option>
      <option value="code2">value2</option>
      <option value="code3">value3</option>
    </Select>
  )
}
