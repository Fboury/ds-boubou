"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constantes_1 = require("./constantes");
const utils_1 = require("./utils");
require("./InputNumber.css");
const Erreur_1 = __importDefault(require("../../commons/view/Erreur"));
/**
 * Composant UI pour renseigner un nombre/chiffre
 */
function InputNumber({ id, defaultValue, onChange, format = false, min = -Infinity, max = Infinity, validationMessages, value, "aria-describedby": ariaDescribedBy, error, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const formatter = Intl.NumberFormat("fr-FR");
    const [componentState, changeComponentState] = (0, react_1.useState)({
        inputValue: value?.toString() ?? defaultValue?.toString() ?? "",
        errorMessage: error ?? "",
    });
    const { errorMessage, inputValue } = componentState;
    (0, react_1.useEffect)(() => {
        changeComponentState({
            ...componentState,
            errorMessage: error ?? errorMessage,
        });
    }, [error]);
    function onInvalidHandler(event) {
        event.preventDefault();
        validate(event.currentTarget, normalizeValue(event.currentTarget.value));
        changeComponentState({
            inputValue,
            errorMessage: event.currentTarget.validationMessage,
        });
    }
    function handleChange(target, value) {
        const formatedValue = normalizeValue(value);
        validate(target, formatedValue);
        changeComponentState({
            inputValue: formatedValue?.toString(),
            errorMessage: target.validationMessage,
        });
        if (onChange) {
            if (!target.validationMessage && (0, utils_1.isNumber)(value)) {
                onChange(+formatedValue);
            }
            else {
                onChange(null);
            }
        }
    }
    function onKeyDownHandler(event) {
        if (event.key === constantes_1.KEYS.DOWN) {
            event.preventDefault();
            handleArrowDown(event.currentTarget);
        }
        else if (event.key === constantes_1.KEYS.UP) {
            event.preventDefault();
            handleArrowUp(event.currentTarget);
        }
    }
    function handleArrowDown(target) {
        const value = normalizeValue(target.value);
        if (!(0, utils_1.isNumber)(value)) {
            handleChange(target, min === 0 ? "0" : "-1");
        }
        else if (+value - 1 >= min) {
            handleChange(target, (+value - 1).toString());
        }
    }
    function handleArrowUp(target) {
        const value = normalizeValue(target.value);
        if (!(0, utils_1.isNumber)(value)) {
            handleChange(target, max === 0 ? "0" : "1");
        }
        else if (+value + 1 <= max) {
            handleChange(target, (+value + 1).toString());
        }
    }
    function onChangeHandler(event) {
        event.preventDefault();
        handleChange(event.currentTarget, event.currentTarget.value);
    }
    function normalizeValue(value) {
        if (!value) {
            return "";
        }
        const numericValue = value.replace(constantes_1.REGEX_NOT_NUMBER, "");
        if (value.startsWith("-") && min < 0) {
            return `-${numericValue}`;
        }
        return numericValue;
    }
    function getValidationMessage(messageType, value) {
        return validationMessages?.[messageType] ?? `${constantes_1.MESSAGES[messageType]} ${value ?? ""}`;
    }
    function validate(target, value) {
        let isValid = true;
        target.setCustomValidity("");
        if (value && +value < min) {
            isValid = false;
            target.setCustomValidity(getValidationMessage("min", min.toString()));
        }
        if (value && +value > max) {
            isValid = false;
            target.setCustomValidity(getValidationMessage("max", max.toString()));
        }
        if (target.validity.valueMissing) {
            isValid = false;
            target.setCustomValidity(getValidationMessage("required"));
        }
        if (target.validity.patternMismatch) {
            isValid = false;
            target.setCustomValidity(getValidationMessage("pattern"));
        }
        return isValid;
    }
    function formatDisplayValue(currentValue) {
        if (format && currentValue && currentValue !== "-") {
            return formatter.format(+currentValue);
        }
        return currentValue;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { id: id, value: formatDisplayValue(inputValue), type: "text", className: `input-number mcf-form-control ${props.className ?? ""}`, pattern: constantes_1.REGEX_ONLY_NUMBERS_SPACE_AND_DASH, autoComplete: "off", onInvalid: onInvalidHandler, onChange: onChangeHandler, onKeyDown: onKeyDownHandler, "aria-invalid": !!errorMessage, "aria-describedby": `${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`, ...props }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = InputNumber;
//# sourceMappingURL=InputNumber.js.map