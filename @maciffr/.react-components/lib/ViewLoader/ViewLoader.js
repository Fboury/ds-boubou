"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function DefaultTemplate() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mcf-d--flex mcf-flex--column", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mcf-d--flex", children: [(0, jsx_runtime_1.jsx)("div", { className: "mcf-skeleton mcf-rounded--circle", style: { width: 40, height: 40 } }), (0, jsx_runtime_1.jsx)("div", { className: "mcf-skeleton mcf-flex--grow-1 mcf-rounded" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mcf-skeleton mcf-rounded", style: { height: 40 } }), (0, jsx_runtime_1.jsx)("div", { className: "mcf-skeleton mcf-rounded", style: { height: 40 } })] }));
}
function ViewLoader({ children, loading, template = (0, jsx_runtime_1.jsx)(DefaultTemplate, {}), ...props }) {
    if (loading) {
        return ((0, jsx_runtime_1.jsx)("div", { ...props, children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: template }) }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { ...props, children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }) }));
}
exports.default = ViewLoader;
//# sourceMappingURL=ViewLoader.js.map