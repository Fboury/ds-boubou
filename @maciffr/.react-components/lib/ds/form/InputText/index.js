"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Erreur_1 = __importDefault(require("../../components/Erreur/Erreur"));
const constantes_1 = require("./constantes");
const InputCell_1 = __importDefault(require("../InputCell"));
const InputText = (0, react_1.forwardRef)(({ id, validationMessage, required, "aria-describedby": ariaDescribedBy = "", onChange = () => { }, ...props }, ref) => {
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
            updateErrorState(input, validationMessage?.pattern ?? constantes_1.VALIDATION_MESSAGES.pattern);
            return false;
        }
        return true;
    };
    const validateRequired = (input) => {
        const { validity } = input;
        if (validity.valueMissing) {
            updateErrorState(input, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
            return false;
        }
        return true;
    };
    const validateMax = (input) => {
        const { validity } = input;
        if (validity.tooLong) {
            updateErrorState(input, validationMessage?.max ?? constantes_1.VALIDATION_MESSAGES.max);
            return false;
        }
        return true;
    };
    const validateMin = (input) => {
        const { validity } = input;
        if (validity.tooShort) {
            updateErrorState(input, validationMessage?.min ?? constantes_1.VALIDATION_MESSAGES.min);
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(InputCell_1.default, { children: (0, jsx_runtime_1.jsx)("input", { id: id, ref: ref, onInvalid: handleInvalid, onChange: handleChange, type: "text", className: "mds-input mds-input-text--basic", "aria-describedby": `${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`, "aria-invalid": !!errorMessage, required: required, "aria-required": required, ...props }) }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
});
exports.default = InputText;
//# sourceMappingURL=index.js.map