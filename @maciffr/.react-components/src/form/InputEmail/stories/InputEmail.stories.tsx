import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import InputEmail, { InputEmailProps } from '../index';

export default {
  title: 'Macif/Components/Form/InputEmail',
  component: InputEmail,
  tags: ['autodocs'],
} as Meta<typeof InputEmail>;

type Story = StoryObj<typeof InputEmail>;
export const Base: Story = {
  args: {
    id: 'test',
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
  render: (args: InputEmailProps) => (
    <form>
      <InputEmail data-testid="test-email" {...args} />
    </form>
  ),
};

export const RequiredError: Story = {
  args: {
    id: 'test',
    required: true,
  },
  render: (args: InputEmailProps) => (
    <form>
      <InputEmail data-testid="test-email" {...args} />
    </form>
  ),
};

export const PatternError: Story = {
  args: {
    id: 'test',
  },
  render: (args: InputEmailProps) => (
    <form>
      <InputEmail data-testid="test-email" {...args} />
    </form>
  ),
};

export const CustomPatternError: Story = {
  args: {
    id: 'test',
    required: true,
    validationMessage: {
      required: 'Le champ est requis',
      pattern: 'Le pattern ne match pas',
    },
  },
  render: (args: InputEmailProps) => (
    <form>
      <InputEmail data-testid="test-email" {...args} />
    </form>
  ),
};

export const CustomError: Story = {
  args: {
    id: 'test',
    required: true,
    error: 'Custom erreur',
  },
  render: (args: InputEmailProps) => (
    <form>
      <InputEmail data-testid="test-email" {...args} />
    </form>
  ),
};

RequiredError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId<HTMLInputElement>('test-email');

  inputElement.reportValidity();
};

PatternError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId<HTMLInputElement>('test-email');

  await userEvent.type(inputElement, 'test:exemple@yahoo@fr');

  inputElement.reportValidity();
};

CustomPatternError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId<HTMLInputElement>('test-email');

  await userEvent.type(inputElement, 'test:exemple@yahoo@fr');

  inputElement.reportValidity();
};
