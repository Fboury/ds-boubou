import { StoryObj, Meta, StoryFn } from "@storybook/react";
import InputPhone, { InputPhoneProps } from "../index";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "DS/Components/Form/InputPhone",
  component: InputPhone,
  tags: ["autodocs"],
} as Meta<typeof InputPhone>;

const Template: StoryFn<typeof InputPhone> = (args: InputPhoneProps) => (
  <InputPhone data-testid="test-phone" {...args} />
);

export const Base: StoryObj<InputPhoneProps> = {
  render: Template,

  args: {
    id: "test",
  },
};

export const Required: StoryObj<InputPhoneProps> = {
  render: Template,

  args: {
    id: "test",
    required: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-phone");

    inputElement.reportValidity();
  },
};

export const PatternError: StoryObj<InputPhoneProps> = {
  render: Template,

  args: {
    id: "test",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-phone");

    await userEvent.type(inputElement, "0077777777");

    inputElement.reportValidity();
  },
};

export const CustomPatternError: StoryObj<InputPhoneProps> = {
  render: Template,

  args: {
    id: "test",
    required: true,
    validationMessage: {
      required: "Le champ est requis",
      pattern: "Le pattern ne match pas",
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-phone");

    await userEvent.type(inputElement, "0077777777777");

    inputElement.reportValidity();
  },
};
