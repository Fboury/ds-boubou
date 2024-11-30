"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Title.css");
function Title({ children, id, dataTrackAnalytics, as: Component = "h2", ...props }) {
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    return (0, jsx_runtime_1.jsx)(Component, { ...props, className: "mcf-collapse__header", id: `${id}-title`, "data-mcf-collapsed": collapsed, children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setCollapsed(!collapsed), className: `mcf-collapse__button ${collapsed ? "" : "collapsed"}`, type: "button", "data-mcf-toggle": "collapse", "data-mcf-target": `#${id}-content`, "aria-expanded": collapsed, "aria-controls": `${id}-content`, ...(dataTrackAnalytics && { "data-track-analytics": dataTrackAnalytics }), children: children }) });
}
exports.default = Title;
//# sourceMappingURL=Title.js.map