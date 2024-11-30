import {Meta, StoryObj} from "@storybook/react";
import ButtonSwitcher, {ButtonSwitcherProps} from "./index";

export default {
  title: 'Macif/Components/BoutonSwitcherGroup/BoutonSwitcher',
  component: ButtonSwitcher,
  tags: ['autodocs']
} as Meta<typeof ButtonSwitcher>;

export const Base: StoryObj<ButtonSwitcherProps> = {
  args : {
    libelle: "Bouton basique",
    value: "1",
    name: "button-basic"
  }
}

export const Active: StoryObj<ButtonSwitcherProps> = {
  args : {
    libelle: "Bouton actif",
    value: "1",
    name: "button-basic",
    selected: true
  }
}
