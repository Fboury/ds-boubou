"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Erreur_1 = __importDefault(require("../../../components/Erreur/Erreur"));
const constantes_1 = require("../../RadioButton/constantes");
const CheckboxGroup = ({ children, required, id, validationMessage, onChange = () => { }, defaultValue = [], }) => {
    const checkboxRef = (0, react_1.useRef)([]);
    const [checkedValues, setCheckedValues] = (0, react_1.useState)(defaultValue);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const removeFromList = (id) => {
        return checkedValues.filter((v) => v !== id);
    };
    const addToList = (id) => {
        return [...checkedValues, id];
    };
    const resetValidity = () => {
        checkboxRef.current?.map((input) => input.setCustomValidity(""));
    };
    const handleChange = (id, checked, onChangeChild) => {
        resetValidity();
        setErrorMessage("");
        const nextValuesState = checked ? addToList(id) : removeFromList(id);
        setCheckedValues(nextValuesState);
        onChange(nextValuesState);
        onChangeChild && onChangeChild(checked);
    };
    function validate(input) {
        input.setCustomValidity("");
        const { validity } = input;
        if (validity.valid) {
            setErrorMessage("");
            return true;
        }
        if (validity.valueMissing) {
            input.setCustomValidity(" ");
            setErrorMessage(validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
            return false;
        }
        return true;
    }
    const handleInvalid = (event) => {
        event.preventDefault();
        validate(event.target);
    };
    const getAriaDescribedBy = (element) => {
        const ariaError = errorMessage ? `error-${id}` : "";
        if (element.props["aria-describedby"]) {
            return `${element.props["aria-describedby"]}${ariaError ? ` ${ariaError}` : ""}`;
        }
        else {
            return ariaError || undefined;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "mds-group-checkboxes", onInvalid: handleInvalid, children: react_1.Children.map(children, (child, index) => {
                    const element = child;
                    return (0, react_1.cloneElement)(element, {
                        ref: (el) => (checkboxRef.current[index] = el),
                        checked: checkedValues.includes(element.props.id || ""),
                        onChange: (value) => handleChange(element.props.id || "", value, element.props.onChange),
                        required: required || element.props.required,
                        "aria-describedby": getAriaDescribedBy(element),
                    });
                }) }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: `error-${id}`, children: errorMessage })] }));
};
exports.default = CheckboxGroup;
//# sourceMappingURL=index.js.map