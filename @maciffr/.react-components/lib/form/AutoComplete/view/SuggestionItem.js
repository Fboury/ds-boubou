"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SuggestionItem = ({ suggest, active, onSelect }) => {
    return ((0, jsx_runtime_1.jsx)("li", { className: `mcf-dropdown__item mcf-py--3 mcf-py-sm--2 mcf-cursor--pointer ${active && "active"}`, role: "option", id: `suggestion-${suggest.key}`, tabIndex: active ? 0 : -1, onClick: () => onSelect(suggest), "aria-selected": active, children: suggest.libelle || suggest.value }, suggest.key));
};
exports.default = SuggestionItem;
//# sourceMappingURL=SuggestionItem.js.map