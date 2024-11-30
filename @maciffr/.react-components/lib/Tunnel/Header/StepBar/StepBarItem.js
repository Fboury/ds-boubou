"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
var StepStatus;
(function (StepStatus) {
    StepStatus[StepStatus["COMPLETED"] = 0] = "COMPLETED";
    StepStatus[StepStatus["TODO"] = 1] = "TODO";
    StepStatus[StepStatus["DOING"] = 2] = "DOING";
})(StepStatus || (exports.StepStatus = StepStatus = {}));
function StepBarItem({ stepTitle, stepStatus }) {
    function computeStepItemClass() {
        switch (stepStatus) {
            case StepStatus.COMPLETED:
                return 'mcf-section--completed';
            case StepStatus.DOING:
                return 'mcf-section--active';
            case StepStatus.TODO:
            default:
                return '';
        }
    }
    return ((0, jsx_runtime_1.jsxs)("li", { className: computeStepItemClass(), "aria-current": stepStatus === StepStatus.DOING, children: [(0, jsx_runtime_1.jsx)("p", { children: stepTitle }), stepStatus === StepStatus.COMPLETED && ((0, jsx_runtime_1.jsx)("p", { className: "mcf-sr-only", children: "\u00E9tape valid\u00E9e" }))] }, `${stepTitle}_${stepStatus}`));
}
exports.default = StepBarItem;
//# sourceMappingURL=StepBarItem.js.map