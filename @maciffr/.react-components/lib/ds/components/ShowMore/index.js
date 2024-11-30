"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ShowMore.css");
const ShowMoreContent_1 = __importDefault(require("./ShowMoreContent"));
const ShowMoreButton_1 = __importDefault(require("./ShowMoreButton"));
const TextSize_1 = require("../../enums/TextSize");
const defaultButtonText = (open) => (open ? (0, jsx_runtime_1.jsx)("span", { children: "Afficher moins" }) : (0, jsx_runtime_1.jsx)("span", { children: "Afficher plus" }));
function ShowMore({ children, size = TextSize_1.TextSize.M, openDefault = false, buttonText = defaultButtonText }) {
    const [open, setOpen] = (0, react_1.useState)(openDefault);
    const active = open ? " active" : "";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ShowMoreButton_1.default, { active: active, onClick: () => setOpen(!open), size: size, children: buttonText(open) }), (0, jsx_runtime_1.jsx)(ShowMoreContent_1.default, { open: open, active: active, size: size, children: children })] }));
}
exports.default = ShowMore;
//# sourceMappingURL=index.js.map