"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_ONLY_ALPHANUMERIC_SPACES = exports.KEYS = void 0;
var KEYS;
(function (KEYS) {
    KEYS["DOWN"] = "ArrowDown";
    KEYS["UP"] = "ArrowUp";
    KEYS["ENTER"] = "Enter";
    KEYS["ESCAPE"] = "Escape";
})(KEYS || (exports.KEYS = KEYS = {}));
exports.REGEX_ONLY_ALPHANUMERIC_SPACES = /[^ a-zA-ZÀ-ÿ0-9]/g;
//# sourceMappingURL=constantes.js.map