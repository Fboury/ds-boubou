"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedContainerOrientation = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const WrappedContainer_module_css_1 = __importDefault(require("./WrappedContainer.module.css"));
var WrappedContainerOrientation;
(function (WrappedContainerOrientation) {
    WrappedContainerOrientation["Column"] = "column";
    WrappedContainerOrientation["Row"] = "row";
})(WrappedContainerOrientation || (exports.WrappedContainerOrientation = WrappedContainerOrientation = {}));
function WrappedContainer({ children, orientation = WrappedContainerOrientation.Row, style, ...props }) {
    return (0, jsx_runtime_1.jsx)("div", { ...props, className: WrappedContainer_module_css_1.default.mcfWrappedContainer, style: { ...style, flexDirection: orientation }, children: children });
}
exports.default = WrappedContainer;
//# sourceMappingURL=WrappedContainer.js.map