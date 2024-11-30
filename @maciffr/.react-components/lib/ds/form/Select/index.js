"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Erreur_1 = __importDefault(require("../../components/Erreur/Erreur"));
const constantes_1 = require("./constantes");
const SelectItem_1 = __importDefault(require("./SelectItem"));
function Select({ id, "aria-describedby": ariaDescribedBy, children, error, validationMessage, disabled, required, onChange = () => { }, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(error);
    const describeBy = `${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`;
    (0, react_1.useEffect)(() => {
        setErrorMessage(error);
    }, [error]);
    function updateState(target, message) {
        target.setCustomValidity(" ");
        setErrorMessage(message);
    }
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
        return false;
    }
    function handleInvalid(event) {
        validate(event.currentTarget);
    }
    function handleChange(event) {
        validate(event.currentTarget);
        onChange(event.target.value);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SelectItem_1.default, { children: (0, jsx_runtime_1.jsx)("select", { id: id, required: required, disabled: disabled, onChange: handleChange, autoComplete: "off", onInvalid: handleInvalid, "aria-invalid": !!errorMessage, "aria-describedby": describeBy, "aria-required": required, ...props, children: children }) }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = Select;
//# sourceMappingURL=index.js.map