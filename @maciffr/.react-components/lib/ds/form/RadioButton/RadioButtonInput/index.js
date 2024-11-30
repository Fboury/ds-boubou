"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Label_1 = __importDefault(require("../../../components/Label"));
const RadioButtonInput = (0, react_1.forwardRef)(({ className, children, required, onChange = () => { }, ...props }, ref) => {
    function handleChange(event) {
        onChange(event.target.value);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, type: "radio", required: required, "aria-required": required, onChange: handleChange, tabIndex: 0, ...props }), (0, jsx_runtime_1.jsx)(Label_1.default, { disabled: props.disabled, htmlFor: props.id, children: children })] }));
});
exports.default = RadioButtonInput;
//# sourceMappingURL=index.js.map