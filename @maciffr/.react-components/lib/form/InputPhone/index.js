"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constantes_1 = require("./constantes");
require("./InputPhone.css");
const Erreur_1 = __importDefault(require("../../commons/view/Erreur"));
function InputPhone({ id, defaultValue, className, autoComplete, validationMessage, "aria-describedby": ariaDescribedBy, maxLength = constantes_1.MAX_PHONE_LENGTH, pattern = constantes_1.REGEX_INPUT, onChange = () => { }, error, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(error);
    const [valueFormat, setValueFormat] = (0, react_1.useState)(defaultValue ? deleteNonDigitTruncateAndFormat(defaultValue) : "");
    (0, react_1.useEffect)(() => {
        setErrorMessage(error ?? errorMessage);
    }, [error]);
    function updateState(target, error) {
        target.setCustomValidity(" ");
        setErrorMessage(error);
    }
    function onInvalid(event) {
        event.preventDefault();
        validate(event.currentTarget);
    }
    function truncateMaxDigit(numberToTrunc) {
        return numberToTrunc.slice(0, constantes_1.MAX_PHONE_LENGTH_WITHOUT_SPACE);
    }
    function deleteNonDigitTruncateAndFormat(numberToFormat) {
        return format(truncateMaxDigit(deleteNonDigit(numberToFormat)));
    }
    function format(number) {
        if (number.length === constantes_1.MAX_PHONE_LENGTH_WITHOUT_SPACE) {
            return number.match(constantes_1.REGEX_GROUPBY_TWO_DIGIT)?.join(" ") ?? number;
        }
        return number;
    }
    function deleteNonDigit(valueWithNonDigit) {
        return valueWithNonDigit.replace(constantes_1.REGEX_INPUT_MATCH_NON_DIGIT, "");
    }
    function onChangeNumber(event) {
        event.currentTarget.setCustomValidity("");
        setErrorMessage("");
        const valueOnlyNumber = truncateMaxDigit(deleteNonDigit(event.currentTarget.value));
        const valueFormatted = format(valueOnlyNumber);
        setValueFormat(valueFormatted);
        onChange(valueOnlyNumber);
    }
    function validate(target) {
        target.setCustomValidity("");
        if (target.validity.valid) {
            return setErrorMessage("");
        }
        if (target.validity.patternMismatch) {
            return updateState(target, validationMessage?.pattern ?? constantes_1.VALIDATION_MESSAGES.pattern ?? "");
        }
        if (target.validity.valueMissing) {
            return updateState(target, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required ?? "");
        }
        return;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { id: id, value: valueFormat, inputMode: "tel", className: `input-phone mcf-form-control ${className ?? ""}`, type: "tel", maxLength: maxLength, onChange: onChangeNumber, onInvalid: onInvalid, "aria-invalid": !!errorMessage, "aria-describedby": `${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`, pattern: pattern, ...props }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = InputPhone;
//# sourceMappingURL=index.js.map