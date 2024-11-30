"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYS = exports.MESSAGES = exports.REGEX_ONLY_NUMBER = exports.REGEX_NOT_NUMBER = exports.REGEX_ONLY_NUMBERS_SPACE_AND_DASH = void 0;
exports.REGEX_ONLY_NUMBERS_SPACE_AND_DASH = "-?[\\d+\\s+]+";
exports.REGEX_NOT_NUMBER = /\D+/g;
exports.REGEX_ONLY_NUMBER = /\d/;
exports.MESSAGES = {
    required: "Veuillez renseigner ce champ.",
    max: "Cette valeur doit être inférieur ou égale à",
    min: "Cette valeur doit être supérieur ou égale à",
    pattern: "Veuillez respecter le format requis.",
};
exports.KEYS = {
    DOWN: "ArrowDown",
    UP: "ArrowUp",
};
//# sourceMappingURL=constantes.js.map