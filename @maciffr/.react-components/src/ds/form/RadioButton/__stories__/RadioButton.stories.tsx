import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadioButtonGroup, { RadioButtonGroupProps } from "../RadioButtonGroup";
import RadioButtonFieldset from "../RadioButtonFieldset";
import { within } from "@storybook/testing-library";
import RadioButton from "../index";
import { RadioButtonRender, RadioButtonSize } from "../RadioButtonView";
import Description from "../../../components/Description";
import Legend from "../../../components/Legend";
import Button from "../../../components/Button";

const meta: Meta<typeof RadioButtonGroup> = {
  title: "DS/Components/Form/RadioButton",
  component: RadioButtonGroup,
  tags: ["autodocs"]
};

export default meta;

interface RadioButtonStories extends RadioButtonGroupProps {
  witdh: RadioButtonSize;
  defaultValue: string;
  disabled: boolean;
  required: boolean;
  messageErrorRequired: string;
}

type Story = StoryObj<RadioButtonStories>;

export const Basic: Story = {
  name: "Basique",
  args: { disabled: false, defaultValue: "option1" },
  render: ({ disabled, defaultValue }) => (
    <RadioButtonFieldset>
      <Legend>
        <Description>Description</Description>
      </Legend>
      <RadioButtonGroup defaultValue={defaultValue} id="test-1" onChange={value => console.log(value)}>
        <RadioButton name="option" id="optionA" value="option1" className="mds-radio--basic" disabled={disabled}>
          Texte
        </RadioButton>
        <RadioButton name="option" id="optionB" value="option2" className="mds-radio--basic" disabled={disabled}>
          Texte un peu plus long
        </RadioButton>
      </RadioButtonGroup>
    </RadioButtonFieldset>
  )
};
export const Tile: Story = {
  name: "Tile",
  args: {
    witdh: RadioButtonSize.FitContent,
    disabled: false,
    required: true,
    defaultValue: "",
    messageErrorRequired: ""
  },
  argTypes: {
    defaultValue: {
      options: ["", "option1", "option2"],
      control: { type: "select" },
      description: `Valeur par défaut`,
      table: {
        category: "Etat"
      }
    },
    disabled: {
      control: { type: "boolean" },
      description: `Champs désactivé`,
      table: {
        category: "Etat"
      }
    },
    required: {
      control: { type: "boolean" },
      description: `Champ obligatoire`,
      table: {
        category: "Etat"
      }
    },
    witdh: {
      name: "witdh",
      options: [RadioButtonSize.FitContent, RadioButtonSize.FullWidth],
      control: { type: "select" },
      description: "Gérer la taille du radio button",
      table: {
        category: "Etat"
      }
    },
    messageErrorRequired: {
      control: "text",
      description: `Message d'erreur de la validation "required"`,
      table: {
        category: "Etat"
      }
    },
    onChange: {
      table: { disable: true }
    },
    validationMessage: {
      table: { disable: true }
    }
  },
  render: ({ disabled, defaultValue, required, messageErrorRequired, witdh }) => (
    <form onSubmit={e => console.log(e.target)}>
      <RadioButtonFieldset>
        <Legend>
          <Description>Description</Description>
        </Legend>
        <RadioButtonGroup
          required={required}
          validationMessage={messageErrorRequired ? { required: messageErrorRequired } : undefined}
          defaultValue={defaultValue}
          id="test"
          onChange={value => console.log(value)}>
          <RadioButton
            render={RadioButtonRender.Tile}
            size={witdh}
            name="option"
            id="option1"
            value="option1"
            disabled={disabled}
            data-testid="test-radio">
            Texte
          </RadioButton>
          <RadioButton
            render={RadioButtonRender.Tile}
            size={witdh}
            name="option"
            id="option2"
            value="option2"
            disabled={disabled}>
            Texte un peu plus long
          </RadioButton>
        </RadioButtonGroup>
      </RadioButtonFieldset>
      <Button className="mds-stack-t--16" id="test">
        Valider
      </Button>
    </form>
  ),
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId<HTMLInputElement>("test-radio");
    radio.reportValidity();
  }
};
