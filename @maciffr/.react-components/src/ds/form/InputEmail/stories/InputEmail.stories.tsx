import { StoryObj, Meta, StoryFn } from "@storybook/react";
import InputEmail, { InputEmailProps } from "../index";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "DS/Components/Form/InputEmail",
  component: InputEmail,
  tags: ["autodocs"],
} as Meta<typeof InputEmail>;

const Template: StoryFn<typeof InputEmail> = (args: InputEmailProps) => (
  <InputEmail data-testid="test-email" {...args} />
);

export const Base: StoryObj<InputEmailProps> = {
  render: Template,

  args: {
    id: "test",
  },
};

export const Required: StoryObj<InputEmailProps> = {
  render: Template,

  args: {
    id: "test",
    required: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-email");

    inputElement.reportValidity();
  },
};

export const PatternError: StoryObj<InputEmailProps> = {
  render: Template,

  args: {
    id: "test",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-email");

    await userEvent.type(inputElement, "asdasd@asdasd@asdasd.frfr");

    inputElement.reportValidity();
  },
};

export const CustomPatternError: StoryObj<InputEmailProps> = {
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
    const inputElement = canvas.getByTestId<HTMLInputElement>("test-email");

    await userEvent.type(inputElement, "asdasd@asdasd@asdasd.frfr");

    inputElement.reportValidity();
  },
};
