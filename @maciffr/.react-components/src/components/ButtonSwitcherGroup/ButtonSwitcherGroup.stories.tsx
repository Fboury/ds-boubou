import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ButtonSwitcher from "./ButtonSwitcher";
import ButtonSwitcherGroup, { ButtonSwitcherGroupProps } from "./index";
import { within } from "@storybook/testing-library";

const CHOIX_CIVILITE = [
  {
    libelle: "Madame",
    value: "1"
  },
  {
    libelle: "Monsieur",
    value: "2"
  }
];

export default {
  title: "Macif/Components/BoutonSwitcherGroup",
  component: ButtonSwitcherGroup,
  tags: ["autodocs"]
} as Meta<typeof ButtonSwitcherGroup>;

export const Base: StoryObj<ButtonSwitcherGroupProps> = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleOnChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <ButtonSwitcherGroup
        ariaLabelledby="test"
        id="test"
        nbItemsParLigne={args.nbItemsParLigne}
        validationMessage={args.validationMessage}>
        {CHOIX_CIVILITE.map(choix => (
          <ButtonSwitcher
            key={`${CHOIX_CIVILITE.indexOf(choix)}`}
            libelle={choix.libelle}
            value={choix.value}
            selected={selectedValue === choix.value}
            name="tunnel-civilite"
            required={true}
            onChange={handleOnChange}
          />
        ))}
      </ButtonSwitcherGroup>
    );
  }
};

export const Erreur: StoryObj<ButtonSwitcherGroupProps> = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleOnChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <ButtonSwitcherGroup ariaLabelledby={"test"} id={"test"} nbItemsParLigne={args.nbItemsParLigne}>
        {CHOIX_CIVILITE.map(choix => (
          <ButtonSwitcher
            key={`${CHOIX_CIVILITE.indexOf(choix)}`}
            libelle={choix.libelle}
            value={choix.value}
            selected={selectedValue === choix.value}
            name="tunnel-civilite"
            required
            onChange={handleOnChange}
          />
        ))}
      </ButtonSwitcherGroup>
    );
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId<HTMLInputElement>("tunnel-civilite-1");
    radio.reportValidity();
  }
};

export const ErreurPersonnalise: StoryObj<ButtonSwitcherGroupProps> = {
  render: args => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleOnChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <ButtonSwitcherGroup
        ariaLabelledby={"test"}
        id={"test"}
        nbItemsParLigne={args.nbItemsParLigne}
        validationMessage={{
          required: "Cette erreur est personnalisée"
        }}>
        {CHOIX_CIVILITE.map(choix => (
          <ButtonSwitcher
            key={`${CHOIX_CIVILITE.indexOf(choix)}`}
            libelle={choix.libelle}
            value={choix.value}
            selected={selectedValue === choix.value}
            name="tunnel-civilite"
            required
            onChange={handleOnChange}
          />
        ))}
      </ButtonSwitcherGroup>
    );
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId<HTMLInputElement>("tunnel-civilite-1");
    radio.reportValidity();
  }
};
