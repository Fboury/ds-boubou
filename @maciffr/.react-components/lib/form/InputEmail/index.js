"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constantes_1 = require("./constantes");
require("./InputEmail.css");
const Erreur_1 = __importDefault(require("../../commons/view/Erreur"));
function InputEmail({ id, defaultValue, "aria-describedby": ariaDescribedBy, validationMessage, onChange = () => { }, pattern = constantes_1.REGEX_PATTERN_EMAIL, maxLength = constantes_1.MAX_EMAIL_LENGTH, error, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [componentState, setComponentState] = (0, react_1.useState)({
        errorMessage: error ?? "",
    });
    const { errorMessage } = componentState;
    (0, react_1.useEffect)(() => {
        setComponentState({
            errorMessage: error ?? errorMessage,
        });
    }, [error]);
    function updateState(target, error) {
        target.setCustomValidity(error);
        setComponentState({
            errorMessage: error,
        });
    }
    function handleInvalid(event) {
        event.preventDefault();
        const currentValue = event.currentTarget.value;
        if (props.required && !currentValue) {
            updateState(event.currentTarget, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
        }
        else if (!RegExp(pattern).exec(currentValue)) {
            updateState(event.currentTarget, validationMessage?.pattern ?? constantes_1.VALIDATION_MESSAGES.pattern);
        }
    }
    function handleChange(event) {
        event.preventDefault();
        updateState(event.currentTarget, "");
        onChange(event.currentTarget.value);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { id: id, defaultValue: defaultValue, inputMode: "email", className: "input-email mcf-form-control mcf-col", type: "email", onChange: handleChange, onInvalid: handleInvalid, "aria-invalid": !!errorMessage, "aria-describedby": `${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`, pattern: pattern, maxLength: maxLength, ...props }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = InputEmail;
//# sourceMappingURL=index.js.map