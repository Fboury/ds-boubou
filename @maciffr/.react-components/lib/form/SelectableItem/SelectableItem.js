"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SelectableItem_module_css_1 = __importDefault(require("./SelectableItem.module.css"));
function SelectableItem({ id, children, value, group, ...props }) {
    return (0, jsx_runtime_1.jsxs)("div", { className: SelectableItem_module_css_1.default.mcfSwitcher, children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", className: SelectableItem_module_css_1.default.formSwitcherRadio, id: id, ...props, name: group, value: value, autoComplete: "off" }), (0, jsx_runtime_1.jsx)("label", { className: "mcf-btn mcf-btn--switcher", htmlFor: id, children: children })] });
}
exports.default = SelectableItem;
//# sourceMappingURL=SelectableItem.js.map