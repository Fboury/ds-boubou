export const MAX_EMAIL_LENGTH = 78;
export const REGEX_PATTERN_EMAIL =
  "^[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+(\\.[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+)*@[a-zA-Z0-9\\-]+(\\.[a-zA-Z0-9\\-]+)*(\\.[a-zA-Z]{2,15})$";
export const VALIDATION_MESSAGES = {
  pattern: "L'adresse e-mail est incorrect. Veuillez saisir uniquement des caractères alphanumérique, tiret ou espace et renseigner au minimum une @ et un point.",
  required: "Veuillez renseigner votre adresse e-mail."
};
