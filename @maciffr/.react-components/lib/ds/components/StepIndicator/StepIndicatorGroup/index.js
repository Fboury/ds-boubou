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
const StepIndicatorItem_1 = __importStar(require("../StepIndicatorItem"));
function StepIndicatorGroup({ sections, activeSection }) {
    const computeStepStatus = (index) => {
        const activeIndex = sections.indexOf(activeSection);
        if (activeIndex > index) {
            return StepIndicatorItem_1.StepStatus.COMPLETED;
        }
        if (activeIndex === index) {
            return StepIndicatorItem_1.StepStatus.DOING;
        }
        return StepIndicatorItem_1.StepStatus.TODO;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mds-step-indicator mds-step-indicator--basic", children: [(0, jsx_runtime_1.jsx)("div", { className: "mds-step-indicator__item-label--curent", children: (0, jsx_runtime_1.jsx)("p", { children: activeSection }) }), (0, jsx_runtime_1.jsx)("ol", { className: "mds-step-indicator__group", children: sections.map((section, idx) => ((0, jsx_runtime_1.jsx)(StepIndicatorItem_1.default, { stepTitle: section, stepStatus: computeStepStatus(idx) }, section))) })] }));
}
exports.default = StepIndicatorGroup;
//# sourceMappingURL=index.js.map