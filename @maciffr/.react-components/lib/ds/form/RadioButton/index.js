"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const RadioButtonInput_1 = __importDefault(require("./RadioButtonInput"));
const RadioButtonView_1 = __importDefault(require("./RadioButtonView"));
const RadioButton = (0, react_1.forwardRef)(({ children, render, size, disabled, checked, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(RadioButtonView_1.default, { render: render, size: size, disabled: disabled, checked: checked, children: (0, jsx_runtime_1.jsx)(RadioButtonInput_1.default, { ref: ref, disabled: disabled, checked: checked, ...props, children: children }) }));
});
exports.default = RadioButton;
//# sourceMappingURL=index.js.map