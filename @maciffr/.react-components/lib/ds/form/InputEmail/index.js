"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const constantes_1 = require("./constantes");
const react_1 = require("react");
const Erreur_1 = __importDefault(require("../../components/Erreur/Erreur"));
const Icon_1 = require("../../components/Icon");
const InputCell_1 = __importStar(require("../InputCell"));
const MailIcon_1 = __importDefault(require("../../components/Icon/MailIcon"));
const InputEmail = (0, react_1.forwardRef)(({ id, value, defaultValue, className = "", validationMessage, required, "aria-describedby": ariaDescribedBy = "", onChange = () => { }, error, ...props }, ref) => {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(error);
    const [valueFormat, setValueFormat] = (0, react_1.useState)(value ? value : defaultValue);
    (0, react_1.useEffect)(() => {
        setErrorMessage(error ?? errorMessage);
    }, [error]);
    function updateState(target, message) {
        target.setCustomValidity(" ");
        setErrorMessage(message);
    }
    function handleInvalid(event) {
        validate(event.currentTarget);
    }
    function onChangeEmail(event) {
        event.currentTarget.setCustomValidity("");
        setErrorMessage("");
        setValueFormat(event.currentTarget.value);
        onChange(event.currentTarget.value);
    }
    function validate(target) {
        target.setCustomValidity("");
        if (target.validity.valid) {
            setErrorMessage("");
            return true;
        }
        if (target.validity.patternMismatch) {
            updateState(target, validationMessage?.pattern ?? constantes_1.VALIDATION_MESSAGES.pattern);
            return false;
        }
        if (target.validity.valueMissing) {
            updateState(target, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
            return false;
        }
        return false;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(InputCell_1.default, { iconDirection: InputCell_1.IconDirection.Left, children: [(0, jsx_runtime_1.jsx)(MailIcon_1.default, { type: Icon_1.IconType.Input, "aria-hidden": "true" }), (0, jsx_runtime_1.jsx)("input", { onInvalid: handleInvalid, onChange: onChangeEmail, ref: ref, id: id, pattern: constantes_1.REGEX_INPUT, inputMode: "email", className: `mds-input mds-input-email--basic ${className}`, type: "email", value: valueFormat, defaultValue: defaultValue, "aria-describedby": `${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`, "aria-invalid": !!errorMessage, required: required, "aria-required": required, ...props })] }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
});
exports.default = InputEmail;
//# sourceMappingURL=index.js.map