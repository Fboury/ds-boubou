import InputNumber, {InputNumberProperties} from '../InputNumber';
import {Meta, StoryFn, StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';

export default {
  title: 'Macif/Components/Form/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof InputNumber>;

const Template: StoryFn<typeof InputNumber> = (args: InputNumberProperties) => (
  <form className="mcf-form">
    <InputNumber {...args} />
  </form>
);

export const Basic: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    id: 'test',
    'data-testid': 'test',
  },
};

export const DefaultValue: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    id: 'test',
    'data-testid': 'test',
    value: 50,
  },
};

export const FormattedValue: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    id: 'test',
    'data-testid': 'test',
    value: 5000,
    format: true,
  },
};

export const CustomPatternError: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    id: 'test',
    'data-testid': 'test',
    max: 100,
    validationMessages: {
      max: 'La valeur est trop haute !',
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>('test');

    userEvent.type(inputElement, '101');

    inputElement.reportValidity();
  },
};

export const MinMax: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    'data-testid': 'test',
    min: 0,
    max: 100,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>('test');

    userEvent.type(inputElement, '101');

    inputElement.reportValidity();
  },
};

export const CustomError: StoryObj<typeof InputNumber> = {
  render: Template,

  args: {
    id: 'test',
    'data-testid': 'test',
    error: 'Custom erreur',
    required: true,
  },
};
