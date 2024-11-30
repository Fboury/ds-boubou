import { Meta, StoryObj } from "@storybook/react";
import InputText from "../index";
import { within, userEvent } from "@storybook/test";

const meta: Meta<typeof InputText> = {
  title: "Components/Form/InputText",
  tags: ["autodocs"],
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Base: Story = {
  render: (args) => <InputText id="story" data-testid="test-input" {...args} />,
};

export const Required: Story = {
  args: {
    required: true,
  },
  render: (args) => <InputText id="story" data-testid="test-input" {...args} />,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByTestId<HTMLInputElement>("test-input");
    input.reportValidity();
  },
};

export const RequiredCustom: Story = {
  args: {
    required: true,
    validationMessage: {
      required: "Champ requis custom.",
    },
  },
  render: (args) => <InputText id="story" data-testid="test-input" {...args} />,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByTestId<HTMLInputElement>("test-input");
    input.reportValidity();
  },
};

export const Pattern: Story = {
  args: {
    pattern: "\\d*",
  },
  render: (args) => <InputText id="story" data-testid="test-input" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByTestId<HTMLInputElement>("test-input");
    await userEvent.type(input, "test");
    input.reportValidity();
  },
};
