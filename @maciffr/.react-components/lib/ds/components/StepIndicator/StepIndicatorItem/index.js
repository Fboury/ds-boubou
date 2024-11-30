"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StepIndicatorItemLabel_1 = __importDefault(require("../StepIndicatorItemLabel"));
var StepStatus;
(function (StepStatus) {
    StepStatus[StepStatus["COMPLETED"] = 0] = "COMPLETED";
    StepStatus[StepStatus["TODO"] = 1] = "TODO";
    StepStatus[StepStatus["DOING"] = 2] = "DOING";
})(StepStatus || (exports.StepStatus = StepStatus = {}));
function StepIndicatorItem({ stepTitle, stepStatus }) {
    const computeStepItemClass = () => {
        switch (stepStatus) {
            case StepStatus.COMPLETED:
                return "--complete";
            case StepStatus.DOING:
                return "--current";
            case StepStatus.TODO:
            default:
                return "";
        }
    };
    return ((0, jsx_runtime_1.jsx)("li", { className: "mds-step-indicator__item mds-step-indicator__item" + computeStepItemClass(), "aria-current": stepStatus === StepStatus.DOING, children: (0, jsx_runtime_1.jsxs)(StepIndicatorItemLabel_1.default, { children: [stepTitle, stepStatus !== StepStatus.DOING && ((0, jsx_runtime_1.jsxs)("span", { className: "mds-sr-only", children: ["\u00A0", stepStatus === StepStatus.COMPLETED ? "Étape complétée" : "Étape non complétée"] }))] }) }, `${stepTitle}_${stepStatus}`));
}
exports.default = StepIndicatorItem;
//# sourceMappingURL=index.js.map