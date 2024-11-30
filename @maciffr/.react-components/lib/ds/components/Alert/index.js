"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertType = exports.AlertVariant = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
var AlertVariant;
(function (AlertVariant) {
    AlertVariant["Basic"] = "basic";
    AlertVariant["Rich"] = "rich";
    AlertVariant["Big"] = "accent-big";
})(AlertVariant || (exports.AlertVariant = AlertVariant = {}));
var AlertType;
(function (AlertType) {
    AlertType["Info"] = "info";
    AlertType["Warning"] = "warning";
    AlertType["Success"] = "success";
    AlertType["Danger"] = "danger";
})(AlertType || (exports.AlertType = AlertType = {}));
function Alert({ children, type, variant = AlertVariant.Basic, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: `mds-alert mds-alert--${variant} mds-alert-type--${type}`, ...props, children: children }));
}
exports.default = Alert;
//# sourceMappingURL=index.js.map