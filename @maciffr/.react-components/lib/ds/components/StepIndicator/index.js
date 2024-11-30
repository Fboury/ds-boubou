"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StepIndicatorGroup_1 = __importDefault(require("./StepIndicatorGroup"));
function StepIndicator({ activeSection, sections, accessTitle }) {
    return ((0, jsx_runtime_1.jsxs)("section", { role: "region", "aria-labelledby": "accessiblity-title", children: [(0, jsx_runtime_1.jsx)("h2", { id: "accessiblity-title", className: "mds-sr-only", children: accessTitle }), (0, jsx_runtime_1.jsx)(StepIndicatorGroup_1.default, { sections: sections, activeSection: activeSection })] }));
}
exports.default = StepIndicator;
//# sourceMappingURL=index.js.map