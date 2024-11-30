"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Select.css");
const Erreur_1 = __importDefault(require("../../commons/view/Erreur"));
const constantes_1 = require("./constantes");
function Select({ id, "aria-describedby": ariaDescribedBy, children, error, validationMessage, onChange = () => {
}, ...props }) {
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const describedByWithError = `${ariaDescribedBy} ${errorId}`;
    const [componentState, setComponentState] = (0, react_1.useState)({
        errorMessage: error ?? "",
        describedBy: error ? describedByWithError : ariaDescribedBy
    });
    const { errorMessage, describedBy } = componentState;
    (0, react_1.useEffect)(() => {
        setComponentState({
            errorMessage: error ?? errorMessage,
            describedBy: error ? describedByWithError : ariaDescribedBy
        });
    }, [error]);
    function updateState(target, errorMessage) {
        target.setCustomValidity(errorMessage);
        setComponentState({
            errorMessage,
            describedBy: errorMessage ? describedByWithError : ariaDescribedBy
        });
    }
    function handleInvalid(event) {
        event.preventDefault();
        const currentValue = event.currentTarget.value;
        if (props.required && !currentValue) {
            updateState(event.currentTarget, validationMessage?.required ?? constantes_1.VALIDATION_MESSAGES.required);
        }
    }
    function handleChange(event) {
        updateState(event.target, "");
        onChange(event.target.value);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("select", { ...props, id: id, onChange: handleChange, autoComplete: "off", onInvalid: handleInvalid, "aria-invalid": !!errorMessage, className: `input-select mcf-form-control mcf-col ${props.className ?? ""}`, "aria-describedby": describedBy, children: children }), errorMessage && (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
}
exports.default = Select;
//# sourceMappingURL=index.js.map