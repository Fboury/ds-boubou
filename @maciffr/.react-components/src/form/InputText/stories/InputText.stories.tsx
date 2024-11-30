import { action } from "@storybook/addon-actions";
import { StoryObj, StoryFn, Meta } from "@storybook/react";
import { PATTERN_VALIDATION_ALPHANUMERIQUE, VALIDATION_MESSAGE } from "../constantes";
import InputText, { InputTextProps } from "../index";

export default {
  title: "Macif/Components/Form/InputText",
  component: InputText,
  tags: ["autodocs"],
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args: InputTextProps) => (
  <form>
    <InputText data-testid="input-text" {...args} />
  </form>
);

export const Base: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    name: "nom",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const Saisie: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    value: "Michel",
    ariaDescribedby: "nom-dirigeant",
    name: "nom",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const Required: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    name: "nom",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    required: true,
    pattern: PATTERN_VALIDATION_ALPHANUMERIQUE,
    validationMessage: VALIDATION_MESSAGE,
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const Pattern: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    pattern: "[0-9]+",
    validationMessage: VALIDATION_MESSAGE,
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const Min: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    minLength: 10,
    validationMessage: VALIDATION_MESSAGE,
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const Max: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    maxLength: 1,
    validationMessage: VALIDATION_MESSAGE,
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};

export const CustomError: StoryObj<InputTextProps> = {
  render: Template,

  args: {
    ariaDescribedby: "nom-dirigeant",
    id: "nom-dirigeant-input",
    autoComplete: "lastname",
    pattern: PATTERN_VALIDATION_ALPHANUMERIQUE,
    validationMessage: VALIDATION_MESSAGE,
    error: "Custom erreur",
    onChange: (value: string) => action(`Valeur saisie ${value}`),
  },
};
