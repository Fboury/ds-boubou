"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CloneableExtension(toExtend, prototype) {
    const target = toExtend;
    target.clone = prototype;
    return target;
}
exports.default = CloneableExtension;
//# sourceMappingURL=CloneableExtension.js.map