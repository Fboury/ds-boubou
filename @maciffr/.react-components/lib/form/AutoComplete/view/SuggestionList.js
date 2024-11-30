"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SuggestionItem_1 = __importDefault(require("./SuggestionItem"));
const SuggestionList = ({ id, data, isActive, onSelect }) => {
    if (!data.length) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    return ((0, jsx_runtime_1.jsx)("ul", { className: "mcf-pl--0 mcf-mb--0", "aria-labelledby": id, role: "listbox", "aria-label": "suggestions de saisie", id: `${id}-resultats`, children: data.map((suggest) => ((0, jsx_runtime_1.jsx)(SuggestionItem_1.default, { suggest: suggest, active: isActive(suggest), onSelect: onSelect }, suggest.key))) }));
};
exports.default = SuggestionList;
//# sourceMappingURL=SuggestionList.js.map