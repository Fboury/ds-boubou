import React from "react";
import Bouton from "../Bouton";

// Configuration de l'histoire
export default {
  title: "Components/Bouton", // Chemin d'affichage dans Storybook
  component: Bouton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"], // Valeurs possibles pour "variant"
    },
    disabled: {
      control: { type: "boolean" }, // Activer/Désactiver
    },
    onClick: { action: "clicked" }, // Suivre les clics dans l'interface Storybook
  },
};

// Définitions des variantes
export const Primary = (args: any) => <Bouton {...args}>Primary</Bouton>;
Primary.args = {
  variant: "primary",
  disabled: false,
};

export const Secondary = (args: any) => <Bouton {...args}>Secondary</Bouton>;
Secondary.args = {
  variant: "secondary",
  disabled: false,
};

export const Disabled = (args: any) => <Bouton {...args}>Disabled</Bouton>;
Disabled.args = {
  variant: "primary",
  disabled: true,
};
