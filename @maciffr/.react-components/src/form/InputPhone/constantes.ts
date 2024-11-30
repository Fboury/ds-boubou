import { ValidationMessages } from "../../commons/contrats/ValidationMessages";

export const MAX_PHONE_LENGTH = 14;
export const MAX_PHONE_LENGTH_WITHOUT_SPACE = 10;

export const REGEX_INPUT = "^0[1-9](\\s?\\d\\d){4}$";
export const REGEX_INPUT_MATCH_NON_DIGIT = /\D/g;
export const REGEX_GROUPBY_TWO_DIGIT = /.{1,2}/g;

export const VALIDATION_MESSAGES: ValidationMessages = {
  pattern: "Le numéro de téléphone est incorrect. Il doit comporter au moins 10 chiffres.",
  required: "Veuillez renseigner votre numéro de téléphone.",
};
