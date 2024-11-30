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
const index_1 = __importStar(require("../index"));
const AlertHeader_1 = __importDefault(require("../AlertHeader"));
const AlertContent_1 = __importDefault(require("../AlertContent"));
const ReportIcon_1 = __importDefault(require("../../Icon/ReportIcon"));
function AlertWarning({ children, title, variant = index_1.AlertVariant.Basic, ...props }) {
    const titleClass = variant == index_1.AlertVariant.Basic ? "mds-sr-only" : undefined;
    return ((0, jsx_runtime_1.jsxs)(index_1.default, { type: index_1.AlertType.Warning, variant: variant, ...props, children: [(0, jsx_runtime_1.jsxs)(AlertHeader_1.default, { children: [(0, jsx_runtime_1.jsx)(ReportIcon_1.default, { "aria-hidden": "true" }), (0, jsx_runtime_1.jsx)("h2", { className: titleClass, children: title })] }), (0, jsx_runtime_1.jsx)(AlertContent_1.default, { children: children })] }));
}
exports.default = AlertWarning;
//# sourceMappingURL=index.js.map