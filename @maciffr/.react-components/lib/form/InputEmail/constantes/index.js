"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATION_MESSAGES = exports.REGEX_PATTERN_EMAIL = exports.MAX_EMAIL_LENGTH = void 0;
exports.MAX_EMAIL_LENGTH = 78;
exports.REGEX_PATTERN_EMAIL = "^[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+(\\.[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+)*@[a-zA-Z0-9\\-]+(\\.[a-zA-Z0-9\\-]+)*(\\.[a-zA-Z]{2,15})$";
exports.VALIDATION_MESSAGES = {
    pattern: "L'adresse e-mail est incorrect. Veuillez saisir uniquement des caractères alphanumérique, tiret ou espace et renseigner au minimum une @ et un point.",
    required: "Veuillez renseigner votre adresse e-mail."
};
//# sourceMappingURL=index.js.map