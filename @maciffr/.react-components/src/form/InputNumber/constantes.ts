import { ValidationMessages } from "../../commons/contrats/ValidationMessages";

export const REGEX_ONLY_NUMBERS_SPACE_AND_DASH = "-?[\\d+\\s+]+";
export const REGEX_NOT_NUMBER = /\D+/g;
export const REGEX_ONLY_NUMBER = /\d/;

export const MESSAGES: ValidationMessages = {
  required: "Veuillez renseigner ce champ.",
  max: "Cette valeur doit être inférieur ou égale à",
  min: "Cette valeur doit être supérieur ou égale à",
  pattern: "Veuillez respecter le format requis.",
};

export const KEYS = {
  DOWN: "ArrowDown",
  UP: "ArrowUp",
};
