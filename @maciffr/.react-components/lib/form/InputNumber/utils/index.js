"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const constantes_1 = require("../constantes");
function isNumber(value) {
    try {
        return constantes_1.REGEX_ONLY_NUMBER.test(value.toString());
    }
    catch (e) {
        return false;
    }
}
exports.isNumber = isNumber;
//# sourceMappingURL=index.js.map