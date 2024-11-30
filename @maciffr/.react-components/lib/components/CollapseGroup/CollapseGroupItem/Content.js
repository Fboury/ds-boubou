"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Content.css");
const Content = ({ children, className, id, ...props }) => {
    return (0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("div", { ...props, id: `${id}-content`, className: "mcf-collapse__content mcf-mt--2", children: (0, jsx_runtime_1.jsx)("p", { className: `mcf-mb--0 mcf-pl-md--7 mcf-pr-md--3 mcf-pb-md--3 mcf-pl--8 mcf-pr--5 mcf-pb--5 
    ${className || ""}`, children: children }) }), [children]);
};
exports.default = Content;
//# sourceMappingURL=Content.js.map