"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const WrappedContainer_1 = __importDefault(require("../../Containers/WrappedContainer/WrappedContainer"));
function SelectableChoice({ id, label, children, onChange, ...props }) {
    const [errorId, labelId, labelledBy] = (0, react_1.useMemo)(() => [`error-${id}`, `label-${id}`, `error-${id}, label-${id}`], [id]);
    const [componentState, changeComponentState] = (0, react_1.useState)({
        errorMessage: "",
        isInvalid: false
    });
    const { errorMessage, isInvalid } = componentState;
    function onInvalidHandler(event) {
        const target = event.target;
        changeComponentState({
            errorMessage: target.validationMessage,
            isInvalid: !target.validity.valid
        });
    }
    function onChangeHandler(event) {
        const target = event.target;
        changeComponentState({
            errorMessage: target.validationMessage,
            isInvalid: !target.validity.valid
        });
        onChange && onChange(event);
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("fieldset", { id: id, className: "mcf-form-check-list", style: { display: "block" }, onChange: onChangeHandler, onInvalid: onInvalidHandler, "aria-invalid": isInvalid, "aria-labelledby": labelledBy, ...props, children: [(0, jsx_runtime_1.jsx)("legend", { id: labelId, children: label }), (0, jsx_runtime_1.jsx)(WrappedContainer_1.default, { children: children })] }), (0, jsx_runtime_1.jsxs)("p", { id: errorId, role: "alert", "aria-label": "message d'erreur", className: "invalid-feedback", children: [(0, jsx_runtime_1.jsx)("i", { className: "icon icon-erreur", "aria-hidden": true, hidden: !isInvalid }), errorMessage] })] });
}
exports.default = SelectableChoice;
//# sourceMappingURL=SelectableChoice.js.map