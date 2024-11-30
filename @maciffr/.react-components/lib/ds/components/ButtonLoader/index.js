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
const Loader_1 = __importDefault(require("../Loader"));
const Button_1 = __importStar(require("../Button"));
const LoaderLabel_1 = __importDefault(require("../LoaderLabel"));
function ButtonLoader({ id, icon, children, theme = Button_1.ButtonTheme.Primary, accessibilityText = "", reversed = false, loading = false, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(Button_1.default, { id: id, theme: theme, loader: loading, icon: loading ? "" : icon, reversed: reversed, disabled: loading, ...props, children: [(0, jsx_runtime_1.jsx)(LoaderLabel_1.default, { children: accessibilityText }), loading ? (0, jsx_runtime_1.jsx)(Loader_1.default, { reversed: reversed || theme !== Button_1.ButtonTheme.Primary }) : children] }));
}
exports.default = ButtonLoader;
//# sourceMappingURL=index.js.map