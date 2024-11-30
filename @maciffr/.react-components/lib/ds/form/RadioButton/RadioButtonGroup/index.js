"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constantes_1 = require("../constantes");
const Erreur_1 = __importDefault(require("../../../components/Erreur/Erreur"));
function RadioButtonGroup({ id, children, onChange, validationMessage, required, defaultValue = "" }) {
    const radioRef = (0, react_1.useRef)([]);
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const [activeElement, setActiveElement] = (0, react_1.useState)(defaultValue);
    function updateState(target, message) {
        target.setCustomValidity(" ");
        setErrorMessage(message);
    }
    const resetValidity = () => {
        radioRef.current?.map(input => input.setCustomValidity(""));
    };
    function validate(input) {
        input.setCustomValidity("");
        const { validity } = input;
        if (validity.valid) {
            setErrorMessage("");
            return true;
        }
        if (validity.valueMissing) {
            updateState(input, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
            return false;
        }
        return true;
    }
    function handleChange(event) {
        resetValidity();
        setErrorMessage("");
        onChange(event.target.value);
        setActiveElement(event.target.value);
    }
    const handleInvalid = (event) => {
        validate(event.target);
    };
    const getAriaDescribedBy = (element, error) => {
        const ariaError = error ? `error-${id}` : "";
        if (element.props["aria-describedby"]) {
            return `${element.props["aria-describedby"]}${ariaError ? ` ${ariaError}` : ""}`;
        }
        else {
            return ariaError || undefined;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { onChange: handleChange, onInvalid: handleInvalid, className: "mds-group-radio", "data-module": "group-radios", children: react_1.Children.map(children, (child, index) => {
                    return (0, react_1.cloneElement)(child, {
                        ref: (el) => (radioRef.current[index] = el),
                        checked: activeElement === child.props.value,
                        required: required || child.props.required,
                        "aria-invalid": !!errorMessage,
                        "aria-describedby": getAriaDescribedBy(child, errorMessage)
                    });
                }) }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = RadioButtonGroup;
//# sourceMappingURL=index.js.map