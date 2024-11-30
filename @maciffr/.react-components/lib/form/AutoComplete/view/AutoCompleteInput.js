"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AutoCompleteInput = (0, react_1.forwardRef)(({ id, maxLength, value, erreur, describeLabel = "", visible, onChange, activeElement = "", onKeyDown, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("input", { ref: ref, onKeyDown: onKeyDown, id: id, role: "combobox", type: "text", maxLength: maxLength || Infinity, onChange: onChange, value: value, autoComplete: "off", "aria-invalid": !!erreur, "aria-owns": `${id}-resultats`, "aria-autocomplete": "list", className: "mcf-form-control mcf-col", "aria-describedby": `${describeLabel}${erreur ? ` ${id}-erreur` : ""}`, "aria-activedescendant": activeElement, "aria-expanded": visible, ...props }));
});
exports.default = AutoCompleteInput;
//# sourceMappingURL=AutoCompleteInput.js.map