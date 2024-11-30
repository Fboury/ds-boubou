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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StepBarItem_1 = __importStar(require("./StepBarItem"));
function StepBar({ activeSection, sections, className = "" }) {
    const activeIndex = sections.indexOf(activeSection);
    function computeStepStatus(index) {
        if (activeIndex > index) {
            return StepBarItem_1.StepStatus.COMPLETED;
        }
        if (activeIndex === index) {
            return StepBarItem_1.StepStatus.DOING;
        }
        return StepBarItem_1.StepStatus.TODO;
    }
    ;
    return ((0, jsx_runtime_1.jsxs)("div", { className: `mcf-stepbar ${className}`, children: [(0, jsx_runtime_1.jsx)("ul", { children: sections.map((section, idx) => (0, jsx_runtime_1.jsx)(StepBarItem_1.default, { stepTitle: section, stepStatus: computeStepStatus(idx) }, section)) }), (0, jsx_runtime_1.jsx)("p", { className: "mcf-section mcf-mb--0", "aria-hidden": "true", children: activeSection })] }));
}
exports.default = StepBar;
//# sourceMappingURL=StepBar.js.map