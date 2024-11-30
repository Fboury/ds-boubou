"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CheckboxView_1 = __importDefault(require("./CheckboxView"));
const CheckboxInput_1 = __importDefault(require("./CheckboxInput"));
const Checkbox = (0, react_1.forwardRef)(({ children, render, size, disabled, checked, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(CheckboxView_1.default, { render: render, size: size, disabled: disabled, checked: checked, children: (0, jsx_runtime_1.jsx)(CheckboxInput_1.default, { ref: ref, disabled: disabled, checked: checked, ...props, children: children }) }));
});
exports.default = Checkbox;
//# sourceMappingURL=index.js.map