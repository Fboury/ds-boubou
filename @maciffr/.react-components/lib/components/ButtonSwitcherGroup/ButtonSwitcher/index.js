"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ButtonSwitcher.css");
const ButtonSwitcherLabel_1 = __importDefault(require("../ButtonSwitcherLabel"));
const ButtonSwitcher = (0, react_1.forwardRef)(({ libelle, value, onChange = () => { }, selected = false, name, error, errorId, "aria-describedby": ariaDescribedBy = "", required }, ref) => {
    return ((0, jsx_runtime_1.jsxs)(ButtonSwitcherLabel_1.default, { htmlFor: `${name}-${value}`, selected: selected, children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, id: `${name}-${value}`, type: "radio", name: name, required: required, "aria-required": "true", "data-testid": `${name}-${value}`, "aria-describedby": `${ariaDescribedBy} ${error ? errorId : ""}`, "aria-invalid": !!error, autoComplete: "off", value: value, onClick: () => onChange && onChange(value) }), (0, jsx_runtime_1.jsx)("span", { children: libelle })] }));
});
exports.default = ButtonSwitcher;
//# sourceMappingURL=index.js.map