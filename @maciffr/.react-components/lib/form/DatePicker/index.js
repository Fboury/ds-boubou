"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/* ------------------------------- Components ------------------------------- */
const DateInput_1 = __importDefault(require("./DateInput/DateInput"));
const Calendar_1 = __importDefault(require("./Calendar"));
const ExtraDate_1 = __importDefault(require("../../commons/ExtraDate"));
require("./index.css");
const constantes_1 = require("./constantes");
const DatePicker = ({ id, value, min, max, onChange, width, validationMessage, error, ...props }) => {
    const isValid = !value ? !props.required : checkValidity(value);
    const validationPatternMessage = validationMessage?.invalid || constantes_1.VALIDATION_MESSAGES.invalid;
    const errorMessage = error || validationPatternMessage;
    const [state, setState] = (0, react_1.useState)({
        inputValue: value ?? null,
        pickerShown: false,
        isValid: !error && isValid,
        errorMessage: errorMessage,
    });
    (0, react_1.useEffect)(() => {
        min?.setHours(0);
        max?.setHours(23, 59);
    }, []);
    (0, react_1.useEffect)(() => {
        setState({
            ...state,
            isValid: !error && isValid,
            errorMessage: error || errorMessage,
        });
    }, [error]);
    function checkValidity(date) {
        const YEAR_RANGE = 120;
        if (!date)
            return false;
        // If Invalid date
        if (isNaN(date.getTime())) {
            return false;
        }
        const minYear = new Date().getFullYear() - YEAR_RANGE;
        const maxYear = new Date().getFullYear() + YEAR_RANGE;
        return new ExtraDate_1.default(date).isBetween(min || new Date(minYear, 0, 1), max || new Date(maxYear, 0, 1));
    }
    const handleChange = (newValue) => {
        const isValid = checkValidity(newValue);
        let errorMessage = "";
        if (!isValid) {
            newValue = null;
            errorMessage = validationMessage?.invalid || constantes_1.VALIDATION_MESSAGES.invalid;
        }
        setState({ ...state, inputValue: newValue, pickerShown: false, isValid, errorMessage });
        onChange && onChange(newValue);
    };
    const togglePicker = (e) => {
        e.preventDefault();
        if (props.disabled) {
            return;
        }
        setState({
            ...state,
            pickerShown: !state.pickerShown,
        });
    };
    function updateState(target, error, isValid) {
        target.setCustomValidity(error);
        setState({
            ...state,
            errorMessage: error,
            isValid,
        });
    }
    function handleInvalid(event) {
        event.preventDefault();
        const isValid = validate(event.currentTarget);
        updateState(event.currentTarget, event.currentTarget.validationMessage, isValid);
    }
    function validate(target) {
        target.setCustomValidity("");
        if (target.validity.valueMissing) {
            target.setCustomValidity(validationMessage?.invalid || constantes_1.VALIDATION_MESSAGES.invalid || "");
            return false;
        }
        return true;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: `date-picker ${props.disabled ? "mcf-bg--gris-sable" : "mcf-bg--white"} mcf-form-control mcf-rounded mcf-d--flex mcf-position--relative ${props.className}`, style: { width }, children: [(0, jsx_runtime_1.jsx)(DateInput_1.default, { id: id, min: min, max: max, value: state.inputValue, onChange: handleChange, "aria-invalid": !state.isValid, onInvalid: handleInvalid, style: { width, ...props.style }, ...props }), (0, jsx_runtime_1.jsx)("a", { "aria-label": "Ouvrir le calendrier", href: "src/form/DatePicker/index#", className: "picker-btn mcf-btn mcf-btn--link mcf-btn--icon mcf-position--absolute", style: {
                            right: 2,
                            top: 2,
                            zIndex: 3,
                            color: "inherit",
                            textDecoration: "none",
                        }, onClick: togglePicker, children: (0, jsx_runtime_1.jsx)("span", { className: "mcf-icon--2 icon-macif-mobile-calendrier" }) })] }), !state.isValid && ((0, jsx_runtime_1.jsxs)("span", { id: "datepicker-error", role: "alert", "aria-label": "message d'erreur", className: "mcf-d--flex mcf-text--danger mcf-my--1", children: [(0, jsx_runtime_1.jsx)("span", { className: "icon icon-erreur", "aria-hidden": true }), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: state.errorMessage.replaceAll(" ", "&nbsp;") } })] })), state.pickerShown && (0, jsx_runtime_1.jsx)(Calendar_1.default, { min: min, max: max, value: state.inputValue, onChange: handleChange })] }));
};
exports.default = DatePicker;
//# sourceMappingURL=index.js.map