"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Label_1 = __importDefault(require("../../../components/Label"));
const CheckboxInput = (0, react_1.forwardRef)(({ children, disabled, required, onChange = () => { }, ...props }, ref) => {
    const [valid, setValid] = (0, react_1.useState)(true);
    const handleChange = (event) => {
        setValid(event.target.checked);
        onChange(event.target.checked);
    };
    const handleInvalid = (event) => {
        setValid(event.target.validity.valid);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, type: "checkbox", onChange: handleChange, tabIndex: 0, disabled: disabled, required: required, "aria-required": required, "aria-invalid": !valid, onInvalid: handleInvalid, ...props }), (0, jsx_runtime_1.jsx)(Label_1.default, { disabled: disabled, htmlFor: props.id, children: children })] }));
});
exports.default = CheckboxInput;
//# sourceMappingURL=index.js.map