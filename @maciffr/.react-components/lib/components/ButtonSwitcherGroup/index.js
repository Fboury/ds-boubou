"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Erreur_1 = __importDefault(require("./view/Erreur"));
const constantes_1 = require("../../form/Select/constantes");
function ButtonSwitcherGroup({ children, id, ariaLabelledby, nbItemsParLigne = 1, onChange, validationMessage, ...props }) {
    const buttonSwitcherRef = (0, react_1.useRef)([]);
    const errorId = `error-${id}`;
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    function updateState(target, message) {
        target.setCustomValidity(" ");
        setErrorMessage(message);
    }
    const resetValidity = () => {
        buttonSwitcherRef.current?.map((input) => input.setCustomValidity(""));
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
        onChange && onChange(event.currentTarget.value);
    }
    const handleInvalid = (event) => {
        validate(event.target);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { role: "group", "aria-labelledby": ariaLabelledby, className: `mcf-form-switcher-toggle mcf-d--flex mcf-form-switcher--${nbItemsParLigne.toString()}`, id: id, onChange: handleChange, onInvalid: handleInvalid, ...props, children: react_1.Children.map(children, (child, index) => {
                    return (0, react_1.cloneElement)(child, {
                        ref: (el) => (buttonSwitcherRef.current[index] = el),
                        error: errorMessage,
                        errorId,
                    });
                }) }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { message: errorMessage })] }));
}
exports.default = ButtonSwitcherGroup;
//# sourceMappingURL=index.js.map