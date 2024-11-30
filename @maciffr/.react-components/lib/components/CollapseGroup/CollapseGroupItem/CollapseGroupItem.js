"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Content_1 = __importDefault(require("./Content"));
const Title_1 = __importDefault(require("./Title"));
const CollapseGroupItem = ({ children, id, className = "" }) => {
    return (0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("div", { className: `mcf-accordion mcf-accordion--flush ${className}`, children: react_1.Children.map(children, child => (0, react_1.cloneElement)(child, { ...child.props, id })) }), [children]);
};
CollapseGroupItem.displayName = "CollapseGroupItem";
CollapseGroupItem.Content = Content_1.default;
CollapseGroupItem.Title = Title_1.default;
exports.default = CollapseGroupItem;
//# sourceMappingURL=CollapseGroupItem.js.map