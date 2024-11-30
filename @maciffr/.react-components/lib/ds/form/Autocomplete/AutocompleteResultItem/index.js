"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AutocompleteResultItem = (0, react_1.forwardRef)(({ children, value, code, active = false, onSelect = () => { }, ...props }, ref) => {
    const handleSelect = () => {
        onSelect({
            code,
            value,
        });
    };
    return ((0, jsx_runtime_1.jsx)("li", { ref: ref, className: "mds-autocomplete__result-item", role: "option", "data-code": code, "data-value": value, tabIndex: -1, "aria-selected": active, onClick: handleSelect, ...props, children: children }));
});
exports.default = AutocompleteResultItem;
//# sourceMappingURL=index.js.map