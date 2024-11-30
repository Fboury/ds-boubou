"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function CollapseGroup({ children, id }) {
    return (0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("div", { className: "mcf-accordion mcf-accordion--flush", children: react_1.Children.map(children, (child, index) => (0, react_1.cloneElement)(child, { ...child.props, id: `${id}-${index}` })) }), [children]);
}
exports.default = CollapseGroup;
//# sourceMappingURL=CollapseGroup.js.map