"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATION_MESSAGES = exports.REGEX_GROUPBY_TWO_DIGIT = exports.REGEX_INPUT_MATCH_NON_DIGIT = exports.REGEX_INPUT = exports.MAX_PHONE_LENGTH_WITHOUT_SPACE = exports.MAX_PHONE_LENGTH = void 0;
exports.MAX_PHONE_LENGTH = 14;
exports.MAX_PHONE_LENGTH_WITHOUT_SPACE = 10;
exports.REGEX_INPUT = "^0[1-9](\\s?\\d\\d){4}$";
exports.REGEX_INPUT_MATCH_NON_DIGIT = /\D/g;
exports.REGEX_GROUPBY_TWO_DIGIT = /.{1,2}/g;
exports.VALIDATION_MESSAGES = {
    pattern: "Le numéro de téléphone est incorrect. Il doit comporter au moins 10 chiffres et commencer par 0",
    required: "Veuillez préciser votre numéro de téléphone"
};
//# sourceMappingURL=constantes.js.map