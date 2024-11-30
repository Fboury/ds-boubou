"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./InputText.css");
const Erreur_1 = __importDefault(require("../../commons/view/Erreur"));
const constantes_1 = require("./constantes");
/**
 * Composant permettant d'afficher un input de type text
 */
function InputText({ id, ariaDescribedby, validationMessage, onChange = () => { }, error, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const updateErrorState = (input, message) => {
        // enlève la popup HTML de la validation
        input.setCustomValidity(" ");
        setErrorMessage(message);
    };
    const validatePattern = (input) => {
        const { validity } = input;
        if (validity.patternMismatch) {
            updateErrorState(input, validationMessage?.pattern ?? constantes_1.VALIDATION_MESSAGE.pattern);
            return false;
        }
        return true;
    };
    const validateRequired = (input) => {
        const { validity } = input;
        if (validity.valueMissing) {
            updateErrorState(input, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGE.required);
            return false;
        }
        return true;
    };
    const validateMax = (input) => {
        const { validity } = input;
        if (validity.tooLong) {
            updateErrorState(input, validationMessage?.tooLong ?? constantes_1.VALIDATION_MESSAGE.tooLong);
            return false;
        }
        return true;
    };
    const validateMin = (input) => {
        const { validity } = input;
        if (validity.tooShort) {
            updateErrorState(input, validationMessage?.tooShort ?? constantes_1.VALIDATION_MESSAGE.tooShort);
            return false;
        }
        return true;
    };
    const validate = (input) => {
        input.setCustomValidity("");
        const { validity } = input;
        if (validity.valid) {
            setErrorMessage("");
            return true;
        }
        return validateRequired(input) && validatePattern(input) && validateMin(input) && validateMax(input);
    };
    const handleInvalid = (event) => {
        validate(event.target);
    };
    const handleChange = (event) => {
        event.target.setCustomValidity("");
        setErrorMessage("");
        validatePattern(event.target);
        onChange(event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { id: id, className: "input-text mcf-form-control mcf-col", type: "text", "aria-describedby": `${ariaDescribedby ?? ""} ${errorMessage ? errorId : ""}`, "aria-invalid": !!errorMessage, onChange: handleChange, onInvalid: handleInvalid, ...props }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = InputText;
//# sourceMappingURL=index.js.map